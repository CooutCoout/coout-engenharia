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
    title: "NR 12 - MÁQUINAS E EQUIPAMENTOS",
    text: "Realizamos a adequação de máquinas e equipamentos às normas da NR 12, garantindo a segurança dos colaboradores e a conformidade com a legislação.",
    image: "/nr12.jpg",
    page: "/laudo-nr12",
  },
  {
    id: 4,
    title: "NR 13 - CALDEIRAS E VASOS DE PRESSÃO",
    text: "Atendemos as exigências da NR 13, garantindo a segurança e a integridade dos equipamentos, além de promover a eficiência e a produtividade.",
    image: "/nr13.jpg",
    page: "/laudo-nr13",
  },
  {
    id: 5,
    title: "Auto de Vistoria do Corpo de Bombeiros (AVCB/CLCB)",
    text: "Emitimos o AVCB/CLCB, certificando que seu imóvel cumpre as normas de segurança contra incêndio, essencial para a legalização e proteção do local.",
    image: "/avcb.jpg",
    page: "/laudo-avcbclcb",
  },
  {
    id: 6,
    title: "Equipamentos de Medição e Segurança",
    text: "Garantindo um Ambiente de Trabalho Seguro e Conformidade Total",
    image: "/equipamentos.jpg",
    page: "/laudo-equipamentos-medicao-seguranca",
  }
];

export const seguranDoTrabalhoAccordion = [
  {
    id: 1,
    question: "Programa de Gerenciamento de Riscos",
    answer:
      "Desenvolvemos e implementamos um plano estratégico para identificar e gerenciar riscos associados às atividades laborais, ajudando a prevenir acidentes e lesões no ambiente de trabalho.",
    sigla: "PGR",
    image: "/pgr.jpg",
  },
  {
    id: 2,
    question: "Levantamento Técnico das Condições Ambientais do Trabalho",
    answer:
      "Realizamos uma análise técnica completa das condições de trabalho, identificando fatores que possam impactar a saúde dos colaboradores e garantindo que todas as exigências legais sejam atendidas.",
    sigla: "LTCAT",
    image: "/ltcat.jpg",
  },
  {
    id: 4,
    question: "Perfil Profissiográfico Previdenciário",
    answer:
      "Preparamos o Perfil Profissiográfico Previdenciário para cada funcionário, detalhando suas condições de trabalho e histórico de exposições, essencial para a previdência social e para a proteção dos direitos dos trabalhadores.",
    sigla: "PPP",
    image: "/ppp.jpg",
  },
  {
    id: 5,
    question: "Laudos Técnicos de Insalubridade",
    answer:
      "Emitimos laudos técnicos para avaliar condições insalubres e fornecer recomendações para melhorar a segurança e a saúde no ambiente de trabalho, conforme exigido pela NR15.",
    sigla: "NR15",
    image: "/nr15.jpg",
  },
  {
    id: 6,
    question: "Periculosidade",
    answer:
      "Realizamos avaliações técnicas para identificar e classificar riscos de periculosidade, garantindo que todas as medidas de segurança sejam implementadas para proteger seus colaboradores.",
    sigla: "NR16",
    image: "/nr16.jpg",
  },
  {
    id: 7,
    question: "Ergonomia",
    answer:
      "Analisamos e ajustamos as condições ergonômicas do ambiente de trabalho para melhorar o conforto e a eficiência dos colaboradores, reduzindo o risco de doenças relacionadas ao trabalho.",
    sigla: "NR17",
    image: "/nr17.png",
  },
  {
    id: 8,
    question:
      "Laudo de Sistema de Proteção Contra Descargas Atmosféricas (Para-raios)",
    answer:
      "Elaboramos laudos técnicos para garantir que seu sistema de para-raios esteja em conformidade e funcionando corretamente, protegendo suas instalações contra descargas atmosféricas.",
    sigla: "SPDA",
    image: "/spda.jpg",
  },
];

export const avcbAccordion = [
  {
    id: 1,
    title: "Obtenção do AVCB e CLCB",
    text: "AVCB (Auto de Vistoria do Corpo de Bombeiros): Conduzimos o processo de obtenção deste documento fundamental que confirma que sua edificação atende a todos os requisitos de segurança e está aprovada pelo Corpo de Bombeiros.",
    text2: "CLCB (Certificado de Licenciamento do Corpo de Bombeiros): Facilitamos a obtenção deste certificado, que, assim como o AVCB, valida que sua edificação está em conformidade com as normas de segurança.",
  },
  {
    id: 2,
    title: "Avaliação Completa de Segurança",
    text: "Realizamos uma inspeção detalhada para identificar e corrigir quaisquer não conformidades antes da solicitação dos documentos",
    text2: "Implementamos as medidas necessárias para garantir que sua edificação esteja totalmente alinhada com os padrões exigidos pelo Corpo de Bombeiros",
  },
  {
    id: 3,
    title: "Consultoria e Regularização",
    text: "Realizamos uma inspeção detalhada para identificar e corrigir quaisquer não conformidades antes da solicitação dos documentos",
    text2: "Implementamos as medidas necessárias para garantir que sua edificação esteja totalmente alinhada com os padrões exigidos pelo Corpo de Bombeiros",
  },
];

export const equipamentosMedicaoAccordion = [
  {
    id: 1,
    title: "Decibelímetro",
    text: "Monitore e controle o nível de ruído no ambiente para garantir que os limites permitidos sejam respeitados, protegendo a saúde auditiva dos colaboradores e prevenindo desconforto.",
  },
  {
    id: 2,
    title: "Termômetro de Globo e Medidor de Stress Térmico",
    text: "Avalie a temperatura ambiente, do globo, bulbo úmido e seco, umidade relativa e o índice IBUTG. Ideal para monitorar e gerenciar o estresse térmico em ambientes quentes, assegurando condições de trabalho seguras.",
  },
  {
    id: 3,
    title: "Luxímetro Digital",
    text: "Meça a intensidade da luz no local de trabalho para garantir que a iluminação esteja adequada conforme as normas, prevenindo fadiga ocular e melhorando a visibilidade e produtividade.",
  },
  {
    id: 4,
    title: "Termo-higrômetro Digital",
    text: "Monitore a temperatura e umidade do ambiente e registre os dados para análise posterior. Mantenha condições ambientais ideais e previna problemas relacionados a extremos de temperatura e umidade.",
  },
  {
    id: 5,
    title: "Dosímetro de Ruído",
    text: "Meça e armazene níveis de pressão sonora ao longo do tempo, oferecendo uma visão clara da exposição ao ruído durante a jornada de trabalho e ajudando a proteger a saúde auditiva dos trabalhadores.",
  },
  {
    id: 6,
    title: "Detector de Oxigênio e Explosímet",
    text: "Detecte níveis de oxigênio em espaços confinados e monitore gases explosivos com alarmes sonoros e vibratórios. Essencial para prevenir acidentes graves, como explosões e falta de oxigênio, garantindo segurança em áreas de risco.",
  },
  {
    id: 7,
    title: "Equipamentos de Medição Química",
    text: "Monitore e detecte a presença de substâncias químicas no ambiente de trabalho. Garantia de que os níveis de exposição química estejam dentro dos limites seguros, protegendo a saúde dos colaboradores e assegurando conformidade com as normas.",
  },
];

export const treinamentoAccordion = [
  {
    id: 1,
    question: "Curso de Gerenciamento de Riscos Ocupacionais",
    answer:
      "Este curso é fundamental para identificar, avaliar e gerenciar os riscos ocupacionais dentro da sua empresa. Com ele, sua equipe aprenderá a desenvolver e implementar estratégias eficazes para minimizar riscos e melhorar a segurança no ambiente de trabalho.",
    sigla: "NR01",
    image: "/nr01.jpg",
  },
  {
    id: 2,
    question: "Curso de Comissão Interna de Prevenção de Acidentes (CIPA)",
    answer:
      "A CIPA é importante para a segurança no trabalho. Neste curso, treinamos os membros da comissão para identificar riscos, promover práticas seguras e implementar ações preventivas, garantindo um ambiente de trabalho mais seguro e conforme as normas.",
    sigla: "NR05",
    image: "/nr05.jpg",
  },
  {
    id: 3,
    question: "Curso de Equipamentos de Proteção Individual (EPIs)",
    answer:
      "Este curso ensina a correta utilização, conservação e escolha dos Equipamentos de Proteção Individual. Capacite sua equipe para utilizar EPIs de forma eficiente e reduzir significativamente o risco de acidentes e doenças relacionadas ao trabalho.",
    sigla: "NR06",
    image: "/nr06.jpg",
  },
  {
    id: 5,
    question:
      "Curso Básico de Segurança em Instalações e Serviços com Eletricidade",
    answer:
      "A segurança em trabalhos com eletricidade é muito importante. Oferecemos treinamento para garantir que sua equipe esteja preparada para lidar com instalações e serviços elétricos de maneira segura, prevenindo acidentes e garantindo conformidade com a NR10.",
    sigla: "NR10",
    image: "/nr10.jpg",
  },
  {
    id: 6,
    question:
      "Curso de Segurança no Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    answer:
      "Este curso fornece conhecimentos essenciais para a segurança durante o transporte, movimentação, armazenamento e manuseio de materiais. Aprenda a operar e gerenciar diversos tipos de máquinas e equipamentos para garantir um ambiente de trabalho seguro e eficiente.",
    topicItems: {
      title: "Equipamentos de Transporte e Movimentação",
      items: [
        {
          id: 1,
          title: "Paleteiras Manuais e Elétricas:",
          text: "Utilizadas para movimentar paletes e cargas pesadas de forma eficiente. Inclui treinamento em técnicas seguras de operação e manutenção.",
        },
        {
          id: 2,
          title: "Empilhadeiras (Forklifts):",
          text: "Máquinas essenciais para elevar e transportar materiais em diferentes alturas. O curso aborda operação segura, inspeção e manutenção preventiva.",
        },
        {
          id: 3,
          title: "Guindastes e Pontes Rolantes:",
          text: "Equipamentos para levantar e movimentar cargas pesadas em ambientes industriais e armazéns. Envolve práticas seguras de operação, sinalização e manutenção.",
        },
        {
          id: 4,
          title: "Transpaletes:",
          text: "Equipamentos para movimentar cargas em pequenas distâncias dentro de armazéns e centros de distribuição. O curso ensina o uso correto para evitar acidentes.", 
        }
      ],
    },
    sigla: "NR11",
    image: "/nr11.jpg",
  },
  {
    id: 7,
    question: "Curso de Segurança no Trabalho em Máquinas e Equipamentos",
    answer:
      "Aprenda a garantir a segurança em operações com máquinas e equipamentos. O curso aborda medidas preventivas e corretivas para proteger os operadores e minimizar riscos associados ao uso de maquinário.",
    sigla: "NR12",
    image: "/nr12.jpg",
  },
  {
    id: 8,
    question:
      "Curso de Segurança na Operação de Vasos de Pressão, Caldeiras e Tubulação",
    answer:
      "Ensine sua equipe a operar vasos de pressão, caldeiras e sistemas de tubulação de forma segura e eficiente. O curso cobre procedimentos de segurança e manutenção para evitar acidentes e garantir a integridade dos equipamentos.",
    sigla: "NR13",
    image: "/nr13.jpg",
  },
  {
    id: 9,
    question: "Curso de Atividades e Operações Insalubres",
    answer:
      "Este curso aborda as condições insalubres no ambiente de trabalho e como mitigá-las. Capacite sua equipe para identificar e reduzir os riscos associados a atividades insalubres, melhorando a saúde e a segurança dos trabalhadores.",
    sigla: "NR15",
    image: "/nr15.jpg",
  },
  {
    id: 10,
    question: "Curso de Ergonomia no Trabalho",
    answer:
      "Melhore a ergonomia no seu ambiente de trabalho com este curso. Focado na adaptação das condições de trabalho para promover conforto e reduzir lesões, o treinamento ajuda a otimizar o desempenho e a saúde dos colaboradores.",
    sigla: "NR17",
    image: "/nr17.png",
  },
  {
    id: 11,
    question:
      "Curso de Condições e Meio Ambiente de Trabalho na Indústria da Construção",
    answer:
      "Este curso é essencial para garantir a segurança e conformidade nas condições e no meio ambiente da construção civil. Aborda práticas seguras e regulamentações específicas para proteger os trabalhadores e assegurar a qualidade do ambiente de trabalho.",
    sigla: "NR18",
    image: "/nr18.jpg",
  },
  {
    id: 12,
    question:
      "Curso de Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    answer:
      "Capacite sua equipe para lidar com inflamáveis e combustíveis de maneira segura. O curso ensina práticas de manuseio e armazenamento para prevenir acidentes e garantir a segurança no ambiente de trabalho.",
    sigla: "NR20",
    image: "/nr20.jpg",
  },
  {
    id: 13,
    question: "Curso de Formação de Brigada de Incêndio",
    answer:
      "Prepare sua equipe para responder eficazmente a situações de incêndio. O curso cobre técnicas de combate a incêndios, evacuação e primeiros socorros, garantindo que sua empresa esteja pronta para enfrentar emergências.",
    sigla: "NR23",
    image: "/nr23.png",
  },
  {
    id: 14,
    question: "Curso de Sinalização de Segurança",
    answer:
      "Aprenda a implementar e manter sinalizações de segurança eficazes. Este curso ensina a importância da sinalização correta para prevenir acidentes e garantir que todos os colaboradores estejam cientes dos riscos e procedimentos de segurança.",
    sigla: "NR26",
    image: "/nr26.jpg",
  },
  {
    id: 15,
    question: "Curso de Medidas de Segurança em Espaços Confinados",
    answer:
      "O treinamento foca na segurança ao trabalhar em espaços confinados. Ensina práticas e procedimentos para garantir a segurança dos trabalhadores, prevenir acidentes e realizar operações seguras em ambientes de difícil acesso.",
    sigla: "NR33",
    image: "/nr33.jpg",
  },
  {
    id: 16,
    question: "Curso Básico de Segurança para Trabalhos a Quente",
    answer:
      "Prepare sua equipe para realizar trabalhos a quente com segurança. O curso aborda técnicas e procedimentos para prevenir incêndios e outros acidentes relacionados a operações que envolvem calor intenso.",
    sigla: "NR34",
    image: "/nr34.jpg",
  },
  {
    id: 17,
    question: "Curso de Segurança no Trabalho em Altura",
    answer:
      "Capacite seus colaboradores para realizar trabalhos em altura de forma segura. O curso cobre técnicas de prevenção de quedas, uso de equipamentos de proteção e procedimentos de emergência, garantindo a segurança em atividades realizadas acima do solo.",
    sigla: "NR35",
    image: "/nr35.jpg",
  },
  {
    id: 18,
    question: "Comissão Interna de Prevenção de Acidentes",
    answer:
      "Forme uma equipe eficaz para promover a segurança interna da empresa. O treinamento da CIPA foca na identificação de riscos, promoção de práticas seguras e implementação de medidas preventivas.",
    sigla: "CIPA",
    image: "/cipa.jpg",
  },
  {
    id: 19,
    question: "Semana Interna de Prevenção de Acidentes de Trabalho",
    answer:
      "Organize e participe de eventos de conscientização sobre segurança no trabalho. A SIPAT promove a educação contínua e a sensibilização dos colaboradores sobre a importância da segurança e prevenção de acidentes.",
    sigla: "SIPAT",
    image: "/sipat.jpg",
  },
];

export const dataNr13 = [
  {
    id: 1,
    title: "Inspeção e Manutenção ",
    text: "Realizamos inspeção detalhada e manutenção preventiva e corretiva de caldeiras e vasos de pressão. Nossos especialistas garantem que todos os componentes estejam funcionando corretamente e atendendo aos requisitos da NR13.",
  },
  {
    id: 2,
    title: "Análise de Risco",
    text: "Nossa equipe avalia e mitiga os riscos associados aos seus equipamentos, identificando potenciais problemas e implementando soluções eficazes para garantir a segurança operacional.",
  },
  {
    id: 3,
    title: "Treinamento",
    text: "Oferecemos capacitação completa para operadores e equipe de manutenção, assegurando que todos estejam qualificados para lidar com caldeiras e vasos de pressão de acordo com as normas de segurança.",
  },
  {
    id: 4,
    title: "Documentação",
    text: "Elaboramos e atualizamos laudos e certificados de conformidade, garantindo que toda a documentação necessária esteja em ordem e reflita a conformidade com a NR13.",
  },
  {
    id: 5,
    title: "Certificação e Regulamentação",
    text: "Prestamos consultoria para garantir que você obtenha todas as certificações necessárias e esteja em total conformidade com as regulamentações vigentes.",
  },
  {
    id: 6,
    title: "Ensaios",
    text: "Executamos ensaios não destrutivos para verificar a integridade e segurança dos seus equipamentos.",
  },
  {
    id: 7,
    title: "Auditorias de Segurança",
    text: "Realizamos avaliações contínuas para garantir que sua operação esteja sempre em conformidade com a NR13 e identificar áreas que possam precisar de ajustes.",
  },
  {
    id: 8,
    title: "Consultoria para Projetos",
    text: "Oferecemos assessoria especializada na instalação e no desenvolvimento de projetos relacionados a caldeiras e vasos de pressão, garantindo que todas as etapas atendam às exigências da NR13.",
  },
  {
    id: 9,
    title: "Gerenciamento de documentação",
    text: "Cuidamos da organização e manutenção dos registros de segurança e conformidade, facilitando o acesso e a gestão dos documentos necessários para a operação segura.",
  },
  {
    id: 10,
    title: "Suporte em emergências",
    text: "Fornecemos orientação e planejamento para situações de emergência, ajudando a preparar sua equipe para lidar com eventuais incidentes de forma eficiente e segura.",
  },
];

export const dataNr12 = [
  {
    id: 1,
    title: "Inspeção e Manutenção",
    text: "Realizamos inspeção detalhada e manutenção preventiva e corretiva de caldeiras e vasos de pressão. Nossos especialistas garantem que todos os componentes estejam funcionando corretamente e atendendo aos requisitos da NR12.",
  },
  {
    id: 2,
    title: "Adequação de Máquinas e Equipamentos",
    text: "Realizamos uma análise detalhada das suas máquinas e equipamentos, ajustando-os para atender a todos os requisitos da NR 12.",
    text2:
      "Implementamos modificações necessárias para garantir que todos os dispositivos de proteção e segurança estejam em perfeito funcionamento.",
  },
  {
    id: 3,
    title: "Avaliação de Risco e Segurança",
    text: "Conduzimos avaliações completas dos riscos associados ao uso das suas máquinas.",
    text2:
      "Desenvolvemos e implementamos soluções para mitigar riscos e proteger seus colaboradores contra acidentes e lesões.",
  },
  {
    id: 4,
    title: "Documentação e Conformidade",
    text: "Elaboramos e mantemos toda a documentação necessária, como relatórios de adequação e certificações, garantindo que sua empresa esteja em total conformidade com a legislação.",
    text2:
      "Atualizamos e organizamos registros para facilitar inspeções e auditorias.",
  },
  {
    id: 5,
    title: "Treinamento e Capacitação",
    text: "Oferecemos treinamentos especializados para operadores e equipes de manutenção, assegurando que todos saibam como operar as máquinas de forma segura e eficiente.",
    text2:
      "Fornecemos orientações práticas sobre as melhores práticas de segurança e manutenção.",
  },
  {
    id: 6,
    title: "Auditorias e Consultoria",
    text: "Realizamos auditorias regulares para garantir que suas máquinas continuem em conformidade com a NR 12.",
    text2:
      "Prestamos consultoria contínua para resolver quaisquer questões e aprimorar a segurança operacional.",
  },
];
