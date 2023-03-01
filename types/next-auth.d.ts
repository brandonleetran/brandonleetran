import { Session } from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            email: string,
            name: string,
            image?: string,
            // add any other properties that you expect to be present on the user object
          },
          expires: string
          // add any other properties that you expect to be present on the session object
    }
}