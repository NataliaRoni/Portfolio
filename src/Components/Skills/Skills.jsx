// import { BsFillCheckCircleFill } from 'react-icons/bs';
// import { RiChipLine } from 'react-icons/ri';
import { BiLaptop } from "react-icons/bi";
import javascript from "../../images/javascript.png";
import css from "../../images/css.png";
import express from "../../images/express.png";
import html from "../../images/html.png";
import node from "../../images/node.png";
import postgre from "../../images/postgre.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import responsive from "../../images/responsive.png";
import sequelize from "../../images/sequelize.png";
import { useTranslation } from "react-i18next";
import React from "react";
import "tailwindcss/tailwind.css";

export default function Skills() {

  const [t, i18n] = useTranslation("global");

  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Javascript", image: javascript },
    { name: "React", image: react },
    { name: "Redux", image: redux },
    { name: "NodeJS", image: node },
    { name: "Express", image: express },
    { name: "PostgreSQL", image: postgre },
    { name: "Sequelize", image: sequelize },
    { name: "Responsive Websites", image: responsive },
  ];
  
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto bg-cyan-950">
        <div className="text-center mb-16">
          <BiLaptop className="w-10 inline-block mb-4" style={{ fontSize: "2.5rem"}}/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {t("skills.technologies")}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {t("skills.discover")}✨
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 mr-2"
                    />
                <span className="title-font font-medium leading-relaxed">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
