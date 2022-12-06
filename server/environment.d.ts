// declare a  global variable for .env file
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      API_KEY?: string;
    }
  }
}

export {};
