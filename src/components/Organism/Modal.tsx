import React, { useState } from 'react';
import { Button } from '../Atoms/Button';
import { Star } from '../Atoms/Star';

import { InputNumber } from '../Atoms/InputNumber';
import { SingleLabeledOption } from '../Molecules/SingleLabeledOption';

import './Modal.css';

interface Props {
  id?: number;
  closeModal: (value: boolean) => void;
  onClick?: () => void;
}

export const Modal = (props: Props) => {
  
  const [marked, setMarked] = useState('')
  
  const { closeModal } = props;

  const onClick = (id: number, rate: string) => {

    setMarked(rate);

    return console.log('Rate id: ', id, 'Rate value: ', rate);
  }
  

  const courseCompletition = [
    <Star rate={'5'} key={15} id={15} onClick={onClick} rated={marked}/>,
    <Star rate={'4'} key={14} id={14} onClick={onClick} rated={marked}/>, 
    <Star rate={'3'} key={13} id={13} onClick={onClick} rated={marked}/>,
    <Star rate={'2'} key={12} id={12} onClick={onClick} rated={marked}/>,
    <Star rate={'1'} key={11} id={11} onClick={onClick} rated={marked}/>
  ]

  return (
    // <Wrapper>
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <div>Filtrowanie</div>
          <button className="clearAll">Wyczyść wszystkie</button>
        </div>
        <SingleLabeledOption 
          labelName={'Ocena przejścia kursu'} 
          options={courseCompletition}>   
        </SingleLabeledOption>
        {/* <SingleLabeledOption 
          labelName={'Ocena aktywności i zaangażowania na kursie'} 
          options={[
            <Star rate={'5'} key={25} id={25} onClick={onClick}/>, 
            <Star rate={'4'} key={24} id={24} onClick={onClick}/>, 
            <Star rate={'3'} key={23} id={23} onClick={onClick}/>,
            <Star rate={'2'} key={22} id={22} onClick={onClick}/>,
            <Star rate={'1'} key={21} id={21} onClick={onClick}/>
          ]}>   
        </SingleLabeledOption>
        <SingleLabeledOption 
          labelName={'Ocena kodu w projekcie własnym'} 
          options={[
            <Star rate={'5'} key={35} id={35} onClick={onClick}/>, 
            <Star rate={'4'} key={34} id={34} onClick={onClick}/>, 
            <Star rate={'3'} key={33} id={33} onClick={onClick}/>,
            <Star rate={'2'} key={32} id={32} onClick={onClick}/>,
            <Star rate={'1'} key={31} id={31} onClick={onClick}/>
          ]}>   
        </SingleLabeledOption>
        <SingleLabeledOption 
          labelName={'Ocena pracy w zespole Scrum'} 
          options={[
            <Star rate={'5'} key={45} id={45} onClick={onClick}/>, 
            <Star rate={'4'} key={44} id={44} onClick={onClick}/>, 
            <Star rate={'3'} key={43} id={43} onClick={onClick}/>,
            <Star rate={'2'} key={42} id={42} onClick={onClick}/>,
            <Star rate={'1'} key={41} id={41} onClick={onClick}/>
          ]}>   
        </SingleLabeledOption> */}
        <div className="optionElement">
          <p className="label">Preferowane miejsce pracy</p>
          <div className="options">
            <button className="singleOption">Praca zdalna</button>
            <button className="singleOption">Praca w biurze</button>
          </div>
        </div>
        <div className="optionElement">
          <p className="label">Oczekiwany typ kontraktu</p>
          <div className="options">
            <button className="singleOption">Umowa o pracę</button>
            <button className="singleOption">B2B</button>
            <button className="singleOption">Umowa zlecenie</button>
            <button className="singleOption">Umowa o dzieło</button>
          </div>
        </div>
        <div className="optionElement">
          <p className="label">Oczekiwane wynagrodzenie miesięcznie netto</p>
          <div className="options">
            <label>
              Od 
              <input className="optionInput" type="text" placeholder="np. 1000 zł" />
            </label>
            <label>
              Do 
              <input className="optionInput" type="text" placeholder="np. 10000 zł" />
            </label>
          </div>
        </div>
        <div className="optionElement optionElement--marginBottom2">
          <p className="label">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
          <div className="options options--vertical">
            <label className="container">Tak
              <input className="optionRadio" name="radio" type="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Nie
              <input className="optionRadio" name="radio" type="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="optionElement">
          <p className="label">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
          <div className="options">
            {/* <input className="optionInput" type="number" placeholder="0 miesięcy" /> */}
            <InputNumber minVal={0} maxVal={12} placeholder={'0 miesięcy'}/>
          </div>
        </div>
        <div className="footer">
          <button className="cancel" onClick={() => closeModal(false)}>Anuluj</button>
          <Button children="Pokaż wynik"/>
        </div>
        {/* <button onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>Are You Sure You Want To Continue?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome! You should move foreward, you will enjoy it.</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Contiune</button>
          <Button children='to jest children' onClick={handleOnClick}/>
        </div> */}
        </div>
      </div>
    // </Wrapper>
    
  )

};
