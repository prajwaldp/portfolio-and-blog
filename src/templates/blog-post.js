import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header-blog-index-page"

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Header />
      <Layout>
        <SEO title="Home" />
        <div className="max-w-screen-md mx-auto p-6 mt-20 min-h-screen">
          <Link to="blog" className="text-blue-500 my-4">
            <FontAwesomeIcon icon={faAngleLeft} /> Back to Index
          </Link>
          <h1 className="text-3xl text-gray-200">{frontmatter.title}</h1>
          <h2 className="text-sm text-gray-600 my-10">
            Updated on {frontmatter.updatedOn}
          </h2>
          <div
            className="blog-article text-gray-300"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link to="blog" className="text-blue-500 mt-10">
            <FontAwesomeIcon icon={faAngleLeft} /> Back to Index
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        updatedOn(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Template
