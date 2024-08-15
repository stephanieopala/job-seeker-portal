import { Link as RouterLink } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-light-gray px-3 sm:px-20 py-10 flex justify-between">
      {/* <div className="sm:h-100 border-l-2 border-dark-gray mx-4"></div> */}
      <div>
        <p>About</p>
        <p>
          <RouterLink to="/jobs" className="hover:text-primary">
            Jobs
          </RouterLink>
        </p>
        <p>
          <RouterLink to="/login" className="hover:text-primary">
            For Employers
          </RouterLink>
        </p>
      </div>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
