import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import OtherProjects from "../components/other-projects"
import Header from "../components/header-home-page"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

library.add(faLinkedin, faGithub)

const skills = [
  {
    header: "Programming Languages",
    list: ["C++", "Python", "JavaScript/TypeScript", "Rust", "Ruby", "Elixir"],
  },

  {
    header: "Front-End Web Frameworks",
    list: ["React", "Vue.js"],
  },

  {
    header: "Back-End Web Frameworks",
    list: ["Flask", "Ruby on Rails"],
  },

  {
    header: "Machine Learning/Math/Data Analytics",
    list: ["NumPy", "TensorFlow", "Pandas"],
  },

  {
    header: "Databases",
    list: ["PostgreSQL", "MongoDB", "Firebase"],
  },

  {
    header: "DevOps",
    list: ["Linux", "Docker"],
  },
]

const IndexPage = () => {
  const Skills = skills.map((s, key) => {
    return (
      <div key={key} className="mb-3">
        <p className="font-semibold">{s.header}</p>

        <p className="text-blue-400">{s.list.join(", ")}</p>
      </div>
    )
  })

  return (
    <div>
      <Header />

      <Layout>
        <SEO title="Home" />

        <div className="flex flex-col">
          <div className="px-20 pt-20">
            <p className="text-md font-semibold text-green-500 mb-1">
              Hi, my name is
            </p>
            <p className="text-6xl font-bold text-gray-300">
              Prajwal D Prakash
            </p>
            <p className="text-3xl text-gray-500 mt-5">
              I'm a programmer, student, and software designer.
            </p>
            <p className="text-lg text-gray-600 mt-5">
              Connect with me on{" "}
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/prajwal-d-prakash/"
              >
                LinkedIn
              </a>
              ,
            </p>
            <p className="text-lg text-gray-600 my-1">
              Follow my work on{" "}
              <a className="text-blue-500" href="https://github.com/prajwaldp">
                GitHub
              </a>
              ,
            </p>
            <p className="text-lg text-gray-600 my-1">
              And read my blog right{" "}
              <Link className="text-blue-500" to="./blog">
                here
              </Link>
              .
            </p>
          </div>

          <div className="mt-20 border-t-4 border-gray-800 pt-5 flex">
            <div class="p-5 w-1/2 h-full align-middle">
              <h1 className="font-bold uppercase tracking-wider text-gray-500">
                About Me
              </h1>
              <p className="text-gray-500 mt-10">
                I'm a Master's in Computer Science student at the University of
                Florida. Before coming to the US, I've worked at SAP Labs, a
                prestigious Fortune 500 company.
              </p>

              <p className="text-gray-500 mt-10">
                I like designing and building software. I first started writing
                applications for the Internet with Ruby on Rails in 2013. Since
                then, I have developed numerous web applications using different
                patterns and architectures that are still in use today.
              </p>

              <p className="text-gray-500 mt-10">
                Recently, I've been into low-level programming in Rust and C++.
                Building my game engine has taught me more software development
                than I've ever known before. I also very fond of Math and have
                played around with a few Machine Learning projects.
              </p>
            </div>

            <div class="p-5 w-1/2 h-full align-middle">
              <h1 className="font-bold uppercase tracking-wider text-gray-500">
                My Skills
              </h1>

              <div className="text-gray-500 mt-10">{Skills}</div>
            </div>
          </div>

          <div className="mt-20 px-20">
            <h1 className="text-center font-bold uppercase tracking-wider text-gray-500 border-t-4 border-gray-800 pt-5">
              What I'm working on:
            </h1>
            <Projects className="block mt-20" />
          </div>

          <div className="mt-20 px-20">
            <h1 className="text-center font-bold uppercase tracking-wider text-gray-500 border-t-4 border-gray-800 pt-5">
              Other Projects
            </h1>
            <OtherProjects className="block mt-20" />
          </div>

          <div className="mt-20 px-20">
            <h1 className="text-center font-bold uppercase tracking-wider text-gray-500 border-t-4 border-gray-800 pt-5">
              Get in Touch
            </h1>

            <div class="flex flex-row justify-around text-3xl text-blue-500 p-10">
              <a href="https://github.com/prajwaldp">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="https://www.linkedin.com/in/prajwal-d-prakash/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a href="https://www.instagram.com/prajwaldp/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
