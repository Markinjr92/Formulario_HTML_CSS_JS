let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataNascimento: new Date(2001, 2, 1, 19, 23),
      cep: '11111-111'
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataNascimento: new Date(2002, 2, 23, 19, 23),
      cep: '22222-222'
    },
    {
      nome: "Ana Souza",
      email: "ana@gmail.com",
      dataNascimento: new Date(2003, 0, 3, 19, 23),
      cep: '33333-333'
    },
    {
      nome: "João Silva",
      email: "joao@gmail.com",
      dataNascimento: new Date(2004, 11, 4, 19, 23),
      cep: '44444-444'
    },
    {
      nome: "Maria Oliveira",
      email: "maria@gmail.com",
      dataNascimento: new Date(2005, 10, 5, 19, 23),
      cep: '55555-555'
    },
    {
      nome: "Pedro Santos",
      email: "pedro@gmail.com",
      dataNascimento: new Date(2006, 9, 6, 19, 23),
      cep: '66666-666'
    },
    {
      nome: "Carla Lima",
      email: "carla@gmail.com",
      dataNascimento: new Date(2007, 8, 7, 19, 23),
      cep: '77777-777'
    },
    {
      nome: "Lucas Sousa",
      email: "lucas@gmail.com",
      dataNascimento: new Date(2008, 7, 8, 19, 23),
      cep: '88888-888'
    },
    {
      nome: "Paula Costa",
      email: "paula@gmail.com",
      dataNascimento: new Date(2009, 6, 9, 19, 23),
      cep: '99999-999'
    },
    {
      nome: "Gabriel Almeida",
      email: "gabriel@gmail.com",
      dataNascimento: new Date(2000, 5, 10, 19, 23),
      cep: '00000-000'
    }
  ];
  
  const criarNovoParticipante = (participante) => {
    const dataNascimento = dayjs(participante.dataNascimento).format('DD/MM/YYYY')
    
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
    </tr>
    `
  }
  
  const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes) {
      output = output + criarNovoParticipante(participante)
    }
  
    // substituir informação do HTML
    document
    .querySelector('tbody')
    .innerHTML = output
  }
  
  atualizarLista(participantes)