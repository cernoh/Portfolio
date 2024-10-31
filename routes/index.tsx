import {
  FaChevronDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "@preact-icons/fa";

export default function Home() {
  return (
    <>
    <head> 
      <script src="./oneko.js"> </script>
    </head>
    <body>
    <div class="bg-[#182E6E]">
      <div
        class="hero bg-cover bg-center h-screen shadow-lg relative"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full text-center ">
          <h1 class="text-6xl font-bold mb-4">Davincey Ragaven</h1>
          <p class="text-2xl mb-8">Cyber Security Student</p>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/davincey-ragaven-76a220252/"
              class="text-3xl"
            >
              <div class="bg-black p-4 rounded-full shadow-lg skeuomorphic">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/cernoh" class="text-white text-3xl">
              <div class="bg-black p-4 rounded-full shadow-lg skeuomorphic">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:davincey06@gmail.com" class="text-white text-3xl">
              <div class="bg-black p-4 rounded-full shadow-lg skeuomorphic">
                <FaEnvelope />
              </div>
            </a>
          </div>
          <div class="mt-4">
            <a
              href="/cv-davincey-ragaven.pdf"
              download
              class="text-white text-3xl"
            >
              <div class="bg-green-700 p-4 rounded-full shadow-lg skeuomorphic">
                Download CV
              </div>
            </a>
          </div>
        </div>
        <div class="absolute bottom-4 w-full flex justify-center">
          <FaChevronDown class="text-white text-4xl animate-bounce" />
        </div>
      </div>
      <div class="bg-[#586064] px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            test
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    </body>
    </>
  );
}
