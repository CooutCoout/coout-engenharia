import { text } from "stream/consumers";

export const dadosDaEmpresa = [
  {
    id: 1,
    title: "Missão",
    text: "Nossa missão é proporcionar soluções de SST que atendam às necessidades específicas de cada cliente. Estamos dedicados a oferecer serviços de alta qualidade, com um enfoque técnico apurado, visando sempre a segurança e o bem-estar dos trabalhadores. Trabalhamos lado a lado com nossos clientes para garantir que suas demandas sejam atendidas com a máxima eficácia e inovação.",
  },
  {
    id: 2,
    title: "Visão",
    text: "Nossa visão é ser a referência em engenharia de segurança do trabalho, destacando-nos pela excelência na melhoria contínua dos processos. Comprometemo-nos a identificar e implementar contramedidas ideais antes da atuação dos colaboradores, garantindo um ambiente de trabalho seguro e eficiente. Almejamos promover a conscientização sobre a importância dessas áreas e ser a escolha preferencial de empresas que buscam elevar seus padrões de Segurança e Saúde no Trabalho (SST) ao mais alto nível.",
  },
  {
    id: 3,
    title: "Valores",
    text: "Na COOUT Engenharia, valorizamos a vida e mantemos um compromisso inabalável com a ética profissional, enquanto contamos com uma equipe altamente experiente e tecnicamente qualificada. Colocamos a saúde e a segurança das pessoas em primeiro lugar, adotando práticas que respeitam o meio ambiente e promovem a sustentabilidade. Buscamos constantemente soluções inovadoras para atender às necessidades dos nossos clientes, sempre com um atendimento personalizado que garante a satisfação total.",
  },
];

export const dadosServicos = [
  {
    id: 1,
    title: "SEGURANÇA DO TRABALHO E MEIO AMBIENTE",
    text: "Garantimos a conformidade com a legislação vigente para criar um ambiente de trabalho seguro e saudável através da Prevenção de Acidentes e Doenças Ocupacionais.",
    image: "/worksafety.jpg",
    page: "/segurancadotrabalho",
  },
  {
    id: 2,
    title: "TREINAMENTOS EM SST",
    text: "Realizamos Treinamentos Dinâmicos e Atualizados para assesugurar o a aplicação da legislação além do preparo fiscalizações, auditorias e situações de risco.",
    image: "/treinamentosst.jpg",
    page: "/treinamentos",
  },
  {
    id: 3,
    title: "NR 13 - CALDEIRAS E VASOS DE PRESSÃO",
    text: "Atendemos as exigências da NR 13, garantindo a segurança e a integridade dos equipamentos, além de promover a eficiência e a produtividade.",
    image: "/nr13.jpg",
    page: "/laudo-nr13",
  },
  {
    id: 4,
    title: "NR 12 - MÁQUINAS E EQUIPAMENTOS",
    text: "Realizamos a adequação de máquinas e equipamentos às normas da NR 12, garantindo a segurança dos colaboradores e a conformidade com a legislação.",
    image: "/nr12.jpg",
    page: "/laudo-nr12",
  }

];

export const seguranDoTrabalhoAccordion = [
  {
    id: 1,
    question: "Programa de Gerenciamento de Riscos",
    answer:
      "Desenvolvemos e implementamos um plano estratégico para identificar e gerenciar riscos associados às atividades laborais, ajudando a prevenir acidentes e lesões no ambiente de trabalho.",
    sigla: "PGR",
  },
  {
    id: 2,
    question: "Levantamento Técnico das Condições Ambientais do Trabalho",
    answer:
      "Realizamos uma análise técnica completa das condições de trabalho, identificando fatores que possam impactar a saúde dos colaboradores e garantindo que todas as exigências legais sejam atendidas.",
    sigla: "LTCAT",
  },
  {
    id: 3,
    question: "Programa de Prevenção de Riscos em Prensas e Similares",
    answer:
      "Elaboramos programas específicos para prevenir riscos em equipamentos de prensas e similares, assegurando a operação segura e eficiente desses maquinários.",
    sigla: "PPRPS",
  },
  {
    id: 4,
    question: "Perfil Profissiográfico Previdenciário",
    answer:
      "Preparamos o Perfil Profissiográfico Previdenciário para cada funcionário, detalhando suas condições de trabalho e histórico de exposições, essencial para a previdência social e para a proteção dos direitos dos trabalhadores.",
    sigla: "PPP",
  },
  {
    id: 5,
    question: "Laudos Técnicos de Insalubridade",
    answer:
      "Emitimos laudos técnicos para avaliar condições insalubres e fornecer recomendações para melhorar a segurança e a saúde no ambiente de trabalho, conforme exigido pela NR15.",
    sigla: "NR15",
  },
  {
    id: 6,
    question: "Periculosidade",
    answer:
      "Realizamos avaliações técnicas para identificar e classificar riscos de periculosidade, garantindo que todas as medidas de segurança sejam implementadas para proteger seus colaboradores.",
    sigla: "NR16",
  },
  {
    id: 7,
    question: "Ergonomia",
    answer:
      "Analisamos e ajustamos as condições ergonômicas do ambiente de trabalho para melhorar o conforto e a eficiência dos colaboradores, reduzindo o risco de doenças relacionadas ao trabalho.",
    sigla: "NR17",
  },
  {
    id: 8,
    question:
      "Laudo de Sistema de Proteção Contra Descargas Atmosféricas (Para-raios)",
    answer:
      "Elaboramos laudos técnicos para garantir que seu sistema de para-raios esteja em conformidade e funcionando corretamente, protegendo suas instalações contra descargas atmosféricas.",
    sigla: "SPDA",
  },
];

export const treinamentoAccordion = [
  {
    id: 1,
    question: "Curso de Gerenciamento de Riscos Ocupacionais",
    answer:
      "Este curso é fundamental para identificar, avaliar e gerenciar os riscos ocupacionais dentro da sua empresa. Com ele, sua equipe aprenderá a desenvolver e implementar estratégias eficazes para minimizar riscos e melhorar a segurança no ambiente de trabalho.",
    sigla: "NR01",
  },
  {
    id: 2,
    question: "Curso de Comissão Interna de Prevenção de Acidentes (CIPA)",
    answer:
      "A CIPA é importante para a segurança no trabalho. Neste curso, treinamos os membros da comissão para identificar riscos, promover práticas seguras e implementar ações preventivas, garantindo um ambiente de trabalho mais seguro e conforme as normas.",
    sigla: "NR05",
  },
  {
    id: 3,
    question: "Curso de Equipamentos de Proteção Individual (EPIs)",
    answer:
      "Este curso ensina a correta utilização, conservação e escolha dos Equipamentos de Proteção Individual. Capacite sua equipe para utilizar EPIs de forma eficiente e reduzir significativamente o risco de acidentes e doenças relacionadas ao trabalho.",
    sigla: "NR06",
  },
  {
    id: 4,
    question: "Curso de Primeiros Socorros",
    answer:
      "Capacite seus colaboradores para atuar em situações de emergência com eficiência. Este curso aborda técnicas de primeiros socorros essenciais para fornecer assistência imediata em caso de acidentes, ajudando a salvar vidas e reduzir o impacto de lesões.",
    sigla: "NR07",
  },
  {
    id: 5,
    question:
      "Curso Básico de Segurança em Instalações e Serviços com Eletricidade",
    answer:
      "A segurança em trabalhos com eletricidade é muito importante. Oferecemos treinamento para garantir que sua equipe esteja preparada para lidar com instalações e serviços elétricos de maneira segura, prevenindo acidentes e garantindo conformidade com a NR10.",
    sigla: "NR10",
  },
  {
    id: 6,
    question:
      "Curso de Segurança no Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    answer:
      "Este curso foca na segurança durante o transporte e manuseio de materiais. Ensina práticas seguras para movimentação e armazenamento, ajudando a prevenir acidentes e aumentar a eficiência operacional.",
    sigla: "NR11",
  },
  {
    id: 7,
    question: "Curso de Segurança no Trabalho em Máquinas e Equipamentos",
    answer:
      "Aprenda a garantir a segurança em operações com máquinas e equipamentos. O curso aborda medidas preventivas e corretivas para proteger os operadores e minimizar riscos associados ao uso de maquinário.",
    sigla: "NR12",
  },
  {
    id: 8,
    question:
      "Curso de Segurança na Operação de Vasos de Pressão, Caldeiras e Tubulação",
    answer:
      "Ensine sua equipe a operar vasos de pressão, caldeiras e sistemas de tubulação de forma segura e eficiente. O curso cobre procedimentos de segurança e manutenção para evitar acidentes e garantir a integridade dos equipamentos.",
    sigla: "NR13",
  },
  {
    id: 9,
    question: "Curso de Atividades e Operações Insalubres",
    answer:
      "Este curso aborda as condições insalubres no ambiente de trabalho e como mitigá-las. Capacite sua equipe para identificar e reduzir os riscos associados a atividades insalubres, melhorando a saúde e a segurança dos trabalhadores.",
    sigla: "NR15",
  },
  {
    id: 10,
    question: "Curso de Ergonomia no Trabalho",
    answer:
      "Melhore a ergonomia no seu ambiente de trabalho com este curso. Focado na adaptação das condições de trabalho para promover conforto e reduzir lesões, o treinamento ajuda a otimizar o desempenho e a saúde dos colaboradores.",
    sigla: "NR17",
  },
  {
    id: 11,
    question:
      "Curso de Condições e Meio Ambiente de Trabalho na Indústria da Construção",
    answer:
      "Este curso é essencial para garantir a segurança e conformidade nas condições e no meio ambiente da construção civil. Aborda práticas seguras e regulamentações específicas para proteger os trabalhadores e assegurar a qualidade do ambiente de trabalho.",
    sigla: "NR18",
  },
  {
    id: 12,
    question:
      "Curso de Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    answer:
      "Capacite sua equipe para lidar com inflamáveis e combustíveis de maneira segura. O curso ensina práticas de manuseio e armazenamento para prevenir acidentes e garantir a segurança no ambiente de trabalho.",
    sigla: "NR20",
  },
  {
    id: 13,
    question: "Curso de Formação de Brigada de Incêndio",
    answer:
      "Prepare sua equipe para responder eficazmente a situações de incêndio. O curso cobre técnicas de combate a incêndios, evacuação e primeiros socorros, garantindo que sua empresa esteja pronta para enfrentar emergências.",
    sigla: "NR23",
  },
  {
    id: 14,
    question: "Curso de Sinalização de Segurança",
    answer:
      "Aprenda a implementar e manter sinalizações de segurança eficazes. Este curso ensina a importância da sinalização correta para prevenir acidentes e garantir que todos os colaboradores estejam cientes dos riscos e procedimentos de segurança.",
    sigla: "NR26",
  },
  {
    id: 15,
    question: "Curso de Medidas de Segurança em Espaços Confinados",
    answer:
      "O treinamento foca na segurança ao trabalhar em espaços confinados. Ensina práticas e procedimentos para garantir a segurança dos trabalhadores, prevenir acidentes e realizar operações seguras em ambientes de difícil acesso.",
    sigla: "NR33",
  },
  {
    id: 16,
    question: "Curso Básico de Segurança para Trabalhos a Quente",
    answer:
      "Prepare sua equipe para realizar trabalhos a quente com segurança. O curso aborda técnicas e procedimentos para prevenir incêndios e outros acidentes relacionados a operações que envolvem calor intenso.",
    sigla: "NR34",
  },
  {
    id: 17,
    question: "Curso de Segurança no Trabalho em Altura",
    answer:
      "Capacite seus colaboradores para realizar trabalhos em altura de forma segura. O curso cobre técnicas de prevenção de quedas, uso de equipamentos de proteção e procedimentos de emergência, garantindo a segurança em atividades realizadas acima do solo.",
    sigla: "NR35",
  },
  {
    id: 18,
    question: "Comissão Interna de Prevenção de Acidentes",
    answer:
      "Forme uma equipe eficaz para promover a segurança interna da empresa. O treinamento da CIPA foca na identificação de riscos, promoção de práticas seguras e implementação de medidas preventivas.",
    sigla: "CIPA",
  },
  {
    id: 19,
    question: "Semana Interna de Prevenção de Acidentes de Trabalho",
    answer:
      "Organize e participe de eventos de conscientização sobre segurança no trabalho. A SIPAT promove a educação contínua e a sensibilização dos colaboradores sobre a importância da segurança e prevenção de acidentes.",
    sigla: "SIPAT",
  },
  {
    id: 20,
    question: "Direção Defensiva",
    answer:
      "Oferecemos cursos de direção defensiva para melhorar a segurança no transporte de colaboradores. Ensina técnicas para prevenir acidentes e garantir a segurança nas estradas, contribuindo para a proteção dos seus funcionários e veículos.",
    sigla: "--",
  },
];

export const dataNr13 = [
  {
    id: 1,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  },
  {
    id: 2,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  },
  {
    id: 3,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  }

]

export const dataNr12 = [
  {
    id: 1,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  },
  {
    id: 2,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  },
  {
    id: 3,
    title: "Inspeção Abrangente",
    text: "Nossa equipe especializada realiza inspeções completas, tanto internas quanto externas, para garantir que seu equipamento cumpra integralmente os requisitos da NR13",
  }

]