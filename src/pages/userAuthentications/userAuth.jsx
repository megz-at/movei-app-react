import { useState } from 'react';
import Register from './register/Register';
import Login from './login/login';

const UserAuth = () => {
    const [form, setForm] = useState(true);

    const handleShowForm = () => {
        setForm(!form);
    };

    return (
        <>
           
            {form ? <Login /> : <Register />}
            <div className='d-flex justify-content-center mt-4'>
                <a className='text-light ' onClick={handleShowForm}>
                    {form ? 'Go to Register Form' : 'Go to Login Form'}
                </a>
            </div>
        </>
    );
};

export default UserAuth;
