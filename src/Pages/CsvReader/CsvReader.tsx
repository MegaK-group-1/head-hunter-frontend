import React, { CSSProperties, useState } from "react";
import { useCSVReader } from "react-papaparse";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoMegaKRT } from "../../components/Atoms/LogoMegaKRT";
import { Button } from "../../components/Atoms/Button";

interface Props {
  children: string;
  to: string;
  align?: string;
  decoration?: string;
  style?: CSSProperties | undefined;
}

const NavbarLink = styled(Link)<Props>`
  width: auto;
  height: 39px;
  position: absolute;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e12735;
  margin-bottom: -500px;
  color: ${({ color }) => color};
  text-align: center;
  text-decoration: none;
  line-height: 39px;
  border: none;
  align-self: center;
  transition: 0.2s linear;

  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;

const AcceptFile = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 39px;
  line-height: 2.5rem;
  padding-left: 10px;
  width: 40%;
`;

export default function CSVReader() {
  const { CSVReader: CvsReader } = useCSVReader();
  const [data, setData] = useState([]);

  return (
    <CvsReader
      onUploadAccepted={(results: any) => {
        console.log(results, data);
        setData(results);
        return results;
      }}
    >
      {({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
        <Wrapper>
          <LogoMegaKRT />
          <Button {...getRootProps()}>Zaimportuj plik CSV</Button>
          <AcceptFile>{acceptedFile && acceptedFile.name}</AcceptFile>
          <Button {...getRemoveFileProps()}>Usuń</Button>
          <NavbarLink
            to="/admin"
            color="#fff"
          >
            Powrót
          </NavbarLink>
        </Wrapper>
      )}
    </CvsReader>
  );
}
