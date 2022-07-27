import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 1300px) {
    display: grid;
    justify-content: center;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
    justify-items: stretch;
  };

  @media(max-width: 600px){
    grid-template-columns:1fr;
  }

`