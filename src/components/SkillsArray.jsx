import { useState, useEffect } from "react";

const parseSkills = (mdContent) => {
  const skills = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();
      const description = lines[++i].trim();
      const tags = lines[++i].split(":")[1].trim();
      const badges = [];

      while (lines[++i] && !lines[i].startsWith("- Badges:")) {}
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const badgeLine = lines[i].substr(4).split("[");
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split("]")[0].trim();
        badges.push({ text: badgeName, colorScheme: badgeColor });
      }

      skills.push({
        name,
        description,
        tags: [tags],
        badges,
      });
    }
  }

  return skills;
};

const SkillsArray = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/content/Skills.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setSkills(parseSkills(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return skills;
};

export default SkillsArray;
