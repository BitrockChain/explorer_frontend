import type { WalletProvider } from 'types/web3';

type CPreferences = {
  zone: string;
  width: string;
  height: string;
};

declare global {
  export interface Window {
    ethereum?: WalletProvider | undefined;
    coinzilla_display: Array<CPreferences>;
    ga?: {
      getAll: () => Array<{ get: (prop: string) => string }>;
    };
    AdButler: {
      ads: Array<unknown>;
      register: (...args: unknown) => void;
    };
    abkw: string;
    __envs: Record<string, string>;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gecko-coin-price-marquee-widget': {
        // Add the necessary props here (e.g., coinId, style, ...)
        coinId?: string;
        locale?: string;
        style?: React.CSSProperties;
        // ... other props
      };
    }
  }
}

export {};
