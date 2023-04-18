import Tab from "./modal.js";

fetch('./scripts/db.json')
    .then(res => res.json())
    .then(data => {
        data.modals.forEach(modalas =>{
            console.log(modalas.media)
            document
            .querySelector(`#${modalas.name.toLowerCase()}`)
            .addEventListener('click', () =>{
                console.log(modalas.name);
                let newModalas = new Tab(modalas);
                console.log(newModalas)
            })
        });
    })