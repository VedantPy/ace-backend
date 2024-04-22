// Basics of Higher Order Functions
// const asyncHandler = () => {}
// const asyncHandler = (fn = () => {});
// const asyncHandler = (fn) = async () => {};

// Promise approach
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

// try-catch approach
// const asyncHandler = (fn) = async (req, res, next){
//     try{
//         await fn(req, res, next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
