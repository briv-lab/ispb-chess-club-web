import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";

const file = new URL("../dist/index.html", import.meta.url);
const template = await readFile(file, "utf8");
if (!template.includes('<div id="root"></div>'))
  throw new Error("Root placeholder missing");
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ispbchessclub.pages.dev/#club",
      name: "ISPB Chess Club",
      url: "https://ispbchessclub.pages.dev/",
      logo: "https://ispbchessclub.pages.dev/icon-512.png",
      email: "ispbchessclub@gmail.com",
      foundingDate: "2022",
      sameAs: ["https://www.instagram.com/ispbchessclub/"],
      description:
        "Association étudiante d’échecs de l’ISPB à l’université Claude Bernard Lyon 1.",
    },
    {
      "@type": "WebSite",
      "@id": "https://ispbchessclub.pages.dev/#website",
      url: "https://ispbchessclub.pages.dev/",
      name: "ISPB Chess Club",
      inLanguage: "fr-FR",
      publisher: { "@id": "https://ispbchessclub.pages.dev/#club" },
    },
  ],
};
const jsonLD = JSON.stringify(structuredData).replaceAll("<", "\\u003c");
const html = template
  .replace(
    "</head>",
    `<script type="application/ld+json">${jsonLD}</script></head>`,
  )
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
await writeFile(file, html);
await rm(new URL("../.prerender/", import.meta.url), {
  recursive: true,
  force: true,
});
console.log("Static HTML generated with the club content and FAQ.");
