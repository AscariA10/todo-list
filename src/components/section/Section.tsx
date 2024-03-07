import { IchildrenProp } from "../../interfaces/components-int";
import { Wrapper } from "./Section.styled";

export const Section: React.FC<IchildrenProp> = ({ children }) => {
   return <Wrapper>{children}</Wrapper>;
};
