import { useAppSelector } from "../../redux/hooks";

import { getVisibleTasks } from "../../helpers/getVisibleTasks";

import { Section } from "../section/Section";
import { InnerContainer } from "../container/Container";

import { TaskCard } from "../task-card/TaskCard";

export const Tasks = () => {
   const tasks = useAppSelector(state => state.tasks);
   const statusFilter = useAppSelector(state => state.filter.status);
   const visibleTasks = getVisibleTasks(tasks, statusFilter);

   return (
      <Section>
         <InnerContainer>
            {visibleTasks.map(element => (
               <TaskCard key={element.id} task={element} />
            ))}
         </InnerContainer>
      </Section>
   );
};
