export const render = ()=>{
    const newDiv = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('btn-first');
    button.textContent = 'Haz clic aquí';
    button.addEventListener('click', () =>{
    const printHello = document.createElement('p');
    printHello.textContent = 'Buenas tardes';
    newDiv.appendChild(printHello);
    });
        newDiv.appendChild(button);
        return newDiv;
};
