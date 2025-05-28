import react from "../assets/svgs/react.svg";
import nextjs from "../assets/svgs/nextjs.svg";
import js from "../assets/svgs/js.svg";
import python from "../assets/svgs/python.svg";
import nodejs from "../assets/svgs/nodejs.svg";
import tailwindcss from "../assets/svgs/tailwindcss.svg";
import fastapi from "../assets/svgs/fastapi.svg";
import express from "../assets/svgs/express.svg";
import mongodb from "../assets/svgs/mongodb.svg";
import docker from "../assets/svgs/docker.svg";
import postgres from "../assets/svgs/postgres.svg";

const skills = [
    {
        name: "React",
        image: react,
        link: "https://react.dev/"
    },
    {
        name: "Next.js",
        image: nextjs,
        link: "https://nextjs.org/"
    },
    {
        name: "JavaScript",
        image: js,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "Python",
        image: python,
        link: "https://www.python.org/"
    },
    {
        name: "Node.js",
        image: nodejs,
        link: "https://nodejs.org/"
    },
    {
        name: "Tailwind CSS",
        image: tailwindcss,
        link: "https://tailwindcss.com/"
    },
    {
        name: "FastAPI",
        image: fastapi,
        link: "https://fastapi.tiangolo.com/"
    },
    {
        name: "Express JS",
        image: express,
        link: "https://expressjs.com/"
    },
    {
        name: "MongoDB",
        image: mongodb,
        link: "https://www.mongodb.com/"
    },
    {
        name: "Docker",
        image: docker,
        link: "https://www.docker.com/"
    },
    {
        name: "PostgreSQL",
        image: postgres,
        link: "https://www.postgresql.org/"
    }
    // Add other skills here if needed, e.g.:
    // {
    //     name: "Git",
    //     image: git,
    //     link: "https://git-scm.com/"
    // },
    // {
    //     name: "HTML",
    //     image: html,
    //     link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    // },
    // {
    //     name: "CSS",
    //     image: css,
    //     link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    // }
];

export default skills;