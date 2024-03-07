import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { TaskCard } from "../task-card/TaskCard";

export const Tasks = () => {
   const tasks = useAppSelector(state => state.tasks);
   console.log(tasks);
   return (
      <Section>
         <InnerContainer>
            {tasks.map(element => (
               <TaskCard task={element} />
            ))}
         </InnerContainer>
      </Section>
   );
};
