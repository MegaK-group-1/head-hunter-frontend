import React,  { useState } from 'react';
import { Modal } from './components/Organism/Modal';
import styled from 'styled-components';

const StyledApp = styled.div`

  .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  `

export const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledApp>
      <div className="App">
          <h1>Naciśnij przycisk by otworzyć modal filtracji.</h1>
          <button className="openModalBtn" onClick={() => setOpenModal(true)}>Otwórz modal</button>
          {openModal && <Modal closeModal={setOpenModal}/> }
        </div>
    </StyledApp>
  );
}
