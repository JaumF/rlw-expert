const perguntas = [
    {
        pergunta: 'Qual é a sigla para HTML?',
        resposta: [
            'Hypertext Markup Language',
            'Hyper Text Makeup Language',
            'High Tech Markup Language',
        ],
        correto: 0 // A resposta correta é a primeira (Hypertext Markup Language)
    },
    {
        pergunta: 'Qual elemento é utilizado para definir um título em HTML?',
        resposta: [
            '<title>',
            '<heading>',
            '<h1>',
        ],
        correto: 0 // A resposta correta é a primeira (<title>)
    },
    {
        pergunta: 'Qual é o elemento usado para criar uma lista numerada em HTML?',
        resposta: [
            '<ol>',
            '<ul>',
            '<li>',
        ],
        correto: 0 // A resposta correta é a primeira (<ol>)
    },
    {
        pergunta: 'Como criar um link em HTML?',
        resposta: [
            '<a href="url">link text</a>',
            '<link url="url">link text</link>',
            '<link href="url">link text</link>',
        ],
        correto: 0 // A resposta correta é a primeira (<a href="url">link text</a>)
    },
    {
        pergunta: 'Qual é o elemento usado para criar um parágrafo em HTML?',
        resposta: [
            '<paragraph>',
            '<p>',
            '<para>',
        ],
        correto: 1 // A resposta correta é a segunda (<p>)
    },
    {
        pergunta: 'O que é um atributo em HTML?',
        resposta: [
            'Um valor que fornece informações adicionais sobre um elemento.',
            'Um tipo especial de elemento HTML.',
            'Um tipo de estilo CSS aplicado a um elemento.',
        ],
        correto: 0 // A resposta correta é a primeira (Um valor que fornece informações adicionais sobre um elemento.)
    },
    {
        pergunta: 'Qual é o atributo usado para fornecer um texto alternativo para uma imagem em HTML?',
        resposta: [
            'alt',
            'text',
            'description',
        ],
        correto: 0 // A resposta correta é a primeira (alt)
    },
    {
        pergunta: 'Qual é o elemento usado para criar um formulário em HTML?',
        resposta: [
            '<form>',
            '<input>',
            '<button>',
        ],
        correto: 0 // A resposta correta é a primeira (<form>)
    },
    {
        pergunta: 'Como criar um comentário em HTML?',
        resposta: [
            '<!-- Este é um comentário -->',
            '// Este é um comentário',
            '<comentario>Este é um comentário</comentario>',
        ],
        correto: 0 // A resposta correta é a primeira (<!-- Este é um comentário -->)
    },
    {
        pergunta: 'Qual é o elemento usado para incluir scripts JavaScript em uma página HTML?',
        resposta: [
            '<script>',
            '<javascript>',
            '<js>',
        ],
        correto: 0 // A resposta correta é a primeira (<script>)
    },
];

const template = document.querySelector('template') // Aqui busco a tag querySelector busco a tag template nos documento.
const quiz = document.querySelector('#quiz')
const corretas = new Set() // new = Palavra reservada do js serva para criar coisas novas, e geralmente uma estrutura de dados ou um tipo de objeto específico, esse tipo de objeto específico é chamado de set = á um conjunto, e esse set eu posso adicionar ou tirar, e nunca pode repetir oque tem dentro dele.
const totalDePerguntas = perguntas.length // Total de item que estão na const perguntas.
const mostraTotal = document.querySelector('#acertos span')
mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) { // Loop ou laço de repetição.
    const quizItem = template.content.cloneNode(true) // Aqui o quizItem fez um clone(CloneNode) do conteúdo(content) do template.
    quizItem.querySelector('h3').textContent = item.pergunta // Busco a tag h3 na tag template, e trocou o conteúdo do texto(textContent).

    for (let resposta of item.resposta) {
        const dl = quizItem.querySelector('dt dl').cloneNode(true)
        dl.querySelector('span').textContent = resposta
        dl.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) // setAttibute = Atribuição de valor e vai exibir dois valores para ela funcionar (nome e valor do atributo)
        dl.querySelector('input').value = item.resposta.indexOf(resposta) // dando valor de 0 1 2. para cada resposta
        
        dl.querySelector('input').onchange = (event) => { // onchange = Espera que aqui tenha uma função. () => = Arrow function. () => {} = Escopo. event = Eu me mexendo no site. event.target = input selecionado. event.target.value = value do event ser é igual a item.correto.
            const estaCorreta = event.target.value == item.correto

            corretas.delete(item) // Caso acertou e trocou de opção a opção certa será deletada.
            if(estaCorreta) { // Só entra nesse if ser casa estaCorreta for igual item.correto.
                corretas.add(item) // Conta as opções que acertou
            }

            mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        } 

        quizItem.querySelector('dt').appendChild(dl)
    }
    quizItem.querySelector('dt dl').remove() //Aqui removeu o texto que tinha no dt e dl.
    quiz.appendChild(quizItem)
}