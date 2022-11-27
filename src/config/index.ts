const hash = process.env.NEXT_PUBLIC_SECRET_HASH as string
const secret = process.env.NEXT_PUBLIC_AUTH_SECRET as string

export { hash, secret }
