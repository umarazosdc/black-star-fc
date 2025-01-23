'use client';
import AuthCard from '@/components/auth/auth-card';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const RegisterForm = dynamic(() => import('@/components/auth/register-form'), {ssr: false});

const RegisterPage = () => {
   return (
      <div className="flex flex-col gap-6 bg-white pt-4">
         <div className="flex items-center ml-4 gap-4">
            <Link href="/auth/login">
               <ArrowLeft className="text-accent" />
            </Link>
            <span className="font-bold text-secondary text-base">Sign Up</span>
         </div>
         <AuthCard>
            <RegisterForm />
         </AuthCard>
      </div>
   );
};

export default RegisterPage;
