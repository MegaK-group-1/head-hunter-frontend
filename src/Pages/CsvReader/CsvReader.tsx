import React, {CSSProperties, useState} from 'react';
import {Button} from '../../components/Atoms/Button'
// import {Wrapper} from '../../components/Atoms/Wrapper'
import {LogoMegaKRT} from '../AdminPage/AdminPage'
import { useCSVReader } from 'react-papaparse';
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`

const AcceptFile = styled.div`
  color:#fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 39px;
  line-height: 2.5rem;
  padding-left: 10px;
  width: 40%;
`
const styles = {
    browseFile: {
        width: '20%',
    } as CSSProperties,
    progressBarBackgroundColor: {
        backgroundColor: 'blue',
    } as CSSProperties,
};

export default function CSVReader() {
    const { CSVReader } = useCSVReader();
    const [data, setData] = useState([]);

    return (
        <CSVReader
            onUploadAccepted={(results: any) => {
                console.log(results);
                setData(results);
                return results;
            }}
        >

            {({
                  getRootProps,
                  acceptedFile,
                  ProgressBar,
                  getRemoveFileProps,
              }: any) => (
                <>

                    <Wrapper >
                        <LogoMegaKRT/>
                        <Button  {...getRootProps()}>
                            Zaimportuj plik CSV
                        </Button>
                        <AcceptFile >
                            {acceptedFile && acceptedFile.name}
                            <ProgressBar style={styles.progressBarBackgroundColor} />
                        </AcceptFile>
                        <Button {...getRemoveFileProps()}>
                            Usuń
                        </Button>
                    </Wrapper>
                </>
            )}
        </CSVReader>
    );
}
