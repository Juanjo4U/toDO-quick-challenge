import { FunctionComponent } from "react";
import { T } from "../../../translations";

interface Txt {
    text?: string;
    className?: string;
}

export const Title: FunctionComponent<Txt> = ({ children, text }) =>
    <p className='title textBold' >{text ? T(text) : ''}{children}</p>

export const Text: FunctionComponent<Txt> = ({ children, text, className = '' }) =>
    <p className={'text ' + className}>{text ? T(text) : ''}{children}</p>