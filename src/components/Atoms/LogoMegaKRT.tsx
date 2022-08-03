import styled from "styled-components";
import Logo from "../../assets/images/LogoMegaK.png";

export const LogoMegaKRT = styled.div`
  display: flex;
  position: absolute;
  top: 5rem;
  right: 5rem;
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  min-width: 120px;
  min-height: 75px;
  width: 10vw;
  height: 7vw;
`;
