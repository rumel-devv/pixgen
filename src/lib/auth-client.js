import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL:"https://pixen-one.vercel.app"
})

export const { signIn, signUp, useSession} = createAuthClient()