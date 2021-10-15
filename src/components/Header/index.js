import React from "react";
import * as S from "./styles";

import Button from "../Button"

export default function Header({
  title,
  subtitle,
  btnStart,
  headerImg
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <Button>{btnStart}</Button>
        </S.Content>
        <S.Illustration src={headerImg} alt="Ilustration" />
      </S.Wrapper>
    </S.Container>
  )
}