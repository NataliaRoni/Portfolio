import 'tailwindcss/tailwind.css';
import natalia from "../../images/natalia.JPG";
import{ useTranslation } from "react-i18next"

export default function About() {

  const [t, i18n] = useTranslation("global");

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-cyan-950">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t("about.hello")}
            <br className="hidden lg:inline-block" /> {t("about.developer")}
          </h1>
          <p className="mb-8 leading-relaxed">
           {t("about.me")}🚀
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              {t("about.invitation")}
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              {t("about.checkapps")}
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={natalia}
            style={{ width: "90%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
