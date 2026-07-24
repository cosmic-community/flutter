import Link from 'next/link'
import { getSubscriptionPlans, getCustomers, getSocialIntegrations, getSocialPosts } from '@/lib/cosmic'
import HomeContent from '@/components/HomeContent'

export default async function HomePage() {
  const [plans, customers, integrations, posts] = await Promise.all([
    getSubscriptionPlans(),
    getCustomers(),
    getSocialIntegrations(),
    getSocialPosts(),
  ])

  return (
    <HomeContent
      planCount={plans.length}
      customerCount={customers.length}
      integrationCount={integrations.length}
      postCount={posts.length}
    />
  )
}