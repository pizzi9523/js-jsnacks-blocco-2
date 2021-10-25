const bicycle = [
    {
        nome: "trek",
        peso: 14
    },

    {
        nome: "bianchi",
        peso: 8
    },

    {
        nome: "cannondale",
        peso: 11
    },

    {
        nome: "scott",
        peso: 5
    }
]

console.log(bicycle);
let minore = bicycle[0]


for (let i = 0; i < bicycle.length; i++) {
    const element = bicycle[i];
    if (element.peso <= minore.peso) {
        minore = element
    }
}

console.log(minore);
document.querySelector(".container").insertAdjacentHTML("beforeend", minore.nome)







