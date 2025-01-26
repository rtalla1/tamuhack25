import '@/styles/globals.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DM_Sans, Fraunces } from '@next/font/google';

const dmsans = DM_Sans({ subsets: ['latin'] });
const fraunces = Fraunces({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Redirect signed-in users to /dashboard if not already there
  useEffect(() => {
    if (pageProps.__clerk_ssr_state?.userId && router.pathname === '/') {
      router.push('/dashboard'); // Redirect only if on landing page
    }
  }, [pageProps.__clerk_ssr_state?.userId]);

  return (
    <ClerkProvider afterSignOutUrl={"/"} {...pageProps}>
      <header className={fraunces.className} style={headerStyle}>
        <div style={logoContainer}>
          <img src="/heartlink.png" width={50} height={50} alt="HeartLink Logo" />
          <h1 style={titleStyle}>HeartLink</h1>
        </div>
        <div>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"} mode="modal">
              <button style={buttonStyle} className={dmsans.className}>Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
        </div>
      </header>

      <SignedOut>
        <main className={dmsans.className} style={mainStyle}>
          <Component {...pageProps} />
        </main>
      </SignedOut>

      <SignedIn>
        <main className={dmsans.className} style={mainStyle}>
          {router.pathname.startsWith('/dashboard') ? <Component {...pageProps} /> : null}
        </main>
      </SignedIn>
    </ClerkProvider>
  );
}

const buttonStyle: React.CSSProperties = {
  fontSize: '2rem', // Bigger font size
  borderRadius: '10px', // Rounded corners
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  textAlign: 'center',
  fontWeight: 'normal',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  background: 'linear-gradient(to right, #6A5ACD,rgb(239, 209, 255))',
  color: 'white',
  fontSize: '1.75rem',
  borderRadius: '5px',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const titleStyle = {
  margin: 0,
};

const mainStyle = {
  padding: '20px',
};

export default MyApp;