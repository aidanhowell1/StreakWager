import Iridescence from '@/components/Iridescence';
import './globals.css';

export const metadata = {
  title: 'StreakWager',
  description: 'Friendly wager app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
        {children}
      </body>
    </html>
  );
}
