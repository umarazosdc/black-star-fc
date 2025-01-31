'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const EditProfile = dynamic(() => import('@/components/utils/edit-profile'), {
   ssr: false,
});
const EditProfilePage = () => {
   return <EditProfile />;
};

export default EditProfilePage;
