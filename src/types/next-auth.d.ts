import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      discriminator: string
      avatar: string
      banner?: string
      accentColor?: number
      flags?: number
      premiumType?: number
      publicFlags?: number
      locale?: string
      mfaEnabled?: boolean
      verified?: boolean
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    discriminator: string
    avatar: string
    banner?: string
    accentColor?: number
    flags?: number
    premiumType?: number
    publicFlags?: number
    locale?: string
    mfaEnabled?: boolean
    verified?: boolean
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
    error?: string
    user?: {
      id: string
      discriminator: string
      avatar: string
      banner?: string
      accentColor?: number
      flags?: number
      premiumType?: number
      publicFlags?: number
      locale?: string
      mfaEnabled?: boolean
      verified?: boolean
    }
  }
} 