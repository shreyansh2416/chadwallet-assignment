'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      // We will replace this ID with your real one in the next step
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "clx_placeholder_id"}
      config={{
        loginMethods: ['google', 'apple'],
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          logo: 'https://cryptologos.cc/logos/solana-sol-logo.png', // Temporary placeholder logo
        },
        // This is the magic that automatically creates a Solana wallet for the user
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
          requireUserPasswordOnCreate: false,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}