// Middleware functions are used to handle common tasks like error handling and authentication.
// Wraps asynchronous functions to catch and handle errors gracefully.
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
