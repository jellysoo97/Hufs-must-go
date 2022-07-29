import React from "react"
import { Link } from "react-router-dom"

import { HeaderDiv, HeaderTitleDiv } from "./StyledComponents"

function Header() {
  return (
    <HeaderDiv>
      <HeaderTitleDiv>
        <Link to="/">외대 맛집 리스트</Link>
      </HeaderTitleDiv>
    </HeaderDiv>
  )
}

export default Header
