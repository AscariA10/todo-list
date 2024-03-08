import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { CONSTANTS } from "../../styles/constants";

export const Wrapper = styled.div`
   display: flex;
   gap: 10px;
   justify-content: center;
   @media screen and (min-width: 768px) {
      flex-direction: column;
   }
`;

export const FilterButton = styled.button`
   padding: 7px;
   width: 120px;
   font-size: 20px;

   text-transform: capitalize;
   background-color: ${props => {
      return props.color === "true" ? COLORS.ACCENT : COLORS.TRANSPARENT;
   }};
   border: none;
   border-radius: 7px;
   border: 2px solid ${COLORS.ACCENT};
   transition: background-color ${CONSTANTS.TRANSITION}, border-color ${CONSTANTS.TRANSITION};

   &:hover {
      cursor: pointer;
      background-color: ${props => {
         return props.color === "true" ? COLORS.TRANSPARENT : COLORS.ACCENT;
      }};
      border-color: ${COLORS.ACCENT_DARK};
   }

   @media screen and (min-width: 768px) {
      width: 200px;
      font-size: 25px;
   }
`;
