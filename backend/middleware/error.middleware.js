
// module.exports = (err, req, res, next) => {
//   console.error('❌ GLOBAL ERROR HANDLER');

//   // Log full error in development
//   if (process.env.NODE_ENV === 'development') {
//     console.error(err);
//   } else {
//     console.error(err.message);
//   }

//   // Mongoose validation error
//   if (err.name === 'ValidationError') {
//     return res.status(400).json({
//       success: false,
//       message: 'Validation error',
//       errors: Object.values(err.errors).map(e => e.message)
//     });
//   }

//   // Duplicate key error (MongoDB)
//   if (err.code === 11000) {
//     return res.status(400).json({
//       success: false,
//       message: 'Duplicate field value entered'
//     });
//   }

//   // JWT invalid token
//   if (err.name === 'JsonWebTokenError') {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid authentication token'
//     });
//   }

//   // JWT expired token
//   if (err.name === 'TokenExpiredError') {
//     return res.status(401).json({
//       success: false,
//       message: 'Authentication token expired'
//     });
//   }

//   // Default fallback
//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error'
//   });
// };


module.exports = (err, req, res, next) => {
  console.error('❌ GLOBAL ERROR HANDLER');

  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  } else {
    console.error(err.message);
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: Object.values(err.errors).map(e => e.message),
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Duplicate field value entered',
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid authentication token',
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Authentication token expired',
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
