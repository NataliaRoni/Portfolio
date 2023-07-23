import React from "react";
import 'tailwindcss/tailwind.css';
import linkedin from "../../images/linkedin.png"
import whatsapp from "../../images/whatsapp.png"
import github from "../../images/github.png"
import youtube from "../../images/youtube.png"
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [t, i18n] = useTranslation("global");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto flex flex-wrap items-center justify-center bg-cyan-950">
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
          {t("contact.me")}
          </h2>
          <p className="leading-relaxed mb-5">
            {t("contact.invitation")}📩
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {t("contact.send")}
          </button>
        </form>

        <div className="lg:w-1/2 md:w-1/2 flex flex-col items-center md:py-8 mt-8 md:mt-0">
  <p className="leading-relaxed mb-6">
    {t("contact.socials")}
  </p>
  <div className="flex">
    <a href="https://www.linkedin.com/in/natalia-sofia-rodriguez/" target="_blank" rel="noopener noreferrer" className="mx-2">
      <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
    </a>
    <a href="https://github.com/NataliaRoni" target="_blank" rel="noopener noreferrer" className="mx-2">
      <img src={github} alt="GitHub" className="w-11 h-8" />
    </a>
    <a href="https://www.youtube.com/@NataliaRoni/videos" target="_blank" rel="noopener noreferrer" className="mx-2">
      <img src={youtube} alt="YouTube" className="w-10 h-8" />
    </a>
    <a href="https://wa.me/573028498759" target="_blank" rel="noopener noreferrer" className="mx-2">
      <img src={whatsapp} alt="WhatsApp" className="w-9 h-8" />
    </a>
  </div>
</div>
      </div>
    </section>
  );
}
