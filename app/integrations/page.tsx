import { getSocialIntegrations } from '@/lib/cosmic'
import IntegrationsContent from '@/components/IntegrationsContent'

export const revalidate = 60

export default async function IntegrationsPage() {
  const integrations = await getSocialIntegrations()
  return <IntegrationsContent integrations={integrations} />
}