import { Fragment } from 'preact';
import Hero from './hero.tsx';

const Home = () => {

  return (
    <Fragment>
      <head>
        <script src="./oneko.js"></script>
      </head>
      <div className="bg-[#182E6E] min-h-screen">
        <Hero />
      </div>
      <div className="bg-[#586064] text-white p-8">
        <div className="bg-[#2E3A59] bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-lg p-8 rounded-3xl mt-8">
          <h2 className="text-3xl font-bold underline mb-4">Skills</h2>
          <p className="text-lg">
            <strong>C++</strong> (2 years), <strong>Java</strong> (2 years), <strong>Rust</strong> (2 years), <strong>Go</strong> (2 years), <strong>Python</strong> (7 years)
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
