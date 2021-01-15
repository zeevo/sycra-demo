import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Page = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Art of Sycra Yasin - Concept art, Caricatures, Life Drawing" />
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
