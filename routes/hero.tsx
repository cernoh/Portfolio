import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap } from '@preact-icons/fa';

const Hero = () => {
  return (
    <div
      className="hero bg-cover bg-center h-screen shadow-lg relative"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl font-bold mb-4">Davincey Ragaven</h1>
        <p className="text-2xl mb-8 flex items-center">
          <span className="mr-2">
            <FaGraduationCap />
          </span>
          Cyber Security Student
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/davincey-ragaven-76a220252/"
            className="text-3xl bg-black p-4 rounded-full shadow-lg skeuomorphic hover:bg-white hover:text-black transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/cernoh"
            className="text-3xl bg-black p-4 rounded-full shadow-lg skeuomorphic hover:bg-white hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:davincey06@gmail.com"
            className="text-3xl bg-black p-4 rounded-full shadow-lg skeuomorphic hover:bg-white hover:text-black transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/cv-davincey-ragaven.pdf"
            download
            className="text-white text-3xl"
          >
            <div className="bg-green-700 p-4 rounded-full shadow-lg skeuomorphic hover:bg-white hover:text-black hover:scale-110 transition duration-300">
              Download CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;