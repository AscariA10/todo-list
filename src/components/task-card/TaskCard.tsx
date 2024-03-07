import { Icon } from "@iconify/react";
import { ItaskProp } from "../../interfaces/components-int";

import { useAppDispatch } from "../../redux/hooks";
import { deleteTask, toggleComplete } from "../../redux/tasks-slice";

import { Card, CheckBox, CardButton } from "./TaskCard.styled";

export const TaskCard: React.FC<ItaskProp> = ({ task }: ItaskProp) => {
   const dispatch = useAppDispatch();

   const handleToggle = () => dispatch(toggleComplete(task.id));
   const handleDelete = () => dispatch(deleteTask(task.id));

   return (
      <Card>
         <CheckBox type="checkbox" onChange={handleToggle} checked={task.completed} />
         <p>{task.text}</p>
         <CardButton type="button" onClick={handleDelete}>
            <Icon icon="ant-design:delete-filled" width="20" height="20" />
         </CardButton>
      </Card>
   );
};
