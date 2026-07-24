import { createBucketClient } from '@cosmicjs/sdk'
import type {
  SubscriptionPlan,
  Customer,
  SocialIntegration,
  SocialPost,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render a metafield value that may be an object or string
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'subscription-plans' })
      .props(['id', 'title', 'slug', 'metadata', 'type'])
      .depth(1)
    return response.objects as SubscriptionPlan[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch subscription plans')
  }
}

export async function getSubscriptionPlan(
  slug: string
): Promise<SubscriptionPlan | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'subscription-plans', slug })
      .depth(1)
    return response.object as SubscriptionPlan
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch subscription plan')
  }
}

export async function getCustomers(): Promise<Customer[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'customers' })
      .props(['id', 'title', 'slug', 'metadata', 'type'])
      .depth(1)
    return response.objects as Customer[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch customers')
  }
}

export async function getCustomer(slug: string): Promise<Customer | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'customers', slug })
      .depth(1)
    return response.object as Customer
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch customer')
  }
}

export async function getSocialIntegrations(): Promise<SocialIntegration[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'social-integrations' })
      .props(['id', 'title', 'slug', 'metadata', 'type'])
      .depth(1)
    return response.objects as SocialIntegration[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch social integrations')
  }
}

export async function getSocialPosts(): Promise<SocialPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'social-posts' })
      .props(['id', 'title', 'slug', 'metadata', 'type'])
      .depth(1)
    return response.objects as SocialPost[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch social posts')
  }
}

export async function getSocialPost(slug: string): Promise<SocialPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'social-posts', slug })
      .depth(1)
    return response.object as SocialPost
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch social post')
  }
}