const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    }
  ]


  const alunosComMedia = alunos.map((aluno) => {
    const { notas } = aluno;
    let somaNotas = 0;
  
    for (let i = 0; i < notas.length; i++) {
      somaNotas += notas[i].nota;
    }
  
    const media = somaNotas / notas.length;
  
    return {
      ...aluno,
      mediaGeral: media
    };
  });
  
  console.log(alunosComMedia);
  
  
  
  
  
  