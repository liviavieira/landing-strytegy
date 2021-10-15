import React from "react";
import styled from "styled-components";

import GlobalStyle from "../GlobalStyles";
import Nav from "../Nav";

export default function Layout({
  children,
  navImg,
  btnBlog,
  btnFaq,
  btnEnter,
  btnLang
}) {
  return (
    <>
      <GlobalStyle />
      <Nav
        navImg={navImg}
        btnBlog={btnBlog}
        btnFaq={btnFaq}
        btnEnter={btnEnter}
        btnLang={btnLang}
      />
      {children}
    </>
  )
}