import AuthCard from '@/components/auth/auth-card';
import LoginForm from '@/components/auth/login-form';
import Img from '@/components/utils/image';

const LoginPage = () => {
   return (
      <div className="bg-white flex flex-col gap-12">
         <div className="relative size-16 mt-12 flex justify-center mr-auto ml-auto">
            <Img src="/imgs/logo/logo.jpg" alt="Logo" />
         </div>
         <AuthCard isLogin>
            <LoginForm />
         </AuthCard>
      </div>
   );
};

export default LoginPage;
