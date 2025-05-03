import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, Moon, Github, Instagram, Eye, Linkedin, Mail, Download, ExternalLink, Brain, Code, Cloud, Database, Award, BookOpen } from 'lucide-react';
import CertificationCard from "./CertificationCard"; 
import ProjectCard from "./ProjectCard"; 
import Layout from "./Layout";
import Home from "./Home";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">{children}</h2>
  );

  const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 md:px-8"
      >
        {children}
      </motion.section>
    );
  };

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'}`}>
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold dark:text-white">Portfolio</span>
              <div className="hidden md:flex ml-10 space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300'
                    } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
  {/* View Resume */}
  <a
    href="public/Narendra_Datta_Alladi_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
  >
    <Eye size={20} className="mr-2" />
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href="public/Narendra_Datta_Alladi_Resume.pdf"
    download
    className="hidden md:flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
  >
    <Download size={20} className="mr-2" />
    Download Resume
  </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="text-white" /> : <Moon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="hero">
        <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              Narendra Datta Alladi 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Aspiring AI&ML Engineer and Software Developer | Cloud & Code Enthusiast | Talented Learner 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8"
            >
              I build intelligent, scalable solutions with code, cloud, and curiosity,I'am looking To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge 
              appropriately. I believe in Organizing,Planning and Execution. 
            </motion.p>
            <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="flex justify-center md:justify-start space-x-4"
>
  <a href="https://github.com/Dattaalladi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    <Github size={24} />
  </a>
  <a href="https://www.linkedin.com/in/narendra-datta-alladi-89090b221" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    <Linkedin size={24} />
  </a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dattaalladi@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    <Mail size={24} />
  </a>

  <a href="https://www.instagram.com/datta_alladi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    <Instagram size={24} />
  </a>
</motion.div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=500"
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl ring-4 ring-blue-500/20"
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Am currently pursuing B.Tech in Computer Science and Engineering (AIML) with a passion for building intelligent systems
              and scalable applications. Contributed in an enriching internship at Wissenere
              (IIT Bhubaneswar) as a machine Learning Intern and at IBM as a SDE Intern ,where I worked on cutting-edge ML projects and Java FullStack Project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech in Computer Science (AIML)<br />
                  Kalasalingam Academy of Research and Education<br />
                  2021 - 2025
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Current Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exploring advanced ML architectures and cloud-native development while
                  contributing to Software Development and Open-Source Projects.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Quote</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300">
                "Code the solution, learn from the failure, build again smarter. Ad belive in Acceptance,Comprehension and Integration . "
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SkillCard
              icon={<Code />}
              title="Programming"
              skills={['DSA with Java', 'Machine learning with Python', 'JavaScript', 'TypeScript']}
            />
            <SkillCard
              icon={<Brain />}
              title="AI/ML"
              skills={['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'PyTorch']}
            />
            <SkillCard
              icon={<Cloud />}
              title="Cloud"
              skills={['Azure Entra ', 'Oracle Cloud FOundations ', 'Docker', 'Kubernetes']}
            />
            <SkillCard
              icon={<Database />}
              title="Other"
              skills={['Git', 'MySQL', 'MongoDB', 'REST APIs']}
            />
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Experience</SectionTitle>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">JAVA Full Stack Freelance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">EunoiaLabs</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">March 2025 - Present</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Currently working as a software development intern at a dynamic startup, contributing to core product features and enhancements.</li>
                <li>Actively participating in stand-up meetings, sprint discussions, and code reviews, gaining exposure to real-world agile development workflows</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Software Developer Intern</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">IBM</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">June 202 4- July 2024</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed and deployed a full-stack hospital management system enabling patients to book appointments and doctors to manage schedules.</li>
                <li>Designed a secure login and role-based access system for Admin, Doctor, and Patient dashboards using Java and MySQL.</li>
                <li>Built and connected the backend using Java JDBC and MySQL, handling dynamic data operations and validations.</li>
                <li>Implemented data validation, exception handling, and ensured smooth data flow between UI and database.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Machine Learning Intern</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Wissenere @ IIT Bhubaneswar</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">June 2023 - August 2023</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed and optimized machine learning models for real-world applications</li>
                <li>Implemented data preprocessing pipelines and feature engineering techniques</li>
                <li>Collaborated with senior researchers on cutting-edge ML projects</li>
                <li>Gained hands-on experience with model deployment and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Certifications</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CertificationCard
              title="Oracle Cloud AI Foundations"
              issuer="Oracle"
              icon={<Cloud />}
              certificateLink="/Certificates/Oracle Certificate.pdf"
            />
            <CertificationCard
              title="Microsoft Azure Fundamentals"
              issuer="Microsoft "
              icon={<Award />}
              certificateLink="/Certificates/datta ( AI - 900 ).pdf"
            />
            <CertificationCard
              title="Data Base Management using NOSQL"
              issuer="Coursera "
              icon={<Award />}
              certificateLink="/Certificates/Coursera NOSQL.pdf"
            />
            <CertificationCard
              title="Prompt Engineering for Generative AI"
              issuer="Coursera "
              icon={<Award />}
              certificateLink="/Certificates/Coursera Prompt Engineering.pdf"
            />
            <CertificationCard
              title="Python by CodeChef"
              issuer="CodeChef"
              icon={<BookOpen />}
              certificateLink="/Certificates/kl_99210041600 Code Chef.pdf"
            />
            <CertificationCard
              title="Master Course in LeaderShip "
              issuer="Udemy "
              icon={<Award />}
              certificateLink="/Certificates/Udemy Leader Ship Course Completion.pdf"
            />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <ProjectCard
              title="Human Activity Recognition "
              description="Full-stack application with ML-powered scheduling optimization. Reduced waiting times by 40%."
              tags={['Python', 'Scikit-learn', 'Pandas', 'Sensor Data', 'Machine Learning']}
              github="#"
              Colab="#"
              image="#"
            /> */}
            <ProjectCard
              title="Image Classification using CNN and implementation of XAI"
              description="Built and trained a CNN model classifying the objects. 
              Explainable AI (XAI) involves methods and techniques that make AI decisions understandable to humans. Focuses on providing insights into the why and how behind model predictions.
              Explainable AI (XAI) refers to methods and techniques that make AI systems' decisions understandable to humans.It transforms complex, black-box machine learning models into interpretable systems without compromising performance.
              XAI ensures that AI models are not only accurate but also transparent, fair, and accountable"
              tags={['Python', 'CNN', 'TensorFlow', 'Image Processing', 'Deep Learning','Shap']
              }
              github="https://github.com/Dattaalladi/Internship-Projecct-"
              Colab="https://colab.research.google.com/drive/1ISzZYk1VShXLk9prn4NSkddYT-Bmn4Yg?usp=sharing"
              image="/Screenshot 2025-05-02 151941.jpg"
            />
            {/* <ProjectCard
              title="Healthcare ML on Azure"
              description="Developed a machine learning model for Diabates prediction using patient data. Deployed on Azure with 94% accuracy."
              tags={['Python', 'Azure Cloud', 'TensorFlow', 'Healthcare']}
              github="#"
              Colab="#"
              image="#"
            /> */}
            <ProjectCard
              title="Text Summarization using NLP"
              description="A Natural Language Processing (NLP) based Text Summarizer that automatically extracts key information from large bodies of text and generates concise summaries. Built using Python and NLP libraries like NLTK and spaCy, the summarizer supports both extractive and abstractive approaches. Ideal for condensing articles, research papers, or long-form content while preserving the core meaning.
              If required kinldy refer to the GitHub repository for the complete implementation and additional resources . "
              tags={['React', 'Node.js', 'ML', 'MongoDB']}
              github="https://github.com/Dattaalladi/Text-Summarizer-using-NLP"
              Colab="#"
              image="/Screenshot 2025-05-02 152219.jpg"
            />
            <ProjectCard
              title="Smart Hospital Appointment Scheduler"
              description="The Hospital Appointment Scheduler project aims to revolutionize appointment scheduling by creating a streamline, user-friendly, and efficient solution. By addressing inefficiencies in old manual scheduling methods, the project creates a digital platform that ensures real-time availability, interaction with present hospital systems, and increased communication between patients and healthcare professionals.Full-stack application with scheduling optimization. 
              If required kinldy refer to the GitHub repository for the complete implementation and additional resources . "
              tags={['React', 'Node.js', 'ML', 'MongoDB']}
              github="https://github.com/Dattaalladi/HOSPITAL-APPOINTMENT-SCHEDULER-IBM-INTERNSHIP"
              Colab="#"
              image="/Screenshot 2025-05-02 152111.jpg"
            />
            <ProjectCard
              title="An Android-Based Carpooling System for Sustainable Urban Transportation"
              description="Full-stack Car Pooling Application. The system incorporates a React-based frontend, Node.js backend, MongoDB for data management, and LocationIQ APIs for geolocation services. Comparative analysis with existing solutions such as BlaBlaCar and Quick Ride highlights the limitations of current platforms, such as inefficient ride matching and security concerns. By implementing transparent cost-sharing mechanisms, and emergency alert features, this system aims to enhance user experience and promote sustainable urban mobility. "
              tags={['Html', 'Css','React', 'Node.js', 'ML', 'MongoDB']}
              github="https://github.com/Dattaalladi/An-Android-Based-Carpooling-Application"
              Colab="#"
              image="/Screenshot 2025-05-03 011539.jpg"
            />
          </div>
        </div>
      </Section>

{/* Services Section */}
      <Section id="services">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">Services</h2>

   {/* Machine Learning & Deep Learning Engineer */}
<div className="mb-10">
  <h3 className="text-2xl font-semibold mb-2">Machine Learning & Deep Learning Engineer:</h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
    <li>
      Experienced in crafting and fine-tuning machine learning models to maximize precision and performance,
      utilizing methods such as ensemble learning, cross-validation, and strategic hyperparameter adjustments.
    </li>
    <li>
      Strong command of data preprocessing workflows—cleaning datasets, transforming variables, and creating 
      insightful features to improve model outcomes, while effectively managing anomalies and missing entries.
    </li>
    <li>
     Good at building advanced neural network architectures including <strong>CNNs</strong>, <strong>RNNs</strong>, and in fields like computer vision and natural language processing.
    </li>
    <li>
      Capable of implementing and deploying a wide range of predictive systems, from classic approaches such as 
      <strong>decision trees</strong> and <strong>random forests</strong> to cutting-edge <strong>deep learning networks</strong> tailored for scalable performance.
    </li>
  </ul>
</div>


      {/* Prompt Engineering */}
      <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-2">Prompt Engineering: </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
        <li>
          I specialize in crafting intelligent prompts that empower AI systems to generate accurate, efficient, and human-aligned results.
          Through deep understanding of model behavior and token optimization, I create structured instructions that improve AI performance across various tasks.
          My experience includes developing prompts for chatbots, classification systems, and custom NLP workflows tailored to different domains.
        </li>
        <li>
          Leveraging techniques like chain-of-thought prompting, few-shot learning, and reinforcement tuning, I ensure the language model interprets the intent and context precisely. 
          This played a key role in projects like Human Activity Recognition using NLP descriptions and Explainable AI systems that interpret model reasoning.
        </li>
        </ul>
      </div>

      {/* Software Developement */}
      <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-2">Software Development: </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
        <li>
          As a software engineer, I design and develop robust, scalable, and user-centric applications. 
          My expertise spans front-end interfaces, backend APIs, and integration with cloud services to deliver full-stack solutions that are both efficient and maintainable.
        </li>
        <li>
          I've built dynamic React-based applications like Smart Hospital Schedulers and carpooling platforms, deploying them through platforms like Vercel and Azure. 
          From managing state with modern hooks to implementing secure, responsive interfaces, I focus on performance, accessibility, and clean architecture across every product I build.
        </li>
        </ul>
      </div>
  </div>
</Section>

 {/* Testimonials Section */}
      <Section id="testimonials">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 border-b-4 border-blue-500 inline-block">Testimonials</h2>
   <p className="text-center text-gray-1600 dark:text-gray-1600 mb-8">
      Here's what others have to say about working with me — real experiences and genuine appreciation.
    </p> 
    <div className="grid md:grid-cols-2 gap-8">
      {/* Testimonial Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "I have had the good time of knowing and working with Narendra Datta Alladi , and I can confidently say that he is an exceptionally intelligent and quick-learning individual. His passion for his work is evident in every task he undertakes, and he consistently demonstrates a strong commitment to excellence. His ability to grasp new concepts swiftly and apply them effectively makes him a valuable asset in any environment. Beyond his technical abilities, his curiosity and enthusiasm often fueled by his interest in anime and storytelling add a unique and creative perspective to his work. I hold him in the highest regard and believe he would make a remarkable addition to any team or project."
        </p>
        <a
          href="https://www.linkedin.com/in/nuvvula-sai-charan-7340a923a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/sai charan.jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Nuvvula Venkata Siva Sai Charan  
          </span>
        </a>
      </div>

      {/* Add more testimonial cards as needed */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "It's been an absolute privilege working alongside Narendra Datta on multiple technical and academic projects. Their dedication, problem-solving abilities, and collaborative mindset consistently elevated the quality of our work. Whether it was co-developing software solutions, leading group research assignments, or organizing tech events, Narendra Datta always brought innovative ideas, strong technical skills, and a positive attitude to the table.
Beyond technical work, they've shown remarkable leadership in team settings, often taking initiative"
        </p>
        <a
          href="https://www.linkedin.com/in/annampally-swagath-a8325327b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/Swagath .jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Swagath Annampally 
          </span>
        </a>
      </div>
      {/* Add more testimonial cards as needed */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "I've had the opportunity to get to know Narendra Datta Alladi, and I'm genuinely impressed by his dedication, skills, and eagerness to learn. He's someone who not only has strong academic performance but also puts his knowledge into practice through real projects.
What really stands out about Narendra is his hands-on work with machine learning and cloud technologies. He's built smart solutions like an image classification system using deep learning and even deployed a healthcare ML model on Azure Cloud—showing he understands both the theory and the real-world application of his skills.
He's also done well in competitions, earning recognition in hackathons and project presentations. On top of that, he has experience from his internship at IIT Bhubaneswar, where he worked with machine learning models and deepened his understanding of the field.
Narendra is skilled in languages like Python, Java, and SQL, and he's certified in areas like cloud computing and AI. But beyond the technical
side, he's curious, hardworking, and always ready to take on new challenges.
I have no doubt he'll do great things in his career, and I'm happy to recommend him for any opportunity that comes his way."
        </p>
        <a
          href="https://www.linkedin.com/in/narsimha-yakasi-385103261/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/Narsimha .jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Narsimha Yakasi  
          </span>
        </a>
      </div>
      {/* Add more testimonial cards as needed */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "I have had the privilege of working alongside Narendra Datta on several long-term projects and hackathons. Throughout our collaboration, he has consistently demonstrated a strong work ethic, technical competence, and a genuine commitment to excellence. His dedication and perseverance make him a valuable asset in any team or project."
        </p>
        <a
          href="https://www.linkedin.com/in/varshith-kankipati-58aa62268/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/Varshith .jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Varshith Kankipati  
          </span>
        </a>
      </div>
      {/* Add more testimonial cards as needed */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "I have had the opportunity to work with my friend Narendra Datta Alladi on multiple projects, and I've consistently been impressed by his programming skills and teamwork. He approaches every task with dedication and collaborates seamlessly with team members. His problem-solving abilities and positive attitude make him a valuable asset to any development team."
        </p>
        <a
          href="https://www.linkedin.com/in/sai-harsha-panthagani-a65339221"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/Sai Harsha .jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Sai Harsha Panthagani 
          </span>
        </a>
      </div>
      {/* Add more testimonial cards as needed */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "I've known Datta since childhood, and if there's one word that sums him up, it's genuine. From the start, he's always been the kind of person who brings warmth into every room with his kindness, humor, and that unmistakable spark of mischief. Whether he's cracking jokes, chatting non-stop, or lending a hand without being asked, Datta's energy is contagious.
What stands out most is his work ethic—he's incredibly hardworking and dedicated to anything he sets his mind to. Behind all the fun and laughter is someone who truly gives his best, every single time. It’s been a joy watching him grow into the person he is today, and I’m proud to call him a friend."
        </p>
        <a
          href="https://www.linkedin.com/in/shiva-vinay-alladi-406271258/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mt-4"
        >
          <img
            src="/Shiva Vinay Alladi.jpg"
            alt="Person"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Shiva Vinay Alladi 
          </span>
        </a>
      </div>
    </div>
  </div>
</Section>

{/* Contact Section */}
<Section id="contact">
  <div className="max-w-4xl mx-auto px-4">
    <SectionTitle>Contact Me</SectionTitle>
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
      
      {/* Email and Social Links */}
      <div className="text-center mb-6">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dattaalladi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-lg font-medium"
        >
          <Mail size={22} className="mr-2" />
          dattaalladi@gmail.com
        </a>
        <li>
       <strong>Phone:</strong> <a href="tel:+917337359621" className="text-blue-600 hover:underline">+91-7337359621</a>
    </li>
        <div className="flex justify-center gap-6 mt-4 text-blue-600 dark:text-blue-400">
          <a href="https://github.com/Dattaalladi" target="_blank" rel="noopener noreferrer">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/narendra-datta-alladi-89090b221" target="_blank" rel="noopener noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="https://www.instagram.com/datta_alladi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    <Instagram size={24} />
  </a>
          {/* Add more icons as needed */}
        </div>
      </div>
      <form name="contact" data-netlify="true" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>

{/* 👇 Your actual visible contact form */}
<form
  name="contact"
  method="POST"
  data-netlify="true"
  className="space-y-6 max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
>
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition"
    >
      Send Message
    </button>
  </div>
</form>

       {/* <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Send Message
        </button>
      </form>  */}
    </div>
  </div>
</Section>
    </div>
  );
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 dark:text-blue-400 mr-2">{icon}</div>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// function ProjectCard({ title, description, tags, github }: { title: string; description: string; tags: string[]; github: string }) {
//   return (
//     <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
//       <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <a
//         href={github}
//         className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//       >
//         <Github size={20} className="mr-2" />
//         View on GitHub
//       </a>
//     </div>
//   );
// }

// function CertificationCard({ title, issuer, icon }: { title: string; issuer: string; icon: React.ReactNode }) {
//   return (
//     <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
//       <div className="flex items-center mb-4">
//         <div className="text-blue-600 dark:text-blue-400 mr-2">{icon}</div>
//         <div>
//           <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
//           <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <Layout>
//       <Home />
//     </Layout>
//   );
// }
export default App;
