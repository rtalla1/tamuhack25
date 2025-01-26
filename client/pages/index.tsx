import { DM_Sans, Fraunces } from "@next/font/google";
import { useRouter } from 'next/router';

const fraunces = Fraunces({ subsets: ['latin'] });
const dmsans = DM_Sans({ subsets: ['latin'] });

function Dashboard() {
    const router = useRouter();

    return (        
        <div style={promptStyle}>
            <h1>Hey There!</h1>
            <p>Are you a family member or the user?</p>
            <div style={buttonContainerStyle}>
                <button onClick={() => router.push('/member')} className={dmsans.className} style={buttonStyle}>Family Member</button>
                <button onClick={() => router.push('/chat')} className={dmsans.className} style={buttonStyle}>User</button>
            </div>
        </div>
    );
}

const promptStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2.5rem',
};

const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5%',
    marginTop: '7.5%',
};

const buttonStyle: React.CSSProperties = {
    fontSize: '2rem', // Bigger font size
    borderRadius: '10px', // Rounded corners
    border: 'none',
    textAlign: 'center',
};

export default Dashboard;