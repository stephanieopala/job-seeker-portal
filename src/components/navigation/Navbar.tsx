import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between">
        <p className="text-primary">JOB HUB NEST</p>
        <ul className="hidden sm:flex gap-x-4">
          <li><RouterLink className='hover:text-primary font-semibold' to="/jobs">Jobs</RouterLink></li>
          <li><RouterLink className='hover:text-primary font-semibold' to="/login">Login / Register</RouterLink></li>
          <li>
            <RouterLink className='hover:text-primary font-semibold' to="/login">For Employers</RouterLink>
          </li>
        </ul>
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <p>Menu</p>
        </div>
      </div>
      <ul className={isOpen ? "flex flex-col sm:hidden" : "hidden"}>
        <li><RouterLink className='hover:text-primary font-semibold' to="/jobs">Jobs</RouterLink></li>
        <li><RouterLink className='hover:text-primary font-semibold' to="/login">Login / Register</RouterLink></li>
        <li>
          <RouterLink className='hover:text-primary font-semibold' to="/login">For Employers</RouterLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar