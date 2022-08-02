import React, { useState } from 'react';
import { Button } from '../Atoms/Button';
import { Star } from '../Atoms/Star';

import { InputNumber } from '../Atoms/InputNumber';
import { SingleLabeledOption } from '../Molecules/SingleLabeledOption';
import { SingleButtonedOption } from '../Molecules/SingleButtonedOption';
import { OptionButton } from '../Atoms/OptionButton';

import './Modal.css';

interface Props {
  id?: number;
  closeModal: (value: boolean) => void;
  onClick?: () => void;
}

export const Modal = (props: Props) => {
  
  const [markedCourseCompletion, setMarkedCourseCompletion] = useState('');
  const [markedCourseEngagment, setMarkedCourseEngagment] = useState('');
  const [markedProjectDegree, setMarkedProjectDegree] = useState('');
  const [markedTeamProjectDegree, setMarkedTeamProjectDegree] = useState('');

  const [markedTargetWorkCity, setMarkedTargetWorkCity] = useState('');
  const [markedExpectedContractType, setMarkedExpectedContractType] = useState('');
  
  const { closeModal } = props;
  
  const onClick = (id: number, rate: string, type?: string) => {
    
    console.log('Rate id: ', id, 'Rated: ', rate, 'Type: ', type);
    
    if (!isNaN(Number(rate))) {
      
      switch (type) {

        case 'courseCompletition':
          setMarkedCourseCompletion(rate);
          break;

        case 'courseEngagment':
          setMarkedCourseEngagment(rate);
          break;
      
        case 'projectDegree':
          setMarkedProjectDegree(rate);
          break;

        case 'teamProjectDegree':
          setMarkedTeamProjectDegree(rate);
          break;

      }

      return console.log('Rate id: ', id, 'Rate value: ', rate);
      
    } 
    
    console.log('Rate ', rate, 'Caption: ');

    switch (rate && type) {

      case 'targetWorkCity':
        setMarkedTargetWorkCity(rate);
        break;

      case 'expectedContractType':
        setMarkedExpectedContractType(rate);
        break;

    }
        
      return console.log('Button id: ', id, 'Caption: ', rate);
        
  }
  
  const courseCompletition = [
    <Star 
      rate={'5'} 
      key={15} 
      id={15} 
      onClick={onClick} 
      rated={markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'4'} 
      key={14} 
      id={14} 
      onClick={onClick} 
      rated={markedCourseCompletion} 
      type={'courseCompletition'}
    />, 
    <Star 
      rate={'3'} 
      key={13} 
      id={13} 
      onClick={onClick} 
      rated={markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'2'} 
      key={12} 
      id={12} 
      onClick={onClick} 
      rated={markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'1'} 
      key={11} 
      id={11} 
      onClick={onClick} 
      rated={markedCourseCompletion} 
      type={'courseCompletition'}
    />
  ];

  const courseEngagment = [
    <Star 
      rate={'5'} 
      key={25} 
      id={25} 
      onClick={onClick} 
      rated={markedCourseEngagment} 
      type={'courseEngagment'}
    />, 
    <Star 
      rate={'4'} 
      key={24} 
      id={24} 
      onClick={onClick} 
      rated={markedCourseEngagment} 
      type={'courseEngagment'}
    />, 
    <Star 
      rate={'3'} 
      key={23} 
      id={23} 
      onClick={onClick} 
      rated={markedCourseEngagment} 
      type={'courseEngagment'}
    />,
    <Star 
      rate={'2'} 
      key={22} 
      id={22} 
      onClick={onClick} 
      rated={markedCourseEngagment} 
      type={'courseEngagment'}
    />,
    <Star 
      rate={'1'} 
      key={21} 
      id={21} 
      onClick={onClick} 
      rated={markedCourseEngagment} 
      type={'courseEngagment'}
    />
  ];

  const targetWorkCity = [
    <OptionButton 
      caption={'Praca zdalna'} 
      key={100} 
      id={100} 
      onClick={onClick} 
      rated={markedTargetWorkCity}
      type={'targetWorkCity'}
    />,
    <OptionButton 
      caption={'Praca w biurze'} 
      key={101} 
      id={101}
      onClick={onClick}
      rated={markedTargetWorkCity}
      type={'targetWorkCity'}
    />
  ]

  const expectedContractType = [
    <OptionButton 
      caption={'Umowa o pracę'} 
      key={200} 
      id={200} 
      onClick={onClick} 
      rated={markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'B2B'} 
      key={201} 
      id={201} 
      onClick={onClick} 
      rated={markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'Umowa zlecenie'} 
      key={202} 
      id={202} 
      onClick={onClick} 
      rated={markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'Umowa o dzieło'} 
      key={203} 
      id={203} 
      onClick={onClick} 
      rated={markedExpectedContractType}
      type={'expectedContractType'}
    />
  ];

  const projectDegree = [
    <Star 
      rate={'5'} 
      key={35} 
      id={35} 
      onClick={onClick} 
      rated={markedProjectDegree}
      type={'projectDegree'}
    />, 
    <Star 
      rate={'4'} 
      key={34} 
      id={34} 
      onClick={onClick} 
      rated={markedProjectDegree}
      type={'projectDegree'}
    />, 
    <Star 
      rate={'3'} 
      key={33} 
      id={33} 
      onClick={onClick} 
      rated={markedProjectDegree}
      type={'projectDegree'}
    />,
    <Star 
      rate={'2'} 
      key={32} 
      id={32} 
      onClick={onClick} 
      rated={markedProjectDegree}
      type={'projectDegree'}
    />,
    <Star 
      rate={'1'} 
      key={31} 
      id={31} 
      onClick={onClick} 
      rated={markedProjectDegree}
      type={'projectDegree'}
    />
  ];

  const teamProjectDegree = [
    <Star 
      rate={'5'} 
      key={45} 
      id={45} 
      onClick={onClick} 
      rated={markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />, 
    <Star 
      rate={'4'} 
      key={44} 
      id={44} 
      onClick={onClick} 
      rated={markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />, 
    <Star 
      rate={'3'} 
      key={43} 
      id={43} 
      onClick={onClick} 
      rated={markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />,
    <Star 
      rate={'2'} 
      key={42} 
      id={42} 
      onClick={onClick} 
      rated={markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />,
    <Star 
      rate={'1'} 
      key={41} 
      id={41} 
      onClick={onClick} 
      rated={markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />
  ];

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

        <SingleLabeledOption 
          labelName={'Ocena aktywności i zaangażowania na kursie'} 
          options={courseEngagment}>   
        </SingleLabeledOption>

        <SingleLabeledOption 
          labelName={'Ocena kodu w projekcie własnym'} 
          options={projectDegree}>   
        </SingleLabeledOption>

        <SingleLabeledOption 
          labelName={'Ocena pracy w zespole Scrum'} 
          options={teamProjectDegree}>   
        </SingleLabeledOption>

        <SingleButtonedOption
          labelName={'Preferowane miejsce pracy'}
          options={targetWorkCity}
        >
        </SingleButtonedOption>
        <SingleButtonedOption
          labelName={'Oczekiwany typ kontraktu'}
          options={expectedContractType}
        >
        </SingleButtonedOption>
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
