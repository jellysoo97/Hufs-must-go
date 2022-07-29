import styled, { css } from "styled-components"
import "../fonts/fonts.css"

// Main
export const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 110, 122, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainDiv = styled.div`
  width: 512px;
  min-height: 80vh;
  background-color: rgb(233, 233, 228);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  font-family: "BMHANNAPro", sans-serif;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`
// Header
export const HeaderDiv = styled.div`
  width: 512px;
  height: auto;
  background-color: rgb(218, 218, 211);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`
export const HeaderTitleDiv = styled.div`
  padding: 20px;
  font-size: 40px;
`
// Navbar
export const NavConDiv = styled.div`
  width: 512px;
  height: auto;
  background-color: rgb(201, 169, 112);
  padding: 10px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const NavItemDiv = styled.div`
  font-family: "BMHANNAAir", sans-serif;
  font-size: 1.2rem;
  :hover {
    color: rgba(20, 110, 122, 0.8);
    font-weight: bold;
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      color: rgba(20, 110, 122, 0.8);
      font-weight: bold;
      cursor: pointer;
    `}
`
