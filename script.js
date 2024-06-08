let botaoAdicionar = document.getElementById('botaoAdicionar');

class Filme{
    constructor(titulo,diretor,ano){
        this.titulo = titulo;
        this.diretor = diretor;
        this.ano = ano;
    
    }
    getTitulo(){
        return this.titulo;
    }
    getDiretor(){
        return this.diretor;
    }
    getAno(){
        return this.ano;
    }
    setTitulo(novoTitulo){
        this.titulo = novoTitulo;
    }
    setDiretor(novoDiretor){
        this.diretor = novoDiretor;
    }
    setAno(novoAno){
        this.ano = novoAno;
    }
    mostrarInformacoes(){
            const novoParagrafo = document.createElement("p");
            novoParagrafo.innerHTML =` ${this.titulo} - ${this.diretor} (${this.ano})`;
            return novoParagrafo;
    }
}
function apertarButton(){

    let titulo = document.getElementById('titulo').value;
    let diretor = document.getElementById('diretor').value;
    let ano = document.getElementById('ano').value;
    let listaFilmes = document.getElementById('listaFilmes');


    switch (true)
    {
    case titulo=== '':
        window.alert('Preencha o campo de título');
    case diretor=== '':
        window.alert('Preencha o campo diretor');   
    case ano === '':
        window.alert('Preencha o campo ano de lançamento');
    }
    
    if (titulo !== '' && diretor !== '' && ano !== '')
        {
            let filme = new Filme(titulo,diretor,ano);
            let filmeInfo = filme.mostrarInformacoes();
            listaFilmes.appendChild(filmeInfo);
            titulo = document.getElementById('titulo').value =  '';
            diretor = document.getElementById('diretor').value = '';
            ano = document.getElementById('ano').value = '';
        }
}
botaoAdicionar.addEventListener('click',apertarButton);