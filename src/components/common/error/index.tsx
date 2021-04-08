import { FunctionComponent } from "react";
import { Button } from "../button";
import { Title } from "../text";

interface Props {
    message: string,
    buttonText: string,
    onClick?(): any
}

export const ErrorComponent: FunctionComponent<Props> = ({ message, buttonText, onClick }) =>
    <>
        <Title text={message} />
        <Button text={buttonText} onClick={onClick} />
    </>