const Home = () => {
    const Homediv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Registrate';
    buttonLogin.textContent = 'Iniciar Sesion';

    Homediv.appendChild(buttonRegister);
    Homediv.appendChild(buttonLogin);

    return Homediv;
}; 