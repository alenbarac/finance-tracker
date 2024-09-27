import { UserButton, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import HeaderLogo from './HeaderLogo'
import Navigation from './Navigation'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from './WelcomeMsg'

function Header() {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8  animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
      </div>
    </div>
  )
}
export default Header
