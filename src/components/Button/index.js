import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  margin: 10px;
  width: 13.5rem;
  height: 3.5rem;
  background: ${(props) => props.background || '#ffce06'};
  border-radius: 5px;
  font: 600 1.4em 'Andada Pro', sans-serif;
  transition: .3s;
  border: none;
  cursor: pointer;
  text-align: center;

  a {
    color: #25294c;
    text-decoration: none;
    z-index: 1;
  }

  &:hover ${(props) => props.hover === undefined ? '{ margin: 6px; width: 14rem; height: 4rem; }' : '{}'}
`;

export default function Btn(props) {
  return (
    <Button
      background={props.background}
      hover={props.hover}
    >
      <a href="">{props.children}</a>
    </Button>
  )
}