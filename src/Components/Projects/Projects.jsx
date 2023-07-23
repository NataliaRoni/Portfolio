import "tailwindcss/tailwind.css";
import { FaCode } from "react-icons/fa";
import rickandmorty from "../../images/Rick and Morty.png";
import recipes from "../../images/Recipes.png";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [t, i18n] = useTranslation("global");

  const projects = [
    {
      title: t("projects.title1"),
      subtitle: t("projects.subtitle1"),
      description: t("projects.description1") + "👽",
      image: rickandmorty,
      link: "https://rick-and-morty-front-theta.vercel.app/",
    },
    {
      title: t("projects.title2"),
      subtitle: t("projects.subtitle2"),
      description: t("projects.description2") + "🍳",
      image: recipes,
      link: "https://pi-front-natalia.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="text-gray-400 bg-cyan-950 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 bg-cyan-950">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block mb-4" style={{ fontSize: "2.3rem"}}/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("projects.apps")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("projects.checkProjects")}😃
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              target="_blank"
    rel="noopener noreferrer"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
