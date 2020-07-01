import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header-blog-index-page"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Header />
      <Layout>
        <SEO title="Home" />
        <div className="max-w-screen-md mx-auto p-6 mt-20 min-h-screen">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title
            return (
              <article key={node.id} className="mb-10">
                <header>
                  <h3 className="text-3xl text-blue-300 font-bold">
                    <Link to={node.frontmatter.slug}>{title}</Link>
                  </h3>
                  <p className="text-gray-500 mt-3">
                    <span className="text-gray-600">Updated On</span>{" "}
                    <span>{node.frontmatter.updatedOn}</span>
                  </p>
                </header>

                <section className="mt-4">
                  <p
                    className="text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___updatedOn], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            updatedOn(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`
