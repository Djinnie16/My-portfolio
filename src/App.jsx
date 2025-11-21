import NavBar from './components/NavBar';
import Section from './components/Section';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <header className="text-center py-10 bg-teal-600 dark:bg-teal-800 text-white">
        <h1 className="text-4xl font-bold">Kelvin G</h1>
        <p className="mt-2">
         {/*} <a href="mailto:kelvindevl@proton.me" target="_blank" className="text-blue-500 hover:text-blue-700">[email protected]</a> |*/} <a href="https://github.com/djinnie16" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100">GitHub</a>
        </p>
      </header>
      <NavBar />
      <main className="max-w-4xl mx-auto">
        <Section id="about" title="About Me">
          <p className="text-gray-700 dark:text-gray-300">
            I am a passionate Web and Software Developer with a strong foundation in front-end and back-end technologies. I specialize in building dynamic and responsive web applications.
          </p>
        </Section>
        <Section id="skills" title="Skills">
          <ul className="grid grid-cols-3 gap-1 text-gray-700 dark:text-gray-300">
            {['HTML', 'CSS', 'JavaScript', 'Flutter', 'Laravel', 'MySQL', 'Git & GitHub', 'React', 'Tailwind', 'Typescript', 'Nextjs'].map((skill) => (
              <li key={skill} className="bg-blue-50 dark:bg-blue-900 p-2 rounded text-center text-blue-800 dark:text-blue-200">
                {skill}
              </li>
            ))}
          </ul>
        </Section>
        <Section id="projects" title="Projects">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="bg-purple-100 dark:bg-purple-900 p-2 rounded"><strong>Travel App</strong> – Flutter app integrating hotels, cabs, and travel agencies.</li>
            <li className="bg-purple-100 dark:bg-purple-900 p-2 rounded"><strong>Portfolio Website</strong> – Personal website using HTML, CSS, and JavaScript.</li>
            <li className="bg-purple-100 dark:bg-purple-900 p-2 rounded"><strong>Earthsyeild</strong> – A Role Based System.</li>
            <li className="bg-purple-100 dark:bg-purple-900 p-2 rounded"><strong>Jflix kenya</strong> – An e-commerce app.</li>
          </ul>
        </Section>
        <Section id="experience" title="Experience">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded"><strong>Attachee – NHIF (2024)</strong></li>
            <li className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded"><strong>Intern – VIVA COM (2025)</strong>: Contributed to client-side features and API integration.</li>
          </ul>
        </Section>
        <Section id="education" title="Education">
          <p className="text-gray-700 dark:text-gray-300 bg-red-100 dark:bg-red-900 p-2 rounded">
            BSc. Computer Science – Karatina University (2021 - 2025)
          </p>
        </Section>
        <Section id="contact" title="Contact">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 bg-indigo-100 dark:bg-indigo-900 p-2 rounded">
           <li>Email: <a href="mailto:kelvindevl@proton.me?subject=Portfolio%20Inquiry&body=Hi%20Kelvin,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20potential%20opportunities.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0ABest%20regards,%0A[Your%20Name]"
           target="_blank" className="text-blue-500 hover:text-blue-700">kelvindevl@proton.me</a></li>
           <li>GitHub: <a href="https://github.com/djinnie16" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">github.com/djinnie16</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/kelvin-gitau-386772298/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn Profile</a></li> {/* Added LinkedIn URL */}
            </ul>
        </Section>
      </main>
      <footer className="text-center py-4 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        © 2025 Kelvin G
      </footer>
    </div>
  );
}

export default App;