"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Momento",
    description:
      "Developed of a social media platform using React.js, TypeScript, Tailwind CSS, and Appwrite as the backendsolution. Successfully launched a prototype with 15-20 active users uploading photos and engaging in social interactions. Implemented core features, resulting in 50-60 posts shared among users within the initial phase.Designed a responsive user interface with intuitive navigationoptimized for a smooth mobile experience",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mannyamm21/momento",
    previewUrl: "https://momento-wine.vercel.app/",
  },
  {
    id: 2,
    title: "Meal It",
    description:
      "Online Food Ordering Platform built with MERN stack. Seamlessly browse, order, and track deliveries with user authentication and PayPal integration. Responsive design ensures optimal user experience. Future plans include personalized recommendations and social media integration.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mannyamm21/Meal_It_Mern",
    previewUrl: "https://meal-it-mernstack.onrender.com/",
  },
  {
    id: 3,
    title: "Blog Page",
    description:
      "A stylish blog site powered by cutting-edge technologies. Leveraging Vite React, Tailwind CSS, and Appwrite, this project showcases seamless content management, intuitive user experience, and robust performance.",
    image: "/images/projects/blog_page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mannyamm21/BlogPage",
    previewUrl: "https://mac-blog-page.netlify.app/",
  },
  {
    id: 4,
    title: "The News",
    description:
      "The News is a dynamic and interactive news webpage that harnesses the power of HTML, CSS, JavaScript, and the News API to provide users with a seamless and personalized news browsing experience. API Used: gnews.io",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mannyamm21/TheNews_webpage_api",
    previewUrl: "https://mannyamm21.github.io/TheNews_webpage_api/",
  },
  {
    id: 5,
    title: "Computer Retailer Store and Maintenance",
    description:
      "Computer Retailer store database management system that keeps track of the store's data and assists the owner in providing better service. - Java, MySql.",
    image: "/images/projects/5.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/mannyamm21/ReactPortfolio",
    previewUrl: "https://github.com/mannyamm21/ReactPortfolio",
  },
  {
    id: 6,
    title: "VideoFusion",
    description:
      "Developed VideoFusion using React and Node.js, optimizing performance and implementing a recommendation algorithm. Utilized Firebase for storage, added email functionality, and integrated Cloudinary for images, boosting engagement and retention.",
    image: "/images/projects/VideoFusion.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
