export const getMethod = (method, allowedMethods) => {
  if (!allowedMethods.includes(method)) throw new Error(`Method not allowed, allowed methods ${allowedMethods.join()}`);
}