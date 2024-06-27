"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>MySQL</li>
        <li>JavaScript & TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Technology, Lakshmi Narain College of Technology, Bhopal{" "}
        </li>
        <li>12th(Science), Sharda Vidya Mandir, Bhopal</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Infosys Springboard Programming Using Java And Data Structures and
          Algorithms using Java
        </li>
        <li>Wipro TalentNext Java Full Stack training program.</li>
        <li>
          {" "}
          Cisco Networking Academy Introduction to Cybersecurity And
          Cybersecurity Essentials{" "}
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a passionate developer with a knack for creating innovative and
            impactful software solutions. With a solid foundation in ReactJS,
            TypeScript, MongoDB, ExpressJS, and more, I've developed projects
            ranging from social media platforms to real-time news aggregators.
            My journey includes leading the development of a food ordering
            platform and creating engaging user interfaces. I hold a Bachelor of
            Technology in Electronics & Communication Engineering from Lakshmi
            Narain College of Technology. Beyond coding, I volunteer as a
            graphic designer and educator, making a difference in the lives of
            underprivileged children. Explore my portfolio to see my work in
            action!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
