import { FunctionComponent } from "react";
import { AnyFunction, ToDoDataType } from "../../../../utils/types_&_interfaces";
import { Button } from "../../../common/button";
import { Input } from "../../../common/input";
import { Title } from "../../../common/text";

interface FormProps {
    id?: any,
    data?: ToDoDataType,
    onChange: AnyFunction,
    addOrModify: AnyFunction,
    eraseTodo: AnyFunction
}

const ToDoForm: FunctionComponent<FormProps> = ({ id, data, onChange = () => { }, addOrModify = () => { }, eraseTodo = () => { } }) =>
    <div className='formContainer'>
        <Title text={id ? 'modify_ToDo' : 'add_ToDo'} />
        <div className='form' >
            <Input name='title' placeholder='title' defaultValue={data?.title}
                onChange={onChange}
            />
            <Input type='textarea' name='description' placeholder='description' defaultValue={data?.description}
                onChange={onChange}
            />
        </div>
        <div className='formButtonContainer' >
            <Button text='save' onClick={addOrModify} />
            {id && <Button text='delete' className='errorBackground' onClick={eraseTodo} />}
        </div>
    </div>

export default ToDoForm;