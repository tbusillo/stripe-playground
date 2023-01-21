export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_URL: string | 'http://localhost';
      ENV: 'test' | 'dev' | 'prod';
      VITE_PORT: Env.VITE_PORT | 3000;
    }
  }
}
