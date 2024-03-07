import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Wrapper = styled.div`
   display: flex;
   gap: 10px;
   justify-content: center;
`;

export const FilterButton = styled.button`
   padding: 7px;
   width: 120px;
   font-size: 20px;

   text-transform: capitalize;
   background-color: ${props => {
      return props.color === "true" ? COLORS.ACCENT : "white";
   }};
   border: none;
   border-radius: 7px;
   border: 2px solid ${COLORS.ACCENT};
   &:hover {
      cursor: pointer;
   }
`;
