import { getSubscriptionPlans } from '@/lib/cosmic'
import PlansContent from '@/components/PlansContent'

export const revalidate = 60

export default async function PlansPage() {
  const plans = await getSubscriptionPlans()
  return <PlansContent plans={plans} />
}