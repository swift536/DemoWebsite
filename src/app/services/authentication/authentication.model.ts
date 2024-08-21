export type JwtToken = {
    user: string,
    clearances: string[],
    iss: string,
    exp: string,
}