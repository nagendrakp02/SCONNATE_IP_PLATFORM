// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Camera, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle, Loader } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';
// import { authAPI } from '../../api/auth.api';
// import { validateEmail, validatePassword } from '../../utils/validators';

// const AuthScreen = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [authView, setAuthView] = useState('login');
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     fullName: '',
//     institution: '',
//     role: 'student'
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const validateForm = () => {
//     if (!formData.email || !formData.password) {
//       setError('Email and password are required');
//       return false;
//     }
//     if (authView === 'signup' && !formData.fullName) {
//       setError('Full name is required');
//       return false;
//     }
//     if (!validateEmail(formData.email)) {
//       setError('Invalid email format');
//       return false;
//     }
//     if (!validatePassword(formData.password)) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setError('');

//     try {
//       if (authView === 'signup') {
//         const data = await authAPI.signup(formData);
//         setSuccess('Account created successfully! Please login.');
//         setTimeout(() => {
//           setAuthView('login');
//           setSuccess('');
//         }, 2000);
//       } else {
//         const data = await authAPI.login({
//           email: formData.email,
//           password: formData.password
//         });
//         login(data.user, data.token);
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Authentication failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
//       <div className="w-full max-w-md relative z-10">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
//             <Camera className="w-10 h-10 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold text-white mb-2">S-CONNATE IP</h1>
//           <p className="text-blue-200">Image Processing & Perception Platform</p>
//         </div>

//         {/* Auth Card */}
//         <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
//           {/* Toggle Tabs */}
//           <div className="flex border-b border-gray-700/50">
//             <button
//               onClick={() => {
//                 setAuthView('login');
//                 setError('');
//                 setSuccess('');
//               }}
//               className={`flex-1 py-4 text-center font-semibold transition-all ${
//                 authView === 'login'
//                   ? 'bg-blue-600 text-white'
//                   : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => {
//                 setAuthView('signup');
//                 setError('');
//                 setSuccess('');
//               }}
//               className={`flex-1 py-4 text-center font-semibold transition-all ${
//                 authView === 'signup'
//                   ? 'bg-blue-600 text-white'
//                   : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="p-8">
//             {error && (
//               <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400">
//                 <AlertCircle className="w-5 h-5" />
//                 <span className="text-sm">{error}</span>
//               </div>
//             )}

//             {success && (
//               <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400">
//                 <CheckCircle className="w-5 h-5" />
//                 <span className="text-sm">{success}</span>
//               </div>
//             )}

//             {authView === 'signup' && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Institution
//                   </label>
//                   <input
//                     type="text"
//                     name="institution"
//                     value={formData.institution}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
//                     placeholder="Your school/university"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Role
//                   </label>
//                   <select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
//                   >
//                     <option value="student">Student</option>
//                     <option value="educator">Educator</option>
//                     <option value="researcher">Researcher</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full pl-11 pr-12 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <Loader className="w-5 h-5 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 authView === 'login' ? 'Login' : 'Create Account'
//               )}
//             </button>
//           </form>
//         </div>

//         <p className="text-center text-gray-400 text-sm mt-6">
//           Educational platform for Raspberry Pi • v1.0.0
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthScreen;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../api/auth.api';
import { validateEmail, validatePassword } from '../../utils/validators';

const AuthScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authView, setAuthView] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    institution: '',
    role: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }
    if (authView === 'signup' && !formData.fullName) {
      setError('Full name is required');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return false;
    }
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      if (authView === 'signup') {
        const data = await authAPI.signup(formData);
        setSuccess('Account created successfully! Please login.');
        setTimeout(() => {
          setAuthView('login');
          setSuccess('');
        }, 2000);
      } else {
        const data = await authAPI.login({
          email: formData.email,
          password: formData.password
        });
        login(data.user, data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">S-CONNATE IP</h1>
          <p className="text-blue-200">Image Processing & Perception Platform</p>
        </div>

        {/* Auth Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          {/* Toggle Tabs */}
          <div className="flex border-b border-gray-700/50">
            <button
              onClick={() => {
                setAuthView('login');
                setError('');
                setSuccess('');
              }}
              className={`flex-1 py-4 text-center font-semibold transition-all ${
                authView === 'login'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setAuthView('signup');
                setError('');
                setSuccess('');
              }}
              className={`flex-1 py-4 text-center font-semibold transition-all ${
                authView === 'signup'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">{success}</span>
              </div>
            )}

            {authView === 'signup' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                    placeholder="Your school/university"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
                  >
                    <option value="student">Student</option>
                    <option value="educator">Educator</option>
                    <option value="researcher">Researcher</option>
                  </select>
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-12 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                authView === 'login' ? 'Login' : 'Create Account'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Educational platform for Raspberry Pi • v1.0.0
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
