import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Wrapper = styled.div`
   display: flex;
   gap: 10px;
   justify-content: center;
`;

export const FilterButton = styled.button`
   padding: 7px;
   width: 110px;
   font-size: 20px;

   text-transform: capitalize;

   background-color: ${COLORS.ACCENT};
   border: none;
   border-radius: 7px;
`;
// last-clild {
//     background-color: red;
//  }
