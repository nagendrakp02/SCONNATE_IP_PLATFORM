// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Generate JWT token
// const generateToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: '7d'
//   });
// };

// // Signup
// exports.signup = async (req, res) => {
//   try {
//     const { fullName, email, password, role, institution } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Create user
//     const user = await User.create({
//       fullName,
//       email,
//       password,
//       role,
//       institution
//     });

//     const token = generateToken(user._id);

//     res.status(201).json({
//       message: 'User created successfully',
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role,
//         institution: user.institution
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Login
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = generateToken(user._id);

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role,
//         institution: user.institution
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get current user
// exports.getMe = async (req, res) => {
//   try {
//     res.json({ user: req.user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.signup = async (req, res, next) => {
  try {
    const { fullName, email, password, role, institution } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      role,
      institution,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        institution: user.institution,
      },
    });
  } catch (error) {
    next(error); // ✅ CRITICAL
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        institution: user.institution,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    next(error);
  }
};
