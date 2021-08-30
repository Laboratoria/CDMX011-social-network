export const Home = () => {
    const Homediv = document.createElement('div');
    const labelWelcome = document.createElement('label');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
    const buttonGoogle = document.createElement('button');

    labelWelcome.textContent = 'Bienvenid@';
    buttonRegister.textContent = 'Registrate';
    buttonLogin.textContent = 'Iniciar Sesion';
    buttonGoogle.textContent = 'Contnuar con google';

    Homediv.appendChild(labelWelcome);
    Homediv.appendChild(buttonRegister);
    Homediv.appendChild(buttonLogin);
    Homediv.appendChild(buttonGoogle);

    return Homediv;
}; 