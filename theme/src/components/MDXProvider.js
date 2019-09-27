/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import Quote from './styles/Quote'
import Line from './styles/Line'
import Icon from './Icon'
import { Title } from './styles/Titles.css'

const shortcodes = {
  Quote,
  Line,
  Link,
  Icon,
  Title,
}

const components = {
  img: props => <img style={{ borderRadius: '2rem' }} {...props} />,
  blockquote: Quote,
  ...shortcodes,
}

const MdxProvider = props => <MDXProvider components={components}>{props.children}</MDXProvider>

export default MdxProvider
