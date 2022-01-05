import React, { useState } from 'react';

import { Input } from '../styleComponents/Inputs';
import { Button } from '../styleComponents/Buttons';
import { H1, Form, Error, Div } from '../styleComponents/General';

const FormContainer = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        ubication: '',
    });

    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [errorAge, setErrorAge] = useState(false);
    const [errorUbication, setErrorUbication] = useState(false);

    const fillOutForm = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleOnKeyDownPhone = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
        } else {
            e.preventDefault();
        }
    };

    const validateForm = (e) => {
        e.preventDefault();

        if (!values.name) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (!values.lastName) {
            setErrorLastName(true);
        } else {
            setErrorLastName(false);
        }
        if (!values.email) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        if (!values.phone) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }
        if (!values.password) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
        if (!values.age) {
            setErrorAge(true);
        } else {
            setErrorAge(false);
        }
        if (!values.ubication) {
            setErrorUbication(true);
        } else {
            setErrorUbication(false);
        }
        if (values.password !== values.confirmPassword) {
            setErrorConfirmPassword(true);
        } else {
            setErrorConfirmPassword(false);
        }
    };

    return (
        <div>
            <H1>Ingresar Datos</H1>
            <Form method="post" onSubmit={validateForm}>
                <Div>
                    <Input type="text" placeholder="nombre" name="name" id="name" onChange={fillOutForm} />
                    {errorName && <Error className="error">El nombre es requerido</Error>}
                </Div>
                <Div>
                    <Input type="text" placeholder="apellido" name="lastName" id="lastName" onChange={fillOutForm} />
                    {errorLastName && <Error className="error">El apellido es requerido</Error>}
                </Div>
                <Div>
                    <Input type="email" placeholder="email" name="email" id="email" onChange={fillOutForm} />
                    {errorEmail && <Error className="error">El email es requerido</Error>}
                </Div>
                <Div>
                    <Input
                        type="tel"
                        placeholder="phone"
                        name="phone"
                        id="phone"
                        onKeyDown={handleOnKeyDownPhone}
                        onChange={fillOutForm}
                    />
                    {errorPhone && <Error className="error">El teléfono es requerido</Error>}
                </Div>
                <Div>
                    <Input type="password" placeholder="contraseña" name="password" id="password" onChange={fillOutForm} />
                    {errorPassword && <Error className="error">La contraseña es requerida</Error>}
                </Div>
                <Div>
                    <Input
                        type="password"
                        placeholder="repite la contraseña"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={fillOutForm}
                    />
                    {errorConfirmPassword && <Error className="error">Las contraseñas no son iguales</Error>}
                </Div>
                <Div>
                    <Input type="date" placeholder="edad" name="age" id="age" onChange={fillOutForm} />
                    {errorAge && <Error className="error">La edad es requerida</Error>}
                </Div>
                <Div>
                    <Input type="text" placeholder="ubicación" name="ubication" id="ubication" onChange={fillOutForm} />
                    {errorUbication && <Error className="error">La ubicación es requerida</Error>}
                </Div>
                <div>
                    <Button type="submit">Enviar</Button>
                </div>
            </Form>
        </div>
    );
};

export default FormContainer;
