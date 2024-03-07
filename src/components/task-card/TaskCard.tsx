import { Icon } from "@iconify/react";
import { ItaskProp } from "../../interfaces/components-int";
import { useAppDispatch } from "../../redux/hooks";

export const TaskCard: React.FC<ItaskProp> = ({ task }: ItaskProp) => {
   return (
      <div>
         <input type="checkbox" checked={task.completed} />
         <p>{task.text}</p>
         <button type="button">
            <Icon icon="streamline:delete-1" width="12" height="12" />
         </button>
      </div>
   );
};
