import { useState } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { addTask } from "../../redux/tasks-slice";

import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { Form, Input, FormButton } from "./TaskForm.styled";

export const TaskForm = () => {
   const dispatch = useAppDispatch();

   const [inputValue, setInputValue] = useState("");

   const handleSubmit: any = (e: React.FormEvent<HTMLInputElement>): void => {
      e.preventDefault();
      dispatch(addTask(inputValue));
      setInputValue("");
   };

   const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setInputValue(e.currentTarget.value);
   };

   return (
      <Section>
         <InnerContainer>
            <Form onSubmit={handleSubmit}>
               <Input
                  type="text"
                  name="newTask"
                  placeholder="Enter your task..."
                  maxLength={100}
                  onChange={handleChange}
                  value={inputValue}
               />
               <FormButton type="submit">add new</FormButton>
            </Form>
         </InnerContainer>
      </Section>
   );
};
