export const perguntas = [
    {
        caminho: "inicio",
        enunciado:
            "Você integra uma equipe júnior de resposta a incidentes cibernéticos. " +
            "Uma estudante procura ajuda após ter sua identidade usada em perfis falsos " +
            "e montagens difamatórias espalhadas pela rede. Como você inicia o atendimento?",
        alternativas: [
            {
                texto: "Focar primeiro na preservação técnica das evidências digitais e metadados.",
                afirmacao: ["Iniciou a investigação priorizando a preservação forense das evidências digitais."],
                tipo: "entrada",
                proxima: 1
            },
            {
                texto: "Focar primeiro no acolhimento da vítima, contenção dos danos e rastreio da origem.",
                afirmacao: ["Iniciou o caso priorizando o acolhimento da vítima e a contenção da difamação."],
                tipo: "entrada",
                proxima: 2
            }
        ]
    },
    {
        caminho: "A",
        enunciado:
            "Você precisa coletar as provas dos ataques antes que os criminosos apaguem as postagens, " +
            "garantindo que a vítima não seja exposta. Qual é o seu primeiro passo técnico?",
        alternativas: [
            {
                texto: "Registrar links completos, gerar códigos hash e salvar os arquivos originais.",
                afirmacao: ["Coletou os links completos e gerou códigos hash para garantir a integridade das provas."],
                tipo: "avancar",
                proxima: 3
            },
            {
                texto: "Utilizar um protocolo forense já validado pela equipe e isolar os metadados.",
                afirmacao: ["Aplicou o protocolo forense da equipe para isolar os metadados das postagens."],
                tipo: "salto",
                proxima: 4
            },
            {
                texto: "Pausar a análise técnica para orientar a vítima sobre segurança de contas agora.",
                afirmacao: ["Priorizou orientar a vítima sobre o bloqueio imediato das contas atacadas."],
                tipo: "trocar",
                proxima: 2,
                disponivel: true
            }
        ]
    },
    {
        caminho: "B",
        enunciado:
            "A vítima está abalada e teme ser culpada pelos vazamentos e montagens. " +
            "Qual atitude você toma para protegê-la e iniciar o rastreamento?",
        alternativas: [
            {
                texto: "Assegurar que a culpa é exclusiva do agressor e mapear onde os links circulam.",
                afirmacao: ["Acolheu a vítima sem julgamentos e mapeou os canais onde o ataque circulava."],
                tipo: "avancar",
                proxima: 7
            },
            {
                texto: "Acionar os canais de denúncia das plataformas e iniciar o rastreamento aberto.",
                afirmacao: ["Acionou os canais de remoção das plataformas e iniciou o rastreamento aberto."],
                tipo: "salto",
                proxima: 8
            },
            {
                texto: "Levar os arquivos recebidos pela vítima diretamente para a perícia de metadados.",
                afirmacao: ["Encaminhou os arquivos recebidos para a análise forense de metadados."],
                tipo: "trocar",
                proxima: 1,
                disponivel: true
            }
        ]
    },
    {
        caminho: "A",
        enunciado:
            "Uma captura de tela enviada por terceiros não possui data, horário ou endereço web visível. " +
            "Como você procede para não comprometer o inquérito?",
        alternativas: [
            {
                texto: "Buscar o registro original na rede e validar a cadeia de custódia da prova.",
                afirmacao: ["Validou a cadeia de custódia buscando o registro original com data e URL."],
                tipo: "avancar",
                proxima: 4
            },
            {
                texto: "Retomar a coleta inicial solicitando os links diretos sem pedir senhas da vítima.",
                afirmacao: ["Retomou a coleta solicitando apenas os links públicos, preservando a privacidade da vítima."],
                tipo: "salto",
                proxima: 1
            },
            {
                texto: "Editar a captura de tela inserindo um horário estimado para acelerar o relatório.",
                afirmacao: ["Alterou uma evidência digital inserindo dados estimados."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Adulterar ou fabricar metadados invalida toda a prova pericial no processo " +
                    "e compromete a defesa da vítima. A investigação foi anulada."
            }
        ]
    },
    {
        caminho: "A",
        enunciado:
            "Com os arquivos preservados, você analisa os cabeçalhos de rede e rastros deixados " +
            "pelas contas falsas. Como aprofundar a identificação dos autores?",
        alternativas: [
            {
                texto: "Cruzar padrões de horário, identificadores públicos e registros de conexão.",
                afirmacao: ["Cruzou padrões de horário e identificadores técnicos para rastrear a origem."],
                tipo: "avancar",
                proxima: 5
            },
            {
                texto: "Aplicar a matriz de rastreamento da equipe e consolidar o laudo técnico.",
                afirmacao: ["Aplicou a matriz de rastreamento para consolidar o laudo técnico."],
                tipo: "salto",
                proxima: 6
            },
            {
                texto: "Usar os dados técnicos encontrados para mapear a rede de perfis falsos.",
                afirmacao: ["Utilizou os indícios técnicos para mapear a rede de perfis falsos."],
                tipo: "trocar",
                proxima: 8,
                disponivel: true
            }
        ]
    },
    {
        caminho: "A",
        enunciado:
            "Ao revisar o laudo técnico, você percebe que alguns anexos contêm conversas privadas " +
            "e fotos pessoais da vítima que não têm relação com o crime. O que você faz?",
        alternativas: [
            {
                texto: "Aplicar tarjas de sigilo nos dados íntimos e manter apenas os indícios do crime.",
                afirmacao: ["Protegeu a intimidade da vítima aplicando sigilo nos dados pessoais irrelevantes."],
                tipo: "avancar",
                proxima: 6
            },
            {
                texto: "Voltar à etapa de cadeia de custódia para separar apenas os arquivos estritamente necessários.",
                afirmacao: ["Revisou a cadeia de custódia para filtrar apenas os arquivos pertinentes ao caso."],
                tipo: "salto",
                proxima: 3
            },
            {
                texto: "Anexar todas as fotos e conversas íntimas da vítima no relatório aberto do caso.",
                afirmacao: ["Expôs a intimidade e dados pessoais da vítima no relatório."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Expor dados íntimos da vítima causa revitimização e viola a proteção de dados. " +
                    "Sua conduta feriu a ética investigativa e você foi afastado do caso."
            }
        ]
    },
    {
        caminho: "A",
        enunciado:
            "O dossiê técnico está quase pronto para ser entregue à delegacia especializada. " +
            "Qual é a sua última verificação antes do envio?",
        alternativas: [
            {
                texto: "Conferir os códigos hash, a cronologia dos fatos e o sigilo dos dados da vítima.",
                afirmacao: ["Conferiu a integridade dos hashes e garantiu o sigilo completo da vítima."],
                tipo: "avancar",
                proxima: 11
            },
            {
                texto: "Voltar à revisão ética para garantir que nenhuma informação pessoal vazou.",
                afirmacao: ["Refez a revisão ética para assegurar zero exposição da vítima."],
                tipo: "salto",
                proxima: 5
            },
            {
                texto: "Unir o dossiê técnico ao plano de proteção comunitária e apoio à vítima.",
                afirmacao: ["Integrou o dossiê técnico ao plano de proteção e orientação da vítima."],
                tipo: "trocar",
                proxima: 10,
                disponivel: true
            }
        ]
    },
    {
        caminho: "B",
        enunciado:
            "Os perfis falsos usam nomes genéricos para atacar a vítima. " +
            "Como você avança na identificação sem invadir sistemas?",
        alternativas: [
            {
                texto: "Rastrear conexões públicas, reutilização de apelidos e solicitações formais às plataformas.",
                afirmacao: ["Rastreou conexões em fontes abertas e formalizou pedidos de preservação às plataformas."],
                tipo: "avancar",
                proxima: 8
            },
            {
                texto: "Retomar o diálogo com a vítima para verificar se houve tentativas anteriores de contato.",
                afirmacao: ["Retomou o diálogo acolhedor para identificar tentativas prévias de contato suspeito."],
                tipo: "salto",
                proxima: 2
            },
            {
                texto: "Questionar por que a vítima usava redes sociais e sugerir que ela teve culpa.",
                afirmacao: ["Culpabilizou a vítima pelo ataque sofrido."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Culpar a vítima pelo crime cometido contra ela é antiético, destrói a confiança " +
                    "na investigação e encerra sua participação na equipe."
            }
        ]
    },
    {
        caminho: "B",
        enunciado:
            "As plataformas removeram as postagens difamatórias e preservaram os registros de acesso " +
            "para a polícia. Como você organiza a sequência da investigação?",
        alternativas: [
            {
                texto: "Estruturar a linha do tempo dos ataques e preparar a orientação de segurança digital.",
                afirmacao: ["Estruturou a linha do tempo dos ataques e preparou medidas preventivas."],
                tipo: "avancar",
                proxima: 9
            },
            {
                texto: "Usar o protocolo de suporte jurídico da equipe e preparar o encaminhamento oficial.",
                afirmacao: ["Aplicou o protocolo de suporte jurídico para o encaminhamento oficial."],
                tipo: "salto",
                proxima: 10
            },
            {
                texto: "Transformar os registros preservados pelas plataformas em um laudo técnico forense.",
                afirmacao: ["Converteu os registros preservados em análise técnica forense."],
                tipo: "trocar",
                proxima: 4,
                disponivel: true
            }
        ]
    },
    {
        caminho: "B",
        enunciado:
            "Surge um suspeito com base em indícios preliminares, mas ainda falta a confirmação " +
            "dos provedores de conexão. Qual é a postura correta?",
        alternativas: [
            {
                texto: "Documentar os indícios sob sigilo e aguardar a quebra de sigilo autorizada pela Justiça.",
                afirmacao: ["Manteve os indícios sob sigilo aguardando a confirmação judicial."],
                tipo: "avancar",
                proxima: 10
            },
            {
                texto: "Voltar ao rastreamento em fontes abertas para buscar evidências complementares.",
                afirmacao: ["Voltou ao rastreamento em fontes abertas para robustecer os indícios."],
                tipo: "salto",
                proxima: 7
            },
            {
                texto: "Divulgar o nome e a foto do suspeito nas redes sociais antes da confirmação oficial.",
                afirmacao: ["Promoveu exposição pública sem confirmação legal."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Promover justiça com as próprias mãos gera difamação, alerta os criminosos " +
                    "para destruírem provas e invalida a investigação."
            }
        ]
    },
    {
        caminho: "B",
        enunciado:
            "Tudo está pronto para formalizar a denúncia às autoridades e apoiar a vítima. " +
            "O que você garante antes de concluir o atendimento?",
        alternativas: [
            {
                texto: "Entregar o pacote completo de provas preservadas e ativar autenticação em dois fatores.",
                afirmacao: ["Entregou o pacote íntegro de provas e reforçou a segurança digital da vítima."],
                tipo: "avancar",
                proxima: 12
            },
            {
                texto: "Voltar à revisão de sigilo para confirmar que nenhum dado da vítima ficou exposto.",
                afirmacao: ["Revisou novamente o sigilo para garantir a proteção integral da vítima."],
                tipo: "salto",
                proxima: 9
            },
            {
                texto: "Invadir a conta do suspeito por conta própria para tentar apagar os arquivos dele.",
                afirmacao: ["Cometeu invasão de dispositivo para tentar obter provas."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Invadir sistemas sem autorização judicial é crime e torna todas as provas " +
                    "ilícitas no processo penal. A investigação foi encerrada."
            }
        ]
    },
    {
        caminho: "A",
        final: "vitoria",
        enunciado:
            "Você concluiu o dossiê pericial com cadeia de custódia íntegra, hashes validados " +
            "e sigilo absoluto sobre a intimidade da vítima. As autoridades identificaram os " +
            "responsáveis e a vítima foi protegida sem qualquer revitimização. Você venceu!",
        alternativas: []
    },
    {
        caminho: "B",
        final: "vitoria",
        enunciado:
            "Você garantiu o acolhimento ético da vítima, conteve a difamação nas plataformas " +
            "e entregou evidências rastreadas dentro da lei. Os agressores foram responsabilizados " +
            "e a vítima recuperou sua segurança digital. Você venceu!",
        alternativas: []
    }
];
