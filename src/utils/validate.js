export function isAbsolutePath(path) {
  return /^(https?|tel|mailto)/.test(path)
}
