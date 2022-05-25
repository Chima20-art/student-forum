import { useRouter } from 'next/router';
import useProtectedRoute from '../context/useProtectedRoute';

const Profile = () => {
  const user = useProtectedRoute();

  return (
    <div>
      <h1>You are logged in</h1>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Profile;
