import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faYoutube,
  faPython,
} from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"

const data = [
  {
    title: "Conway's Game of Life with Rust and Web Assembly",
    description: `A visualization of Conway's Game of Life built with Rust
    and visualized on the browser with Web Assembly.`,
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/wasm-game-of-life",
      },
    ],
    tags: ["Front-End Web", "Algorithms"],
    technologies: ["Rust", "Web Assembly"],
  },

  {
    title: "Distributed Microblogging Website Engine",
    description: `A distributed engine for a twitter-like application with Phoenix and Elixir.
    And a simulations of its performance with varying number of concurrent connections using
    concurrent actors as independent nodes`,
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/distributed-twitter-engine",
      },
      {
        icon: faYoutube,
        text: "Demo",
        href: "https://youtu.be/96pKx_2NXIk",
      },
    ],
    tags: [
      "Software Engineering",
      "Full Stack Web Development",
      "Distributed Computing",
    ],
    technologies: ["Elixir", "Phoenix", "Vue.js"],
  },

  {
    title: "Human Resources Analytics",
    description: `An analysis of the Human Resources dataset from Kaggle, using statistical modelling
      to verify its authenticity, and hypothesis testing to determine the correlation between
      the metrics measured. Built a decision tree classifier to predict which employees would
      leave with an accuracy of 96%`,
    links: [
      {
        icon: faPython,
        text: "IPython Notebook",
        href:
          "https://nbviewer.jupyter.org/github/prajwaldp/kaggle-human-resource-analytics/blob/master/HR-analytics.ipynb",
      },
    ],
    tags: ["Machine Learning", "Data Analysis"],
    technologies: ["Pandas", "scikit-learn", "Matplotlib"],
  },

  {
    title: "Software Fault Prediction with Neural Networks",
    description: `A neural network with Keras/TensorFlow that used object-oriented
    metrics to predict software faults with a 10-fold cross-validation accuracy of
    84.36% and a ROC AUC of 0.8`,

    links: [
      {
        icon: faGithub,
        text: "Source",
        href:
          "https://github.com/prajwaldp/software-fault-prediction-using-ann",
      },
      {
        icon: faFileAlt,
        text: "Paper",
        href:
          "https://github.com/prajwaldp/software-fault-prediction-using-ann/blob/master/paper/Software-Fault-Prediction-using-Artificial-Neural-Networks.pdf",
      },
    ],
    tags: ["Machine Learning"],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
  },

  {
    title: "Gossip Protocol Simulation",
    description: `Implementaions and simulation of the Gossip Protocol for data dissemination
    in a distributed system. Also implemented distributed averaging (push-sum) using
    the Gossip protocol`,
    links: [
      {
        icon: faGithub,
        text: "Gossip and Push-Sum Source",
        href: "https://github.com/prajwaldp/gossip-push-sum",
      },
    ],
    tags: ["Distributed Computing"],
    technologies: ["Elixir"],
  },

  {
    title: "Distributed Hash Table",
    description: `Implementation of a distributed hash table on a
    peer-to-peer overlay network using Tapestry Routing, and a simulation of its
    performance using concurrent actors as independent nodes`,

    links: [
      {
        icon: faGithub,
        text: "Tapestry DHT Source",
        href: "https://github.com/prajwaldp/tapestry-dht-simulation",
      },
    ],

    tags: ["Distributed Computing"],
    technologies: ["Elixir"],
  },

  {
    title: "Terrain Mapping with Swarm Intelligence",
    description: `Built 3 robots that used swam intelligence principles
    such as swarm dispersion to cooperatively generate the map of an unknown environment
    using the a Computer Vision Simultaneous Localization and Mapping algorithm called
    ORB-SLAM2`,

    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/mcswarm",
      },
      {
        icon: faFileAlt,
        text: "Report",
        href: "https://github.com/prajwaldp/mcswarm/blob/master/report.pdf",
      },
    ],
    tags: ["Hardware", "Swarm Intelligence", "Reinforcement Learning"],
    technologies: ["C++", "ORB-SLAM2", "Arduino", "Python"],
  },

  {
    title: "Social Networking Web Application for Storyhoot",
    description:
      "A Ruby on Rails social media web application to create and share GIFs.",
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/storyhoot",
      },
    ],
    tags: ["Full-Stack Web Development"],
    technologies: ["Ruby on Rails", "ElasticSearch", "PostgreSQL"],
  },

  {
    title: "Puzzle Game with C++ and SFML",
    description: `A Simple Puzzle game based on the popular
    "Thomas was Alone" game on Stream`,
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/sfml-cpp-game-programming",
      },
    ],
    tags: ["Game Programming"],
    technologies: ["C++", "SFML"],
  },

  {
    title: "Snake Game with Rust",
    description: `The classic Snake game built with Rust on the Piston Game Engine`,
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/rust-snake-game",
      },
    ],
    tags: ["Game Programming"],
    technologies: ["Rust"],
  },

  {
    title: "Text-Analysis of Transcripts of TED Talks",
    description: `Text minining, feature-extraction, topic modelling, and anmed-entity recognition
    on transrcipts of TED talks to identify topic trends over 25 years`,
    links: [
      {
        icon: faGithub,
        text: "Source",
        href: "https://github.com/prajwaldp/ted-talks-transcripts-analysis",
      },
    ],
    tags: ["Data Science", "Natural Language Processing"],
    technologies: ["Python"],
  },

  // {
  //   title: "Air-Pollution Prediction with LSTMs",
  //   description: `A Long Short Term Memory model to predict the pollution levels for the next hour
  //   from the weather conditions and pollution levels in the current hour`,
  //   links: [
  //     {
  //       icon: faGithub,
  //       text: "Source",
  //       href: "https://github.com/prajwaldp/lstm-pollution-prediction",
  //     },
  //   ],
  //   tags: ["Data Science", "Machine Learning", "Time Series"],
  //   technologies: ["Python"],
  // },

  // {
  //   title: "Employee Count using Predictive Analytics",
  //   description: `Exploratory Data Analysis to predict the number of employees in a firm`,
  //   links: [
  //     {
  //       icon: faGithub,
  //       text: "Source",
  //       href: "https://github.com/prajwaldp/company-employee-analysis",
  //     },
  //   ],
  //   tags: ["Exploratory Data Analysis"],
  //   technologies: ["Python"],
  // },
]

const ProjectCard = ({ projectData }) => {
  let links = projectData.links.map((e, i) => (
    <span key={i} className="inline-block ml-3 text-lg text-blue-500">
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
    <div className="w-1/3 px-2 mb-5">
      <div className="flex flex-col justify-between bg-blue-900 rounded-sm mt-2 shadow text-gray-300 p-2 h-full">
        <div>
          <h3 className="text-gray-300 text-xl p-2">{projectData.title}</h3>
          <div className="p-2 text-gray-500 text-sm">
            {projectData.description}
          </div>
        </div>
        <div>
          <div className="mt-5 text-blue-500 text-xs uppercase tracking-wider">
            {technologies}
          </div>

          <div className="mt-2 text-blue-500 tracking-wider">{links}</div>
        </div>
      </div>
    </div>
  )
}

const OtherProjects = () => {
  let projectCards = data.map((p, i) => {
    return <ProjectCard projectData={p} key={i} />
  })

  return <div className="flex flex-row flex-wrap mt-10">{projectCards}</div>
}

export default OtherProjects
