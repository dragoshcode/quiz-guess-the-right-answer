import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './assets/bg.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;

}

body{
    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  img{
    background-color: white;
    border-radius: 10px;
    padding: .5rem 1rem;
  }

  p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
    margin-top: 1.5rem;
  }

  .start,
  .next {
    cursor: pointer;
    height: 40px;
    margin-top: 20px;
    padding: 0 40px;
    border: none;
    background: white;
    border-radius: 10px;
    transition: 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  }

  .start {
    max-width: 200px;
  }
`;
