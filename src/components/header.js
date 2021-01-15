import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./Image"
import styled from "styled-components"

const Header = styled.header`
  margin-bottom: 1.45rem;
  margin: 15px auto;
  width: 800px;
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
  @media screen and (max-width: 724px) {
    display: none
  },
`

const INavBarButton = styled.button`
  @media screen and (min-width: 724px) {
    display: none
  },
`

const IHeader = ({ setMobileMenuOpen }) => {
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

      site {
        siteMetadata {
          navbar {
            to
            label
          }
        }
      }
    }
  `)

  const { navbar } = data.site.siteMetadata

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
            <div
              style={{
                paddingTop: ".5rem",
              }}
            >
              <Link to="/" style={{ flexGrow: 0 }}>
                <Image
                  fluid={data.sycratext.childImageSharp.fluid}
                  loading="eager"
                  style={{
                    width: "30%",
                  }}
                  placeholderStyle={{ visibility: "hidden" }}
                />
              </Link>
            </div>

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
              {navbar.map(item =>
                item.draft ? (
                  <NavBarLink>{item.label}</NavBarLink>
                ) : (
                  <NavBarLink to={item.to}>{item.label}</NavBarLink>
                )
              )}
              <INavBarButton onClick={setMobileMenuOpen}>
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </INavBarButton>
            </Nav>
          </FlexCol>
        </Flex>
      </Container>
      <h1 style={{ visibility: "hidden", margin: "0px", fontSize: "1px" }}>
        Sycra
      </h1>
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
