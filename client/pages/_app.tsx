import '@/styles/globals.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DM_Sans, Fraunces } from '@next/font/google';

const dmsans = DM_Sans({ subsets: ['latin'] });
const fraunces = Fraunces({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <header className={fraunces.className} style={headerStyle}>
        <div style={logoContainer}>
          <img src="/heartlink.png" width={75} height={75} alt="HeartLink Logo"/>
          <h1 style={titleStyle}>HeartLink</h1>
        </div>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={buttonStyle} className={dmsans.className}>Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
        </div>
      </header>

      <SignedOut>
        <div style={welcomeMsg} className={dmsans.className}>
          <h1>Welcome to HeartLink!</h1>
          <h3>Stay in touch with your loved ones ❤️</h3>
        </div>
      </SignedOut>

      <SignedIn>
        <main className={dmsans.className} style={mainStyle}>
          <Component {...pageProps} />
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

const welcomeMsg: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '2rem',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  background: 'linear-gradient(to right, #6A5ACD,rgb(239, 209, 255))',
  color: 'white',
  fontSize: '1.75rem',
  borderRadius: '10px',
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