import NavBar from './components/NavBar';
import Section from './components/Section';
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900 min-h-screen transition-all duration-500">
      <header className="text-center py-12 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-800 dark:to-blue-800 text-white transform transition-transform duration-300 hover:scale-[1.02]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Kelvin Gitau</h1>
          <p className="text-xl opacity-90 transition-opacity duration-300 hover:opacity-100">
            <a 
              href="https://github.com/djinnie16" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/30 hover:shadow-lg hover:gap-3"
            >
              <span>🌟</span>
              GitHub Portfolio
              <span>→</span>
            </a>
          </p>
        </div>
      </header>
      
      <NavBar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
       <Section id="about" title="About Me">
          <div className="space-y-8">
            {/* Main About Content */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate Full-Stack Developer with a Bachelor's degree in Computer Science, 
                  specializing in creating dynamic, responsive web and mobile applications. My journey 
                  combines academic excellence with hands-on professional experience across multiple 
                  tech stacks and industries.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  From building enterprise-level inventory systems like <strong>Earthsyeild</strong> to 
                  developing cross-platform mobile applications and modern e-commerce solutions, I thrive 
                  on transforming complex problems into elegant, user-friendly solutions. My experience 
                  spans both frontend and backend development, with expertise in React, Laravel, Flutter, 
                  and various database technologies.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  What drives me is the opportunity to create technology that makes a real impact—whether 
                  it's streamlining business operations, enhancing user experiences, or solving everyday 
                  challenges through innovative software solutions. I'm constantly learning and adapting 
                  to new technologies while maintaining a strong foundation in software engineering principles.
                </p>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-100 dark:border-teal-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Professional Strengths
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Problem Solving */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">🔍</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Problem Solving</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Breaking down complex challenges into manageable solutions through systematic analysis
                  </p>
                </div>

                {/* Collaboration */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">🤝</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Team Collaboration</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Working effectively with cross-functional teams to deliver integrated solutions
                  </p>
                </div>

                {/* Adaptability */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Adaptability</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Quickly learning new technologies and adapting to evolving project requirements
                  </p>
                </div>

                {/* Attention to Detail */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">✨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Attention to Detail</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ensuring code quality and user experience through meticulous implementation
                  </p>
                </div>

                {/* Communication */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">💬</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Communication</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clearly articulating technical concepts to both technical and non-technical stakeholders
                  </p>
                </div>

                {/* Continuous Learning */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl">📚</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Continuous Learning</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Constantly updating my skills and staying current with industry trends and best practices
                  </p>
                </div>
              </div>
            </div>

            {/* Current Focus 
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-800">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Currently Focusing On
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  🚀 Scaling applications for enterprise use
                </span>
                <span className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  💡 Exploring cloud technologies and DevOps
                </span>
                <span className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  🎯 Enhancing user experience design principles
                </span>
              </div>
            </div>  */}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['HTML', 'CSS', 'JavaScript', 'Flutter', 'Laravel', 'MySQL', 'Git & GitHub', 'React', 'Tailwind', 'TypeScript', 'Next.js'].map((skill) => (
                <li 
                  key={skill} 
                  className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 p-4 rounded-xl text-center text-blue-800 dark:text-blue-200 font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-blue-200 hover:to-teal-200 dark:hover:from-blue-800 dark:hover:to-teal-800 cursor-pointer transform hover:-translate-y-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-6">
            {/* Earthsyeild - Keep existing */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <strong className="text-xl text-teal-700 dark:text-teal-300 group-hover:text-teal-600 dark:group-hover:text-teal-200 transition-colors">Earthsyeild</strong>
              <p className="mt-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                A comprehensive, role-based inventory and branch management system for a Kenyan agribusiness, featuring centralized oversight and an integrated e-commerce store.
              </p>
              <a 
                href="https://earthsyield.co.ke" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-teal-600 text-white rounded-full transition-all duration-300 hover:bg-teal-700 hover:gap-3 hover:shadow-lg hover:scale-105"
              >
                View Live Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">🚀</span>
              </a>
            </div>

            {/* Jflix Kenya - Keep existing */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <strong className="text-xl text-purple-700 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">Jflix Kenya</strong>
              <p className="mt-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                A full-featured e-commerce application with product listings, a shopping cart, user accounts, and a secure checkout process.
              </p>
              <a 
                href="https://jflixkenya.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-purple-600 text-white rounded-full transition-all duration-300 hover:bg-purple-700 hover:gap-3 hover:shadow-lg hover:scale-105"
              >
                View Live Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">🎬</span>
              </a>
            </div>

            {/* Travel App - Updated */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <strong className="text-xl text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">Travel Booking Mobile App</strong>
              <p className="mt-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                A cross-platform Flutter mobile application with Laravel backend that enables users to discover and book travel destinations,
                hotels, and cab services. Features interactive maps with destination pins, comprehensive agency listings, and a seamless
                booking experience. Built as a full-stack final year project demonstrating mobile development expertise.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Flutter</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Laravel</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">MySQL</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Flutter Maps</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">REST API</span>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                🎓 Final Year Project | 📱 Cross-Platform (Android & iOS) | 🗺️ Interactive Map Integration
              </div>
              <a 
                href="https://github.com/Djinnie16/travel-app"  
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:gap-3 hover:shadow-lg hover:scale-105"
              >
                View GitHub Repository
                <span className="transition-transform duration-300 group-hover:translate-x-1">📱</span>
              </a>
            </div>

            {/* Portfolio Website - Updated */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <strong className="text-xl text-indigo-700 dark:text-indigo-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">Developer Portfolio Website</strong>
              <p className="mt-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                A modern, responsive portfolio website built with React and Tailwind CSS, featuring dynamic animations, dark mode functionality, 
                and seamless user interactions. Showcases professional projects, skills, and experience with an elegant design that demonstrates 
                front-end development expertise and attention to user experience.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Responsive Design</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Vercel</span>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full transition-all duration-300 hover:bg-indigo-700 hover:gap-3 hover:shadow-lg hover:scale-105"
              >
                View Live Site
                <span className="transition-transform duration-300 group-hover:translate-x-1">🌟</span>
              </a>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-6">
            {/* Quick Office Pointe */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    Web Developer
                  </h3>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-medium">Quick Office Pointe</p>
                </div>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium whitespace-nowrap">
                  Remote
                </span>
              </div>
              
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">▸</span>
                  <span>Led development of <strong>Earthsyeild</strong> - a comprehensive inventory and branch management system using Laravel, MySQL, and Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">▸</span>
                  <span>Contributed to <strong>Jflix Kenya</strong> e-commerce platform, implementing key features and user interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">▸</span>
                  <span>Integrated rich text editors (Summernote) and interactive alerts (SweetAlert2) for enhanced user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">▸</span>
                  <span>Developed responsive front-end components with HTML, JavaScript, and Tailwind CSS</span>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Laravel</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">MySQL</span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">JavaScript</span>
              </div>
            </div>

            {/* Accela Academy */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Frontend Developer Intern
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">Accela Academy</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium whitespace-nowrap">
                  Remote
                </span>
              </div>
              
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Engineered a <strong>features</strong> for e-commerce platform using Next.js and TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Collaborated with other developers to consume REST APIs and ensure seamless integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Set up local development environment with PostgreSQL and Nest.js, managing database migrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Designed and implemented responsive user interfaces for enhanced customer experience</span>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Nest.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">REST API</span>
              </div>
            </div>

            {/* VIVA COM */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    Software Engineering Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">VIVA COM</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium whitespace-nowrap">
                  2025
                </span>
              </div>
              
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Performed comprehensive <strong>black box testing</strong> and <strong>end-to-end testing</strong> on web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Provided strategic feedback on system improvements and non-functional requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Identified and documented software defects, contributing to product quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Collaborated with development teams to validate bug fixes and system enhancements</span>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">QA Testing</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Black Box Testing</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">E2E Testing</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Quality Assurance</span>
              </div>
            </div>

            {/* NHIF */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90 border border-white/20 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    Attachee - Multi-Department Rotation
                  </h3>
                  <p className="text-lg text-amber-600 dark:text-amber-400 font-medium">National Hospital Insurance Fund (NHIF)</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium whitespace-nowrap">
                  2024
                </span>
              </div>
              
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Completed comprehensive rotation across <strong>Customer Care, Finance, Procurement, Intimation, and Claims</strong> departments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Gained valuable insights into large-scale organizational operations and business processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Developed strong understanding of customer service protocols and financial workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Acquired cross-functional business knowledge applicable to software requirements gathering</span>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">Business Processes</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">Customer Service</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">Cross-Functional</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">Organizational Operations</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:from-red-200 hover:to-pink-200 dark:hover:from-red-800 dark:hover:to-pink-800">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              BSc. Computer Science – Karatina University (2021 - 2025)
            </p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:from-indigo-200 hover:to-purple-200 dark:hover:from-indigo-800 dark:hover:to-purple-800">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                <span className="text-2xl">📧</span>
                Email: <a href="mailto:kelvindevl@proton.me" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors font-medium">kelvindevl@proton.me</a>
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                <span className="text-2xl">💻</span>
                GitHub: <a href="https://github.com/djinnie16" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors font-medium">github.com/djinnie16</a>
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                <span className="text-2xl">💼</span>
                LinkedIn: <a href="https://www.linkedin.com/in/kelvin-gitau-386772298/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors font-medium">LinkedIn Profile</a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="text-center py-6 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-500 hover:from-gray-400 hover:to-gray-500 dark:hover:from-gray-600 dark:hover:to-gray-700">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-medium">© 2025 Kelvin G</p>
          <p className="text-sm opacity-80 mt-2">Crafting digital experiences with code and creativity</p>
        </div>
      </footer>
    </div>
  );
}

export default App;