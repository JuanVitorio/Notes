let form = document.querySelector('#form')

function verificar() {

  let titulo_novo = document.querySelector('.add_titulo').value
  let descricao_novo = document.querySelector('.add_descricao').value

  if (titulo_novo == '' || descricao_novo == '') {
    alert('Preencha todos os campos antes de adicionar')
  } else {
    adicionar(titulo_novo, descricao_novo)
  }
}


function adicionar(titulo_novo, descricao_novo) {

  let mural = document.querySelector('.mural')

  let nota = document.createElement('div')
  nota.classList.add('nota')
  mural.appendChild(nota)

  let titulo = document.createElement('h3')
  titulo.classList.add('titulo-nota')
  titulo.innerText = titulo_novo
  nota.appendChild(titulo)

  let descricao = document.createElement('p')
  descricao.classList.add('descricao-nota')
  descricao.innerText = descricao_novo
  nota.appendChild(descricao)

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  verificar()
})