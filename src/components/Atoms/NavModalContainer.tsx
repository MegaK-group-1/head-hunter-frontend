import styled from "styled-components";

export const NavModalContainer = styled.div`
  min-width: 350px;
  max-width: 400px;
  min-height: 300px;
  width: 20vw;
  padding: 20px 10px;
  background-color: #292a2b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 80px;
  right: 5vw;
  position: fixed;
  z-index: 2;
  animation: showMe 0.3s linear forwards;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  @keyframes showMe {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
