import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const data = [
  {
    featured: true,
    title: "The Ambient Game Engine",
    description: `An engine developed from scratch to build cross-platform 2D and 3D
    applications and games, with a powerful Rendering API, an Entity-Component System,
    a Physics Engine for Collision Detection, and a Network Manager for multiplayer support.`,

    image: "2d-platformer.gif",

    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/ambient-game-engine",
      },
    ],

    technologies: ["C++", "OpenGL"],
  },

  {
    featured: true,
    title: "The Blockchain Algorithm (in Rust)",
    description: `Implementation of the blockchain algorithm from the Bitcoin
    whitepaper, and simulation through concurrent independent actors.`,

    image: "blockchain.png",

    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/blockchain-rust",
      },
    ],

    technologies: ["Rust"],
  },

  {
    featured: true,
    title:
      "Colorization of Grayscale Images using Generative Adversarial Networks",
    description: `A Generative Adversarial Neural Network model based on the Pix2Pix model,
    trained on the CIFAR-10 image dataset to generate the colorized version of a grayscale image.`,

    image: "gan-colorizer.png",

    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/gan-image-colorizer",
      },
    ],

    technologies: ["Python", "Tensorflow"],
  },
]

const ProjectCard = ({ projectData, idx }) => {
  let links = projectData.links.map((e, i) => (
    <span key={i} className="inline-block ml-3 text-2xl text-blue-500">
      <a href={e.href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={e.icon} />
      </a>
    </span>
  ))

  let technologies = projectData.technologies.map((e, i) => (
    <span
      key={i}
      className="inline-block text-blue-500 ml-3 text-xs uppercase tracking-wider"
    >
      {e}
    </span>
  ))

  return (
    <div
      className={`w-full mt-10 p-3 shadow text-gray-400 flex flex-row rounded ${
        idx % 2 == 1 ? "flex-row-reverse" : ""
      }`}
    >
      {projectData.image && (
        <div className="w-1/2 px-2">
          <img src={projectData.image} className="w-full rounded-lg" />
        </div>
      )}

      <div className="w-1/2 px-2">
        {projectData.featured && (
          <p className="text-green-500 uppercase tracking-wide text-xs">
            Featured
          </p>
        )}
        <h3 className="text-gray-300 text-2xl p-2">{projectData.title}</h3>

        <div className="bg-blue-900 p-3 rounded-lg mt-2 shadow">
          {projectData.description}
        </div>

        <div className="mt-5 text-blue-500 text-xs uppercase tracking-wider text-right">
          {technologies} {links}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  let projectCards = data.map((p, i) => {
    return <ProjectCard projectData={p} idx={i} key={i} />
  })

  return <div className="flex flex-col">{projectCards}</div>
}

export default Projects
