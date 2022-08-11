import styled from "styled-components";
import { IoIosFunnel } from "react-icons/io";

const FilterButt = styled.button`
  background-color: #1e1e1f;
  border: none;
  padding: 10px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Funel = styled(IoIosFunnel)`
  color: #4d4d4d;
  width: 13px;
  height: 15px;
`;

export function FilterButton() {
  return (
    <FilterButt>
      <Funel /> Filtrowanie
    </FilterButt>
  );
}
