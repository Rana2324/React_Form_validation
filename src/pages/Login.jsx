import { set } from 'lodash';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

  // State variables for user input
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State variables for user error messages
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmpasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');



  console.log(userErrorMessage);
  
  // State variable for input color
  const [inputColor, setInputColor] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation userName
    if(userName.length>3){
      setUserErrorMessage(''); 
      setInputColor('green'); 
    }else{
      setUserErrorMessage('Please enter a valid name with more than 3 characters');
      setInputColor('red');
      return;
    }
    //Basic validation email
    if(email.includes('@') && email.includes('.')){
      setEmailErrorMessage(''); 
      setInputColor('green');
    }else{
      setInputColor('red');
      setEmailErrorMessage('Please enter a valid email address');
      return;
    }
    // Basic validation password
    if(password.length >= 6){
      setPasswordErrorMessage(''); 
      setInputColor('green'); 
    } else {
      setInputColor('red');
      setPasswordErrorMessage('Password must be at least 6 characters long');
      return;
    }
    // Basic validation confirm password
    if(confirmpassword === password){
      setConfirmPasswordErrorMessage(''); 
      setInputColor('green'); 
    } else {
      setInputColor('red');
      setConfirmPasswordErrorMessage('Passwords do not match');
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign in to your account</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your name
            </label>
            <input
              type="text"
              value={userName}
              placeholder="Enter your name"
              style={{ borderColor: inputColor }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e)=>setUserName(e.target.value)}
            />
            {/* Display error message if userName is invalid */}
            {userErrorMessage && (  
              <p className="text-red-500 text-sm mt-1">
                {userErrorMessage}
              </p>
            )}

          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type='text'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={{ borderColor: inputColor }}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Display error message if email is invalid */}
            {emailErrorMessage && (
              <p className="text-red-500 text-sm mt-1">
              {emailErrorMessage}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                style={{ borderColor: inputColor }}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {/* Display error message if password is invalid */}
            {passwordErrorMessage && (  
              <p className="text-red-500 text-sm mt-1">
                {passwordErrorMessage}
              </p>
            )}
          </div>
        <div>
            <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmpassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                style={{ borderColor: inputColor }}
                placeholder="Enter your confirm password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {/* Display error message if password is invalid */}
            {confirmpasswordErrorMessage && (  
              <p className="text-red-500 text-sm mt-1">
                {confirmpasswordErrorMessage}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
