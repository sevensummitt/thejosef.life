import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import { GlobalStyle } from './styles/global.css'
import { Container, StyledLayout } from './styles/Layout.css'

const Layout = ({ children, isBlog }) => (
  <div>
    {/* {console.log(props)} */}
    {console.log(typeof window !== 'undefined' && window.innerWidth >= 760)}
    {console.log(isBlog)}
    <GlobalStyle />
    <StyledLayout>
      <div className="content">
        <Header siteTitle="josef.aidt">
          {typeof window !== 'undefined' && window.innerWidth >= 760 ? <Nav /> : ''}
        </Header>
        <Container>{children}</Container>
      </div>
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <Footer>
          <Nav />
        </Footer>
      ) : isBlog ? (
        <Footer noOffset />
      ) : (
        <Footer>
          <Nav />
        </Footer>
      )}

      {/* <Footer /> */}
    </StyledLayout>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
}

export default Layout
