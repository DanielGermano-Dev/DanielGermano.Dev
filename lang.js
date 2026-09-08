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
        pt: "Moro em Santo André, SP. Meu nome é <strong>Daniel Germano Lima dos Santos</strong>, sou um desenvolvedor e pesquisador apaixonado por desvendar o funcionamento íntimo dos sistemas — desde o silício dos microcontroladores na eletrônica até as camadas lógicas de alto nível em arquiteturas Web, Mobile e Inteligência Artificial na borda. Paralelamente, dedico-me à escrita multidisciplinar: reflexões filosóficas, explicações históricas, políticas e sociais, crônicas esportivas e produção literária de contos e poemas.", 
        en: "I live in Santo André, SP. My name is <strong>Daniel Germano Lima dos Santos</strong>, I am a developer and researcher passionate about uncovering the inner workings of systems — from microcontroller silicon in electronics to high-level logical layers in Web, Mobile, and Edge AI architectures. Concurrently, I dedicate myself to multidisciplinary writing: philosophical reflections, historical, political, and social explanations, sports chronicles, and creative short stories and poems." 
    },
    "about-p2": { 
        pt: "Meu perfil cognitivo de Altas Habilidades em lógica e comunicação me impulsiona a buscar desafios constantes, solucionando dores reais de forma eficiente e estruturada. Sou fundador da <strong>D-Oryzon</strong>, iniciativa voltada a soluções digitais de alto impacto e inovação acessível.", 
        en: "My cognitive profile of High Abilities in logic and communication drives me to seek constant challenges, solving real pain points efficiently and with clear structure. I am the founder of <strong>D-Oryzon</strong>, an initiative focused on high-impact digital solutions and accessible innovation." 
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
