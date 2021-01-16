import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  return (
    <Layout title={data.markdownRemark.title}>
      <SEO title="Concept art, Caricatures, Life Drawing" />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          email
        }
      }
    }

    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        layout
        description
      }
      html
    }
  }
`

export default Page
