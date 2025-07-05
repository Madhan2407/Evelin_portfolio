import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Code,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  Calendar,
  Globe,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'training', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'training', label: 'Training' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Python', level: 85, icon: Code },
    { name: 'C Programming', level: 80, icon: Code },
    { name: 'AI/ML', level: 90, icon: Brain },
    { name: 'Prompt Engineering', level: 85, icon: Brain },
    { name: 'Linux', level: 75, icon: Globe },
    { name: 'Windows', level: 90, icon: Globe }
  ];

  const projects = [
    {
      title: 'Virtual Assistant with AI (AYLA)',
      description: 'Advanced AI-powered virtual assistant with sentiment analysis capabilities.',
      tech: ['Python', 'AI/ML', 'Sentiment Analysis'],
      award: '3rd Place in Science Day Competition'
    },
    {
      title: 'Startup Pitch - BizCanvas',
      description: 'Innovative startup model focused on AI solutions.',
      tech: ['Business Strategy', 'AI Innovation', 'Pitch Presentation'],
      award: '1st Prize Winner - 2025'
    }
  ];

  const education = [
    {
      degree: 'B.E Computer Science Engineering (AIML)',
      institution: 'Gojan School of Business and Technology',
      period: '2022 - 2026',
      status: 'Pursuing'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Everwin Matriculation Hr. Sec. School',
      period: '2022',
      status: '75.8%'
    }
  ];

  const training = [
    {
      title: 'PCB Design Training',
      organization: 'Emerald Global Automation India',
      type: 'Technical Training'
    },
    {
      title: 'AI & Prompt Engineering Series',
      organization: 'Self-Organized',
      type: 'Workshop Organizer/Speaker'
    },
    {
      title: 'Global Startup Club',
      organization: 'Startup Community',
      type: 'Active Member'
    }
  ];

  const certifications = [
    'Web Development Course - Completed',
    'Cloud Computing Course - Completed',
    'Best Performer in Public Board Design',
    'Best Woman Entrepreneur Award (2024)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Evelin
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              {/* Profile Picture */}
              <div className="mb-8">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto mb-6 relative">
                  <img 
                    src="/src/assets/Picsart_25-07-05_10-12-55-997 copy copy.jpg"
                    alt="Evelin Maragatham T"
                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Evelin Maragatham T
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Computer Science Engineering Student
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg">
                <Brain className="mr-2" size={20} />
                Specialized in AI/ML
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center text-gray-700">
                <MapPin className="mr-2 text-purple-600" size={20} />
                Chennai, India
              </div>
              <a 
                href="mailto:evelinmaragatham12@gmail.com"
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                <Mail className="mr-2 text-purple-600" size={20} />
                evelinmaragatham12@gmail.com
              </a>
              <a 
                href="https://wa.me/918925003749"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                <Phone className="mr-2 text-purple-600" size={20} />
                +91 8925003749
              </a>
              <a 
                href="https://www.linkedin.com/in/evelin-tenesan-812632278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                <Linkedin className="mr-2 text-purple-600" size={20} />
                evelin-tenesan
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Motivated AIML engineering student with a strong interest in innovation, effective communication, and
                teamwork. Experienced in facilitating technical workshops, pitching startup ideas, and engaging with diverse
                audiences. Committed to contributing fresh ideas and technical skills to forward-thinking teams and impactful
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Chief Communication Officer</h3>
                      <p className="text-purple-600 font-medium">Unai Tech</p>
                    </div>
                    <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">2023 - Present</span>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="text-purple-600 mt-0.5 mr-2 flex-shrink-0" size={16} />
                      Led outreach and AI workshops for a student startup with strong engagement
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-purple-600 mt-0.5 mr-2 flex-shrink-0" size={16} />
                      Known for leadership and creativity; now focused on making a wider tech impact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects & Initiatives</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-green-600 font-medium">
                  <Star className="mr-2" size={16} />
                  {project.award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-purple-600 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">{edu.period}</span>
                        <p className="text-sm text-gray-600 mt-1">{edu.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Training & Workshops</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {training.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="text-purple-600 mr-3" size={20} />
                  <span className="text-sm text-purple-600 font-medium">{item.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.organization}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications & Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <Award className="text-purple-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Additional Information</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="text-purple-600 mr-2" size={16} />
                      <span className="text-gray-700">Tamil (Native)</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-purple-600 mr-2" size={16} />
                      <span className="text-gray-700">English (Fluent)</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-purple-600 mr-2" size={16} />
                      <span className="text-gray-700">Hindi (Writing)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700">1st Prize - BizCanvas Competition (2025)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700">Best Woman Entrepreneur Award (2024)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700">3rd Place - Science Day Competition (AYLA Project)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Let's collaborate on innovative AI/ML projects and create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a 
              href="mailto:evelinmaragatham12@gmail.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-100">evelinmaragatham12@gmail.com</p>
            </a>
            
            <a 
              href="https://wa.me/918925003749"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-purple-100">+91 8925003749</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/evelin-tenesan-812632278/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-purple-100">evelin-tenesan</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Evelin Maragatham T. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;