import React from 'react';
import { Link } from 'react-router-dom';

const LoginContainer = () => {
    return (
        <div>
            <Link to={'/register'}>
                <button>Registrarse</button>
            </Link>
        </div>
    );
};

export default LoginContainer;
