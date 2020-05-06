import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import SocialLinks from "../components/social-links"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col">
      <div className="px-8">
        <p className="text-5xl font-semibold text-purple-800">
          Hi, I'm Prajwal :)
        </p>
        <p className="text-3xl text-gray-600 mt-5 tracking-tighter">
          I'm a programmer, student, and software designer.
        </p>
        <div className="block mt-10">
          <SocialLinks maxWidth="3rem" />
        </div>
      </div>
      <div className="mt-20 px-8">
        <h1 className="font-bold uppercase tracking-wider text-gray-700">My Projects</h1>
        <Projects className="block mt-20" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
