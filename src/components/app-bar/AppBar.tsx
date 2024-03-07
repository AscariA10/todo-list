import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { Filter } from "../filter/Filter";
import { Status } from "../status/Status";

export const AppBar = () => {
   return (
      <Section>
         <InnerContainer>
            <Status />
            <Filter />
         </InnerContainer>
      </Section>
   );
};
