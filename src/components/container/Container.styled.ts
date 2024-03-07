import styled from "@emotion/styled";

export const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   padding-left: 20px;
   padding-right: 20px;

   @media screen and (min-width: 768px) {
      width: 768px;
      padding-left: 30px;
      padding-right: 30px;
   }
   @media screen and (min-width: 1280px) {
      width: 1280px;
      padding-left: 20px;
      padding-right: 20px;
   }
`;
