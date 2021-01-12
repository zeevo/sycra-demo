import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="The Art of Sycra Yasin - Concept art, Caricatures, Life Drawing" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          fluid={props.data.hero.childImageSharp.fluid}
          style={{
            borderRadius: "15px",
            boxShadow: "5px 5px 5px #888",
            objectFit: "cover",
            width: "346px",
            height: "532px",
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
