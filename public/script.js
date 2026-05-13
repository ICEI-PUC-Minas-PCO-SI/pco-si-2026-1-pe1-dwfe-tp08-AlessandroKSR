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
    {
        id: 7,
        titulo: "Serie 4",
        tipo: "serie",
        ano: 2001,
        generos: ["romance", "ação"],
        nota: 10,
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

const itemNotaAlta = catalogo.find(item => item.nota >= 9);

if (itemNotaAlta) {
    console.log(`Título: ${itemNotaAlta.titulo} | Nota: ${itemNotaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

const somaNotas = catalogo.reduce((soma, item) => {
    return soma + item.nota;
}, 0);

const mediaNotas = somaNotas / catalogo.length;

console.log("Média geral das notas:", mediaNotas.toFixed(2));

const assistidos = catalogo.filter(item => item.assistido === true);

const somaAssistidos = assistidos.reduce((soma, item) => {
    return soma + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média das notas dos assistidos:", mediaAssistidos.toFixed(2));

const existeAnoAntigo = catalogo.some(item => item.ano < 2000);

console.log("Existe item com ano menor que 2000?", existeAnoAntigo);

const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Todos os itens possuem pelo menos 1 gênero?", todosTemGenero);

const output = document.getElementById("output");
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;
const quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p>Total de itens: ${catalogo.length}</p>

    <p>Quantidade de filmes: ${quantidadeFilmes}</p>

    <p>Quantidade de séries: ${quantidadeSeries}</p>

    <p>Quantidade de não assistidos: ${naoAssistidos.length}</p>

    <p>Média geral das notas: ${mediaNotas.toFixed(2)}</p>

    <h3>Top 3 Maiores Notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>
                ${item.titulo} - Nota: ${item.nota}
            </li>
        `).join("")}
    </ol>
`;