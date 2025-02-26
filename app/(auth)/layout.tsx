import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="md:h-screen md:bg-card md:flex items-center justify-center">
         <main className="md:rounded-md md:shadow-md md:min-w-[400px]">
            {children}
         </main>
      </div>
   );
};

export default AuthLayout;
