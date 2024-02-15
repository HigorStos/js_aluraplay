import { conectaApi } from './conectaApi.js'
import constroiCard from './mostrarVideos.js'

async function buscarVideo(e) {
  e.preventDefault()

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
  const busca = await conectaApi.buscaVideo(dadosDePesquisa)

  const lista = document.querySelector('[data-lista]')

  while(lista.firstChild) {
    lista.removeChild(lista.firstChild)
  }

  busca.forEach(e => lista.appendChild(
    constroiCard(e.titulo, e.descricao, e.url, e.imagem)
  ))
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', e => buscarVideo(e))
