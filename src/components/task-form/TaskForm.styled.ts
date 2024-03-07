import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Form = styled.form`
   display: flex;
   gap: 20px;
`;

export const Input = styled.input`
   width: 75%;
   padding: 7px;
   border: 2px solid ${COLORS.ACCENT};
   border-radius: 7px;
`;

export const FormButton = styled.button`
   padding: 7px;
   background-color: ${COLORS.ACCENT};
   border: none;
   border-radius: 7px;
`;
