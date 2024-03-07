import { Istatus } from "../../interfaces/components-int";
import { useAppSelector } from "../../redux/hooks";

import { Wrapper, StatusTag } from "./Status.styled";

export const Status: React.FC = () => {
   const tasks = useAppSelector(state => state.tasks);

   const tasksCount: Istatus = tasks.reduce(
      (acc, element) => {
         acc.total += 1;
         element.completed ? (acc.complete += 1) : (acc.active += 1);
         return acc;
      },
      { complete: 0, active: 0, total: 0 }
   );

   return (
      <Wrapper>
         <StatusTag>complete: {tasksCount.complete}</StatusTag>
         <StatusTag>active: {tasksCount.active}</StatusTag>
         <StatusTag>total number: {tasksCount.total}</StatusTag>
      </Wrapper>
   );
};
