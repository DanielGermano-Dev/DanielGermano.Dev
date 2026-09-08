// lang.js - Portfólio Daniel Germano Multi-language & Theme Script (PT / EN | Dark / Light)

const CERTIFICATES_DATA = [
    {
        title: { pt: "Técnico em Eletrônica", en: "Electronics Technician Degree" },
        issuer: { pt: "ETEC Júlio de Mesquita", en: "ETEC Júlio de Mesquita" },
        date: { pt: "09/06/2026 (Concluído em 2025)", en: "06/09/2026 (Completed 2025)" },
        image: "medias/certificates/DiplomaDeTécnicoEmEletrônica.jpg",
        link: "medias/certificates/DiplomaDeTécnicoEmEletrônica.jpg",
        category: { pt: "Sistemas Embarcados & Eletrônica", en: "Embedded Systems & Electronics" }
    },
    {
        title: { pt: "Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes", en: "Foundations of Modern AI: ML, LLMs, GenAI & Agents" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "06/07/2026", en: "07/06/2026" },
        image: "medias/certificates/FundamentosIAModerna.png",
        link: "medias/certificates/FundamentosIAModerna.pdf",
        category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Potencializando Seus Estudos com IA (Chatbots, Copilotos e Agentes)", en: "Empowering Studies with AI (Chatbots, Copilots & Agents)" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "06/07/2026", en: "07/06/2026" },
        image: "medias/certificates/PotencializandoEstudos.png",
        link: "medias/certificates/PotencializandoEstudos.pdf",
        category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Client x Server Connectivity", en: "Client x Server Connectivity" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoClientXServer.webp",
        link: "medias/certificates/CertificadoClientXServer.webp",
        category: { pt: "Backend", en: "Backend" }
    },
    {
        title: { pt: "Copilotos com Inteligência Artificial", en: "AI Copilots & Autonomous Agents" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoCopilotosDeIA.png",
        link: "medias/certificates/CertificadoCopilotosDeIA.pdf",
        category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Introdução à Engenharia de Prompts", en: "Introduction to Prompt Engineering" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoIntroducaoEngenhariaDePrompts.png",
        link: "medias/certificates/CertificadoIntroducaoEngenhariaDePrompts.pdf",
        category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Desenvolvimento Web JavaScript", en: "JavaScript Web Development" },
        issuer: { pt: "Senac Santo André", en: "Senac Santo André" },
        date: { pt: "2024", en: "2024" },
        image: "medias/certificates/certificadosJSSENAC.png",
        link: "medias/certificates/certificadosJSSENAC.pdf",
        category: { pt: "Front-End", en: "Front-End" }
    },
    {
        title: { pt: "Proficiência em Inglês (TOEIC)", en: "English Proficiency (TOEIC)" },
        issuer: { pt: "ETEC Júlio de Mesquita", en: "ETEC Júlio de Mesquita" },
        date: { pt: "2023", en: "2023" },
        image: "medias/certificates/CertificadoTOEIC_ETECJM.jpg",
        link: "medias/certificates/CertificadoTOEIC_ETECJM.jpg",
        category: { pt: "Idiomas", en: "Languages" }
    },
    {
        title: { pt: "Santander Bootcamp 2026 - Desenvolvimento & IA", en: "Santander Bootcamp 2026 - Software & AI" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO & Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/Certificado1SantanderBootcamp.webp",
        link: "medias/certificates/Certificado1SantanderBootcamp.webp",
        category: { pt: "Back-End", en: "Back-End" }
    },
    {
        title: { pt: "Santander Open Academy - Introdução ao Desenvolvimento em Java", en: "Santander Open Academy - Intro to Java Development" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO & Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoIntroducaoJava.pdf",
        link: "medias/certificates/CertificadoIntroducaoJava.pdf",
        category: { pt: "Back-End", en: "Back-End" }
    },
    {
        title: { pt: "Lançamento Santander Bootcamp 2026", en: "Launch of Santander Bootcamp 2026" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO & Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoLancamentoBootcampSantander.png",
        link: "medias/certificates/CertificadoLancamentoBootcampSantander.pdf",
        category: { pt: "Outros", en: "Others" }
    }
];

const translations = {
    // =========================================================================
    // NAVEGAÇÃO & HEADER
    // =========================================================================
    "nav-about": { pt: "Sobre", en: "About" },
    "nav-skills": { pt: "Habilidades", en: "Skills" },
    "nav-projects": { pt: "Projetos", en: "Projects" },
    "nav-editorial": { pt: "Editorial & Ensaios", en: "Editorial & Essays" },
    "nav-affiliates": { pt: "Loja & Afiliados", en: "Store & Affiliates" },
    "nav-monetization": { pt: "Comissões & Apoio", en: "Commissions & Support" },
    "nav-certs": { pt: "Certificados", en: "Certificates" },
    "nav-edu": { pt: "Formação", en: "Education" },

    // =========================================================================
    // HERO
    // =========================================================================
    "hero-tag": { pt: "Desenvolvedor de Software & Sistemas Embarcados", en: "Software Developer & Embedded Systems Specialist" },
    "hero-title": { pt: "Daniel Germano", en: "Daniel Germano" },
    "hero-desc": { 
        pt: "Especialista em engenharia de software, automação de hardware e firmware embarcado, unindo rigor analítico, pesquisa científica, ensaios reflexivos e literatura autoral.", 
        en: "Specialist in software engineering, hardware automation, and embedded firmware, bridging analytical rigor, scientific research, reflective essays, and creative literature." 
    },
    "hero-btn-projects": { pt: "Ver Projetos", en: "View Projects" },
    "hero-btn-editorial": { pt: "Ler Editorial", en: "Read Editorial" },
    "hero-btn-contact": { pt: "Comissões & Apoio", en: "Commissions & Support" },

    // =========================================================================
    // SOBRE MIM
    // =========================================================================
    "about-title": { pt: "Sobre Mim", en: "About Me" },
    "about-p1": { 
        pt: "Sou graduando em Engenharia de Software e formado como técnico em eletrônica pela Etec Júlio de Mesquita. Minha trajetória se constrói na intersecção entre a resolução prática de problemas e o pensamento crítico, unindo a precisão da tecnologia à capacidade reflexiva da palavra.", 
        en: "I am an undergraduate in Software Engineering and hold a degree as an Electronics Technician from Etec Júlio de Mesquita. My trajectory is built at the intersection of practical problem-solving and critical thinking, merging technological precision with the reflective power of the written word." 
    },
    "about-p2": { 
        pt: "Na área de tecnologia, possuo sólida base em hardware, desenvolvimento de software e infraestrutura. Atualmente, estou aberto a oportunidades no mercado corporativo e contratos fixos, tanto em desenvolvimento quanto em suporte e operações de TI, além de atuar no ecossistema de projetos independentes. Minha bagagem prática abrange desde a programação de circuitos e sistemas embarcados em C/C++ até a automação de rotinas, desenvolvimento backend e configuração de ambientes e redes, sempre com foco em estabilidade, diagnóstico preciso e resolução eficiente de gargalos.", 
        en: "In technology, I have a solid foundation in hardware, software development, and infrastructure. Currently, I am open to corporate opportunities and full-time contracts in software development, technical support, and IT operations, as well as engaging in the independent project ecosystem. My practical background spans from programming circuits and embedded systems in C/C++ to routine automation, backend development, and environment/network configuration — always focusing on stability, precise diagnosis, and efficient bottleneck resolution." 
    },
    "about-p3": { 
        pt: "Como escritor e pesquisador, sou movido pela convicção de que a informação de qualidade e o estímulo ao pensamento crítico são ferramentas indispensáveis para a transformação social. Escrevo sobre princípios, visões de mundo e educação com o objetivo de provocar pausas reflexivas, ajudando as pessoas a saírem do piloto automático e a enxergarem a realidade com mais consciência e profundidade. Estou aberto a parcerias com editoras, publicações e coletivos editoriais interessados em publicar ensaios, projetos conceituais e reflexões contemporâneas.", 
        en: "As a writer and researcher, I am driven by the conviction that quality information and the cultivation of critical thinking are indispensable tools for social transformation. I write about principles, worldviews, and education to provoke reflective pauses, helping people step out of autopilot and perceive reality with greater awareness and depth. I am open to partnerships with publishers, publications, and editorial collectives interested in publishing essays, conceptual projects, and contemporary reflections." 
    },
    "about-p4": { 
        pt: "Este espaço reúne meus serviços técnicos, projetos autorais e produções textuais. Seja para integrar sua equipe de tecnologia, viabilizar ideias no mercado editorial ou colaborar em iniciativas independentes, estou sempre à disposição para conversas produtivas.", 
        en: "This space brings together my technical services, original projects, and written works. Whether to join your technology team, bring ideas to life in the publishing market, or collaborate on independent initiatives, I am always open to productive conversations." 
    },
    "about-contact-title": { pt: "Contato & Redes", en: "Contact & Social" },

    // =========================================================================
    // HABILIDADES & STACKS
    // =========================================================================
    "skills-title": { pt: "Habilidades & Stacks", en: "Skills & Stacks" },
    "skills-cat1": { pt: "Linguagens & Backend", en: "Languages & Backend" },
    "skills-cat2": { pt: "Hardware, Embarcados & IoT", en: "Hardware, Embedded & IoT" },
    "skills-cat3": { pt: "IA Local & Infraestrutura", en: "Local AI & Infrastructure" },
    "skills-cat4": { pt: "Design & Ferramentas", en: "Design & Tools" },

    // =========================================================================
    // PROJETOS (HEADER & FILTROS)
    // =========================================================================
    "projects-title": { pt: "Projetos & Portfólio", en: "Projects & Portfolio" },
    "projects-desc": { pt: "Projetos autorais e soluções reais desenvolvidas com foco em eficiência, estabilidade e código limpo.", en: "Original projects and real-world solutions developed with a focus on efficiency, stability, and clean code." },
    "proj-filter-all": { pt: "Todos os Projetos", en: "All Projects" },
    "proj-filter-embedded": { pt: "Embarcados & IoT", en: "Embedded & IoT" },
    "proj-filter-cli": { pt: "Automação & CLI", en: "Automation & CLI" },
    "proj-filter-ai": { pt: "IA Local & Software", en: "Local AI & Software" },
    "proj-filter-games": { pt: "Jogos & Web", en: "Games & Web" },

    // PROJETOS (INDIVIDUAIS)
    "proj1-tag": { pt: "IA & Automação", en: "AI & Automation" },
    "proj1-status": { pt: "Ativo / Produção", en: "Active / Production" },
    "proj1-desc": { 
        pt: "Assistente autônomo e hub pessoal conectado via protocolo seguro <strong>Matrix</strong>. Integra inferência local via <strong>Ollama (Qwen 2.5-Coder)</strong> para tarefas offline e <strong>Gemini API</strong> para triagem inteligente de vagas e comandos.", 
        en: "Autonomous assistant and personal hub connected via secure <strong>Matrix</strong> protocol. Integrates local inference via <strong>Ollama (Qwen 2.5-Coder)</strong> for offline tasks and <strong>Gemini API</strong> for smart job filtering and command routing." 
    },
    "proj1-link-code": { pt: "Ver Código &rarr;", en: "View Code &rarr;" },
    "proj1-link-essay": { pt: "Ler Ensaio &rarr;", en: "Read Essay &rarr;" },

    "proj2-tag": { pt: "GameDev", en: "GameDev" },
    "proj2-status": { pt: "Top 71 LAGS", en: "Top 71 LAGS" },
    "proj2-desc": { 
        pt: "Jogo 2D autoral em equipe desenvolvido para a <strong>Latin American Game Showcase (LAGS)</strong>, destacando-se entre mais de 120 participantes de toda a América Latina.", 
        en: "Original 2D team-developed indie game for the <strong>Latin American Game Showcase (LAGS)</strong>, standing out among over 120 competitors across Latin America." 
    },
    "proj2-link": { pt: "Jogar no Itch.io &rarr;", en: "Play on Itch.io &rarr;" },

    "proj3-tag": { pt: "Eletrônica & IoT", en: "Electronics & IoT" },
    "proj3-status": { pt: "Hardware Real", en: "Real Hardware" },
    "proj3-desc": { 
        pt: "Desenvolvimento de hardware embarcado e circuito impresso para monitoramento térmico contínuo, telemetria em tempo real e controle de tração no TCC de Eletrônica.", 
        en: "Embedded hardware design and custom PCB development for continuous thermal monitoring, real-time telemetry, and traction control for Electronics Capstone." 
    },
    "proj3-link": { pt: "Ver Simulação &rarr;", en: "View Simulation &rarr;" },

    "proj4-tag": { pt: "Automação CLI", en: "CLI Automation" },
    "proj4-status": { pt: "SysAdmin", en: "SysAdmin" },
    "proj4-desc": { 
        pt: "Ferramenta executável de alta velocidade para manutenção de discos locais e servidores Nextcloud Dockerizados, executando expurgo de lixeiras e histórico de versões via OCC.", 
        en: "High-speed CLI executable for local disk maintenance and Dockerized Nextcloud server upkeep, executing trash purge and version cleanups via OCC." 
    },

    "proj5-tag": { pt: "Performance CLI", en: "CLI Performance" },
    "proj5-status": { pt: "Algoritmo", en: "Algorithm" },
    "proj5-desc": { 
        pt: "Motor de análise e desduplicação de arquivos em múltiplos discos. Emprega estratégia em dois níveis: pré-filtragem por tamanho e conferência estrita de <strong>MD5 Hash</strong>.", 
        en: "File deduplication and disk analysis engine across multiple drives. Implements a two-tier strategy: fast file-size prefiltering and strict <strong>MD5 Hash</strong> verification." 
    },

    "proj6-tag": { pt: "Soberania Digital", en: "Digital Sovereignty" },
    "proj6-status": { pt: "Infraestrutura", en: "Infrastructure" },
    "proj6-desc": { 
        pt: "Infraestrutura pessoal de containerização com Docker, orquestrando modelos de IA locais (Ollama / Qwen 2.5) e armazenamento privado Nextcloud com foco em privacidade total.", 
        en: "Personal self-hosted infrastructure containerized with Docker, orchestrating local AI models (Ollama / Qwen 2.5) and private Nextcloud cloud storage with zero-leak privacy." 
    },

    "proj7-tag": { pt: "Backend / C#", en: "Backend / C#" },
    "proj7-status": { pt: "Concluído", en: "Completed" },
    "proj7-desc": { 
        pt: "Aplicação CLI matemática robusta em C# com operações complexas, teoremas matemáticos (triângulo retângulo) e um sistema de tabuada interativo infinito.", 
        en: "Robust mathematical CLI application in C# featuring complex operations, geometric theorems (right triangle), and an interactive infinite multiplication trainer." 
    },

    "proj8-tag": { pt: "Finanças / Python", en: "Finances / Python" },
    "proj8-status": { pt: "Concluído", en: "Completed" },
    "proj8-desc": { 
        pt: "Calculadora de taxas de importação baseada em legislação nacional e estadual (IOF/ICMS) com integração em tempo real a APIs de câmbio de moedas.", 
        en: "Import duty & tax calculator built in Python compliant with national and state tax laws (IOF/ICMS), featuring real-time currency exchange API integration." 
    },

    "proj9-tag": { pt: "Produtividade", en: "Productivity" },
    "proj9-status": { pt: "Concluído", en: "Completed" },
    "proj9-desc": { 
        pt: "Assistente pessoal automatizado em Python que gera agendas e rotinas diárias personalizadas em Markdown a partir de especificações estruturadas em JSON.", 
        en: "Automated personal assistant in Python generating custom structured daily schedules and routines in Markdown from JSON specifications." 
    },

    "proj10-tag": { pt: "Web ARG", en: "Web ARG" },
    "proj10-status": { pt: "Em Desenvolvimento", en: "In Development" },
    "proj10-desc": { 
        pt: "Website interativo e imersivo com elementos de ARG (Alternate Reality Game), enigmas sonoros, pistas criptografadas e narrativa ramificada inspirada em mistérios de terror.", 
        en: "Immersive interactive website featuring ARG (Alternate Reality Game) mechanics, audio puzzles, cryptographic clues, and branching storylines." 
    },

    "proj11-tag": { pt: "Plataforma Web", en: "Web Platform" },
    "proj11-status": { pt: "Em Produção", en: "In Production" },
    "proj11-desc": { 
        pt: "Ecossistema digital institucional e catálogo de serviços de software e eletrônica, integrando documentação de projetos e canais diretos de suporte.", 
        en: "Institutional digital ecosystem and service catalog for software and electronics, integrating project documentation and direct support channels." 
    },
    "proj11-link": { pt: "Visitar Portal &rarr;", en: "Visit Portal &rarr;" },

    "proj12-tag": { pt: "DevOps & Linux", en: "DevOps & Linux" },
    "proj12-status": { pt: "Concluído", en: "Completed" },
    "proj12-desc": { 
        pt: "Coleção de scripts Bash e utilitários de linha de comando para automação de tarefas de sysadmin, backups automatizados com compressão tar/gzip e sincronização remota via rsync.", 
        en: "Collection of Bash scripts and CLI utilities for sysadmin automation, automated compressed tar/gzip backups, and remote synchronization via rsync." 
    },

    // =========================================================================
    // EDITORIAL / BLOG MULTIDISCIPLINAR
    // =========================================================================
    "editorial-title": { pt: "Editorial, Ensaios & Literatura", en: "Editorial, Essays & Literature" },
    "editorial-intro-p": { 
        pt: "Espaço aberto para dissecar hipóteses técnicas, compartilhar entendimentos filosóficos, análises históricas, políticas e sociais, crônicas de jornalismo esportivo e criações literárias autorais (contos e poemas).", 
        en: "An open space to dissect technical hypotheses, share philosophical reflections, historical, political, and social analyses, sports journalism chronicles, and original creative literature (short stories and poems)." 
    },
    "edit-filter-all": { pt: "Todos os Textos", en: "All Texts" },
    "edit-filter-opiniao": { pt: "Opinião Pessoal", en: "Personal Opinion" },
    "edit-filter-esportes": { pt: "Jornalismo Esportivo", en: "Sports Journalism" },
    "edit-filter-ciencia": { pt: "Pesquisa Científica", en: "Scientific Research" },
    "edit-filter-historia": { pt: "Fatos Históricos", en: "Historical Facts" },
    "edit-filter-literatura": { pt: "Poemas e Contos", en: "Poems & Short Stories" },
    "editorial-read-btn": { pt: "Ler Texto Completo &rarr;", en: "Read Full Text &rarr;" },

    "art1-title": { 
        pt: "Aplicações de LLMs Locais na Borda: Eficiência Energética e Redução de Custos com Qwen 2.5 e Matrix", 
        en: "Edge LLM Applications: Energy Efficiency & Cost Reduction with Qwen 2.5 and Matrix" 
    },
    "art1-hypo": { 
        pt: "<strong>Pergunta / Hipótese:</strong> “É tecnicamente viável e financeiramente compensador substituir chamadas de APIs proprietárias por modelos locais quantizados em hardware de baixo custo?”", 
        en: "<strong>Research Hypothesis:</strong> “Is it technically viable and cost-effective to replace proprietary cloud API calls with quantized local models on low-cost hardware?”" 
    },
    "art1-excerpt": { 
        pt: "Análise quantitativa de consumo de VRAM, latência de inferência e viabilidade econômica ao executar modelos de 1.5B a 7B parâmetros para automação de tarefas cotidianas em comparação com APIs em nuvem.", 
        en: "Quantitative benchmark on VRAM footprint, inference latency, and economic viability when deploying 1.5B to 7B parameter models for daily task automation compared to cloud APIs." 
    },

    "art2-title": { 
        pt: "A Ilusão da Hiperconectividade e a Fragmentação do Pensamento Crítico", 
        en: "The Illusion of Hyperconnectivity and the Fragmentation of Critical Thinking" 
    },
    "art2-hypo": { 
        pt: "<strong>Reflexão Central:</strong> “A saturação de estímulos rápidos e dopaminérgicos nas redes está corroendo nossa capacidade de sustentação do pensamento profundo?”", 
        en: "<strong>Core Reflection:</strong> “Is the saturation of fast-paced dopaminergic stimuli across social feeds eroding our capacity for deep, sustained contemplation?”" 
    },
    "art2-excerpt": { 
        pt: "Um ensaio reflexivo sobre a necessidade de resgatar o silêncio e a concentração prolongada em uma era dominada pela economia da atenção, algoritmos de retenção e superficialidade discursiva.", 
        en: "A philosophical essay examining the urgent need to reclaim silence and sustained focus in an era dominated by the attention economy, retention algorithms, and discursive superficiality." 
    },

    "art3-title": { 
        pt: "A Descentralização da Informação e a Queda de Paradigmas: Lições da História Moderna", 
        en: "Information Decentralization and Paradigm Shifts: Lessons from Modern History" 
    },
    "art3-hypo": { 
        pt: "<strong>Análise Histórica:</strong> “Como a evolução dos meios de difusão de conhecimento — da imprensa de Gutenberg ao open-source — redesenhou o poder social?”", 
        en: "<strong>Historical Analysis:</strong> “How the evolution of knowledge distribution mechanisms — from Gutenberg's press to open-source — reshaped social power structures.”" 
    },
    "art3-excerpt": { 
        pt: "Uma investigação sobre como a quebra do monopólio da distribuição do saber historicamente acelerou revoluções científicas e por que o software livre e o hardware aberto são os pilares da soberania contemporânea.", 
        en: "An investigation into how breaking knowledge monopolies historically sparked scientific revolutions, and why free software and open hardware are pillars of modern sovereignty." 
    },

    "art4-title": { 
        pt: "A Geometria dos Espaços: Como a Análise Quantitativa e a Tática Redefiniram o Futebol Moderno", 
        en: "The Geometry of Space: How Quantitative Analytics and Tactics Redefined Modern Football" 
    },
    "art4-hypo": { 
        pt: "<strong>Abordagem Tática:</strong> “O futebol moderno tornou-se uma partida de xadrez espacial onde a ocupação de zonas e os dados superam o improviso individual?”", 
        en: "<strong>Tactical Investigation:</strong> “Has modern football evolved into spatial chess where positional play and telemetry data take precedence over pure individual improvisation?”" 
    },
    "art4-excerpt": { 
        pt: "Crônica tática e analítica sobre a evolução dos esquemas posicionais, o conceito de 'espaço entre linhas', a métrica de Expected Goals (xG) e o equilíbrio entre a arte do drible e a disciplina tática.", 
        en: "A tactical chronicle exploring positional play evolutions, half-space dynamics, Expected Goals (xG) metrics, and the delicate equilibrium between creative dribbling and tactical discipline." 
    },

    "art5-title": { 
        pt: "O Silêncio dos Transistores & O Eco da Madrugada", 
        en: "The Silence of Transistors & The Midnight Echo" 
    },
    "art5-hypo": { 
        pt: "<strong>Poema Autoral:</strong> “Na dança dos elétrons e no calor da solda, reside a poesia discreta da criação.”", 
        en: "<strong>Original Poem:</strong> “In the subtle dance of electrons and the heat of solder lies the quiet poetry of creation.”" 
    },
    "art5-excerpt": { 
        pt: "Coletânea de versos e prosas poéticas que exploram a solidão da bancada de eletrônica, o brilho verde dos LEDs no escuro e a busca humana por significado através das linhas de código e circuitos integrados.", 
        en: "A poetic anthology exploring the solitude of late-night hardware tinkering, the soft green glow of LEDs in the dark, and humanity's quest for purpose through code and silicon." 
    },

    // =========================================================================
    // LOJA GEEK & AFILIADOS
    // =========================================================================
    "affiliates-title": { pt: "Geek & Tech Hub | Recomendações & Afiliados", en: "Geek & Tech Hub | Recommendations & Affiliates" },
    "affiliates-desc": { 
        pt: "Produtos testados e selecionados a dedo para desenvolvedores, makers, gamers e entusiastas de tecnologia. Comprando pelos links abaixo, você apoia diretamente a manutenção dos meus projetos e pesquisas sem pagar nada a mais por isso.", 
        en: "Hand-picked and tested gear for developers, makers, gamers, and tech enthusiasts. Buying through the links below directly supports my research and open-source projects at no extra cost to you." 
    },
    "aff-filter-all": { pt: "Todos os Itens", en: "All Items" },
    "aff-filter-electronics": { pt: "Eletrônicos & IoT", en: "Electronics & IoT" },
    "aff-filter-setup": { pt: "Setup & Periféricos", en: "Desk Setup & Peripherals" },
    "aff-filter-games": { pt: "Games & Geek", en: "Games & Geek" },
    "aff-filter-books": { pt: "Livros & Leituras", en: "Books & Readings" },
    "aff-btn-buy": { pt: "Comprar na Shopee", en: "Buy on Shopee" },
    "aff-disclaimer-title": { pt: "Transparência e Política de Afiliação", en: "Transparency & Affiliate Policy" },
    "aff-disclaimer-p": { 
        pt: "Ao comprar através dos links recomendados nesta página, recebo uma pequena comissão das plataformas parceiras (como Shopee, Amazon e AliExpress). O valor do produto <strong>permanece exatamente o mesmo para você</strong>, com eventuais descontos e cupons ativos. Esse suporte me ajuda a continuar investindo em componentes para novos testes de hardware, servidores locais e publicações abertas de pesquisa.", 
        en: "By purchasing through recommended links on this page, I may receive a small commission from affiliate partner platforms (such as Shopee, Amazon, and AliExpress). The price of the product <strong>remains exactly the same for you</strong>, along with any active discounts and coupons. This support helps fund components for new hardware experiments, local server infrastructure, and open research publications." 
    },

    "aff1-title": { pt: "Módulo ESP32 Wi-Fi + Bluetooth", en: "ESP32 Wi-Fi + Bluetooth Dev Board" },
    "aff1-desc": { pt: "Microcontrolador dual-core essencial para automação residencial, IoT e prototipagem de firmware de alto desempenho.", en: "Dual-core microcontroller essential for smart home automation, IoT, and high-performance embedded firmware." },

    "aff2-title": { pt: "Estação de Solda com Temperatura Ajustável", en: "Adjustable Temperature Soldering Station" },
    "aff2-desc": { pt: "Equipamento fundamental para bancada eletrônica, montagem de placas PCB e reparo preciso de circuitos integrados.", en: "Essential equipment for electronics workbenches, custom PCB assembly, and precise integrated circuit repairs." },

    "aff3-title": { pt: "Multímetro Digital Automático True-RMS", en: "True-RMS Auto-Ranging Digital Multimeter" },
    "aff3-desc": { pt: "Instrumento de medição de alta precisão para tensão, corrente, continuidade com bip sonoro e teste de componentes.", en: "High-precision measurement instrument for voltage, current, audio continuity check, and component diagnostics." },

    "aff4-title": { pt: "Kit Arduino Uno R3 Completo com Sensores", en: "Complete Arduino Uno R3 Starter Kit with Sensors" },
    "aff4-desc": { pt: "Kit completo com display LCD, relés, servo-motores, jumpers e sensores para aprendizado prático e automação.", en: "Comprehensive kit with LCD display, relays, servos, jumpers, and sensor modules for hands-on maker learning." },

    "aff5-title": { pt: "Teclado Mecânico Compacto Switch Hot-Swap", en: "Compact Hot-Swappable Mechanical Keyboard" },
    "aff5-desc": { pt: "Excelente resposta tátil e ergonomia superior para longas sessões de programação, escrita técnica e digitação.", en: "Crisp tactile feedback and superior ergonomics for marathon coding sessions, technical writing, and gaming." },

    "aff6-title": { pt: "Mouse Ergonômico de Alta Precisão", en: "High-Precision Ergonomic Mouse" },
    "aff6-desc": { pt: "Sensor óptico de alta resolução e pegada ergonômica para evitar fadiga durante jornadas de trabalho prolongadas.", en: "High-resolution optical sensor with ergonomic grip to prevent wrist fatigue during extended work sessions." },

    "aff7-title": { pt: "Hub USB-C Multifuncional 8 em 1", en: "8-in-1 Multifunctional USB-C Hub" },
    "aff7-desc": { pt: "Expansão de portas com saída HDMI 4K, portas USB 3.0 rápidas, leitor de cartão SD e fornecimento de energia PD.", en: "Port expansion hub featuring 4K HDMI, ultra-fast USB 3.0 ports, SD card readers, and PD power delivery." },

    "aff8-title": { pt: "Luminária de Monitor LED Anti-Reflexo", en: "Anti-Glare LED Screenbar Monitor Light" },
    "aff8-desc": { pt: "Iluminação focal para sua mesa sem causar reflexos na tela, reduzindo o cansaço visual em noites de trabalho.", en: "Focal desk illumination without screen reflections, drastically reducing eye strain during night shifts." },

    "aff9-title": { pt: "Livro: Código Limpo (Robert C. Martin)", en: "Book: Clean Code (Robert C. Martin)" },
    "aff9-desc": { pt: "Guia indispensável de boas práticas, refatoração e arquitetura para todo desenvolvedor de software moderno.", en: "Indispensable software engineering classic on best practices, refactoring, and crafting readable, maintainable code." },

    "aff10-title": { pt: "Livro: Entendendo Algoritmos (Aditya Bhargava)", en: "Book: Grokking Algorithms (Aditya Bhargava)" },
    "aff10-desc": { pt: "Explicação visual e didática das principais estruturas de dados, buscas, grafos e algoritmos essenciais.", en: "An illustrated, highly didactic guide explaining fundamental data structures, search algorithms, graphs, and sorting." },

    "aff11-title": { pt: "Gamepad Sem Fio Multiplataforma (PC/Mobile)", en: "Multiplatform Wireless Gamepad (PC/Mobile)" },
    "aff11-desc": { pt: "Controle preciso com baixa latência e empunhadura ergonômica, ideal para testes de gamedev e sessões de jogos.", en: "Low-latency wireless controller with ergonomic grip, ideal for game development playtesting and gaming." },

    "aff12-title": { pt: "Mousepad Gamer Extra Grande Speed (90x40cm)", en: "Extra Large XXL Desk Mousepad (90x40cm)" },
    "aff12-desc": { pt: "Superfície micro-texturizada suave para teclado e mouse, com bordas costuradas e base de borracha antiderrapante.", en: "Smooth micro-textured desk surface for keyboard and mouse with reinforced stitched edges and non-slip rubber base." },

    // =========================================================================
    // MONETIZAÇÃO & COMISSÕES
    // =========================================================================
    "monetization-title": { pt: "Comissões & Apoio Contínuo", en: "Commissions & Support" },
    "monetization-desc": { 
        pt: "Monetizo meus conhecimentos através de serviços de desenvolvimento sob medida, consultorias técnicas e planos de apoio contínuo para manter minhas pesquisas e produções abertas à comunidade.", 
        en: "I monetize my expertise through custom software development, technical consulting, and recurring subscription tiers to keep my research and publications open to the community." 
    },
    "tier1-title": { pt: "Leitor Apoiador", en: "Reader Supporter" },
    "tier1-period": { pt: "R$ 15 / mês", en: "$3.00 / month" },
    "tier1-feat1": { pt: "Acesso antecipado a novos ensaios e pesquisas", en: "Early access to new essays and research drafts" },
    "tier1-feat2": { pt: "Nome citado nos agradecimentos das publicações", en: "Name listed in publication acknowledgments" },
    "tier1-feat3": { pt: "Canal exclusivo para sugestão de tópicos e temas", en: "Exclusive channel for topic and research suggestions" },

    "tier2-title": { pt: "Patrono de Pesquisa & Tech", en: "Research & Tech Patron" },
    "tier2-period": { pt: "R$ 45 / mês", en: "$9.00 / month" },
    "tier2-feat1": { pt: "Todos os benefícios do plano Leitor Apoiador", en: "All benefits from Reader Supporter tier" },
    "tier2-feat2": { pt: "Acesso a repositórios privados e scripts de automação", en: "Access to private repositories and automation scripts" },
    "tier2-feat3": { pt: "Relatórios detalhados de benchmarks de hardware & IA", en: "Detailed hardware & AI benchmark deep-dive reports" },

    "tier3-title": { pt: "Comissões & Consultoria Técnica", en: "Commissions & Tech Consulting" },
    "tier3-period": { pt: "Sob Demanda", en: "On Demand" },
    "tier3-feat1": { pt: "Desenvolvimento de firmware embarcado (ESP32, C/C++)", en: "Embedded firmware development (ESP32, C/C++)" },
    "tier3-feat2": { pt: "Automação de processos empresariais e scripts Python", en: "Business process automation and custom Python CLI tools" },
    "tier3-feat3": { pt: "Consultoria em infraestrutura privada (Docker, IA Local)", en: "Self-hosted infrastructure consulting (Docker, Local AI)" },

    "btn-support": { pt: "Apoiar Projeto", en: "Support Project" },
    "btn-commission": { pt: "Solicitar Comissão", en: "Request Commission" },
    "pix-title": { pt: "Apoio Instantâneo via Pix", en: "Instant Support via Pix" },
    "pix-platforms-label": { pt: "Plataformas de Financiamento & Patrocínio:", en: "Funding & Sponsorship Platforms:" },
    "btn-copy": { pt: "Copiar Chave Pix", en: "Copy Pix Key" },

    // =========================================================================
    // CERTIFICADOS & FORMAÇÃO
    // =========================================================================
    "certs-title": { pt: "Certificados & Conquistas", en: "Certificates & Achievements" },
    "certs-loading": { pt: "Carregando certificações...", en: "Loading certifications..." },
    
    "edu-title": { pt: "Formação Acadêmica", en: "Academic Education" },
    "edu-card1-title": { pt: "Ensino Médio & Técnico em Eletrônica", en: "High School & Electronics Technical Degree" },
    "edu-card1-date": { pt: "Concluído em 2024", en: "Completed in 2024" },
    "edu-card1-place": { pt: "ETEC Júlio de Mesquita", en: "ETEC Júlio de Mesquita" },
    "edu-card1-desc": { 
        pt: "Aprovado em 23° lugar. Formação sólida em circuitos digitais, microcontroladores, lógica de controle, instrumentação física e bancada analógica.", 
        en: "Passed in 23rd place. Solid training in digital circuits, microcontrollers, control logic, physical instrumentation, and analog lab work." 
    },
    "edu-card2-title": { pt: "Engenharia de Software (Bacharelado)", en: "Software Engineering (B.S.)" },
    "edu-card2-date": { pt: "Em Andamento (Início em 2026)", en: "In Progress (Started 2026)" },
    "edu-card2-place": { pt: "Faculdade Anhanguera (EAD)", en: "Anhanguera Faculty" },
    "edu-card2-desc": { 
        pt: "Graduação focada no ciclo de vida completo de desenvolvimento de software, arquitetura de sistemas de alta escala, estruturas de dados e metodologias ágeis.", 
        en: "Degree focused on full software engineering lifecycle, high-scale system architecture, data structures, and agile methodologies." 
    },

    // =========================================================================
    // FOOTER
    // =========================================================================
    "footer-text": { 
        pt: "&copy; 2026 Daniel Germano. Engenharia de Software, Pesquisa & Produção Autoral.", 
        en: "&copy; 2026 Daniel Germano. Software Engineering, Research & Creative Writing." 
    }
};

// -----------------------------------------------------------------------------
// IDIOMA (PT / EN)
// -----------------------------------------------------------------------------
let currentLang = localStorage.getItem("dg_portfolio_lang") || "pt";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("dg_portfolio_lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    updateContent();
}

// -----------------------------------------------------------------------------
// TEMA (DARK / LIGHT)
// -----------------------------------------------------------------------------
let currentTheme = localStorage.getItem("dg_portfolio_theme") || "dark";

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("dg_portfolio_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButton();
}

function updateThemeButton() {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        if (currentTheme === "dark") {
            themeBtn.textContent = currentLang === "pt" ? "Tema Claro" : "Light Theme";
            themeBtn.setAttribute("aria-label", currentLang === "pt" ? "Mudar para tema claro" : "Switch to light theme");
        } else {
            themeBtn.textContent = currentLang === "pt" ? "Tema Escuro" : "Dark Theme";
            themeBtn.setAttribute("aria-label", currentLang === "pt" ? "Mudar para tema escuro" : "Switch to dark theme");
        }
    }
}

function updateLangButton() {
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
        langBtn.textContent = currentLang === "pt" ? "Traduzir para EN-US" : "Traduzir para PT-BR";
        langBtn.setAttribute("aria-label", currentLang === "pt" ? "Translate to English" : "Traduzir para Português");
    }
}

function renderCertificates(list, lang) {
    const activeLang = lang || currentLang;
    const container = document.getElementById("certificatesContainer");
    if (!container) return;
    container.innerHTML = "";

    const certs = list || CERTIFICATES_DATA;
    if (!certs || certs.length === 0) {
        container.innerHTML = `<p>${activeLang === "pt" ? "Nenhum certificado cadastrado." : "No certificates available."}</p>`;
        return;
    }

    certs.forEach(item => {
        const card = document.createElement("div");
        card.className = "certificate-card";
        
        const isPdf = item.image && item.image.toLowerCase().endsWith(".pdf");
        const titleText = typeof item.title === "object" ? (item.title[activeLang] || item.title.pt) : item.title;
        const issuerText = typeof item.issuer === "object" ? (item.issuer[activeLang] || item.issuer.pt) : item.issuer;
        const dateText = typeof item.date === "object" ? (item.date[activeLang] || item.date.pt) : item.date;
        const catText = typeof item.category === "object" ? (item.category[activeLang] || item.category.pt) : (item.category || (activeLang === "pt" ? "Geral" : "General"));
        
        const displayImage = isPdf ? `https://placehold.co/400x250/141418/ff1e27?text=${encodeURIComponent(activeLang === "pt" ? "Visualizar PDF" : "View PDF")}` : item.image;
        const clickLink = item.link || item.image;
        
        card.innerHTML = `
            <a href="${clickLink}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none; color: inherit;">
                <div class="cert-img-container">
                    <img src="${displayImage}" alt="${titleText}" onerror="this.src='https://placehold.co/400x250/141418/ff1e27?text=${encodeURIComponent(activeLang === "pt" ? "Visualizar Certificado" : "View Certificate")}'">
                </div>
                <div class="cert-info">
                    <span class="cert-tag">${catText}</span>
                    <h4>${titleText}</h4>
                    <p class="cert-issuer">${issuerText}</p>
                    <p class="cert-date">${dateText}</p>
                </div>
            </a>
        `;
        container.appendChild(card);
    });
}

function updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key] && translations[key][currentLang]) {
            if (element.tagName === "P" || element.tagName === "SPAN" || element.tagName === "DIV" || element.tagName === "LI" || element.tagName === "BUTTON" || element.tagName === "A" || element.tagName === "H1" || element.tagName === "H2" || element.tagName === "H3" || element.tagName === "H4") {
                element.innerHTML = translations[key][currentLang];
            } else {
                element.textContent = translations[key][currentLang];
            }
        }
    });

    updateLangButton();
    updateThemeButton();
    renderCertificates(CERTIFICATES_DATA, currentLang);
}

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("data-theme", currentTheme);

    const nav = document.querySelector("nav");
    if (nav) {
        let actionsContainer = nav.querySelector(".nav-actions");
        if (!actionsContainer) {
            actionsContainer = document.createElement("div");
            actionsContainer.className = "nav-actions";
            nav.appendChild(actionsContainer);
        }

        // 1. Botão de Tema (Sem Emojis, sem bordas)
        if (!document.getElementById("theme-toggle")) {
            const themeBtn = document.createElement("button");
            themeBtn.id = "theme-toggle";
            themeBtn.type = "button";
            themeBtn.addEventListener("click", () => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
            });
            actionsContainer.appendChild(themeBtn);
        }

        // 2. Botão de Idioma (Traduzir para EN-US / Traduzir para PT-BR, Sem Emojis, sem bordas)
        if (!document.getElementById("lang-toggle")) {
            const langBtn = document.createElement("button");
            langBtn.id = "lang-toggle";
            langBtn.type = "button";
            langBtn.addEventListener("click", () => {
                setLanguage(currentLang === "pt" ? "en" : "pt");
            });
            actionsContainer.appendChild(langBtn);
        }
    }

    setLanguage(currentLang);
    setTheme(currentTheme);
    renderCertificates(CERTIFICATES_DATA, currentLang);
});