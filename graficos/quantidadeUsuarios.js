async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosPostos = Object.keys(dados)
    const quantidadeTrabalhadores = Object.values(dados)
    

const data = [
    {
        x: nomeDosPostos,
        y: quantidadeTrabalhadores,
        type: 'bar'
    }
]

}