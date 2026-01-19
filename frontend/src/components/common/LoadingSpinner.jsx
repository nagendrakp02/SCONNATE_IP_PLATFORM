import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader className={`${sizeClasses[size]} animate-spin text-blue-500`} />
    </div>
  );
};

export default LoadingSpinner;
