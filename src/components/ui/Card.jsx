import React from "react";

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
