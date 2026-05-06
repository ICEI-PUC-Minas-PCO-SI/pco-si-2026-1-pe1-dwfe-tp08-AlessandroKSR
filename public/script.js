const catalogo = [
    {
        id: 1,
        titulo: "FILME 1",
        tipo: "filme",
        ano: 2002,
        generos: ["ação", "romance"],
        nota: 8,
        assistido: true
    },
    {
        id: 2,
        titulo: "Filme 2",
        tipo: "filme",
        ano: 2022,
        generos: ["ação", "aventura"],
        nota: 5,
        assistido: false
    },
    {
        id: 3,
        titulo: "Filme 3",
        tipo: "filme",
        ano: 2012,
        generos: ["drama", "musical"],
        nota: 5,
        assistido: false
    },
    {
        id: 4,
        titulo: "SERIE 1",
        tipo: "serie",
        ano: 2001,
        generos: ["romance", "luta"],
        nota: 1,
        assistido: true
    },
    {
        id: 5,
        titulo: "Serie 2",
        tipo: "serie",
        ano: 2001,
        generos: ["drama", "suspense"],
        nota: 1,
        assistido: true
    },
    {
        id: 6,
        titulo: "Serie 3",
        tipo: "serie",
        ano: 2001,
        generos: ["romance", "ação"],
        nota: 1,
        assistido: true
    },
]

console.log(catalogo)
console.log(catalogo[0].titulo)
console.log(catalogo[5].ano)
console.log(catalogo[2].generos[1])

catalogo.forEach(catalogo => {
    console.log(catalogo.tipo, catalogo.titulo, catalogo.ano, catalogo.id)
});

const titulosEmCaixaAlta = new Map();

titulosEmCaixaAlta.set(catalogo[0].id, catalogo[0])
titulosEmCaixaAlta.set(catalogo[3].id, catalogo[3])

console.log(titulosEmCaixaAlta)

const naoAssistidos = catalogo.filter(item => item.assistido === false)

console.log(naoAssistidos)
console.log(naoAssistidos.length)

