const Login = () => {
    const Homediv = document.createElement('div');
    Homediv.textContent = 'Bienvenido al Login';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al Home';

    Homediv.appendChild(buttonHome);

    return Homediv;
}; 