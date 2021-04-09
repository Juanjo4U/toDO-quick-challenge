import { FunctionComponent, HtmlHTMLAttributes } from "react";
import { T } from "../../../translations";
import { constants } from "../../../utils/constants";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    text: string;
    onClick?(): any;
}

const degaultAction = () => { };

export const Button: FunctionComponent<Props> = ({ text, className = '', onClick = degaultAction }) =>
    <div data-testid={constants.TEST.buttonID} className={`button ${className}`} onClick={onClick} >{T(text)}</div>