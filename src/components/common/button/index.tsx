import { FunctionComponent, HtmlHTMLAttributes } from "react";
import { T } from "../../../translations";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    text: string;
    onClick?(): any;
}

const degaultAction = () => { };

export const Button: FunctionComponent<Props> = ({ text, className = '', onClick = degaultAction }) =>
    <div data-testid='button' className={`button ${className}`} onClick={onClick} >{T(text)}</div>