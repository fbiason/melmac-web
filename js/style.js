//--- Dom estilo---//
let style = document.createElement("style");
style.innerHTML = `
* .dom-style {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(34, 34, 34, 0.448);
}

.dom-style p {
    color: black;
}

.btn-mezcla {
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
