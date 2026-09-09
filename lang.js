// lang.js - Motor de Internacionalizacao e Performance do Portfolio (Daniel Germano)

const CERTIFICATES_DATA = [
    {
        title: { pt: "Tecnico em Eletronica", en: "Electronics Technician Degree" },
        issuer: { pt: "ETEC Julio de Mesquita", en: "ETEC Julio de Mesquita" },
        date: { pt: "09/06/2026 (Concluido em 2025)", en: "06/09/2026 (Completed 2025)" },
        image: "medias/certificates/DiplomaDeTécnicoEmEletrônica.jpg",
        link: "medias/certificates/DiplomaDeTécnicoEmEletrônica.jpg",
        category: { pt: "Sistemas Embarcados e Eletronica", en: "Embedded Systems and Electronics" }
    },
    {
        title: { pt: "Fundamentos da IA Moderna: Machine Learning, LLMs e IA Generativa", en: "Foundations of Modern AI: Machine Learning, LLMs and GenAI" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "06/07/2026", en: "07/06/2026" },
        image: "medias/certificates/FundamentosIAModerna.png",
        link: "medias/certificates/FundamentosIAModerna.pdf",
        category: { pt: "Inteligencia Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Potencializando Estudos com Inteligencia Artificial", en: "Empowering Technical Studies with Artificial Intelligence" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "06/07/2026", en: "07/06/2026" },
        image: "medias/certificates/PotencializandoEstudos.png",
        link: "medias/certificates/PotencializandoEstudos.pdf",
        category: { pt: "Inteligencia Artificial", en: "Artificial Intelligence" }
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
        title: { pt: "Copilotos com Inteligencia Artificial e Automacao", en: "AI Copilots and Intelligent Automation" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoCopilotosDeIA.png",
        link: "medias/certificates/CertificadoCopilotosDeIA.pdf",
        category: { pt: "Inteligencia Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Introducao a Engenharia de Prompts e Modelos de Linguagem", en: "Introduction to Prompt Engineering and Language Models" },
        issuer: { pt: "DIO (Digital Innovation One)", en: "DIO (Digital Innovation One)" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoIntroducaoEngenhariaDePrompts.png",
        link: "medias/certificates/CertificadoIntroducaoEngenhariaDePrompts.pdf",
        category: { pt: "Inteligencia Artificial", en: "Artificial Intelligence" }
    },
    {
        title: { pt: "Desenvolvimento Web JavaScript", en: "JavaScript Web Development" },
        issuer: { pt: "Senac Santo Andre", en: "Senac Santo Andre" },
        date: { pt: "2024", en: "2024" },
        image: "medias/certificates/certificadosJSSENAC.png",
        link: "medias/certificates/certificadosJSSENAC.pdf",
        category: { pt: "Frontend", en: "Frontend" }
    },
    {
        title: { pt: "Proficiencia em Ingles (TOEIC)", en: "English Proficiency (TOEIC)" },
        issuer: { pt: "ETEC Julio de Mesquita", en: "ETEC Julio de Mesquita" },
        date: { pt: "2023", en: "2023" },
        image: "medias/certificates/CertificadoTOEIC_ETECJM.jpg",
        link: "medias/certificates/CertificadoTOEIC_ETECJM.jpg",
        category: { pt: "Idiomas", en: "Languages" }
    },
    {
        title: { pt: "Santander Bootcamp 2026 - Desenvolvimento de Software e IA", en: "Santander Bootcamp 2026 - Software Development and AI" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO and Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/Certificado1SantanderBootcamp.webp",
        link: "medias/certificates/Certificado1SantanderBootcamp.webp",
        category: { pt: "Backend", en: "Backend" }
    },
    {
        title: { pt: "Santander Open Academy - Introducao ao Desenvolvimento em Java", en: "Santander Open Academy - Introduction to Java Development" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO and Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoIntroducaoJava.png",
        link: "medias/certificates/CertificadoIntroducaoJava.pdf",
        category: { pt: "Backend", en: "Backend" }
    },
    {
        title: { pt: "Lancamento Santander Bootcamp 2026", en: "Launch of Santander Bootcamp 2026" },
        issuer: { pt: "DIO e Santander Open Academy", en: "DIO and Santander Open Academy" },
        date: { pt: "2026", en: "2026" },
        image: "medias/certificates/CertificadoLancamentoBootcampSantander.png",
        link: "medias/certificates/CertificadoLancamentoBootcampSantander.pdf",
        category: { pt: "Geral", en: "General" }
    }
];

const translations = {
    // NAVEGACAO E CABECALHO
    "nav-about": { pt: "Sobre", en: "About" },
    "nav-skills": { pt: "Habilidades", en: "Skills" },
    "nav-projects": { pt: "Projetos", en: "Projects" },
    "nav-editorial": { pt: "Editorial e Ensaios", en: "Editorial and Essays" },
    "nav-affiliates": { pt: "Loja e Afiliados", en: "Store and Affiliates" },
    "nav-monetization": { pt: "Comissoes e Apoio", en: "Commissions and Support" },
    "nav-certs": { pt: "Certificados", en: "Certificates" },
    "nav-edu": { pt: "Formacao", en: "Education" },
    "article-back-btn": { pt: "Voltar para o Editorial e Ensaios", en: "Back to Editorial and Essays" },

    // HERO
    "hero-tag": { pt: "Desenvolvedor de Software e Sistemas Embarcados", en: "Software Developer and Embedded Systems Specialist" },
    "hero-title": { pt: "Daniel Germano", en: "Daniel Germano" },
    "hero-desc": { 
        pt: "Engenharia de software, automacao de hardware e firmware embarcado, unindo rigor analitico, pesquisa tecnica e producao textual autoral.", 
        en: "Software engineering, hardware automation, and embedded firmware, bridging analytical rigor, technical research, and independent writing." 
    },
    "hero-btn-projects": { pt: "Ver Projetos", en: "View Projects" },
    "hero-btn-editorial": { pt: "Ler Editorial", en: "Read Editorial" },
    "hero-btn-contact": { pt: "Comissoes e Apoio", en: "Commissions and Support" },

    // SOBRE MIM
    "about-title": { pt: "Sobre Mim", en: "About Me" },
    "about-p1": { 
        pt: "Sou graduando em Engenharia de Software e formado como tecnico em eletronica pela Etec Julio de Mesquita. Minha atuacao foca na solucao direta de problemas tecnicos e no desenvolvimento de ferramentas confiaveis, unindo a precisao da engenharia a clareza conceitual da escrita.", 
        en: "I am an undergraduate in Software Engineering and hold a degree as an Electronics Technician from Etec Julio de Mesquita. My work focuses on practical problem solving and building reliable systems, uniting technical precision with clear conceptual communication." 
    },
    "about-p2": { 
        pt: "Na area de tecnologia, possuo base pratica em hardware, desenvolvimento de software e infraestrutura. Atualmente, estou aberto a oportunidades contratuais e posicoes corporativas em desenvolvimento de software, suporte tecnico e operacoes de TI. Minha experiencia abrange desde a programacao de circuitos e microcontroladores em C/C++ ate a automacao de rotinas em Python e manutencao de servidores.", 
        en: "In technology, I have a practical foundation in hardware, software development, and infrastructure. Currently, I am open to contract opportunities and full-time positions in software engineering, technical support, and IT operations. My experience ranges from microcontroller programming in C/C++ to routine automation in Python and server maintenance." 
    },
    "about-p3": { 
        pt: "Como escritor e pesquisador independente, busco produzir conteudos analiticos sobre ciencia, historia, filosofia e tecnologia, incentivando o pensamento critico e a autonomia intelectual. Mantenho este espaco aberto para colaboracoes tecnicas, parcerias editoriais e projetos de engenharia.", 
        en: "As an independent writer and researcher, I produce analytical articles on science, history, philosophy, and technology, fostering critical thinking and intellectual autonomy. I keep this space open for technical collaborations, editorial partnerships, and engineering projects." 
    },
    "about-p4": { 
        pt: "Este portfolio reune meus projetos tecnicos, servicos disponiveis e publicacoes autorais. Fique a vontade para entrar em contato para novas propostas e conversas profissionais.", 
        en: "This portfolio brings together my technical projects, available services, and publications. Feel free to get in touch for new opportunities and professional inquiries." 
    },
    "about-contact-title": { pt: "Contato e Redes", en: "Contact and Social" },

    // HABILIDADES
    "skills-title": { pt: "Habilidades e Stacks", en: "Skills and Stacks" },
    "skills-cat1": { pt: "Linguagens e Backend", en: "Languages and Backend" },
    "skills-cat2": { pt: "Hardware, Embarcados e IoT", en: "Hardware, Embedded and IoT" },
    "skills-cat3": { pt: "IA Local e Infraestrutura", en: "Local AI and Infrastructure" },
    "skills-cat4": { pt: "Design e Ferramentas", en: "Design and Tools" },

    // PROJETOS
    "projects-title": { pt: "Projetos e Portfolio", en: "Projects and Portfolio" },
    "projects-desc": { pt: "Solucoes reais e projetos autorais desenvolvidos com foco em estabilidade, eficiencia e codigo limpo.", en: "Real-world solutions and original projects developed with a focus on stability, efficiency, and clean code." },
    "proj-filter-all": { pt: "Todos os Projetos", en: "All Projects" },
    "proj-filter-embedded": { pt: "Embarcados e IoT", en: "Embedded and IoT" },
    "proj-filter-cli": { pt: "Automacao e CLI", en: "Automation and CLI" },
    "proj-filter-ai": { pt: "IA Local e Software", en: "Local AI and Software" },
    "proj-filter-games": { pt: "Jogos e Web", en: "Games and Web" },

    "proj1-tag": { pt: "IA e Automacao", en: "AI and Automation" },
    "proj1-status": { pt: "Ativo / Producao", en: "Active / Production" },
    "proj1-desc": { 
        pt: "Assistente autonomo e hub de comandos conectado via protocolo seguro Matrix. Integra inferencia local com Ollama (Qwen 2.5-Coder) para tarefas offline e Google Gemini API para triagem e automacoes.", 
        en: "Autonomous assistant and command hub connected via secure Matrix protocol. Integrates local inference with Ollama (Qwen 2.5-Coder) for offline tasks and Google Gemini API for triage and automation." 
    },
    "proj1-link-code": { pt: "Ver Codigo", en: "View Code" },
    "proj1-link-essay": { pt: "Ler Artigo", en: "Read Article" },

    "proj2-tag": { pt: "Desenvolvimento de Jogos", en: "Game Development" },
    "proj2-status": { pt: "Top 71 LAGS", en: "Top 71 LAGS" },
    "proj2-desc": { 
        pt: "Jogo 2D desenvolvido em equipe para a Latin American Game Showcase (LAGS), alcancando destaque entre mais de 120 participantes.", 
        en: "2D indie game developed in a team for the Latin American Game Showcase (LAGS), achieving recognition among over 120 competitors." 
    },
    "proj2-link": { pt: "Jogar no Itch.io", en: "Play on Itch.io" },

    "proj3-tag": { pt: "Eletronica e IoT", en: "Electronics and IoT" },
    "proj3-status": { pt: "Hardware Real", en: "Real Hardware" },
    "proj3-desc": { 
        pt: "Projeto de hardware embarcado e circuito impresso para monitoramento termico continuo, telemetria em tempo real e controle de tracao no TCC de Eletronica.", 
        en: "Embedded hardware design and custom PCB development for continuous thermal monitoring, real-time telemetry, and traction control for Electronics Capstone." 
    },
    "proj3-link": { pt: "Ver Simulacao", en: "View Simulation" },

    "proj4-tag": { pt: "Automacao CLI", en: "CLI Automation" },
    "proj4-status": { pt: "SysAdmin", en: "SysAdmin" },
    "proj4-desc": { 
        pt: "Utilitario de linha de comando para manutencao de discos locais e servidores Nextcloud Dockerizados, executando rotinas de limpeza via OCC.", 
        en: "CLI utility for local disk maintenance and Dockerized Nextcloud server upkeep, executing cleanup routines via OCC." 
    },

    "proj5-tag": { pt: "Performance CLI", en: "CLI Performance" },
    "proj5-status": { pt: "Algoritmo", en: "Algorithm" },
    "proj5-desc": { 
        pt: "Motor de analise e desduplicacao de arquivos em multiplos discos, utilizando filtragem preliminar por tamanho e comparacao rigorosa via hash MD5.", 
        en: "File analysis and deduplication engine across multiple disks, utilizing size prefiltering and strict MD5 hash verification." 
    },

    "proj6-tag": { pt: "Soberania Digital", en: "Digital Sovereignty" },
    "proj6-status": { pt: "Infraestrutura", en: "Infrastructure" },
    "proj6-desc": { 
        pt: "Infraestrutura pessoal containerizada com Docker, orquestrando modelos de IA locais e armazenamento privado Nextcloud com foco em privacidade.", 
        en: "Personal infrastructure containerized with Docker, orchestrating local AI models and private Nextcloud cloud storage with a focus on privacy." 
    },

    "proj7-tag": { pt: "Backend / C#", en: "Backend / C#" },
    "proj7-status": { pt: "Concluido", en: "Completed" },
    "proj7-desc": { 
        pt: "Aplicacao CLI matematica em C# desenvolvida para operacoes aritmeticas compostas, calculos geometricos e treino interativo.", 
        en: "Mathematical CLI application in C# developed for compound arithmetic operations, geometric calculations, and interactive training." 
    },

    "proj8-tag": { pt: "Financas / Python", en: "Finances / Python" },
    "proj8-status": { pt: "Concluido", en: "Completed" },
    "proj8-desc": { 
        pt: "Calculadora de taxas de importacao e tributos (IOF e ICMS) com integracao a APIs de cambio de moedas em tempo real.", 
        en: "Import tax and duty calculator (IOF and ICMS) with real-time currency exchange API integration." 
    },

    "proj9-tag": { pt: "Produtividade", en: "Productivity" },
    "proj9-status": { pt: "Concluido", en: "Completed" },
    "proj9-desc": { 
        pt: "Assistente pessoal automatizado em Python que gera rotinas diarias personalizadas em formato Markdown a partir de definicoes em JSON.", 
        en: "Automated personal assistant in Python that generates customized daily routines in Markdown from JSON definitions." 
    },

    "proj10-tag": { pt: "Web ARG", en: "Web ARG" },
    "proj10-status": { pt: "Em Desenvolvimento", en: "In Development" },
    "proj10-desc": { 
        pt: "Website interativo com mecanicas de Alternate Reality Game (ARG), enigmas sonoros, pistas criptografadas e narrativa em ramificacoes.", 
        en: "Interactive website featuring Alternate Reality Game (ARG) mechanics, audio puzzles, encrypted clues, and branching storylines." 
    },

    "proj11-tag": { pt: "Plataforma Web", en: "Web Platform" },
    "proj11-status": { pt: "Em Producao", en: "In Production" },
    "proj11-desc": { 
        pt: "Portal institucional e catalogo de servicos tecnicos de software e hardware, integrando documentacao e canais de contato.", 
        en: "Institutional portal and technical service catalog for software and hardware, integrating documentation and direct contact channels." 
    },
    "proj11-link": { pt: "Visitar Portal", en: "Visit Portal" },

    "proj12-tag": { pt: "DevOps e Linux", en: "DevOps and Linux" },
    "proj12-status": { pt: "Concluido", en: "Completed" },
    "proj12-desc": { 
        pt: "Colecao de scripts em Bash e utilitarios para automacao de rotinas sysadmin, backups compactados e sincronizacao remota.", 
        en: "Collection of Bash scripts and utilities for sysadmin automation, compressed backups, and remote synchronization." 
    },

    // EDITORIAL
    "editorial-title": { pt: "Editorial, Ensaios e Literatura", en: "Editorial, Essays and Literature" },
    "editorial-intro-p": { 
        pt: "Publicacoes tecnicas, pesquisas aplicadas, reflexoes filosoficas, analises historicas e producoes literarias autorais.", 
        en: "Technical publications, applied research, philosophical essays, historical analyses, and independent literature." 
    },
    "edit-filter-all": { pt: "Todos os Textos", en: "All Texts" },
    "edit-filter-opiniao": { pt: "Opiniao Pessoal", en: "Personal Opinion" },
    "edit-filter-esportes": { pt: "Jornalismo Esportivo", en: "Sports Journalism" },
    "edit-filter-ciencia": { pt: "Pesquisa Cientifica", en: "Scientific Research" },
    "edit-filter-historia": { pt: "Fatos Historicos", en: "Historical Facts" },
    "edit-filter-literatura": { pt: "Poemas e Contos", en: "Poems and Short Stories" },
    "editorial-read-btn": { pt: "Ler Artigo Completo", en: "Read Full Article" },

    "art1-title": { 
        pt: "Aplicacoes de LLMs Locais na Borda: Eficiencia Energetica e Reducao de Custos com Qwen 2.5 e Matrix", 
        en: "Edge LLM Applications: Energy Efficiency and Cost Reduction with Qwen 2.5 and Matrix" 
    },
    "art1-hypo": { 
        pt: "<strong>Hipotese Investigada:</strong> E tecnicamente viavel e vantajoso substituir chamadas de APIs em nuvem por modelos locais quantizados em hardware de baixo custo para tarefas de rotina?", 
        en: "<strong>Research Hypothesis:</strong> Is it technically viable and cost-effective to replace cloud API calls with quantized local models on low-cost hardware for routine automation?" 
    },
    "art1-excerpt": { 
        pt: "Analise tecnica de consumo de VRAM, latencia de inferencia e viabilidade economica de modelos locais quantizados de 1.5B a 7B parametros.", 
        en: "Technical benchmark on VRAM usage, inference latency, and economic viability of quantized local models from 1.5B to 7B parameters." 
    },

    "art2-title": { 
        pt: "A Ilusao da Hiperconectividade e a Fragmentacao do Pensamento Critico", 
        en: "The Illusion of Hyperconnectivity and the Fragmentation of Critical Thinking" 
    },
    "art2-hypo": { 
        pt: "<strong>Reflexao Central:</strong> A saturacao de estimulos rapidos em plataformas digitais afeta a capacidade humana de sustentacao do foco profundo?", 
        en: "<strong>Core Reflection:</strong> Does the saturation of rapid stimuli across digital platforms erode the human capacity for sustained deep focus?" 
    },
    "art2-excerpt": { 
        pt: "Ensaio sobre o valor do foco ininterrupto, a economia da atencao e a necessidade de habitos deliberados de concentracao.", 
        en: "An essay examining the value of sustained focus, the attention economy, and the necessity of deliberate offline habits." 
    },

    "art3-title": { 
        pt: "A Descentralizacao da Informacao e a Queda de Paradigmas: Licoes da Historia Moderna", 
        en: "Information Decentralization and Paradigm Shifts: Lessons from Modern History" 
    },
    "art3-hypo": { 
        pt: "<strong>Analise Historica:</strong> Como a evolucao dos meios de transmissao de dados moldou as transformacoes sociais e politicas da sociedade?", 
        en: "<strong>Historical Analysis:</strong> How the evolution of data transmission mechanisms historically shaped societal and political transformations." 
    },
    "art3-excerpt": { 
        pt: "Estudo comparativo entre a revolucao da prensa de tipos moveis de Gutenberg e a ascensao do ecossistema de codigo aberto e redes federadas.", 
        en: "A comparative study between Gutenberg's movable type printing revolution and the rise of open source and federated protocols." 
    },

    "art4-title": { 
        pt: "A Geometria dos Espacos: Como a Analise Quantitativa e a Tatica Redefiniram o Futebol Moderno", 
        en: "The Geometry of Space: How Quantitative Analytics and Tactics Redefined Modern Football" 
    },
    "art4-hypo": { 
        pt: "<strong>Abordagem Tatica:</strong> O futebol de elite tornou-se um jogo posicional onde a ocupacao de zonas e a telemetria potencializam a tomada de decisao?", 
        en: "<strong>Tactical Investigation:</strong> Has elite football evolved into a positional structure where zone occupation and telemetry empower tactical decision making?" 
    },
    "art4-excerpt": { 
        pt: "Cronica analitica sobre esquemas posicionais, ocupacao de meios-espacos e a integracao entre dados estatisticos e a tecnica individual.", 
        en: "Analytical chronicle exploring positional play, half-space dynamics, and the integration of data metrics with individual technique." 
    },

    "art5-title": { 
        pt: "O Silencio dos Transistores e o Eco da Madrugada", 
        en: "The Silence of Transistors and the Midnight Echo" 
    },
    "art5-hypo": { 
        pt: "<strong>Criacao Autoral:</strong> Reflexoes poeticas sobre a construcao material, circuitos integrados e a solidao criativa na bancada de testes.", 
        en: "<strong>Original Creation:</strong> Poetic reflections on hardware tinkering, integrated circuits, and creative solitude in technical work." 
    },
    "art5-excerpt": { 
        pt: "Coletanea de versos e prosas que exploram a relacao entre a exatidao das ciencias aplicadas e a sensibilidade artistica.", 
        en: "A collection of verses exploring the relationship between applied science exactness and artistic sensibility." 
    },

    // LOJA E AFILIADOS
    "affiliates-title": { pt: "Geek e Tech Hub: Recomendacoes e Afiliados", en: "Geek and Tech Hub: Recommendations and Affiliates" },
    "affiliates-desc": { 
        pt: "Componentes eletronicos, perifericos e livros recomendados para desenvolvimento e projetos maker. Ao adquirir atraves dos links, voce apoia este portfolio sem nenhum custo adicional.", 
        en: "Hand-picked electronic components, peripherals, and technical books. Purchasing through these links directly supports this portfolio at no additional cost." 
    },
    "aff-filter-all": { pt: "Todos os Itens", en: "All Items" },
    "aff-filter-electronics": { pt: "Eletronicos e IoT", en: "Electronics and IoT" },
    "aff-filter-setup": { pt: "Setup e Perifericos", en: "Desk Setup and Peripherals" },
    "aff-filter-games": { pt: "Jogos e Geek", en: "Games and Geek" },
    "aff-filter-books": { pt: "Livros e Leituras", en: "Books and Readings" },
    "aff-btn-buy": { pt: "Acessar Oferta", en: "View Item" },
    "aff-disclaimer-title": { pt: "Politica de Transparencia", en: "Transparency Policy" },
    "aff-disclaimer-p": { 
        pt: "Ao comprar atraves dos links listados, este espaco pode receber uma comissao das plataformas parceiras. O valor do produto permanece exatamente o mesmo para voce. Esse apoio auxilia na aquisicao de novos componentes para testes de hardware e manutencao de servidores.", 
        en: "Purchasing through recommended links may generate a small commission from partner platforms. The price remains unchanged for you. This support helps fund components for hardware experiments and server maintenance." 
    },

    "aff1-title": { pt: "Modulo ESP32 Wi-Fi e Bluetooth", en: "ESP32 Wi-Fi and Bluetooth Dev Board" },
    "aff1-desc": { pt: "Microcontrolador dual-core indicado para automacao residencial, projetos de IoT e prototipagem de firmware.", en: "Dual-core microcontroller recommended for smart home projects, IoT development, and firmware prototyping." },

    "aff2-title": { pt: "Estacao de Solda com Temperatura Ajustavel", en: "Adjustable Temperature Soldering Station" },
    "aff2-desc": { pt: "Equipamento para bancada de eletronica, montagem de placas de circuito impresso e reparos.", en: "Essential equipment for electronics workbenches, PCB assembly, and precision repairs." },

    "aff3-title": { pt: "Multimetro Digital Automatico True-RMS", en: "True-RMS Auto-Ranging Digital Multimeter" },
    "aff3-desc": { pt: "Instrumento para medicao precisa de tensao, corrente, continuidade e teste de componentes.", en: "Instrument for precise voltage, current, continuity, and component diagnostics." },

    "aff4-title": { pt: "Kit Arduino Uno R3 Completo com Sensores", en: "Arduino Uno R3 Starter Kit with Sensors" },
    "aff4-desc": { pt: "Kit com display LCD, reles, motores, cabos e modulos para aprendizado e automacao.", en: "Comprehensive kit with LCD, relays, motors, jumpers, and sensor modules for maker learning." },

    "aff5-title": { pt: "Teclado Mecanico Compacto", en: "Compact Mechanical Keyboard" },
    "aff5-desc": { pt: "Teclado com switches hot-swap e resposta tatil para longas rotinas de programacao e escrita.", en: "Keyboard featuring hot-swappable switches and tactile feedback for extended coding sessions." },

    "aff6-title": { pt: "Mouse Ergonomico de Alta Precisao", en: "High-Precision Ergonomic Mouse" },
    "aff6-desc": { pt: "Sensor optico de alta resolucao e formato ergonomico para conforto durante o trabalho.", en: "High-resolution optical sensor with ergonomic grip for comfort during long work hours." },

    "aff7-title": { pt: "Hub USB-C Multifuncional", en: "Multifunctional USB-C Hub" },
    "aff7-desc": { pt: "Expansao de portas com saida HDMI 4K, portas USB 3.0, leitor de cartao SD e alimentacao PD.", en: "Port expansion featuring 4K HDMI, USB 3.0 ports, SD card reader, and PD power delivery." },

    "aff8-title": { pt: "Luminaria de Monitor LED", en: "Anti-Glare LED Monitor Light" },
    "aff8-desc": { pt: "Iluminacao frontal para mesa sem reflexo na tela, reduzindo o cansaco visual.", en: "Desk illumination without screen reflections, helping reduce eye strain." },

    "aff9-title": { pt: "Livro: Codigo Limpo (Robert C. Martin)", en: "Book: Clean Code (Robert C. Martin)" },
    "aff9-desc": { pt: "Guia de boas praticas, legibilidade e arquitetura de software para desenvolvedores.", en: "Classic guide on software engineering practices, refactoring, and code readability." },

    "aff10-title": { pt: "Livro: Entendendo Algoritmos (Aditya Bhargava)", en: "Book: Grokking Algorithms (Aditya Bhargava)" },
    "aff10-desc": { pt: "Introducao didatica e visual sobre estruturas de dados, buscas e algoritmos essenciais.", en: "Illustrated guide explaining fundamental data structures, search algorithms, and sorting." },

    "aff11-title": { pt: "Controle Sem Fio Multiplataforma", en: "Multiplatform Wireless Controller" },
    "aff11-desc": { pt: "Controle ergonomico para testes de jogos em PC e dispositivos moveis.", en: "Ergonomic controller for game testing and play on PC and mobile devices." },

    "aff12-title": { pt: "Mousepad Grande (90x40cm)", en: "Large Desk Mousepad (90x40cm)" },
    "aff12-desc": { pt: "Superficie uniforme para teclado e mouse com base emborrachada antiderrapante.", en: "Smooth surface for keyboard and mouse with non-slip rubber base." },

    // MONETIZACAO
    "monetization-title": { pt: "Comissoes e Apoio", en: "Commissions and Support" },
    "monetization-desc": { 
        pt: "Servicos de desenvolvimento de software sob demanda, consultoria tecnica e planos de apoio para manutencao das publicacoes abertas.", 
        en: "Custom software development services, technical consulting, and patronage tiers to support open publications." 
    },
    "tier1-title": { pt: "Leitor Apoiador", en: "Reader Supporter" },
    "tier1-period": { pt: "R$ 15 / mes", en: "$3.00 / month" },
    "tier1-feat1": { pt: "Acesso antecipado a novos artigos e pesquisas", en: "Early access to new articles and research notes" },
    "tier1-feat2": { pt: "Nome citado nos agradecimentos das publicacoes", en: "Name listed in publication acknowledgments" },
    "tier1-feat3": { pt: "Canal para envio de sugestoes de topicos", en: "Direct channel for suggesting research topics" },

    "tier2-title": { pt: "Patrono de Pesquisa", en: "Research Patron" },
    "tier2-period": { pt: "R$ 45 / mes", en: "$9.00 / month" },
    "tier2-feat1": { pt: "Todos os beneficios do plano Leitor Apoiador", en: "All benefits from Reader Supporter tier" },
    "tier2-feat2": { pt: "Acesso a repositorios tecnicos e scripts de automacao", en: "Access to private technical repositories and automation scripts" },
    "tier2-feat3": { pt: "Relatorios detalhados de benchmarks de hardware e software", en: "Detailed hardware and software benchmark reports" },

    "tier3-title": { pt: "Comissoes e Consultoria Tecnica", en: "Commissions and Technical Consulting" },
    "tier3-period": { pt: "Sob Demanda", en: "On Demand" },
    "tier3-feat1": { pt: "Desenvolvimento de firmware embarcado (ESP32, C/C++)", en: "Embedded firmware development (ESP32, C/C++)" },
    "tier3-feat2": { pt: "Automacao de processos e scripts Python", en: "Process automation and custom Python CLI tools" },
    "tier3-feat3": { pt: "Consultoria em infraestrutura privada e servidores locais", en: "Private self-hosted infrastructure and server consulting" },

    "btn-support": { pt: "Apoiar", en: "Support" },
    "btn-commission": { pt: "Solicitar Servico", en: "Request Service" },
    "pix-title": { pt: "Apoio Direto via Pix", en: "Direct Support via Pix" },
    "pix-platforms-label": { pt: "Plataformas de Apoio:", en: "Support Platforms:" },
    "btn-copy": { pt: "Copiar Chave Pix", en: "Copy Pix Key" },

    // CERTIFICADOS E FORMACAO
    "certs-title": { pt: "Certificados e Conquistas", en: "Certificates and Achievements" },
    "certs-loading": { pt: "Carregando certificacoes...", en: "Loading certifications..." },
    
    "edu-title": { pt: "Formacao Academica", en: "Academic Education" },
    "edu-card1-title": { pt: "Ensino Medio e Tecnico em Eletronica", en: "High School and Electronics Technical Degree" },
    "edu-card1-date": { pt: "Concluido em 2024", en: "Completed in 2024" },
    "edu-card1-place": { pt: "ETEC Julio de Mesquita", en: "ETEC Julio de Mesquita" },
    "edu-card1-desc": { 
        pt: "Aprovado em 23 lugar. Formacao em circuitos digitais, microcontroladores, logica de controle e bancada analogica.", 
        en: "Passed in 23rd place. Training in digital circuits, microcontrollers, control logic, and analog laboratory work." 
    },
    "edu-card2-title": { pt: "Engenharia de Software (Bacharelado)", en: "Software Engineering (B.S.)" },
    "edu-card2-date": { pt: "Em Andamento (Inicio em 2026)", en: "In Progress (Started 2026)" },
    "edu-card2-place": { pt: "Faculdade Anhanguera", en: "Anhanguera Faculty" },
    "edu-card2-desc": { 
        pt: "Graduacao focada no ciclo completo de desenvolvimento de software, arquitetura de sistemas, estruturas de dados e metodologias ageis.", 
        en: "Degree focused on full software development lifecycle, system architecture, data structures, and agile methodologies." 
    },

    // RODAPE
    "footer-text": { 
        pt: "2026 Daniel Germano. Engenharia de Software, Pesquisa e Producao Autoral.", 
        en: "2026 Daniel Germano. Software Engineering, Research and Technical Writing." 
    }
};

// IDIOMA (PT / EN)
let currentLang = localStorage.getItem("dg_portfolio_lang") || "pt";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("dg_portfolio_lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    updateContent();
}

// TEMA (DARK / LIGHT)
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
        langBtn.setAttribute("aria-label", currentLang === "pt" ? "Translate to English" : "Traduzir para Portugues");
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
                    <img src="${displayImage}" alt="${titleText}" loading="lazy" onerror="this.src='https://placehold.co/400x250/141418/ff1e27?text=${encodeURIComponent(activeLang === "pt" ? "Visualizar Certificado" : "View Certificate")}'">
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

// NAVEGACAO MOBILE E CABECALHO ULTRA LEVE (ZERO LAG NO SCROLL)
function initHeaderAndMenu() {
    const header = document.querySelector('header');
    if (!header) return;

    const headerContainer = header.querySelector('.header-container');
    let menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    if (headerContainer && !menuBtn && nav) {
        menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.setAttribute('aria-label', 'Menu de Navegacao');
        menuBtn.type = 'button';
        menuBtn.innerHTML = '<span></span><span></span><span></span>';
        
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            menuBtn.classList.toggle('active', isMenuOpen);
            nav.classList.toggle('nav-open', isMenuOpen);
        });

        headerContainer.appendChild(menuBtn);

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                menuBtn.classList.remove('active');
                nav.classList.remove('nav-open');
            });
        });

        document.addEventListener('click', (e) => {
            if (isMenuOpen && !header.contains(e.target)) {
                isMenuOpen = false;
                menuBtn.classList.remove('active');
                nav.classList.remove('nav-open');
            }
        });
    }

    // Auto-hide ultra leve sem travamento (utiliza debounce / passive)
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScroll > 100) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }

                if (currentScroll > lastScroll && currentScroll > 140 && !isMenuOpen) {
                    header.classList.add('header-hidden');
                } else if (currentScroll < lastScroll) {
                    header.classList.remove('header-hidden');
                }
                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
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

        if (!document.getElementById("theme-toggle")) {
            const themeBtn = document.createElement("button");
            themeBtn.id = "theme-toggle";
            themeBtn.type = "button";
            themeBtn.addEventListener("click", () => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
            });
            actionsContainer.appendChild(themeBtn);
        }

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
    initHeaderAndMenu();
});