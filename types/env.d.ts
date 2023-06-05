namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      FACEBOOK_ID: string
      FACEBOOK_SECRET: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      GOOGLE_ID: string
      GOOGLE_SECRET: string
      TWITTER_ID: string
      TWITTER_SECRET: string
    }
  }