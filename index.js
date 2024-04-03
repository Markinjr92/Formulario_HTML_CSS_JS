let participantes = [
    {
      nome: "Victor Franzone",
      email: "victor@gmail.com",
      dataNascimento: new Date(2001, 2, 1, 19, 23),
      cep: '11111-111',
      dataPagamentoInsc: null
    },
    {
      nome: "Raphael Menezes",
      email: "raphael@gmail.com",
      dataNascimento: new Date(2002, 2, 23, 19, 23),
      cep: '22222-222',
      dataPagamentoInsc: null
    },
    {
      nome: "Anderson Rosa",
      email: "anderson@gmail.com",
      dataNascimento: new Date(2003, 0, 3, 19, 23),
      cep: '33333-333',
      dataPagamentoInsc: new Date(2003, 0, 3, 19, 23)
    },
    {
      nome: "Bryan Evaristo",
      email: "bryan@gmail.com",
      dataNascimento: new Date(2004, 11, 4, 19, 23),
      cep: '44444-444',
      dataPagamentoInsc: new Date(2003, 0, 3, 19, 23)
    },
    {
      nome: "Caio Medeiros",
      email: "caio@gmail.com",
      dataNascimento: new Date(2005, 10, 5, 19, 23),
      cep: '55555-555',
      dataPagamentoInsc: new Date(2003, 0, 3, 19, 23)
    },
    {
      nome: "Mario Hugo",
      email: "mario@gmail.com",
      dataNascimento: new Date(2006, 9, 6, 19, 23),
      cep: '66666-666',
      dataPagamentoInsc: new Date(2003, 0, 3, 19, 23)
    },
    {
      nome: "Leandro Santos",
      email: "leandro@gmail.com",
      dataNascimento: new Date(2007, 8, 7, 19, 23),
      cep: '77777-777',
      dataPagamentoInsc: null
    },
    {
      nome: "Fabiano Bispo",
      email: "fabiano@gmail.com",
      dataNascimento: new Date(2008, 7, 8, 19, 23),
      cep: '88888-888',
      dataPagamentoInsc: null
    },
    {
      nome: "Marcelo Coelho",
      email: "marcelo@gmail.com",
      dataNascimento: new Date(2009, 6, 9, 19, 23),
      cep: '99999-999',
      dataPagamentoInsc: null
    },
    {
      nome: "Luismar Sombra",
      email: "sombra@gmail.com",
      dataNascimento: new Date(2000, 5, 10, 19, 23),
      cep: '00000-000',
      dataPagamentoInsc: null
    }
  ];
  
  const criarNovoParticipante = (participante) => {
    const dataNascimento = dayjs(participante.dataNascimento).format('DD/MM/YYYY')
    let dataPagamentoInsc = dayjs(participante.dataPagamentoInsc).format('DD/MM/YYYY')
    if(participante.dataPagamentoInsc == null) {
      dataPagamentoInsc = `
      <button
        data-email="${participante.email}"
        onclick="confirmarPagamento(event)"
      >
        Confirmar pagamento
      </button>
    `
    }

    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataNascimento}</td>
      <td>${participante.cep}</td>
      <td>${dataPagamentoInsc}</td>
    </tr>
    `
  }
  
  const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes) {
      output = output + criarNovoParticipante(participante)
    }
  
    document
    .querySelector('tbody')
    .innerHTML = output
  }
  
  atualizarLista(participantes)
  
  const adicionarParticipante = (event) => {
    event.preventDefault()
    const dados = new FormData(event.target)
    const participante = {
      nome: dados.get('nome'),
      email: dados.get('email'),
      dataNascimento: dados.get('dataNascimento'),
      cep: dados.get('cep'),
      dataPagamento: null
    }

    const participanteExiste = participantes.find(
      (p) => p.email == participante.email
    )
  
    if(participanteExiste) {
      alert('Email já cadastrado!')
      return
    }

    participantes = [participante, ...participantes]
    atualizarLista(participantes)
    
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
    event.target.querySelector('[name="dataNascimento"]').value = ""
    event.target.querySelector('[name="cep"]').value = ""
  }
  const confirmarPagamento = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja fazer a confirmação?' 

    if(confirm(mensagemConfirmacao) == false) {
      return
    }
    const participante = participantes.find(
      (p) => p.email == event.target.dataset.email  
    )
    participante.dataPagamentoInsc = new Date()
    atualizarLista(participantes)
  } 
  atualizarLista(participantes)
