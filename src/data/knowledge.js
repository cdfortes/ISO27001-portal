export const clauses = [
  {
    id: '4',
    title: 'Contexto da organização',
    short: 'Contexto, partes interessadas, âmbito e SGSI.',
    intent: 'Determinar o ambiente interno e externo, os requisitos relevantes e os limites do Sistema de Gestão da Segurança da Informação.',
    highlights: ['Questões internas e externas', 'Partes interessadas e requisitos', 'Âmbito documentado', 'Processos e interacções do SGSI'],
    evidence: ['Análise de contexto', 'Mapa de partes interessadas', 'Declaração de âmbito do SGSI', 'Mapa de processos do SGSI'],
    auditQuestions: [
      'O âmbito considera interfaces e dependências com outras organizações?',
      'Os requisitos das partes interessadas relevantes foram identificados?',
      'O SGSI está estabelecido, implementado, mantido e sujeito a melhoria?'
    ],
    riskLens: 'Um âmbito mal definido gera lacunas de responsabilidade, controlos incoerentes e evidências incompletas.'
  },
  {
    id: '5',
    title: 'Liderança',
    short: 'Compromisso da gestão, política e responsabilidades.',
    intent: 'Assegurar que a Alta Direcção demonstra liderança, aprova a política, atribui responsabilidades e integra a segurança da informação no negócio.',
    highlights: ['Liderança e compromisso', 'Política de segurança da informação', 'Papéis, responsabilidades e autoridades'],
    evidence: ['Política aprovada', 'Objectivos alinhados com a estratégia', 'Matriz RACI', 'Comunicações da gestão', 'Actas de aprovação'],
    auditQuestions: [
      'A Alta Direcção demonstra compromisso com o SGSI?',
      'A política está disponível como informação documentada e é comunicada?',
      'As responsabilidades relevantes foram atribuídas e comunicadas?'
    ],
    riskLens: 'Sem patrocínio da gestão, o SGSI tende a tornar-se documental, sem autoridade operacional.'
  },
  {
    id: '6',
    title: 'Planeamento',
    short: 'Riscos, oportunidades, avaliação, tratamento, objectivos e mudanças.',
    intent: 'Planear como a organização aborda riscos e oportunidades, avalia e trata riscos de segurança da informação e define objectivos mensuráveis.',
    highlights: ['Critérios de risco', 'Avaliação de riscos', 'Tratamento de riscos', 'Declaração de Aplicabilidade', 'Objectivos de segurança', 'Planeamento de mudanças'],
    evidence: ['Metodologia de risco', 'Registo de riscos', 'Plano de tratamento', 'Declaração de Aplicabilidade', 'Objectivos e indicadores', 'Registos de aprovação de risco residual'],
    auditQuestions: [
      'A metodologia de risco produz resultados consistentes, válidos e comparáveis?',
      'Os riscos consideram perda de confidencialidade, integridade e disponibilidade?',
      'A Declaração de Aplicabilidade justifica inclusões, exclusões e estado de implementação dos controlos?'
    ],
    riskLens: 'A cláusula 6 liga a estratégia do SGSI à tomada de decisão baseada em risco.'
  },
  {
    id: '7',
    title: 'Apoio',
    short: 'Recursos, competência, sensibilização, comunicação e documentação.',
    intent: 'Garantir que o SGSI tem recursos, pessoas competentes, comunicação adequada e informação documentada controlada.',
    highlights: ['Recursos', 'Competência', 'Sensibilização', 'Comunicação interna e externa', 'Informação documentada'],
    evidence: ['Plano de formação', 'Registos de competência', 'Plano de comunicação', 'Repositório documental', 'Controlo de versões', 'Registos de aprovação'],
    auditQuestions: [
      'As pessoas que afectam o desempenho de segurança são competentes?',
      'Os colaboradores conhecem a política e as implicações da não conformidade?',
      'A informação documentada está protegida, disponível e controlada?'
    ],
    riskLens: 'Controlos técnicos fortes falham quando as pessoas, comunicações e documentos não são geridos.'
  },
  {
    id: '8',
    title: 'Operação',
    short: 'Planeamento operacional, controlo, avaliação e tratamento de riscos.',
    intent: 'Executar e controlar os processos necessários para cumprir os requisitos do SGSI e implementar as acções planeadas.',
    highlights: ['Critérios operacionais', 'Controlo de processos', 'Gestão de mudanças', 'Avaliações de risco planeadas', 'Execução do tratamento de risco'],
    evidence: ['Planos operacionais', 'Registos de execução', 'Avaliações de risco periódicas', 'Resultados do tratamento de riscos', 'Registos de mudanças'],
    auditQuestions: [
      'Os processos operacionais foram executados como planeado?',
      'As avaliações de risco ocorrem em intervalos definidos ou perante mudanças significativas?',
      'O plano de tratamento está implementado e existe evidência dos resultados?'
    ],
    riskLens: 'É aqui que o SGSI deixa de ser plano e passa a ser prática controlada.'
  },
  {
    id: '9',
    title: 'Avaliação do desempenho',
    short: 'Monitorização, medição, auditoria interna e análise pela Direcção.',
    intent: 'Medir o desempenho e a eficácia do SGSI através de monitorização, auditorias internas e análise crítica pela Direcção.',
    highlights: ['Monitorização e medição', 'Auditoria interna', 'Programa de auditoria', 'Análise crítica pela Direcção'],
    evidence: ['Indicadores do SGSI', 'Relatórios de monitorização', 'Programa de auditoria', 'Planos e relatórios de auditoria', 'Actas de análise pela Direcção'],
    auditQuestions: [
      'A organização definiu o que medir, quando medir, quem mede e como avaliar os resultados?',
      'As auditorias internas avaliam conformidade e implementação efectiva?',
      'A Direcção analisa resultados de auditoria, riscos, objectivos, partes interessadas e oportunidades de melhoria?'
    ],
    riskLens: 'A avaliação do desempenho fornece evidência de eficácia e alimenta a melhoria contínua.'
  },
  {
    id: '10',
    title: 'Melhoria',
    short: 'Melhoria contínua, não conformidades e acções correctivas.',
    intent: 'Melhorar continuamente a adequação, suficiência e eficácia do SGSI e tratar não conformidades de forma estruturada.',
    highlights: ['Melhoria contínua', 'Reacção a não conformidades', 'Análise de causa', 'Acções correctivas', 'Avaliação de eficácia'],
    evidence: ['Registo de não conformidades', 'Análise de causa', 'Plano de acção correctiva', 'Evidência de implementação', 'Verificação de eficácia'],
    auditQuestions: [
      'A organização reage, corrige e trata consequências das não conformidades?',
      'As causas foram determinadas e foram avaliadas ocorrências semelhantes?',
      'As acções correctivas são proporcionais aos efeitos da não conformidade?'
    ],
    riskLens: 'Um SGSI maduro aprende com falhas, auditorias, incidentes e alterações de contexto.'
  }
]

const controlSeeds = [
  ['5.1', 'Políticas de segurança da informação', 'Organizacional', 'Governança'],
  ['5.2', 'Papéis e responsabilidades pela segurança da informação', 'Organizacional', 'Governança'],
  ['5.3', 'Segregação de funções', 'Organizacional', 'Gestão de identidade e acesso'],
  ['5.4', 'Responsabilidades da Direcção', 'Organizacional', 'Governança'],
  ['5.5', 'Contacto com autoridades', 'Organizacional', 'Governança'],
  ['5.6', 'Contacto com grupos de interesse especial', 'Organizacional', 'Governança'],
  ['5.7', 'Inteligência de ameaças', 'Organizacional', 'Gestão de ameaças e vulnerabilidades'],
  ['5.8', 'Segurança da informação na gestão de projectos', 'Organizacional', 'Governança'],
  ['5.9', 'Inventário de informação e activos associados', 'Organizacional', 'Gestão de activos'],
  ['5.10', 'Uso aceitável da informação e activos associados', 'Organizacional', 'Protecção da informação'],
  ['5.11', 'Devolução de activos', 'Organizacional', 'Gestão de activos'],
  ['5.12', 'Classificação da informação', 'Organizacional', 'Protecção da informação'],
  ['5.13', 'Rotulagem da informação', 'Organizacional', 'Protecção da informação'],
  ['5.14', 'Transferência de informação', 'Organizacional', 'Protecção da informação'],
  ['5.15', 'Controlo de acesso', 'Organizacional', 'Gestão de identidade e acesso'],
  ['5.16', 'Gestão de identidade', 'Organizacional', 'Gestão de identidade e acesso'],
  ['5.17', 'Informação de autenticação', 'Organizacional', 'Gestão de identidade e acesso'],
  ['5.18', 'Direitos de acesso', 'Organizacional', 'Gestão de identidade e acesso'],
  ['5.19', 'Segurança da informação nas relações com fornecedores', 'Organizacional', 'Segurança da cadeia de fornecimento'],
  ['5.20', 'Segurança da informação nos contratos com fornecedores', 'Organizacional', 'Segurança da cadeia de fornecimento'],
  ['5.21', 'Segurança da informação na cadeia de fornecimento TIC', 'Organizacional', 'Segurança da cadeia de fornecimento'],
  ['5.22', 'Monitorização, revisão e gestão de mudanças dos serviços de fornecedores', 'Organizacional', 'Segurança da cadeia de fornecimento'],
  ['5.23', 'Segurança da informação no uso de serviços cloud', 'Organizacional', 'Segurança da cadeia de fornecimento'],
  ['5.24', 'Planeamento e preparação da gestão de incidentes', 'Organizacional', 'Gestão de eventos de segurança'],
  ['5.25', 'Avaliação e decisão sobre eventos de segurança', 'Organizacional', 'Gestão de eventos de segurança'],
  ['5.26', 'Resposta a incidentes de segurança da informação', 'Organizacional', 'Gestão de eventos de segurança'],
  ['5.27', 'Aprendizagem com incidentes de segurança da informação', 'Organizacional', 'Gestão de eventos de segurança'],
  ['5.28', 'Recolha de evidências', 'Organizacional', 'Gestão de eventos de segurança'],
  ['5.29', 'Segurança da informação durante disrupção', 'Organizacional', 'Continuidade'],
  ['5.30', 'Preparação TIC para continuidade de negócio', 'Organizacional', 'Continuidade'],
  ['5.31', 'Requisitos legais, estatutários, regulamentares e contratuais', 'Organizacional', 'Legal e compliance'],
  ['5.32', 'Direitos de propriedade intelectual', 'Organizacional', 'Legal e compliance'],
  ['5.33', 'Protecção de registos', 'Organizacional', 'Legal e compliance'],
  ['5.34', 'Privacidade e protecção de dados pessoais', 'Organizacional', 'Legal e compliance'],
  ['5.35', 'Revisão independente da segurança da informação', 'Organizacional', 'Garantia de segurança'],
  ['5.36', 'Conformidade com políticas, regras e normas', 'Organizacional', 'Garantia de segurança'],
  ['5.37', 'Procedimentos operacionais documentados', 'Organizacional', 'Governança'],
  ['6.1', 'Verificação antes da contratação', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.2', 'Termos e condições de contratação', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.3', 'Consciencialização, educação e formação', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.4', 'Processo disciplinar', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.5', 'Responsabilidades após cessação ou alteração de contratação', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.6', 'Acordos de confidencialidade ou não divulgação', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.7', 'Trabalho remoto', 'Pessoas', 'Segurança em recursos humanos'],
  ['6.8', 'Reporte de eventos de segurança da informação', 'Pessoas', 'Gestão de eventos de segurança'],
  ['7.1', 'Perímetros de segurança física', 'Físico', 'Segurança física'],
  ['7.2', 'Entrada física', 'Físico', 'Segurança física'],
  ['7.3', 'Segurança de escritórios, salas e instalações', 'Físico', 'Segurança física'],
  ['7.4', 'Monitorização de segurança física', 'Físico', 'Segurança física'],
  ['7.5', 'Protecção contra ameaças físicas e ambientais', 'Físico', 'Segurança física'],
  ['7.6', 'Trabalho em áreas seguras', 'Físico', 'Segurança física'],
  ['7.7', 'Mesa limpa e ecrã limpo', 'Físico', 'Segurança física'],
  ['7.8', 'Localização e protecção de equipamento', 'Físico', 'Segurança física'],
  ['7.9', 'Segurança de activos fora das instalações', 'Físico', 'Segurança física'],
  ['7.10', 'Suportes de armazenamento', 'Físico', 'Segurança física'],
  ['7.11', 'Serviços de suporte', 'Físico', 'Segurança física'],
  ['7.12', 'Segurança de cablagem', 'Físico', 'Segurança física'],
  ['7.13', 'Manutenção de equipamento', 'Físico', 'Segurança física'],
  ['7.14', 'Eliminação segura ou reutilização de equipamento', 'Físico', 'Segurança física'],
  ['8.1', 'Dispositivos endpoint do utilizador', 'Tecnológico', 'Segurança de sistemas e redes'],
  ['8.2', 'Direitos de acesso privilegiado', 'Tecnológico', 'Gestão de identidade e acesso'],
  ['8.3', 'Restrição de acesso à informação', 'Tecnológico', 'Gestão de identidade e acesso'],
  ['8.4', 'Acesso ao código-fonte', 'Tecnológico', 'Segurança de aplicações'],
  ['8.5', 'Autenticação segura', 'Tecnológico', 'Gestão de identidade e acesso'],
  ['8.6', 'Gestão de capacidade', 'Tecnológico', 'Segurança de sistemas e redes'],
  ['8.7', 'Protecção contra malware', 'Tecnológico', 'Gestão de ameaças e vulnerabilidades'],
  ['8.8', 'Gestão de vulnerabilidades técnicas', 'Tecnológico', 'Gestão de ameaças e vulnerabilidades'],
  ['8.9', 'Gestão de configuração', 'Tecnológico', 'Configuração segura'],
  ['8.10', 'Eliminação de informação', 'Tecnológico', 'Protecção da informação'],
  ['8.11', 'Mascaramento de dados', 'Tecnológico', 'Protecção da informação'],
  ['8.12', 'Prevenção de fuga de informação', 'Tecnológico', 'Protecção da informação'],
  ['8.13', 'Cópias de segurança da informação', 'Tecnológico', 'Continuidade'],
  ['8.14', 'Redundância dos recursos de processamento', 'Tecnológico', 'Continuidade'],
  ['8.15', 'Registos de actividade', 'Tecnológico', 'Gestão de eventos de segurança'],
  ['8.16', 'Actividades de monitorização', 'Tecnológico', 'Gestão de eventos de segurança'],
  ['8.17', 'Sincronização de relógio', 'Tecnológico', 'Gestão de eventos de segurança'],
  ['8.18', 'Uso de programas utilitários privilegiados', 'Tecnológico', 'Gestão de identidade e acesso'],
  ['8.19', 'Instalação de software em sistemas operacionais', 'Tecnológico', 'Configuração segura'],
  ['8.20', 'Segurança de redes', 'Tecnológico', 'Segurança de sistemas e redes'],
  ['8.21', 'Segurança dos serviços de rede', 'Tecnológico', 'Segurança de sistemas e redes'],
  ['8.22', 'Segregação de redes', 'Tecnológico', 'Segurança de sistemas e redes'],
  ['8.23', 'Filtragem web', 'Tecnológico', 'Gestão de ameaças e vulnerabilidades'],
  ['8.24', 'Uso de criptografia', 'Tecnológico', 'Protecção da informação'],
  ['8.25', 'Ciclo de vida de desenvolvimento seguro', 'Tecnológico', 'Segurança de aplicações'],
  ['8.26', 'Requisitos de segurança de aplicações', 'Tecnológico', 'Segurança de aplicações'],
  ['8.27', 'Arquitectura e engenharia segura de sistemas', 'Tecnológico', 'Segurança de aplicações'],
  ['8.28', 'Codificação segura', 'Tecnológico', 'Segurança de aplicações'],
  ['8.29', 'Testes de segurança em desenvolvimento e aceitação', 'Tecnológico', 'Segurança de aplicações'],
  ['8.30', 'Desenvolvimento externalizado', 'Tecnológico', 'Segurança de aplicações'],
  ['8.31', 'Separação de ambientes de desenvolvimento, teste e produção', 'Tecnológico', 'Segurança de aplicações'],
  ['8.32', 'Gestão de mudanças', 'Tecnológico', 'Configuração segura'],
  ['8.33', 'Informação de teste', 'Tecnológico', 'Protecção da informação'],
  ['8.34', 'Protecção dos sistemas durante testes de auditoria', 'Tecnológico', 'Garantia de segurança']
]

const capabilityEvidence = {
  'Governança': ['Políticas aprovadas', 'responsabilidades atribuídas', 'actas de revisão', 'comunicações internas'],
  'Gestão de identidade e acesso': ['Matriz de acessos', 'registos de aprovação', 'recertificação periódica', 'logs de alteração de permissões'],
  'Gestão de activos': ['Inventário actualizado', 'proprietários definidos', 'registos de devolução', 'classificação associada'],
  'Protecção da informação': ['Esquema de classificação', 'procedimentos de manuseamento', 'registos de transferência', 'controlos de retenção'],
  'Segurança da cadeia de fornecimento': ['Avaliação de fornecedores', 'cláusulas contratuais', 'relatórios de revisão', 'plano de transição'],
  'Gestão de eventos de segurança': ['Plano de incidentes', 'registos de eventos', 'decisões de triagem', 'lições aprendidas'],
  'Continuidade': ['BIA ou análise equivalente', 'planos de continuidade', 'testes de recuperação', 'RTO/RPO definidos'],
  'Legal e compliance': ['Registo de requisitos aplicáveis', 'avaliações de conformidade', 'evidências de retenção', 'pareceres legais'],
  'Garantia de segurança': ['Relatórios de revisão independente', 'planos de correcção', 'resultados de auditoria', 'monitorização de conformidade'],
  'Segurança em recursos humanos': ['Registos de formação', 'termos assinados', 'processos de onboarding/offboarding', 'comunicações de sensibilização'],
  'Segurança física': ['Controlos de acesso físico', 'registos de visitantes', 'plantas de zonas', 'registos de manutenção'],
  'Segurança de sistemas e redes': ['Diagramas de rede', 'configurações aprovadas', 'logs de monitorização', 'testes técnicos'],
  'Gestão de ameaças e vulnerabilidades': ['Relatórios de vulnerabilidades', 'inteligência de ameaças', 'planos de correcção', 'evidência de patches'],
  'Configuração segura': ['Baseline de configuração', 'registos de mudança', 'inventário de versões', 'validação pós-alteração'],
  'Segurança de aplicações': ['Requisitos de segurança', 'revisões de código', 'testes SAST/DAST quando aplicável', 'aprovações de passagem a produção']
}

const cyberConcept = capability => {
  if (capability.includes('Gestão de eventos')) return 'Detectar / Responder'
  if (capability.includes('Continuidade')) return 'Recuperar'
  if (capability.includes('ameaças')) return 'Identificar / Detectar'
  if (capability.includes('Governança') || capability.includes('Legal')) return 'Identificar'
  return 'Proteger'
}

const controlType = capability => {
  if (capability.includes('Gestão de eventos')) return 'Preventivo / Detectivo / Correctivo'
  if (capability.includes('Continuidade')) return 'Correctivo'
  if (capability.includes('ameaças')) return 'Preventivo / Detectivo'
  return 'Preventivo'
}

export const controls = controlSeeds.map(([id, title, theme, capability]) => ({
  id,
  title,
  theme,
  capability,
  controlType: controlType(capability),
  cyberConcept: cyberConcept(capability),
  summary: `Controlo ${theme.toLowerCase()} orientado para ${capability.toLowerCase()}, usado para reduzir, manter ou acompanhar riscos de segurança da informação no âmbito do SGSI.`,
  evidence: capabilityEvidence[capability] ?? ['Procedimento aprovado', 'registos de execução', 'responsável designado', 'evidência de revisão'],
  implementationHint: `Defina proprietário, critério de aplicação, periodicidade de revisão, evidências esperadas e ligação ao risco tratado.`
}))

export const implementationSteps = [
  ['01', 'Definir contexto e partes interessadas', 'Identificar factores internos/externos, requisitos relevantes e obrigações que afectam o SGSI.'],
  ['02', 'Determinar o âmbito do SGSI', 'Delimitar processos, unidades, localizações, activos, interfaces e dependências incluídas.'],
  ['03', 'Aprovar política e responsabilidades', 'Formalizar política, papéis, autoridades, comunicação e compromisso da gestão.'],
  ['04', 'Definir metodologia de risco', 'Estabelecer critérios, escala, apetite, aceitação e método de avaliação.'],
  ['05', 'Avaliar riscos de segurança', 'Identificar riscos de confidencialidade, integridade e disponibilidade, proprietários, impacto e probabilidade.'],
  ['06', 'Tratar riscos e criar SoA', 'Seleccionar opções de tratamento, controlos necessários e justificar inclusões/exclusões na Declaração de Aplicabilidade.'],
  ['07', 'Implementar controlos', 'Executar controlos organizacionais, de pessoas, físicos e tecnológicos proporcionais ao risco.'],
  ['08', 'Controlar informação documentada', 'Gerir políticas, procedimentos, registos, versões, aprovações e retenção.'],
  ['09', 'Medir desempenho', 'Monitorizar processos, controlos, objectivos e indicadores de eficácia do SGSI.'],
  ['10', 'Auditar internamente', 'Planear auditorias com critérios, âmbito, objectividade, evidências e relatório à gestão relevante.'],
  ['11', 'Realizar análise pela Direcção', 'Avaliar resultados, riscos, auditorias, objectivos, partes interessadas e oportunidades de melhoria.'],
  ['12', 'Tratar não conformidades', 'Corrigir, analisar causa, implementar acções correctivas e verificar eficácia.']
]

export const faqs = [
  {
    category: 'Fundamentos',
    question: 'O que é a ISO/IEC 27001?',
    answer: 'É uma norma de requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão da Segurança da Informação no contexto da organização. Inclui também requisitos para avaliação e tratamento de riscos de segurança da informação.'
  },
  {
    category: 'Fundamentos',
    question: 'Qual é a diferença entre ISO/IEC 27001 e ISO/IEC 27002?',
    answer: 'A ISO/IEC 27001 define requisitos do SGSI. A ISO/IEC 27002 fornece um conjunto de referência de controlos de segurança da informação e orientação para apoiar a selecção e implementação de controlos.'
  },
  {
    category: 'Fundamentos',
    question: 'A ISO 27001 obriga a implementar todos os controlos?',
    answer: 'A decisão sobre controlos deve resultar da avaliação e tratamento de riscos. A organização deve comparar os controlos determinados com o Anexo A e justificar inclusões e exclusões na Declaração de Aplicabilidade.'
  },
  {
    category: 'Âmbito',
    question: 'O que é o âmbito do SGSI?',
    answer: 'É a definição dos limites e aplicabilidade do SGSI. Deve considerar contexto, requisitos das partes interessadas e interfaces ou dependências com outras organizações.'
  },
  {
    category: 'Risco',
    question: 'O que é avaliação de riscos de segurança da informação?',
    answer: 'É o processo usado para identificar, analisar e avaliar riscos associados à perda de confidencialidade, integridade e disponibilidade da informação dentro do âmbito do SGSI.'
  },
  {
    category: 'Risco',
    question: 'O que é tratamento de riscos?',
    answer: 'É o processo de seleccionar opções de tratamento, determinar controlos necessários, elaborar plano de tratamento, obter aprovação dos proprietários de risco e aceitar riscos residuais.'
  },
  {
    category: 'Risco',
    question: 'O que é a Declaração de Aplicabilidade?',
    answer: 'É o documento que demonstra os controlos necessários, justifica a sua inclusão, indica se estão implementados e justifica a exclusão de controlos do Anexo A.'
  },
  {
    category: 'Documentação',
    question: 'Que documentação é obrigatória?',
    answer: 'A norma exige informação documentada em vários pontos, como âmbito, processo de avaliação e tratamento de risco, objectivos, resultados de monitorização, auditorias, análise pela Direcção e acções correctivas. A organização também deve manter a documentação que considerar necessária para a eficácia do SGSI.'
  },
  {
    category: 'Auditoria',
    question: 'A auditoria interna é obrigatória?',
    answer: 'Sim. A organização deve realizar auditorias internas em intervalos planeados para verificar se o SGSI está conforme os requisitos da organização e da norma, e se está efectivamente implementado e mantido.'
  },
  {
    category: 'Auditoria',
    question: 'O que deve ter um programa de auditoria interna?',
    answer: 'Deve incluir frequência, métodos, responsabilidades, requisitos de planeamento e reporte. Para cada auditoria devem ser definidos critérios e âmbito, com auditores objectivos e imparciais.'
  },
  {
    category: 'Auditoria',
    question: 'O que é uma não conformidade?',
    answer: 'É uma falha no cumprimento de um requisito. Deve ser tratada com reacção, correcção, análise de causa, acção correctiva quando necessária e verificação da eficácia.'
  },
  {
    category: 'Certificação',
    question: 'Implementar ISO 27001 é igual a obter certificação?',
    answer: 'Não. Implementar significa estabelecer e operar o SGSI. A certificação exige avaliação por entidade certificadora competente e evidência de conformidade.'
  },
  {
    category: 'Controlos',
    question: 'Quais são os temas dos controlos ISO/IEC 27002?',
    answer: 'Os controlos estão organizados em quatro temas: organizacionais, pessoas, físicos e tecnológicos. Esta estrutura ajuda a pesquisar e apresentar controlos por natureza operacional.'
  },
  {
    category: 'Controlos',
    question: 'Um controlo tecnológico substitui um processo?',
    answer: 'Não necessariamente. A segurança da informação depende de políticas, processos, pessoas, estruturas organizacionais e tecnologia. Controlos técnicos devem estar enquadrados em gestão, risco e evidência.'
  },
  {
    category: 'Evidências',
    question: 'Que evidências devo preparar para auditoria?',
    answer: 'Prepare evidências proporcionais ao requisito: políticas aprovadas, registos de risco, planos de tratamento, SoA, registos de formação, medições, relatórios de auditoria, análise pela Direcção e acções correctivas.'
  },
  {
    category: 'Operação',
    question: 'Quando devo repetir a avaliação de riscos?',
    answer: 'A avaliação deve ocorrer em intervalos planeados e quando mudanças significativas são propostas ou ocorrem, considerando os critérios de risco definidos.'
  }
]

export const glossaryTerms = [
  ['SGSI', 'Sistema de Gestão da Segurança da Informação. Estrutura de gestão para preservar confidencialidade, integridade e disponibilidade da informação através de gestão de riscos.'],
  ['Confidencialidade', 'Propriedade de a informação não ser disponibilizada ou divulgada a pessoas, entidades ou processos não autorizados.'],
  ['Integridade', 'Propriedade relacionada com exactidão, completude e protecção contra alteração indevida.'],
  ['Disponibilidade', 'Propriedade de a informação estar acessível e utilizável quando necessária.'],
  ['Risco residual', 'Risco que permanece após a aplicação das opções de tratamento e controlos seleccionados.'],
  ['Declaração de Aplicabilidade', 'Documento que relaciona controlos necessários, justificação, estado de implementação e exclusões justificadas.'],
  ['Parte interessada', 'Pessoa ou organização que pode afectar, ser afectada ou perceber-se afectada por uma decisão ou actividade.'],
  ['Controlo', 'Medida que mantém ou modifica o risco. Pode ser processo, política, prática, dispositivo ou acção.'],
  ['Informação documentada', 'Documentos e registos necessários para demonstrar planeamento, execução, controlo, desempenho e melhoria do SGSI.'],
  ['Não conformidade', 'Incumprimento de requisito, tratado por correcção, análise de causa e acção correctiva quando aplicável.']
]

export const assistantAnswers = [
  {
    keywords: ['escopo', 'âmbito', 'scope', 'limites'],
    title: 'Âmbito do SGSI',
    answer: 'O âmbito define os limites e a aplicabilidade do SGSI. Deve considerar contexto interno e externo, requisitos das partes interessadas e interfaces ou dependências com outras organizações.',
    reference: 'ISO/IEC 27001 — cláusula 4.3',
    evidence: ['Documento de âmbito aprovado', 'lista de interfaces e dependências', 'mapa de processos incluídos']
  },
  {
    keywords: ['risco', 'avaliação', 'impacto', 'probabilidade'],
    title: 'Avaliação de riscos',
    answer: 'A avaliação de riscos deve identificar riscos associados à perda de confidencialidade, integridade e disponibilidade, analisar consequências e probabilidade e priorizar riscos para tratamento.',
    reference: 'ISO/IEC 27001 — cláusula 6.1.2',
    evidence: ['Metodologia de risco', 'critérios de aceitação', 'registo de riscos', 'proprietários de risco']
  },
  {
    keywords: ['tratamento', 'plano de tratamento', 'risco residual'],
    title: 'Tratamento de riscos',
    answer: 'O tratamento selecciona opções, determina controlos necessários, compara com o Anexo A, cria a Declaração de Aplicabilidade e obtém aprovação do plano e aceitação do risco residual.',
    reference: 'ISO/IEC 27001 — cláusula 6.1.3',
    evidence: ['Plano de tratamento', 'SoA', 'aprovação dos proprietários de risco', 'estado de implementação dos controlos']
  },
  {
    keywords: ['soa', 'declaração', 'aplicabilidade'],
    title: 'Declaração de Aplicabilidade',
    answer: 'A Declaração de Aplicabilidade deve indicar os controlos necessários, a justificação da inclusão, se estão implementados e a justificação de exclusões dos controlos do Anexo A.',
    reference: 'ISO/IEC 27001 — cláusula 6.1.3',
    evidence: ['Documento SoA versionado', 'ligação aos riscos', 'justificação de exclusões', 'estado de implementação']
  },
  {
    keywords: ['auditoria', 'auditar', 'programa', 'auditor'],
    title: 'Auditoria interna',
    answer: 'A auditoria interna deve verificar se o SGSI está conforme os requisitos da organização e da norma, e se está efectivamente implementado e mantido. O programa deve definir frequência, métodos, responsabilidades, critérios, âmbito e reporte.',
    reference: 'ISO/IEC 27001 — cláusula 9.2',
    evidence: ['Programa de auditoria', 'plano de auditoria', 'relatório', 'registo de constatações', 'acções correctivas']
  },
  {
    keywords: ['política', 'politica', 'liderança', 'direção', 'direcção'],
    title: 'Política e liderança',
    answer: 'A política de segurança da informação deve ser apropriada ao propósito da organização, enquadrar objectivos, comprometer-se com requisitos aplicáveis e melhoria contínua, estar documentada e ser comunicada.',
    reference: 'ISO/IEC 27001 — cláusula 5.2',
    evidence: ['Política aprovada', 'comunicação interna', 'objectivos ligados à política', 'registos de revisão']
  },
  {
    keywords: ['27002', 'controlos', 'controles', 'temas'],
    title: 'ISO/IEC 27002 e controlos',
    answer: 'A ISO/IEC 27002 é uma referência de controlos e orientação de implementação. Os controlos estão estruturados por temas: organizacionais, pessoas, físicos e tecnológicos.',
    reference: 'ISO/IEC 27002 — estrutura dos controlos',
    evidence: ['Matriz de controlos', 'ligação ao risco tratado', 'estado de implementação', 'responsável pelo controlo']
  },
  {
    keywords: ['evidencia', 'evidência', 'prova', 'documento'],
    title: 'Evidências de auditoria',
    answer: 'A evidência deve demonstrar que o requisito foi planeado, implementado, mantido e revisto. Normalmente inclui políticas, registos, aprovações, resultados, logs, actas e relatórios.',
    reference: 'ISO/IEC 27001 — informação documentada, avaliação e melhoria',
    evidence: ['Documentos aprovados', 'registos de execução', 'métricas', 'relatórios', 'actas']
  }
]

export const auditFocus = [
  {
    phase: 'Preparação',
    items: ['Definir objectivo, critérios e âmbito', 'Seleccionar auditores objectivos e imparciais', 'Rever documentação do SGSI', 'Preparar plano e agenda']
  },
  {
    phase: 'Execução',
    items: ['Realizar entrevistas', 'Amostrar evidências', 'Testar coerência entre risco, controlos e execução', 'Registar constatações verificáveis']
  },
  {
    phase: 'Relato',
    items: ['Classificar constatações', 'Comunicar resultados à gestão relevante', 'Registar evidências e conclusões', 'Definir prazos de resposta']
  },
  {
    phase: 'Seguimento',
    items: ['Analisar causa', 'Implementar acções correctivas', 'Verificar eficácia', 'Actualizar riscos, controlos ou documentação quando necessário']
  }
]
