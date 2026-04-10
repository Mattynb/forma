export interface Discipline {
  id: string;
  title: string;
  hours: number;
  syllabus: string;
  topics: string[];
  bibliography: string[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  disciplines: Discipline[];
}

export const curriculumData: Module[] = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos Bíblicos e Vocacionais",
    description: "Lançar os alicerces epistemológicos e vocacionais do estudante. O foco recai sobre a compreensão da natureza da teologia, a aquisição de ferramentas hermenêuticas para o estudo independente das Escrituras e o estabelecimento de uma espiritualidade robusta.",
    disciplines: [
      {
        id: "1.1",
        title: "Introdução à Teologia e Bibliologia",
        hours: 60,
        syllabus: "Análise prolegomênica da ciência teológica. Investigação sobre a natureza, o método e as fontes da teologia cristã. Estudo da Teologia Própria (Doutrina de Deus) e Bibliologia.",
        topics: [
          "Definição e Tarefa da Teologia",
          "O Método Teológico e as Fontes da Teologia",
          "A Revelação Geral e Especial",
          "A Doutrina das Escrituras (Inspiração e Autoridade)",
          "Inerrância e Infalibilidade",
          "O Cânon das Escrituras",
          "A Existência e Cognoscibilidade de Deus",
          "Os Atributos Incomunicáveis de Deus",
          "Os Atributos Comunicáveis de Deus",
          "A Doutrina da Trindade",
          "A Doutrina da Criação",
          "A Providência Divina"
        ],
        bibliography: [
          "ERICKSON, Millard J. Teologia Sistemática. Vida Nova, 2015.",
          "GEISLER, Norman L. Teologia Sistemática (Vols. 1 e 2). CPAD, 2010.",
          "GEISLER, Norman L.; NIX, William. Introdução Bíblica. Vida, 2006.",
          "GRUDEM, Wayne. Teologia Sistemática. Vida Nova, 2010."
        ]
      },
      {
        id: "1.2",
        title: "Fundamentos da Vocação Pastoral",
        hours: 60,
        syllabus: "Exame teológico e prático da natureza do ministério pastoral. Estudo das qualificações bíblicas, do chamado e da identidade do pastor, com ênfase na integridade e liderança servidora.",
        topics: [
          "A Natureza do Chamado Ministerial",
          "O Chamado Interno e Externo",
          "Qualificações Bíblicas (1 Tm 3; Tt 1)",
          "O Pastor como Mestre e Pregador",
          "O Pastor como Pastor de Ovelhas (Poimênica)",
          "Vida Devocional do Líder",
          "A Família do Pastor",
          "Ética Ministerial",
          "Perigos e Tentações",
          "Liderança e Autoridade Pastoral",
          "Mentoria e Legado",
          "Planejamento de Carreira"
        ],
        bibliography: [
          "MACARTHUR, John. O Ministro Fiel. Fiel, 2004.",
          "DRAPER, James T. Every Christian a Minister.",
          "STOTT, John. O Pastor. Cultura Cristã."
        ]
      },
      {
        id: "1.3",
        title: "Panorama do Antigo Testamento",
        hours: 60,
        syllabus: "Visão abrangente da literatura, história e teologia do Antigo Testamento. Análise da estrutura canônica e história da redenção.",
        topics: [
          "Introdução ao Cânon e Geografia",
          "O Pentateuco (Gênesis)",
          "Êxodo e Lei",
          "Levítico a Deuteronômio",
          "Livros Históricos",
          "A Monarquia",
          "O Livro de Neemias e a Liderança",
          "Livros Poéticos (Salmos e Jó)",
          "Livros de Sabedoria",
          "Profetas Maiores",
          "Profetas Menores",
          "Teologia Bíblica do AT"
        ],
        bibliography: [
          "LASOR, HUBBARD, BUSH. Introdução ao Antigo Testamento. Vida Nova.",
          "GEISLER, Norman. Introdução Bíblica. Vida.",
          "HAYFORD, Jack. Neemias."
        ]
      },
      {
        id: "1.4",
        title: "Introdução à Hermenêutica Bíblica",
        hours: 60,
        syllabus: "Princípios de interpretação bíblica. História da hermenêutica e o método gramático-histórico. A batalha pela inerrância e seus reflexos na interpretação.",
        topics: [
          "Natureza da Hermenêutica",
          "História da Interpretação",
          "O Método Gramático-Histórico e a Inerrância",
          "Análise Contextual e Léxica",
          "A Lógica na Hermenêutica",
          "Interpretando Narrativas",
          "Interpretando Profecia e Apocalíptica",
          "Interpretando Evangelhos e Parábolas",
          "Interpretando Epístolas",
          "Hermenêutica e Cultura",
          "Aplicação (Significância)",
          "A Espiral Hermenêutica"
        ],
        bibliography: [
          "OSBORNE, Grant R. A Espiral Hermenêutica. Vida Nova.",
          "PATTERSON, Paige (Ed.). A Inerrância das Escrituras.",
          "STEIN, Robert H. Guia Básico para a Interpretação da Bíblia. CPAD."
        ]
      },
      {
        id: "1.5",
        title: "Disciplinas Espirituais e Vida de Oração",
        hours: 60,
        syllabus: "Teologia e prática da espiritualidade cristã. As disciplinas como meios de graça. Ênfase especial na teologia da adoração e oração segundo Jack Hayford.",
        topics: [
          "Teologia da Espiritualidade",
          "A Disciplina da Oração (Intercessão)",
          "A Disciplina da Adoração",
          "A Vida Cheia do Espírito",
          "A Disciplina do Jejum",
          "A Disciplina do Estudo",
          "Solitude e Silêncio",
          "Confissão e Purificação",
          "Serviço e Submissão",
          "Elaboração de uma Regra de Vida"
        ],
        bibliography: [
          "FOSTER, Richard. Celebração da Disciplina. Vida.",
          "HAYFORD, Jack. Orar é Conquistar o Impossível. Vida.",
          "HAYFORD, Jack. Adorai Sua Majestade. Quadrangular."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Teologia Bíblica e Prática Pastoral I",
    description: "Aprofundamento no Novo Testamento, Cristologia e Soteriologia, além de fundamentos de Psicologia Pastoral e Ética Cristã.",
    disciplines: [
      {
        id: "2.1",
        title: "Panorama do Novo Testamento",
        hours: 60,
        syllabus: "Introdução crítica e teológica ao NT. Ênfase na cristologia e na missão da igreja primitiva.",
        topics: [
          "Contexto Histórico do NT",
          "Evangelhos Sinóticos",
          "Evangelho de João",
          "Atos dos Apóstolos",
          "Epístolas Paulinas (I)",
          "Epístolas Paulinas (II)",
          "Epístolas da Prisão e Pastorais",
          "Hebreus",
          "Epístolas Gerais",
          "Epístolas Joaninas",
          "Apocalipse",
          "Teologia do NT"
        ],
        bibliography: [
          "CARSON, D.A. et al. Introdução ao Novo Testamento. Vida Nova.",
          "PATTERSON, Paige. Revelation: An Exegetical and Theological Exposition.",
          "DRAPER, James T. Hebrews: The Life That Pleases God."
        ]
      },
      {
        id: "2.2",
        title: "Cristologia e Soteriologia",
        hours: 60,
        syllabus: "Estudo sistemático da Pessoa e Obra de Cristo e da aplicação da salvação. Debate sobre eleição e livre-arbítrio.",
        topics: [
          "A Pessoa de Cristo (Divindade e Humanidade)",
          "A Obra de Cristo (Expiação)",
          "Soteriologia: Eleição e Livre-Arbítrio",
          "O Chamado e a Regeneração",
          "Justificação e Santificação",
          "Segurança da Salvação",
          "Soteriologia Missional"
        ],
        bibliography: [
          "GEISLER, Norman. Eleitos Mas Livres. Vida.",
          "ERICKSON, Millard J. Teologia Sistemática. Vida Nova.",
          "PATTERSON, Paige (Contribuidor). Whosoever Will."
        ]
      },
      {
        id: "2.3",
        title: "Psicologia Pastoral",
        hours: 60,
        syllabus: "Integração criteriosa entre teologia e psicologia. Cuidado da alma e aconselhamento.",
        topics: [
          "Antropologia Teológica",
          "Saúde Mental e Espiritualidade",
          "Depressão e Ansiedade",
          "Cura da Alma",
          "Luto, Vícios e Família"
        ],
        bibliography: [
          "COLLINS, Gary. Aconselhamento Cristão. Vida Nova.",
          "HETZENDORFER, Ruth. Guia de Aconselhamento Pastoral."
        ]
      },
      {
        id: "2.4",
        title: "Prática Devocional e Culto (Liturgia)",
        hours: 60,
        syllabus: "Teologia do culto cristão. Elementos da liturgia e liderança de adoração.",
        topics: [
          "Teologia Bíblica do Culto",
          "Adoração como Governo",
          "Estrutura Litúrgica",
          "Música e Louvor",
          "Os Sacramentos (Ordenanças)",
          "Liderança do Culto"
        ],
        bibliography: [
          "HAYFORD, Jack. Adorai Sua Majestade. Quadrangular.",
          "ALLMEN, J.J. von. O Culto Cristão. ASTE."
        ]
      },
      {
        id: "2.5",
        title: "Ética Cristã",
        hours: 60,
        syllabus: "Fundamentação bíblica da ética. Análise de sistemas éticos e dilemas contemporâneos.",
        topics: [
          "Fundamentos da Ética Cristã",
          "Sistemas Éticos e o Absolutismo Graduado",
          "Bioética",
          "Ética Sexual e Familiar",
          "Ética Social e Política"
        ],
        bibliography: [
          "GEISLER, Norman L. Ética Cristã. Vida Nova.",
          "STOTT, John. O Cristão em uma Sociedade não Cristã. Thomas Nelson."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Liderança e Ministério Pastoral",
    description: "Foco na liderança prática, homilética, história da igreja e missões urbanas.",
    disciplines: [
      {
        id: "3.1",
        title: "Liderança Cristã",
        hours: 60,
        syllabus: "Teologia e prática da liderança eclesiástica. Caráter, visão e gestão de crises.",
        topics: [
          "Teologia da Liderança (Neemias)",
          "O Caráter do Líder",
          "Liderança em Tempos de Crise",
          "Visão e Planejamento",
          "Gestão de Equipes"
        ],
        bibliography: [
          "HAYFORD, Jack. Neemias.",
          "DRAPER, James T. Liderança Cristã.",
          "MAXWELL, John. As 21 Irrefutáveis Leis da Liderança."
        ]
      },
      {
        id: "3.2",
        title: "Homilética (Pregação Bíblica)",
        hours: 60,
        syllabus: "Teoria e prática da pregação expositiva. O modelo 'Text-Driven' (Guiado pelo Texto).",
        topics: [
          "Teologia da Pregação",
          "Pregação Guiada pelo Texto",
          "Hermenêutica para a Pregação",
          "Tipos de Sermão",
          "A Comunicação e o Apelo",
          "Laboratório de Pregação"
        ],
        bibliography: [
          "ROBINSON, Haddon. Pregação Bíblica. Shedd.",
          "PATTERSON, Paige (et al). Text-Driven Preaching.",
          "DRAPER, James T. O Desafio da Palavra. JUERP."
        ]
      },
      {
        id: "3.3",
        title: "Aconselhamento Cristão",
        hours: 60,
        syllabus: "Fundamentos e prática do aconselhamento pastoral.",
        topics: [
          "Introdução ao Aconselhamento",
          "O Papel do Espírito Santo",
          "Ferramentas Práticas",
          "Ética no Aconselhamento"
        ],
        bibliography: [
          "HETZENDORFER, Ruth. Guia de Aconselhamento Pastoral.",
          "HAYFORD, Jack. (Estudos sobre cura da alma)."
        ]
      },
      {
        id: "3.4",
        title: "História da Igreja",
        hours: 60,
        syllabus: "Panorama histórico do cristianismo.",
        topics: [
          "Igreja Primitiva e Pais da Igreja",
          "Reforma Protestante",
          "História Batista e a Ressurgência Conservadora",
          "Cristianismo no Brasil"
        ],
        bibliography: [
          "GEISLER, Norman. Enciclopédia de Apologética.",
          "PATTERSON, Paige. (Estudos sobre história batista)."
        ]
      },
      {
        id: "3.5",
        title: "Evangelismo e Missões Urbanas",
        hours: 60,
        syllabus: "Teologia e prática da missão. A Grande Comissão e a cidade.",
        topics: [
          "A Grande Comissão",
          "Teologia da Cidade",
          "Estratégias de Evangelismo",
          "Plantação de Igrejas"
        ],
        bibliography: [
          "PATTERSON, Paige. (Teologia de missões).",
          "HAYFORD, Jack. (Teologia da cidade)."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Teologia Avançada e Desafios Contemporâneos",
    description: "Aprofundamento em teologia sistemática, apologética e questões contemporâneas de gênero e liderança.",
    disciplines: [
      {
        id: "4.1",
        title: "Teologia Sistemática I (Aprofundamento)",
        hours: 60,
        syllabus: "Estudo dogmático profundo das doutrinas de Deus, Homem e Pecado.",
        topics: [
          "Metodologia Sistemática",
          "Teologia Própria Avançada",
          "Hamartiologia"
        ],
        bibliography: [
          "GEISLER, Norman. Teologia Sistemática.",
          "ERICKSON, Millard J. Teologia Sistemática."
        ]
      },
      {
        id: "4.2",
        title: "Apologética Cristã",
        hours: 60,
        syllabus: "Defesa racional da fé. Metodologias e desafios contemporâneos.",
        topics: [
          "Metodologia Apologética",
          "Fé e Razão",
          "O Problema do Mal",
          "Apologética Científica",
          "Pluralismo Religioso"
        ],
        bibliography: [
          "GEISLER, Norman. Enciclopédia de Apologética.",
          "MORELAND, J.P. / PATTERSON, Paige. Evolução Teísta."
        ]
      },
      {
        id: "4.3",
        title: "Teologia da Missão",
        hours: 60,
        syllabus: "Integração entre soteriologia missional e prática evangelística.",
        topics: [
          "Teologia das Religiões",
          "Defesa do Exclusivismo",
          "Soteriologia de Geisler e Patterson"
        ],
        bibliography: [
          "PATTERSON, Paige. Whosoever Will.",
          "GEISLER, Norman. Eleitos Mas Livres."
        ]
      },
      {
        id: "4.4",
        title: "Liderança e Administração Eclesiástica",
        hours: 60,
        syllabus: "Princípios de gestão organizacional cristã e liderança servidora.",
        topics: [
          "Gestão Eclesiástica",
          "Orçamento e Planejamento Estratégico",
          "Condução de Conselhos"
        ],
        bibliography: [
          "DRAPER, Jimmy. (Experiência LifeWay).",
          "MAXWELL, John. As 21 Irrefutáveis Leis da Liderança."
        ]
      },
      {
        id: "4.5",
        title: "Família, Sexualidade e Gênero",
        hours: 60,
        syllabus: "Visão bíblica da família. Papéis de gênero e desafios culturais.",
        topics: [
          "Teologia do Casamento",
          "Papéis de Gênero (Complementarismo)",
          "Questões Contemporâneas"
        ],
        bibliography: [
          "PATTERSON, Paige e Dorothy. (Complementarismo).",
          "GEISLER, Norman. Ética Cristã."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Formação Integral e Projeto Final",
    description: "Conclusão da teologia sistemática, mentoria, revitalização de igrejas e trabalho final.",
    disciplines: [
      {
        id: "5.1",
        title: "Teologia Sistemática II (Eclesiologia, Pneumatologia, Escatologia)",
        hours: 60,
        syllabus: "A Igreja, o Espírito Santo e as Últimas Coisas.",
        topics: [
          "Eclesiologia",
          "Pneumatologia",
          "Escatologia"
        ],
        bibliography: [
          "ERICKSON, Millard J. Teologia Sistemática.",
          "HAYFORD, Jack. (Pneumatologia).",
          "GEISLER, Norman. Teologia Sistemática."
        ]
      },
      {
        id: "5.2",
        title: "Mentoria e Discipulado",
        hours: 60,
        syllabus: "Investimento na próxima geração de pastores e discipulado intencional.",
        topics: [
          "Mentoria de Líderes",
          "O Conceito de 'Passar o Bastão'",
          "Discipulado Intencional"
        ],
        bibliography: [
          "DRAPER, Jimmy. (Mentoria).",
          "STOTT, John. O Pastor."
        ]
      },
      {
        id: "5.3",
        title: "Plantação e Revitalização de Igrejas",
        hours: 60,
        syllabus: "Estudos de caso e estratégias para crescimento e renovação espiritual.",
        topics: [
          "O Pastor e o Crescimento",
          "Adoração como Foco",
          "Saúde Espiritual vs Marketing"
        ],
        bibliography: [
          "HAYFORD, Jack. (Church on the Way).",
          "DRAPER, Jimmy. (Revitalização)."
        ]
      },
      {
        id: "5.4",
        title: "Cultura e Cosmovisão Cristã",
        hours: 60,
        syllabus: "Análise de cosmovisões e apologética cultural.",
        topics: [
          "Cosmovisão e Cultura",
          "Análise de Cosmovisões",
          "Pós-Modernismo",
          "Engajamento Cultural"
        ],
        bibliography: [
          "GEISLER, Norman. (Cosmovisões).",
          "ERICKSON, Millard J. Postmodernizing the Faith."
        ]
      },
      {
        id: "5.5",
        title: "Trabalho de Conclusão Pastoral (Projeto Ministerial)",
        hours: 60,
        syllabus: "Desenvolvimento de um projeto prático que integre Saber, Ser e Fazer.",
        topics: [
          "Desenvolvimento de Projeto",
          "Integração Teológica e Prática",
          "Aplicação a Problemas Reais"
        ],
        bibliography: [
          "GEISLER, Norman. (Metodologia).",
          "PATTERSON, Paige. (Exegese)."
        ]
      }
    ]
  }
];

export const introText = `A presente proposta curricular revisada para a formação pastoral, mantendo a duração de 30 meses e carga horária total de 1.800 horas, fundamenta-se na premissa inegociável de que a educação teológica não é um mero acúmulo de informações acadêmicas, mas um processo holístico de paideia cristã, visando a formação do caráter, a competência exegética e a habilidade prática ministerial.

A arquitetura do curso foi desenhada para operar na interseção de três esferas de competência: o Saber (ortodoxia), o Ser (ortopatia) e o Fazer (ortopraxia). A teologia, conforme definida neste projeto, segue a máxima anselmiana de fides quaerens intellectum — a fé em busca de entendimento.`;

export const conclusionText = `A implementação deste currículo de Formação Pastoral, agora enriquecido com a inclusão estratégica de Norman Geisler, Millard Erickson, Paige Patterson, Jimmy Draper e Jack Hayford, representa um compromisso renovado com a excelência teológica e a vitalidade espiritual. Este programa não apenas informa, mas forma "teólogos-pastores" enraizados na inerrância bíblica, capacitados na defesa da fé, fervorosos na adoração e íntegros na liderança. Ao beber dessas fontes, o aluno é inserido em uma tradição viva que une a mente erudita ao coração ardente, preparado para os desafios da igreja no século XXI.`;
