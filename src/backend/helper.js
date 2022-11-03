import nc from "next-connect";


// export const getMethod = (method, allowedMethods) => {
//   if (!allowedMethods.includes(method)) throw new Error(`Method not allowed, allowed methods ${allowedMethods.join()}`);
// }



export const appConfig = nc({
  onError: (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({error: true, message: err.message});
  },
  onNoMatch: (req, res) => {
    res.status(404).json({error: true, message: "Page is not found"});
  },
})