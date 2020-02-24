import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import LinkButton from './LinkButton'

const StyledLink = styled(LinkButton)`
  padding: 0.5rem 0.5rem;
  text-decoration: none;
  line-height: 1rem;
  border-radius: 0.2rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.text.concat('CC')};
  font-weight: bold;

  &:hover,
  &:active,
  &:focus {
    filter: none;
    background-color: ${({ theme }) => theme.colors.primary.concat('DF')};
    border-color: ${({ theme }) => theme.colors.primary};
    transition: all 200ms;
    color: ${({ theme }) => theme.colors.background};
  }
`

const Button = ({ anchor, text }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <StyledLink to={anchor} theme={theme}>
      <b id="button-text">{text}</b>
    </StyledLink>
  )
}

Button.defaultProps = {
  anchor: '#',
  text: 'Back',
}

Button.propTypes = {
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Button
