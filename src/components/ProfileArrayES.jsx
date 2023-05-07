import { useState, useEffect } from "react";

const parseProfileES = (mdContent) => {
  const profileES = {
    siteName: "",
    headerName: "",
    headerRole: "",
    about: "",
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    phone: "",
    logo: "",
  };

  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const section = line.substr(3).trim();

      switch (section) {
        case "Encabezamiento":
          profileES.headerName = lines[++i].substr(2).trim();
          profileES.headerRole = lines[++i].substr(2).trim();
          break;
        case "SobreMi":
          profileES.about = lines[++i].trim();
          break;
        case "Contacto":
          profileES.contact = lines[++i].trim();
          const contactLinks = ["LinkedIn", "GitHub", "Email", "Phone"];
          for (const link of contactLinks) {
            const linkLine = lines[++i].substr(2).trim();
            if (linkLine.startsWith(link)) {
              profileES[link.toLowerCase()] = linkLine.split(": ")[1].trim();
            }
          }
          break;
        case "Logo":
          profileES.logo = lines[++i].substr(2).trim();
          break;
        default:
          // do nothing
          break;
      }
    }
  }

  return profileES;
};

const ProfileArrayES = () => {
  const [profileES, setProfileES] = useState({
    siteName: "",
    headerName: "",
    headerRole: "",
    about: "",
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    phone: "",
    logo: "",
  });

  useEffect(() => {
    fetch("/content/ProfileES.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        const parsedProfileES = parseProfileES(mdContent);
        setProfileES(parsedProfileES);
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return profileES;
};

export default ProfileArrayES;
