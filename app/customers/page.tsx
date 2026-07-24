import { getCustomers } from '@/lib/cosmic'
import CustomersContent from '@/components/CustomersContent'

export const revalidate = 60

export default async function CustomersPage() {
  const customers = await getCustomers()
  return <CustomersContent customers={customers} />
}