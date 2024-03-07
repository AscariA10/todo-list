import { Wrapper } from "./Container.styled";
import { IchildrenProp } from "../../interfaces/components-int";

export const InnerContainer: React.FC<IchildrenProp> = ({ children }: IchildrenProp) => {
   return <Wrapper>{children}</Wrapper>;
};
