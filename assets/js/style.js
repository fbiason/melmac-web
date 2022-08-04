//--- Dom estilo---//
let style = document.createElement("style");
style.innerHTML = `
* .container-dom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

button {
    width: 250px;
    height: 150px;
    background: orange;
    color: black;
    border-radius: 18px;
    outline: none;
    margin: 50px;
}
`;
document.head.appendChild(style);
