import styled from "styled-components";

export const Container = styled.header`
  margin-top: 5rem;
  width: 100vw;
  height: calc(100vh - 5rem);
`;

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 83%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 65%;
`;

export const Title = styled.h1`
  line-height: 1.3 !important;
  letter-spacing: 3px;
  font: 600 4em Oswald, sans-serif;
  color: #25294c;
`;

export const Subtitle = styled.h2`
  width: 70%;
  color: #25294c;
  font: 300 1.4em 'Andada Pro', sans-serif;
`;

export const Illustration = styled.img`
  position: absolute;
  right: -5rem;
  width: 60%;
`;