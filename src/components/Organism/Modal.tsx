import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { Star } from '../Atoms/Star';

import { InputNumber } from '../Atoms/InputNumber';
import { SingleLabeledOption } from '../Molecules/SingleLabeledOption';
import { SingleButtonedOption } from '../Molecules/SingleButtonedOption';
import { OptionButton } from '../Atoms/OptionButton';

import { LabeledOptionInput } from '../Atoms/LabeledOptionInput';
import { RadioBox } from '../Atoms/RadioBox';
import { SingleLabeledRadioOption } from '../Molecules/SingleLabeledRadioOption';

import { ClearButton } from '../Atoms/ClearButton';
import { CancelButton } from '../Atoms/CancelButton';

const StyledModal = styled.div`

  .modalBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(10, 10, 10, 0.5);
  }

  .modalContainer {
    display: flex;
    flex-direction: column;
    width: 520px;
    padding: 21px;
    padding-bottom: 19px;
    background-color: #0A0A0A;
  }

  .title {
    margin-bottom: 11px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

`

const StyledFooter = styled.div`

  display: flex;
  justify-content: right;

`

interface Props {
  id?: number;
  closeModal: (value: boolean) => void;
  onClick?: () => void;
}

const formDefault = {
  markedCourseCompletion: "",
  markedCourseEngagment: "",
  markedProjectDegree: "",
  markedTeamProjectDegree: "",
  markedTargetWorkCity: "",
  markedExpectedContractType: "",
  expectedSalaryMin: "",
  expectedSalaryMax: "",
  answer: "Nie",
  changedMonthsOfCommercialExp: 0,
}

export const Modal = (props: Props) => {

  const [form, setForm] = useState(formDefault);
    
  const { closeModal } = props;
  
  const onClick = (id: number, rate: string, type?: string) => {
    
    if (!isNaN(Number(rate))) {
      
      switch (type) {

        case 'courseCompletition':
          setForm({
            ...form,
            markedCourseCompletion: rate,
          })
          break;

        case 'courseEngagment':
          setForm({
            ...form,
            markedCourseEngagment: rate,
          })
          break;
      
        case 'projectDegree':
          setForm({
            ...form,
            markedProjectDegree: rate,
          })
          break;

        case 'teamProjectDegree':
          setForm({
            ...form,
            markedTeamProjectDegree: rate,
          })
          break;

      }
      
    } 
    
    switch (rate && type) {

      case 'targetWorkCity':
        setForm({
          ...form,
          markedTargetWorkCity: rate,
        })
        break;

      case 'expectedContractType':
        setForm({
          ...form,
          markedExpectedContractType: rate,
        })
        break;

    }
        
  }

  const onChangeVal = (id: string, value: string, type: string) => {

    if (type === 'expectedSalaryMin') {

      setForm({
        ...form,
        expectedSalaryMin: value,
      })

    }

    if (type === 'expectedSalaryMax') {

      setForm({
        ...form,
        expectedSalaryMax: value,
      })

    }

  }

  const onCheckVal = (id: string, value: string) => {

      setForm({
        ...form,
        answer: value,
      })

  }

  const onSetVal = (value: number) => {

    setForm({
      ...form,
      changedMonthsOfCommercialExp: value,
    })

  }

  const handleClearButton = () => {

    setForm(formDefault);
  
  }

  const setFiltersFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    closeModal(false);
    console.log('Działa!!!');
  };
  
  const courseCompletition = [
    <Star 
      rate={'5'} 
      key={15} 
      id={15} 
      onClick={onClick} 
      rated={form.markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'4'} 
      key={14} 
      id={14} 
      onClick={onClick} 
      rated={form.markedCourseCompletion} 
      type={'courseCompletition'}
    />, 
    <Star 
      rate={'3'} 
      key={13} 
      id={13} 
      onClick={onClick} 
      rated={form.markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'2'} 
      key={12} 
      id={12} 
      onClick={onClick} 
      rated={form.markedCourseCompletion} 
      type={'courseCompletition'}
    />,
    <Star 
      rate={'1'} 
      key={11} 
      id={11} 
      onClick={onClick} 
      rated={form.markedCourseCompletion} 
      type={'courseCompletition'}
    />
  ];

  const courseEngagment = [
    <Star 
      rate={'5'} 
      key={25} 
      id={25} 
      onClick={onClick} 
      rated={form.markedCourseEngagment} 
      type={'courseEngagment'}
    />, 
    <Star 
      rate={'4'} 
      key={24} 
      id={24} 
      onClick={onClick} 
      rated={form.markedCourseEngagment} 
      type={'courseEngagment'}
    />, 
    <Star 
      rate={'3'} 
      key={23} 
      id={23} 
      onClick={onClick} 
      rated={form.markedCourseEngagment} 
      type={'courseEngagment'}
    />,
    <Star 
      rate={'2'} 
      key={22} 
      id={22} 
      onClick={onClick} 
      rated={form.markedCourseEngagment} 
      type={'courseEngagment'}
    />,
    <Star 
      rate={'1'} 
      key={21} 
      id={21} 
      onClick={onClick} 
      rated={form.markedCourseEngagment} 
      type={'courseEngagment'}
    />
  ];

  const targetWorkCity = [
    <OptionButton 
      caption={'Praca zdalna'} 
      key={100} 
      id={100} 
      onClick={onClick} 
      rated={form.markedTargetWorkCity}
      type={'targetWorkCity'}
    />,
    <OptionButton 
      caption={'Praca w biurze'} 
      key={101} 
      id={101}
      onClick={onClick}
      rated={form.markedTargetWorkCity}
      type={'targetWorkCity'}
    />
  ]

  const expectedContractType = [
    <OptionButton 
      caption={'Umowa o pracę'} 
      key={200} 
      id={200} 
      onClick={onClick} 
      rated={form.markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'B2B'} 
      key={201} 
      id={201} 
      onClick={onClick} 
      rated={form.markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'Umowa zlecenie'} 
      key={202} 
      id={202} 
      onClick={onClick} 
      rated={form.markedExpectedContractType}
      type={'expectedContractType'}
    />,
    <OptionButton 
      caption={'Umowa o dzieło'} 
      key={203} 
      id={203} 
      onClick={onClick} 
      rated={form.markedExpectedContractType}
      type={'expectedContractType'}
    />
  ];

  const projectDegree = [
    <Star 
      rate={'5'} 
      key={35} 
      id={35} 
      onClick={onClick} 
      rated={form.markedProjectDegree}
      type={'projectDegree'}
    />, 
    <Star 
      rate={'4'} 
      key={34} 
      id={34} 
      onClick={onClick} 
      rated={form.markedProjectDegree}
      type={'projectDegree'}
    />, 
    <Star 
      rate={'3'} 
      key={33} 
      id={33} 
      onClick={onClick} 
      rated={form.markedProjectDegree}
      type={'projectDegree'}
    />,
    <Star 
      rate={'2'} 
      key={32} 
      id={32} 
      onClick={onClick} 
      rated={form.markedProjectDegree}
      type={'projectDegree'}
    />,
    <Star 
      rate={'1'} 
      key={31} 
      id={31} 
      onClick={onClick} 
      rated={form.markedProjectDegree}
      type={'projectDegree'}
    />
  ];

  const teamProjectDegree = [
    <Star 
      rate={'5'} 
      key={45} 
      id={45} 
      onClick={onClick} 
      rated={form.markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />, 
    <Star 
      rate={'4'} 
      key={44} 
      id={44} 
      onClick={onClick} 
      rated={form.markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />, 
    <Star 
      rate={'3'} 
      key={43} 
      id={43} 
      onClick={onClick} 
      rated={form.markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />,
    <Star 
      rate={'2'} 
      key={42} 
      id={42} 
      onClick={onClick} 
      rated={form.markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />,
    <Star 
      rate={'1'} 
      key={41} 
      id={41} 
      onClick={onClick} 
      rated={form.markedTeamProjectDegree} 
      type={'teamProjectDegree'}
    />
  ];

  const expectedSalary = [
    <LabeledOptionInput 
      label='Od' 
      placeholder={'np. 1000 zł'}
      key={'I01'}
      id={'I01'}
      onChangeVal={onChangeVal}
      type={'expectedSalaryMin'}
      value={form.expectedSalaryMin}
    />,
    <LabeledOptionInput 
      label='Do' 
      placeholder={'np. 1000 zł'}
      key={'I02'}
      id={'I02'}
      onChangeVal={onChangeVal}
      type={'expectedSalaryMax'}
      value={form.expectedSalaryMax}
    />
  ];

  const yesNoOptions = [
    <RadioBox 
      caption="Tak" 
      key="Y01"
      id="Y01"
      onChange={onCheckVal}
      answer={form.answer}
      />, 
    <RadioBox 
      caption="Nie" 
      key="N01"
      id="N01"
      onChange={onCheckVal}
      answer={form.answer}
      />
  ];

  const monthsOfCommercialExp = [
    <InputNumber 
      minVal={0} 
      maxVal={12} 
      placeholder={'0 miesięcy'} 
      key="Nr01" 
      id="Nr01"
      onSetVal={onSetVal}
      value={form.changedMonthsOfCommercialExp}
    />];

  return (

    <StyledModal>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <div>Filtrowanie</div>
            <ClearButton children="Wyczyść wszystkie" onClick={handleClearButton}></ClearButton>
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

          <SingleLabeledOption
          labelName={'Oczekiwane wynagrodzenie miesięcznie netto'}
          options={expectedSalary}
          >  
          </SingleLabeledOption>

          <SingleLabeledRadioOption
            labelName={'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'}
            options={yesNoOptions}
          >
          </SingleLabeledRadioOption>

          <SingleLabeledOption
            labelName={'Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu'}
            options={monthsOfCommercialExp}
          >
          </SingleLabeledOption>

          <StyledFooter>
            <CancelButton children="Anuluj" onClick={() => closeModal(false)}/>
            <form onSubmit={setFiltersFromLocalState}>
              <Button children="Pokaż wynik"/>
            </form>
          </StyledFooter>
        </div>
      </div>
    </StyledModal>

  )

};
