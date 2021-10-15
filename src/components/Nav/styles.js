import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  box-shadow: 0 0 15px #ddd;
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4rem 0 7.2rem;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38%;

  button:first-of-type {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-radius: 0 15px 15px 0;
      background: #ffce06;
      transition: .5s;
    }

    &:hover ::before {
      width: 100%;
      border-radius: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 10rem;
  transition: .3s;

  &:hover {
    filter: drop-shadow(2px 5px 10px #25294c20);
  }
`;

export const Link = styled.a`
  position: relative;
  width: 4rem;
  color: #25294c;
  text-align: center;
  font: 800 1.3em 'Andada Pro', sans-serif;
  text-decoration: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #25294c;
    transition: .3s;
  }
  
  &:hover :after {
    width: 100%;
  }
`;

export const LangBtn = styled.button`
  padding: .45rem .3rem .3rem;
  font: 600 .8em sans-serif;
  border: 1px solid #000;
  border-radius: 50%;
  background: none;
  cursor: pointer;
`;