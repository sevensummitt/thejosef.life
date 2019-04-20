import styled from 'styled-components'
import theme from '../styles/_theme'

export const StyledNav = styled.div`
  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  margin: auto;
  a {
    padding: 0 0.5rem;
  }
  @media (min-width: 760px) {
    a.active,
    a.active:hover {
      filter: brightness(70%);
      padding-bottom: 1rem;
      border-bottom: 0;
    }
    a:hover {
      /* filter: brightness(80%); */
      padding-bottom: 1rem;
      border-bottom: 1px solid;
      transition: ease 300ms;
    }
  }
  a:active {
    filter: brightness(90%);
    transition: ease 100ms;
    border-bottom: 1px solid;
  }
  .screen {
    margin: 0 auto;
    z-index: 1;
    box-shadow: 1px black;
  }

  @media only screen and (max-width: 760px) {
    height: 9vh;
    display: flex;
    /* align-items: center;
    justify-content: stretch; */

    /* box-shadow: 0 0 40px 0 ${theme.almostblack}; */
    box-shadow: 0px 0px 40px -10px ${theme.almostblack};
    text-align: center;
    font-size: 1.2rem;
    min-height: 7vh;
    z-index: 10;
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    a {
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a:active {
      border-bottom: none;
    }
  }
`