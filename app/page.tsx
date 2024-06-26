import { currentUser } from '@clerk/nextjs/server'

import Guest from '@/components/Guest'

export default async function HomePage() {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
    </main>
  )
}
