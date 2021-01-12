import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import styled from "styled-components"

const Header = styled.header`
  margin-bottom: 1.45rem;
  margin: 15px auto;
  width: 800px;
`

const H1 = styled.h1`
  margin-bottom: 0px;
  // top: "15px";
  // width: "457px";
  // height: "40px";
  // position: "relative";
  // left: "130px";
`

const Flex = styled.div`
  display: flex;
  & > * {
    flex-grow: 1;
  }
`

const FlexCol = styled(Flex)`
  display: flex;
  flex-direction: column;
  & > * {
    flex-grow: 1;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const NavBarLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: #626262;
  &:hover {
    color: #4287f5;
  }
`

const IHeader = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sycratext: file(relativePath: { eq: "sycratext.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hrt: file(relativePath: { eq: "hrt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const navBar = [
    {
      to: "/about",
      label: "ABOUT",
    },
    {
      to: "/gallery",
      label: "GALLERY",
      draft: true,
    },
    {
      to: "https://www.youtube.com/user/Sycra",
      label: "YOUTUBE",
    },
    {
      to: "/resources",
      label: "RESOURCES",
    },
  ]

  return (
    <Header>
      <Container>
        <Flex>
          <Link to="/" style={{ flexGrow: 0 }}>
            <Image
              fluid={data.logo.childImageSharp.fluid}
              style={{
                width: "100px",
                height: "100px",
              }}
              placeholderStyle={{ visibility: "hidden" }}
            />
          </Link>
          <FlexCol>
            <H1>
              <Image
                fluid={data.sycratext.childImageSharp.fluid}
                loading="eager"
                style={{
                  width: "457px",
                  height: "40px",
                }}
                placeholderStyle={{ visibility: "hidden" }}
              />
            </H1>
            <Image
              fluid={data.hrt.childImageSharp.fluid}
              loading="eager"
              style={{
                border: "none",
                height: "1px",
                maxHeight: "1px",
                marginBottom: ".5rem",
              }}
              placeholderStyle={{ visibility: "hidden" }}
            />
            <Nav>
              {navBar.map(item =>
                item.draft ? (
                  <NavBarLink>{item.label}</NavBarLink>
                ) : (
                  <NavBarLink to={item.to}>{item.label}</NavBarLink>
                )
              )}
            </Nav>
          </FlexCol>
        </Flex>
      </Container>
    </Header>
  )
}

IHeader.propTypes = {
  siteTitle: PropTypes.string,
}

IHeader.defaultProps = {
  siteTitle: ``,
}

export default IHeader
