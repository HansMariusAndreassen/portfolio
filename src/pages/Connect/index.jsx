import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Connect = () => {
  const { t } = useTranslation();

  const links = [
    {
      href: "https://github.com/spookyrumble",
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <FaTwitter className="w-6 h-6" />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/hans-marius-andreassen/",
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:hmandressen82@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {t("connectWithMe")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center p-4 border border-gray-200 bg-slateBlue dark:bg-opacity-30 bg-opacity-10 rounded-lg shadow hover:bg-slateBlue hover:text-white hover:rotate-6 transition"
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
          >
            {link.icon}
            <span className="ml-4 text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
