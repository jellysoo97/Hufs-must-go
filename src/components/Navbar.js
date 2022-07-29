import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { NavConDiv, NavItemDiv } from "./StyledComponents"

function Navbar() {
  const [active, setActive] = useState(1)

  return (
    <NavConDiv>
      <Link to="/" onClick={() => setActive(1)}>
        <NavItemDiv active={active === 1 ? true : false}>전체</NavItemDiv>
      </Link>
      <Link to="/kr" onClick={() => setActive(2)}>
        <NavItemDiv active={active === 2 ? true : false}>한식</NavItemDiv>
      </Link>
      <Link to="/cn" onClick={() => setActive(3)}>
        <NavItemDiv active={active === 3 ? true : false}>중식</NavItemDiv>
      </Link>
      <Link to="/jp" onClick={() => setActive(4)}>
        <NavItemDiv active={active === 4 ? true : false}>일식</NavItemDiv>
      </Link>
      <Link to="/west" onClick={() => setActive(5)}>
        <NavItemDiv active={active === 5 ? true : false}>양식</NavItemDiv>
      </Link>
      <Link to="/cafe" onClick={() => setActive(6)}>
        <NavItemDiv active={active === 6 ? true : false}>카페</NavItemDiv>
      </Link>
      <Link to="/mypage" onClick={() => setActive(7)}>
        <NavItemDiv active={active === 7 ? true : false}>마이페이지</NavItemDiv>
      </Link>
    </NavConDiv>
  )
}

export default Navbar
