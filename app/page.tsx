import { currentUser } from '@clerk/nextjs/server'

import Guest from '@/components/Guest'
import AddTransaction from '@/components/AddTransaction'
import Balance from '@/components/Balance'
import IncomeExpense from '@/components/IncomeExpense'
import TransactionList from '@/components/TransactionList'

export default async function HomePage() {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}
