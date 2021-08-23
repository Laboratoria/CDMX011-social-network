//aqui exportaras las funciones que necesites

export const email = document.querySelector("#singUpEmail").value;
export const password = document.querySelector("#singUpPassword").value;
export const myFunction = () => {
    // aqui tu codigo
    console.log('Hola mundo!');
    const register = document.querySelector("#submitForm");
    register.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('estoy evitando el reset');
        console.log(email + password);
    });
};