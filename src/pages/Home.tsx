import Navbar from "../components/navigation/Navbar";
import SectionOneImage from '../assets/hero.svg';
import SectionTwoImage from '../assets/hero-two.svg';

const Home = () => {
  return (
    <div className="px-3 sm:px-20 py-4">
      <Navbar />
      <div className="flex flex-col gap-8 sm:gap-20 mt-6">
        <section className="grid sm:grid-cols-2 py-10 gap-4 sm:gap-">
          <div className="flex flex-col items-center justify-center">
            <img src={SectionTwoImage} alt="man looking at a pc"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl mb-4">Looking for vacancies? Find the right job for you</h2>
            <p className="py-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsam dolores accusamus, incidunt error, saepe perferendis modi expedita vitae quia, debitis possimus? Repellendus consectetur fuga
              cumque, culpa officiis adipisci?</p>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Search Jobs</button>
          </div>
        </section>
        <section className="grid sm:grid-cols-2 gap-4 sm:gap-0 bg-primary-light py-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl">Hire the best talent for your team</h2>
            <p className="py-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsam dolores accusamus, incidunt error, saepe perferendis modi expedita vitae quia, debitis possimus? Repellendus consectetur fuga
              cumque, culpa officiis adipisci?</p>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Hire Talent</button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={SectionOneImage} alt="lady looking at a device"/>
          </div>
        </section>
        <section className="grid sm:grid-cols-2 py-10 gap-4 sm:gap-">
          <div className="flex flex-col items-center justify-center">
            <img src={SectionTwoImage} alt="man looking at a pc"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-3xl mb-4">Looking for vacancies? Find the right job for you</h2>
            <p className="py-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsam dolores accusamus, incidunt error, saepe perferendis modi expedita vitae quia, debitis possimus? Repellendus consectetur fuga
              cumque, culpa officiis adipisci?</p>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Search Jobs</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home