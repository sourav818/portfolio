export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "MCA (AI & DL) student with strong technical and analytical skills",
    description:
      "Pursuing Master of Computer Applications (IBM) in Artificial Intelligence & Deep Learning with a strong background in Statistics and hands-on experience in software development, machine learning, and data-driven applications.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable and open to learning new technologies",
    description:
      "Comfortable working with different tools, technologies, and environments while continuously improving technical and analytical skills.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My technical skill set",
    description:
      "Python, C, C++, HTML, CSS, JavaScript, SQL, Flask, MySQL, Data Visualization (Matplotlib), IBM Cognos, AI/ML fundamentals, NLP.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
   id: 4,
title: "Tech enthusiast with a passion for development",
description:
  "Interested in building interactive web applications, AI-driven systems, dashboards, and data-centric solutions for real-world problems.",
className: "lg:col-span-2 md:col-span-3 md:row-span-2",
imgClassName: "",
titleClassName: "justify-start",
img: "/grid.svg",
spareImg: "/b4.svg",

  },
  {
    id: 5,
    title: "Hands-on academic and project experience",
    description:
      "Developed multiple real-world projects involving machine learning, NLP, face recognition, automation, databases, APIs, and full-stack development.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
title: "Open to internships and entry-level opportunities",
description:
  "Seeking opportunities in software development, data analytics, AI/ML, and related domains to apply skills and grow professionally.",
className: "lg:col-span-2 md:col-span-3 md:row-span-2",
imgClassName: "",
titleClassName: "justify-center md:max-w-full max-w-60 text-center",
img: "",
spareImg: "",

  },
];

export const projects = [
  {
    id: 1,
    title: "News Article Classification System",
    des: "Python-based machine learning system using NLP (TF-IDF) and Logistic Regression achieving 99.33% accuracy. Built with Streamlit, Matplotlib, and real-time multi-category prediction.",
    img: "/news-classification-model.png",
    iconLists: ["/python.svg", "/ml.svg"],
    link: "https://github.com/sourav818/news-category-prediction",
  },
  {
    id: 2,
    title: "Smart AI Chatbot",
    des: "Node.js based chatbot integrated with OpenAI, Socket.IO, IBM Cloud Text-to-Speech and Speech-to-Text services, with a responsive HTML, CSS, and JavaScript frontend.",
    img: "/ai-chatbot.png",
    iconLists: ["/node.svg", "/ai.svg"],
    link: "https://github.com/sourav818/Smart-Voice-Chatbot",
  },
  {
    id: 3,
    title: "Student Attendance Management System",
    des: "Flask-based system with face recognition, Twilio SMS integration, MySQL database, Matplotlib visualizations, and a web-based frontend.",
    img: "/attendance-system.png",
    iconLists: ["/python.svg", "/flask.svg"],
    link: "https://github.com/sourav818/Attendance_System",
  },
  {
  id: 4,
  title: "PDF Comparison Tool",
  des: "Python tool to analyze and compare PDF files by examining text, metadata, and binary differences with automated reporting.",
  img: "/pdf-comparison.png",
  iconLists: ["/python.svg"],
  link: "https://github.com/sourav818/Pdf-Comparison-Tool",
},
{
    id: 5,
    title: "ToDo Management System",
    des: "Flask-based web application with MySQL database, Twilio SMS integration, task management features, and data visualization using Matplotlib.",
    img: "/todo-management.png",
    iconLists: ["/python.svg", "/mysql.svg", "/js.svg"],
    link: "https://github.com/sourav818/ToDoZen-Todo-App",
  },
];

export const testimonials = [
  {
    quote:
      "Sourav has demonstrated strong analytical skills, technical proficiency, and a keen interest in applying AI, machine learning, and software development concepts to real-world problems.",
    name: "Faculty Mentor",
    title: "Assam down town University",
  },
];

export const companies = [
  {
    id: 1,
    name: "ISRO",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "IBM",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Google Cloud",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Coursera",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "HackerRank",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python Developer Intern",
    desc: "Codec Technologies Pvt. Ltd. (Aug 2025 – Sep 2025). Worked on Python-based applications, Flask development, MySQL integration, automation, debugging, and deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Intern – IT Cell",
    desc: "Assam down town University (May 2025 – Jun 2025). Assisted in IT support, database handling, documentation, and understanding the software development lifecycle.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sourav818",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
