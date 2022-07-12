export default function warning(valid: boolean, msg: string) {
  if (process.env.NODE_ENV !== 'production' && !valid && typeof console === 'object') {
    console.error(`Error: ${msg}`)
  }
}
