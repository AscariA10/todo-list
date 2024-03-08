import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { CONSTANTS } from "../../styles/constants";

export const Form = styled.form`
   display: flex;
   gap: 20px;
   justify-content: center;
`;

export const Input = styled.input`
   width: 75%;
   padding: 7px;
   border: 2px solid ${COLORS.ACCENT};
   border-radius: 7px;

   @media screen and (min-width: 768px) {
      font-size: 25px;
   }
`;

export const FormButton = styled.button`
   padding: 7px;
   font-size: 20px;
   background-color: ${COLORS.ACCENT};
   border: 2px solid ${COLORS.ACCENT};
   border-radius: 7px;
   transition: background-color ${CONSTANTS.TRANSITION}, border-color ${CONSTANTS.TRANSITION};
   &:hover {
      cursor: pointer;
      background-color: ${COLORS.TRANSPARENT};
      border-color: ${COLORS.ACCENT_DARK};
   }
   @media screen and (min-width: 768px) {
      font-size: 25px;
   }
`;
