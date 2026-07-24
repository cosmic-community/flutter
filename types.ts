// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Type literals
export type BillingCycle = 'monthly' | 'yearly' | 'Monthly' | 'Yearly';
export type Language = 'en' | 'ar' | 'English' | 'Arabic';
export type AccountStatus = string;
export type CustomerRole = string;
export type Channel = string;
export type ConnectionStatus = string;
export type PostStatus = string;

// Subscription Plan
export interface SubscriptionPlan extends CosmicObject {
  type: 'subscription-plans';
  metadata: {
    name_en?: string;
    name_ar?: string;
    description_en?: string;
    description_ar?: string;
    price?: number;
    currency?: string;
    billing_cycle?: BillingCycle;
    features?: string[] | string;
    popular?: boolean;
    active?: boolean;
  };
}

// Customer
export interface Customer extends CosmicObject {
  type: 'customers';
  metadata: {
    full_name?: string;
    email?: string;
    company?: string;
    phone?: string;
    preferred_language?: Language;
    role?: CustomerRole;
    account_status?: AccountStatus;
    subscribed_plan?: SubscriptionPlan;
    avatar?: CosmicFile;
  };
}

// Social Integration
export interface SocialIntegration extends CosmicObject {
  type: 'social-integrations';
  metadata: {
    channel?: Channel;
    account_name?: string;
    connection_status?: ConnectionStatus;
    owner?: Customer;
  };
}

// Social Post
export interface SocialPost extends CosmicObject {
  type: 'social-posts';
  metadata: {
    title?: string;
    content_en?: string;
    content_ar?: string;
    media?: CosmicFile;
    target_channels?: string[] | string;
    status?: PostStatus;
    author?: Customer;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Language type for UI
export type UILang = 'en' | 'ar';