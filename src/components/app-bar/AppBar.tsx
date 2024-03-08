import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { Filter } from "../filter/Filter";
import { Status } from "../status/Status";

import { InnerContent } from "./AppBar.styled";

export const AppBar = () => {
   return (
      <Section>
         <InnerContainer>
            <InnerContent>
               <Status />
               <Filter />
            </InnerContent>
         </InnerContainer>
      </Section>
   );
};
