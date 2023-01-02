import { useState } from 'react';
import axiosInstance from '../../axios/index';

export default function InputBox() {
    const [todo, setTodo] = useState()

    const onHandleChange = (e) => {
        setTodo(e.target.value);
      };

    const onAddTodo = async () => {
        try {
            const body = {todo}
            console.log(todo)
            
            const res = await axiosInstance.get('/todolists', body,);
            console.log(res)

            setTodo()
        } catch (error) {
            console.log({error})
        }
    }

    return (
        <div className='mb-2'>
            <p>Done 1 of 3</p>
            <input
                name="address"
                type={"text"}
                className="form-control"
                placeholder="What's next?"
                onChange={onHandleChange}
            />
            <button
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => onAddTodo()}
            >
                Add
            </button>
        </div>
    )
}