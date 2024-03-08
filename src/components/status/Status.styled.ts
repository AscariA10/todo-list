import styled from "@emotion/styled";

export const Wrapper = styled.div`
   display: flex;
   gap: 30px;
   justify-content: center;

   margin-bottom: 20px;

   @media screen and (min-width: 768px) {
      flex-direction: column;
      gap: 20px;
   }
`;

export const StatusTag = styled.p`
   text-transform: capitalize;
   @media screen and (min-width: 768px) {
      font-size: 20px;
   }
`;
