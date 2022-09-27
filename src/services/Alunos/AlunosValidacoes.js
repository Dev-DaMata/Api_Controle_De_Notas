import { umaLetraNome, umaLetraSobrenome } from "./logicaAlunos.js";

const validaNome = (nome)=>{
    if(!umaLetraNome(nome)){
        throw new Error("Insira um nome com mais de 1 caractere")
    }
}

const validaSobrenome = (sobrenome)=>{
    if(!umaLetraSobrenome(sobrenome)){
        throw new Error("Insira um sobrenome com mais de 1 caractere")
    }
}

export const validaAluno = (dados)=>{
    if(dados.nome){
        validaNome(dados.nome)
    }
    if(dados.sobrenome){
        validaSobrenome(dados.sobrenome)
    }
}

export const mesclarDadosAluno = (atual, novo)=>{
    validaAluno(novo)
    return{
        "nome": novo.nome || atual.nome,
        "sobrenome": novo.sobrenome || atual.sobrenome,
        "serie": novo.serie || atual.serie,
    }
}

export const criaAluno = (dados)=>{
    validaAluno(dados)
    return {
        "nome": dados.nome,
        "email": dados.sobrenome,
        "serie": dados.serie
    }
}