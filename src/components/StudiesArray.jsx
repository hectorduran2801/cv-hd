import { useState, useEffect } from "react";

const StudiesArray = () => {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    fetch("/content/Studies.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setStudies(parseStudies(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return studies;
};

const parseStudies = (mdContent) => {
  const studies = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const institution = line.substr(3).trim();
      const positionLine = lines[++i]
        .substr(2)
        .split("|")
        .map((s) => s.trim());
      const position = positionLine[0].slice(1, -1);
      const duration = positionLine[1].trim();
      const imageLine = lines[++i];
      const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
      const listItems = [];

      while (lines[++i] && !lines[i].startsWith("- List Items:")) {}
      while (lines[++i] && lines[i].startsWith("  - ")) {
        listItems.push(lines[i].substr(3));
      }

      studies.push({
        image,
        institution,
        position,
        duration,
        listItems,
      });
    }
  }

  return studies;
};



export default StudiesArray;
