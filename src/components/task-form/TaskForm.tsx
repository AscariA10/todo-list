import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { Form, Input, FormButton } from "./TaskForm.styled";

export const TaskForm = () => {
   return (
      <Section>
         <InnerContainer>
            <Form>
               <Input type="text" name="newTask" placeholder="Enter task text..." maxLength={150} />
               <FormButton type="button">add new</FormButton>
            </Form>
         </InnerContainer>
      </Section>
   );
};
