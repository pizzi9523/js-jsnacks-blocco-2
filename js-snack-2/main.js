const teams = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Fiorentina",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Lazio",
        punti_fatti: 0,
        falli_subiti: 0
    }

]

let nuovo_array = []
let nuovo_object = {}
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.punti_fatti = Math.floor(Math.random() * 100)
    team.falli_subiti = Math.floor(Math.random() * 100)

    const { nome, falli_subiti } = teams[i];
    nuovo_object = { nome, falli_subiti }
    nuovo_array.push(nuovo_object)
}

console.log(nuovo_array);





