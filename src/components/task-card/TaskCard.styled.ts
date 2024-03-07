import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Card = styled.div`
   display: flex;
   align-items: center;
   padding: 5px;

   border-bottom: 2px dashed ${COLORS.ACCENT};
`;

export const CheckBox = styled.input`
   width: 20px;
   height: 20px;
   margin-right: 15px;
`;

export const CardButton = styled.button`
   padding: 5px;
   margin-left: auto;
   background-color: ${COLORS.TRANSPARENT};
   border: 2px solid ${COLORS.TRANSPARENT};
   border-radius: 7px;

   &:hover {
      color: ${COLORS.DELETE};
      border: 2px solid ${COLORS.DELETE};
   }
`;
