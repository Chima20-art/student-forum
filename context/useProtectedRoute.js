import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './auth';

const useProtectedRoute = () => {
  const { user, loadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loadingUser) {
      router.push('/');
    }
  }, [user, loadingUser]);

  return user;
};

export default useProtectedRoute;
