import react from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
  rated: string;
  caption: string;
  type: string;
  onClick?: (id: number, caption: string, type: string) => void;
}

const StyledOptionButton = styled.button`

  height: 27px;
  margin-right: 8px;
  padding: 4px 10px;
  border: 0;
  font: normal normal 500 12px/19px Catamaran;
  background: #292A2B 0% 0% no-repeat padding-box;
  color: #F7F7F7;

  :hover {
    background-color: #E02735;
    color: #F7F7F7;
  }

`

const StyledOptionButtonSelected = styled.button`

  height: 27px;
  margin-right: 8px;
  padding: 4px 10px;
  border: 0;
  font: normal normal 500 12px/19px Catamaran;
  background: #E02735 0% 0% no-repeat padding-box;
  color: #F7F7F7;

`

export const OptionButton = (props: Props) => {

  const { id, caption, rated, type } = props;

  const handleOnClick = () => {
    
    if (props.onClick) {
      
      props.onClick(id, caption, type);
      
    }
    
  }

  let show;

  if (rated && rated === caption) {

    show = <StyledOptionButtonSelected onClick={handleOnClick}>
      {caption}
    </StyledOptionButtonSelected>

  } else {

    show = <StyledOptionButton onClick={handleOnClick}>
      {caption}
    </StyledOptionButton>

  }

  return (

    <>
      {show}
    </>

  )
}
