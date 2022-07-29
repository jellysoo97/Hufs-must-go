import styled from "styled-components"
import "../../fonts/fonts.css"

// Landing
export const LandingConDiv = styled.div`
  width: 512px;
  flex: 1;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
// List, Item
export const ResItemConDiv = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
`
export const ResItemAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 10px;
`
export const ResItemDiv = styled.div`
  width: 355px;
  height: 30px;
  margin: 0 auto;
  font-family: "BMHANNAAir", sans-serif;
  padding: 10px 0 10px 30px;
  display: flex;
  align-items: center;
  :hover {
    border: 2px solid #8c8c8c;
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s all ease-in;
    ${ResItemAdd} {
      display: initial;
    }
  }
  position: relative;
`
export const ResItemIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ResItemName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 10px;
`
export const ResItemCate = styled.div`
  color: rgb(21, 47, 84);
`
// Pagination
export const ResPagDiv = styled.div`
  flex: 1;
  position: absolute;
`
export const ResPagNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 25px;
`
export const ResPagBtn = styled.button`
  border: none;
  border-radius: 8px;
  background: inherit;
  font-size: 1.1rem;
  padding: 10px;
  margin: 0;
  :hover {
    background: rgb(21, 47, 84);
    color: rgb(197, 172, 109);
    font-weight: bold;
    cursor: pointer;
  }
  &[disabled] {
    cursor: revert;
  }
  &[aria-current] {
    background: rgb(21, 47, 84);
    color: rgb(197, 172, 109);
    font-weight: bold;
    cursor: revert;
  }
`
