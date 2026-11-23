export const perguntas = [
	{
		caminho: "inicio",
		enunciado:
			"Ao sair da escola, você descobre uma inteligência " +
			"artificial capaz de criar textos, imagens e vozes. " +
			"Qual é sua primeira reação?",
		alternativas: [
			{
				texto: "Quero experimentar e descobrir o que ela consegue fazer.",
				afirmacao: ["Decidiu experimentar a inteligência artificial."],
				tipo: "entrada", proxima: 1
			},
			{
				texto: "Quero entender os riscos antes de utilizar.",
				afirmacao: ["Decidiu investigar os riscos da inteligência artificial."],
				tipo: "entrada", proxima: 2
			}
		]
	},
	{
		caminho: "A",
		enunciado:
			"Você decide experimentar a ferramenta. Na mesma semana, " +
			"a professora solicita um trabalho sobre inteligência " +
			"artificial. Como você pretende começar?",
		alternativas: [
			{
				texto: "Testar uma explicação da IA e separar o que conferir.",
				afirmacao: ["Testou uma explicação e separou dúvidas para conferir."],
				tipo: "avancar", proxima: 3
			},
			{
				texto: "Usar a pesquisa já conferida em aula e planejar um exemplo.",
				afirmacao: ["Usou a pesquisa da aula para planejar um exemplo."],
				tipo: "salto", proxima: 4
			},
			{
				texto: "Investigar um áudio suspeito recebido no bairro.",
				afirmacao: ["Decidiu investigar um áudio que circulava no bairro."],
				tipo: "trocar", proxima: 2, disponivel: true
			}
		]
	},
	{
		caminho: "B",
		enunciado:
			"Antes de experimentar a ferramenta, você procura entender " +
			"seus riscos. Nesse momento, recebe um áudio suspeito " +
			"atribuído à diretora da escola. O que você pretende fazer?",
		alternativas: [
			{
				texto: "Procurar a origem do áudio antes de compartilhar.",
				afirmacao: ["Procurou a origem do áudio antes de compartilhar."],
				tipo: "avancar", proxima: 7
			},
			{
				texto: "Consultar diretamente a escola e planejar uma resposta.",
				afirmacao: ["Consultou a escola diretamente antes de agir."],
				tipo: "salto", proxima: 8
			},
			{
				texto: "Levar o caso para o trabalho escolar sobre IA.",
				afirmacao: ["Levou o caso para o trabalho escolar sobre IA."],
				tipo: "trocar", proxima: 1, disponivel: true
			}
		]
	},
	{
		caminho: "A",
		enunciado:
			"A resposta da IA apresenta uma afirmação sem fonte. " +
			"Qual atitude você toma?",
		alternativas: [
			{
				texto: "Conferir fontes confiáveis e planejar a demonstração.",
				afirmacao: ["Conferiu fontes antes de planejar a demonstração."],
				tipo: "avancar", proxima: 4
			},
			{
				texto: "Refazer o teste inicial com uma pergunta mais clara.",
				afirmacao: ["Retomou o teste inicial com uma pergunta mais clara."],
				tipo: "salto", proxima: 1
			},
			{
				texto: "Inventar uma fonte e apresentá-la como verdadeira.",
				afirmacao: ["Inventou uma fonte para sustentar a resposta."],
				tipo: "gameover",
				disponivel: true,
				mensagem:
					"A fonte inventada foi identificada e o trabalho foi " +
					"invalidado. Você falhou na missão e precisa recomeçar."
			}
		]
	},
	{
		caminho: "A",
		enunciado:
			"Você vai demonstrar como uma IA produz respostas. " +
			"Como preparar o exemplo para a turma?",
		alternativas: [
			{
				texto: "Montar um exemplo fictício e pedir uma revisão.",
				afirmacao: ["Preparou um exemplo fictício para revisão."],
				tipo: "avancar", proxima: 5
			},
			{
				texto: "Usar um exemplo já revisado em aula e organizar a apresentação.",
				afirmacao: ["Escolheu um exemplo já revisado em aula."],
				tipo: "salto", proxima: 6
			},
			{
				texto: "Usar a investigação do áudio para orientar os moradores.",
				afirmacao: ["Decidiu colaborar com a orientação dos moradores."],
				tipo: "trocar", proxima: 8, disponivel: true
			}
		]
	},
	{
		caminho: "A",
		enunciado:
			"Um colega observa que seu material não explica os limites " +
			"da IA. O que você faz?",
		alternativas: [
			{
				texto: "Acrescentar os limites e organizar a apresentação.",
				afirmacao: ["Acrescentou os limites da ferramenta ao material."],
				tipo: "avancar", proxima: 6
			},
			{
				texto: "Voltar à conferência das informações para revisar as fontes.",
				afirmacao: ["Voltou à conferência das fontes para revisar o material."],
				tipo: "salto", proxima: 3
			},
			{
				texto: "Publicar dados pessoais dos colegas sem autorização.",
				afirmacao: ["Expôs dados pessoais dos colegas sem autorização."],
				tipo: "gameover",
				disponivel: true,
				mensagem:
					"A divulgação expôs os colegas e seu projeto foi suspenso. " +
					"Você falhou na missão e precisa recomeçar."
			}
		]
	},
	{
		caminho: "A",
		enunciado:
			"Antes da apresentação, você decide como organizar " +
			"o trabalho. Qual será sua atitude?",
		alternativas: [
			{
				texto: "Organizar o exemplo, as fontes e os cuidados necessários.",
				afirmacao: ["Organizou o exemplo, as fontes e os cuidados necessários."],
				tipo: "avancar", proxima: 11
			},
			{
				texto: "Voltar à revisão para melhorar a explicação dos limites.",
				afirmacao: ["Retomou a revisão para melhorar a explicação dos limites."],
				tipo: "salto", proxima: 5
			},
			{
				texto: "Levar o material ao encontro de orientação dos moradores.",
				afirmacao: ["Decidiu levar o material ao encontro dos moradores."],
				tipo: "trocar", proxima: 10, disponivel: true
			}
		]
	},
	{
		caminho: "B",
		enunciado:
			"O áudio não tem uma publicação original identificada. " +
			"Como continuar a investigação?",
		alternativas: [
			{
				texto: "Consultar os canais oficiais da escola.",
				afirmacao: ["Consultou os canais oficiais da escola."],
				tipo: "avancar", proxima: 8
			},
			{
				texto: "Retomar a busca inicial e procurar outras versões do áudio.",
				afirmacao: ["Retomou a busca pela origem e por outras versões do áudio."],
				tipo: "salto", proxima: 2
			},
			{
				texto: "Acusar publicamente um colega sem qualquer prova.",
				afirmacao: ["Acusou um colega publicamente sem provas."],
				tipo: "gameover",
				disponivel: true,
				mensagem:
					"A acusação sem provas prejudicou um colega e interrompeu a " +
					"investigação. Você falhou na missão e precisa recomeçar."
			}
		]
	},
	{
		caminho: "B",
		enunciado:
			"A escola confirma que o áudio é falso. Você decide " +
			"ajudar os moradores a verificar informações. Como agir?",
		alternativas: [
			{
				texto: "Preparar uma campanha e conferir suas orientações.",
				afirmacao: ["Preparou uma campanha para orientar os moradores."],
				tipo: "avancar", proxima: 9
			},
			{
				texto: "Usar o comunicado já revisado pela escola e organizar o encontro.",
				afirmacao: ["Escolheu o comunicado revisado pela escola para o encontro."],
				tipo: "salto", proxima: 10
			},
			{
				texto: "Transformar o caso em uma demonstração para a turma.",
				afirmacao: ["Decidiu transformar o caso em uma demonstração escolar."],
				tipo: "trocar", proxima: 4, disponivel: true
			}
		]
	},
	{
		caminho: "B",
		enunciado:
			"Na revisão da campanha, surge uma dúvida sobre a origem " +
			"do áudio. Como você responde?",
		alternativas: [
			{
				texto: "Explicar o que foi confirmado e o que permanece desconhecido.",
				afirmacao: ["Separou os fatos confirmados das informações desconhecidas."],
				tipo: "avancar", proxima: 10
			},
			{
				texto: "Voltar à investigação para conferir a origem novamente.",
				afirmacao: ["Retomou a investigação para conferir a origem do áudio."],
				tipo: "salto", proxima: 7
			},
			{
				texto: "Criar outro áudio falso e divulgá-lo como verdadeiro.",
				afirmacao: ["Criou e divulgou outro áudio falso como verdadeiro."],
				tipo: "gameover",
				disponivel: true,
				mensagem:
					"O novo áudio falso causou mais desinformação e a campanha " +
					"foi interrompida. Você falhou na missão e precisa " +
					"recomeçar."
			}
		]
	},
	{
		caminho: "B",
		enunciado:
			"Você prepara o encontro com os moradores. O que " +
			"precisa fazer antes de apresentar o material?",
		alternativas: [
			{
				texto: "Organizar o esclarecimento da escola e as dicas de verificação.",
				afirmacao: ["Organizou o esclarecimento e as dicas de verificação."],
				tipo: "avancar", proxima: 12
			},
			{
				texto: "Voltar à revisão para melhorar as orientações.",
				afirmacao: ["Voltou à revisão das orientações da campanha."],
				tipo: "salto", proxima: 9
			},
			{
				texto: "Expor conversas privadas de moradores sem autorização.",
				afirmacao: ["Expôs conversas privadas de moradores sem autorização."],
				tipo: "gameover",
				disponivel: true,
				mensagem:
					"A exposição das conversas privadas encerrou sua " +
					"participação na campanha. Você falhou na missão e precisa " +
					"recomeçar."
			}
		]
	},
	{
		caminho: "A",
		final: "vitoria",
		enunciado:
			"Você apresentou seu trabalho à escola, explicou os benefícios " +
			"e os limites da IA e demonstrou os cuidados necessários. " +
			"A missão foi concluída com sucesso. Você venceu!",
		alternativas: []
	},
	{
		caminho: "B",
		final: "vitoria",
		enunciado:
			"Você apresentou o esclarecimento da escola aos moradores " +
			"e ensinou como verificar conteúdos suspeitos. " +
			"A missão foi concluída com sucesso. Você venceu!",
		alternativas: []
	}
];
