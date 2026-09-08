// lang.js - Portfólio Daniel Germano Multi-language & Theme Script (PT / EN | Dark / Light)
const translations = {
    // =========================================================================
    // NAVEGAÇÃO & TEMA
    // =========================================================================
    "nav-about": { pt: "Sobre", en: "About" },
    "nav-skills": { pt: "Habilidades", en: "Skills" },
    "nav-projects": { pt: "Projetos", en: "Projects" },
    "nav-editorial": { pt: "Editorial & Ensaios", en: "Editorial & Essays" },
    "nav-affiliates": { pt: "Loja & Afiliados", en: "Store & Affiliates" },
    "nav-monetization": { pt: "Comissões & Apoio", en: "Commissions & Support" },
    "nav-certs": { pt: "Certificados", en: "Certificates" },
    "nav-edu": { pt: "Formação", en: "Education" },
    "theme-dark-btn": { pt: "🌙 Escuro", en: "🌙 Dark" },
    "theme-light-btn": { pt: "☀️ Claro", en: "☀️ Light" },

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
    // HABILIDADES
    // =========================================================================
    "skills-title": { pt: "Habilidades & Stacks", en: "Skills & Stacks" },
    "skills-cat1": { pt: "Linguagens & Backend", en: "Languages & Backend" },
    "skills-cat2": { pt: "Hardware, Embarcados & IoT", en: "Hardware, Embedded & IoT" },
    "skills-cat3": { pt: "IA Local & Infraestrutura", en: "Local AI & Infrastructure" },
    "skills-cat4": { pt: "Design & Ferramentas", en: "Design & Tools" },

    // =========================================================================
    // PROJETOS (FILTROS & TEXTOS)
    // =========================================================================
    "projects-title": { pt: "Projetos & Portfólio", en: "Projects & Portfolio" },
    "projects-desc": { pt: "Projetos autorais e soluções reais desenvolvidas com foco em eficiência, estabilidade e código limpo.", en: "Original projects and real-world solutions developed with a focus on efficiency, stability, and clean code." },
    "proj-filter-all": { pt: "Todos os Projetos", en: "All Projects" },
    "proj-filter-embedded": { pt: "Embarcados & IoT", en: "Embedded & IoT" },
    "proj-filter-cli": { pt: "Automação & CLI", en: "Automation & CLI" },
    "proj-filter-ai": { pt: "IA Local & Software", en: "Local AI & Software" },
    "proj-filter-games": { pt: "Jogos & Web", en: "Games & Web" },

    // =========================================================================
    // EDITORIAL / BLOG MULTIDISCIPLINAR (CATEGORIAS)
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
    "aff-btn-buy": { pt: "Comprar na Shopee 🛍️", en: "Buy on Shopee 🛍️" },
    "aff-disclaimer-title": { pt: "Transparência e Política de Afiliação", en: "Transparency & Affiliate Policy" },
    "aff-disclaimer-p": { 
        pt: "Ao comprar através dos links recomendados nesta página, recebo uma pequena comissão das plataformas parceiras (como Shopee, Amazon e AliExpress). O valor do produto <strong>permanece exatamente o mesmo para você</strong>, com eventuais descontos e cupons ativos. Esse suporte me ajuda a continuar investindo em componentes para novos testes de hardware, servidores locais e publicações abertas de pesquisa.", 
        en: "By purchasing through recommended links on this page, I may receive a small commission from affiliate partner platforms (such as Shopee, Amazon, and AliExpress). The price of the product <strong>remains exactly the same for you</strong>, along with any active discounts and coupons. This support helps fund components for new hardware experiments, local server infrastructure, and open research publications." 
    },

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
    "tier2-title": { pt: "Patrono de Pesquisa", en: "Research Patron" },
    "tier2-period": { pt: "R$ 45 / mês", en: "$9.00 / month" },
    "tier3-title": { pt: "Comissões & Consultoria", en: "Commissions & Consulting" },
    "tier3-period": { pt: "Sob Demanda", en: "On Demand" },
    "btn-support": { pt: "Apoiar Projeto", en: "Support Project" },
    "btn-commission": { pt: "Solicitar Comissão", en: "Request Commission" },
    "pix-title": { pt: "Apoio Instantâneo via Pix", en: "Instant Support via Pix" },
    "btn-copy": { pt: "Copiar Chave Pix", en: "Copy Pix Key" },

    // =========================================================================
    // CERTIFICADOS & FORMAÇÃO
    // =========================================================================
    "certs-title": { pt: "Certificados & Conquistas", en: "Certificates & Achievements" },
    "certs-loading": { pt: "Carregando certificações...", en: "Loading certifications..." },
    "edu-title": { pt: "Formação Acadêmica", en: "Academic Education" },
    "edu-card1-title": { pt: "Ensino Médio & Técnico em Eletrônica", en: "High School & Electronics Technical Course" },
    "edu-card1-date": { pt: "Concluído em 2024", en: "Completed in 2024" },
    "edu-card1-place": { pt: "ETEC Júlio de Mesquita", en: "ETEC Júlio de Mesquita" },
    "edu-card1-desc": { 
        pt: "Aprovado em 23° lugar. Formação sólida em circuitos digitais, microcontroladores, lógica de controle, instrumentação física e bancada analógica.", 
        en: "Passed in 23rd place. Solid training in digital circuits, microcontrollers, control logic, physical instrumentation, and analog lab work." 
    },
    "edu-card2-title": { pt: "Engenharia de Software (Bacharelado)", en: "Software Engineering (B.S.)" },
    "edu-card2-date": { pt: "Em Andamento (Início em 2026)", en: "In Progress (Started 2026)" },
    "edu-card2-place": { pt: "Faculdade Anhanguera", en: "Anhanguera Faculty" },
    "edu-card2-desc": { 
        pt: "Graduação focada no ciclo de vida completo de engenharia de software, arquitetura de sistemas de alta escala, estruturas de dados e metodologias ágeis.", 
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
            themeBtn.textContent = translations["theme-light-btn"][currentLang];
            themeBtn.setAttribute("aria-label", "Mudar para tema claro");
        } else {
            themeBtn.textContent = translations["theme-dark-btn"][currentLang];
            themeBtn.setAttribute("aria-label", "Mudar para tema escuro");
        }
    }
}

function updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key] && translations[key][currentLang]) {
            if (element.tagName === "P" || element.tagName === "SPAN" || element.tagName === "DIV" || element.tagName === "LI" || element.tagName === "BUTTON") {
                element.innerHTML = translations[key][currentLang];
            } else {
                element.textContent = translations[key][currentLang];
            }
        }
    });

    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang === "pt" ? "EN 🇺🇸" : "PT 🇧🇷";
    }

    updateThemeButton();
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

        // 1. Botão de Tema (Claro / Escuro)
        if (!document.getElementById("theme-toggle")) {
            const themeBtn = document.createElement("button");
            themeBtn.id = "theme-toggle";
            themeBtn.type = "button";
            themeBtn.addEventListener("click", () => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
            });
            actionsContainer.appendChild(themeBtn);
        }

        // 2. Botão de Idioma (PT / EN)
        if (!document.getElementById("lang-toggle")) {
            const langBtn = document.createElement("button");
            langBtn.id = "lang-toggle";
            langBtn.type = "button";
            langBtn.textContent = currentLang === "pt" ? "EN 🇺🇸" : "PT 🇧🇷";
            langBtn.addEventListener("click", () => {
                setLanguage(currentLang === "pt" ? "en" : "pt");
            });
            actionsContainer.appendChild(langBtn);
        }
    }

    setLanguage(currentLang);
    setTheme(currentTheme);
});
