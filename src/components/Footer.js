import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPatreon,
  faTwitter,
  faFacebook,
  faDeviantart,
} from "@fortawesome/free-brands-svg-icons"

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const IconLink = styled(Link)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
const getIcon = key => {
  switch (key) {
    case "patreon":
      return faPatreon
    case "twitter":
      return faTwitter
    case "facebook":
      return faFacebook
    case "deviantart":
      return faDeviantart
  }
}

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      hrt: file(relativePath: { eq: "hrt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      site {
        siteMetadata {
          footer {
            to
            icon
          }
        }
      }
    }
  `)

  return (
    <footer
      style={{
        marginTop: `1rem`,
      }}
    >
      <Flex>
        {data.site.siteMetadata.footer.map(ele => (
          <IconLink to={ele.to}>
            <FontAwesomeIcon icon={getIcon(ele.icon)} color={"#626262"} />
          </IconLink>
        ))}
      </Flex>
      <Image
        fluid={data.hrt.childImageSharp.fluid}
        loading="eager"
        style={{
          border: "none",
          height: "1px",
          maxHeight: "1px",
        }}
        placeholderStyle={{ visibility: "hidden" }}
      />
      <Flex>
        <small>©2021 Sycra Yasin. All rights reserved.</small>
      </Flex>
    </footer>
  )
}

export default Footer
