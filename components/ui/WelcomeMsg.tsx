'use client'

import { useUser } from '@clerk/nextjs'

function WelcomeMsg() {
  const { user, isLoaded } = useUser()

  return (
    <div>
      <div className="text-white space-y-2 mb-4">
        <h2 className="text-2xl lg:text-4xl text-white font-medium">
          Welcome back{isLoaded ? ', ' : ' '}
          {user?.firstName}
        </h2>
        <p className="text-sm lg:text-base text-[#89b6fd] font-medium">
          This is your financial overview
        </p>
      </div>
    </div>
  )
}
export default WelcomeMsg
