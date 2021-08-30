export const Register = () => {
    const Homediv = document.createElement('div');
    Homediv.textContent = 'Bienvenido al registro';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al Home';

    Homediv.appendChild(buttonHome);

    return Homediv;
}; 

