import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin-top: 1.5rem;
  background: rgb(36, 182, 211);
  background: linear-gradient(
    98deg,
    rgba(36, 182, 211, 1) 0%,
    rgba(61, 119, 172, 1) 64%,
    rgba(84, 59, 136, 1) 100%
  );
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

interface ButtonWrapperProps {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.8;
  }

  button {
    user-select: none;
    font-size: 0.9rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg,#56ffa4,#59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg,#ff5656,#c16868)'
        : 'white'};
  }
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: white;
`;
