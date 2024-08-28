/* eslint-disable @typescript-eslint/no-misused-promises */
import useAuth from '@/hooks/use-auth';
const EmployerDashboard = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>EmployerDashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default EmployerDashboard;
