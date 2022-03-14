/*
    quando clicar no pokemon na listagem, temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado

    pra isso, vamos precisar trabalhar com dois elementos
    1 - listagem
    2 - cartão do pokemon

    precisamos criar duas variaveis no js, para trabalhar com os elementos da tela

    vamos precisar trabalhar com o evento de click, feito pelo o usuario na listagem

    - remover a class aberto só do cartão, que está aberto
    - ao clicar em um pokemon da listagem, pegamos o id do pokemon, para saber qual cartão mostrar
    -remover classe ativa que marca o pokemon selecionado
    -adicionar a classe ativo no item da lista selecionada
*/

//    precisamos criar duas variaveis no js, para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

const pokemonsCards = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach( pokemon =>{

    //vamos precisar trabalhar com o evento de click, feito pelo o usuario na listagem
    pokemon.addEventListener('click', () =>{
        //-remover classe ativa que marca o pokemon selecionado
        
        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem, pegamos o id do pokemon, para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        //-remover classe ativa que marca o pokemon selecionado

        const cartaoAtivo = document.querySelector('.ativo')

        cartaoAtivo.classList.remove('ativo')

        //  adicionar a classe ativo no item da lista selecionada


        const cartaoAtivoParaMudar = document.getElementById(idPokemonSelecionado)

        cartaoAtivoParaMudar.classList.add('ativo')


    })
})

