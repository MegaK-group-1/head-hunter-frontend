import styled from "styled-components";
import Logo from "../../assets/images/LogoMegaK.png";

interface Props {
  width?: string;
  height?: string;
}

export const LogoMegaK = styled.div<Props>`
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: ${({ width }) => width || "120px"};
  min-height: ${({ height }) => height || "75px"};
  width: ${({ width }) => width || "10vw"};
  height: ${({ height }) => height || "7vw"};
`;
