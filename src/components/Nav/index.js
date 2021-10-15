import React from "react";
import * as S from "./styles";

import Button from "../Button"

export default function Nav({
  navImg,
  btnBlog,
  btnFaq,
  btnEnter,
  btnLang,
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <a href="">
          <S.Logo src={navImg} alt="Strytegy Logo" />
        </a>
        <S.Menu>
          <S.Link href="" >{btnBlog}</S.Link>
          <S.Link href="" >{btnFaq}</S.Link>
          <Button
            background='#ffeb97'
            hover={false}
          >
            {btnEnter}
          </Button>
          <S.LangBtn>{btnLang}</S.LangBtn>
        </S.Menu>
      </S.Wrapper>
    </S.Container>
  )
}