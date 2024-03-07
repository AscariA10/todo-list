import { Section } from "../section/Section";

import { Filter } from "../filter/Filter";
import { Status } from "../status/Status";

export const AppBar = () => {
   return (
      <Section>
         <Filter />
         <Status />
      </Section>
   );
};
