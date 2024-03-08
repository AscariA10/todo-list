import { Icon } from "@iconify/react";
import { ItaskProp } from "../../interfaces/components-int";

import { useAppDispatch } from "../../redux/hooks";
import { deleteTask, toggleComplete } from "../../redux/tasks-slice";

import { Card, CheckBox, CardButton, TaskText } from "./TaskCard.styled";

export const TaskCard: React.FC<ItaskProp> = ({ task }: ItaskProp) => {
   const dispatch = useAppDispatch();

   const handleToggle = () => dispatch(toggleComplete(task.id));
   const handleDelete = () => dispatch(deleteTask(task.id));

   return (
      <Card>
         <CheckBox type="checkbox" onChange={handleToggle} checked={task.completed} />
         <TaskText>{task.text}</TaskText>
         <CardButton type="button" onClick={handleDelete}>
            <Icon icon="ant-design:delete-filled" width="25" height="25" />
         </CardButton>
      </Card>
   );
};
