import '@/styles/globals.css'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import { DM_Sans } from '@next/font/google'

const dmsans = DM_Sans({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={dmsans.className}>
      <ClerkProvider {...pageProps}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  )
}

export default MyApp