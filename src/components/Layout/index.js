import React from "react";

import GlobalStyle from "../GlobalStyles";
import Nav from "../Nav";
import Footer from "../Footer";

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
      {/* <Footer /> */}
    </>
  )
}