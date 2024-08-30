import { Link } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import SectionOneImage from '../assets/recruitment.png';
import SectionTwoImage from '../assets/contract.png';
import Footer from '../components/navigation/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex flex-col gap-8 sm:gap-20 mt-6 px-3 sm:px-20">
        <section className="grid sm:grid-cols-2 py-10 gap-4 sm:gap-0">
          <div className="flex flex-col items-center justify-center">
            <img src={SectionTwoImage} alt="man looking at a pc" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl mb-4 text-center">
              Looking for vacancies? Find the right job for you
            </h2>
            <p className="py-4 text-center">
              Whether you&apos;re just starting your career or seeking a new
              challenge, we connect you with opportunities that fit your goals.
              Start your job search today and take the next step toward your
              future
            </p>
            <Link to="/jobs">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Search Jobs
                <ArrowRight className="ml-4" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="grid sm:grid-cols-2 gap-4 sm:gap-0 bg-primary-light py-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl text-center">
              Hire the best talent for your team
            </h2>
            <p className="py-4 text-center">
              Build a winning team by hiring top talent that aligns with your
              company&apos;s vision. Our platform helps you connect with
              qualified candidates who have the skills and experience you need.
              Find the perfect match for your team and drive your business
              forward.
            </p>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Hire Talent
                <ArrowRight className="ml-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={SectionOneImage}
              alt="lady looking at a device"
              className="h-auto w-3/4"
            />
          </div>
        </section>
        {/* <section className="grid sm:grid-cols-2 py-10 gap-4 sm:gap-0">
          <div className="flex flex-col items-center justify-center">
            <img src={SectionTwoImage} alt="man looking at a pc" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl mb-4 text-center">
              Looking for vacancies? Find the right job for you
            </h2>
            <p className="py-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              perspiciatis ipsam dolores accusamus, incidunt error, saepe
              perferendis modi expedita vitae quia, debitis possimus?
              Repellendus consectetur fuga cumque, culpa officiis adipisci?
            </p>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Search Jobs
              <ArrowRight className="ml-4" />
            </Button>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
