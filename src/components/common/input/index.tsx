import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    [x: string]: any,
    [x: number]: any
}

export const Input: FunctionComponent<InputProps> = ({ type, cols = '30', rows = '10', ...props }) => {
    return type === 'textarea' ?
        <textarea className='input' cols={cols} rows={rows} {...props} ></textarea>
        :
        <input className='input' type={type} {...props} />
}