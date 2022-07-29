import React from "react"
import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ResList from "./components/Res/ResList"
import MyPage from "./components/MyPage"

import { MainWrap, MainDiv } from "./components/StyledComponents"
import { LandingConDiv } from "./components/Res/ResSC"
import { ResProvider } from "./components/Res/ResProvider"

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    border-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrap>
        <MainDiv>
          <Header />
          <Navbar />
          <LandingConDiv>
            <Routes>
              <Route path="/" element={<ResList all={"all"} />} />
              <Route path="/:cate" element={<ResList />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </LandingConDiv>
        </MainDiv>
      </MainWrap>
    </>
  )
}

export default App
