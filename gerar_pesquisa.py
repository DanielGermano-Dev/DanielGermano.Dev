#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
GERADOR AUTOMÁTICO DE MATÉRIAS, ENSAIOS & POEMAS - DANIEL GERMANO
=============================================================================
Gera páginas HTML prontas para publicação com suporte a temas Claro/Escuro,
estilização tipográfica e o código do card para o index.html.

Categorias suportadas:
1. Opinião Pessoal
2. Jornalismo Esportivo
3. Pesquisa Científica
4. Fatos Históricos
5. Poemas e Contos
"""

import os
import re
import sys
from datetime import datetime

CATEGORIAS = {
    "1": ("Opinião Pessoal", "opiniao", "tag-opiniao"),
    "2": ("Jornalismo Esportivo", "esportes", "tag-esportes"),
    "3": ("Pesquisa Científica", "ciencia", "tag-ciencia"),
    "4": ("Fatos Históricos", "historia", "tag-historia"),
    "5": ("Poemas e Contos", "literatura", "tag-literatura")
}

def slugify(text):
    text = text.lower()
    text = re.sub(r'[áàãâä]', 'a', text)
    text = re.sub(r'[éèêë]', 'e', text)
    text = re.sub(r'[íìîï]', 'i', text)
    text = re.sub(r'[óòõôö]', 'o', text)
    text = re.sub(r'[úùûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def criar_materia():
    print("=" * 72)
    print("✒️  GERADOR DE MATÉRIAS, PESQUISAS & LITERATURA - DANIEL GERMANO")
    print("=" * 72)
    
    titulo = input("\n1. Título da Obra / Matéria / Ensaio:\n> ").strip()
    if not titulo:
        titulo = "Novo Texto Autoral"

    print("\n2. Escolha a Categoria:")
    print("  [1] Opinião Pessoal (Reflexões filosóficas, sociedade e dilemas contemporâneos)")
    print("  [2] Jornalismo Esportivo (Tática, crônicas e análises esportivas)")
    print("  [3] Pesquisa Científica (Hipóteses empíricas, dados e ciência aplicada)")
    print("  [4] Fatos Históricos (Análises históricas, contexto político e social)")
    print("  [5] Poemas e Contos (Produção poética e narrativas literárias)")
    
    escolha = input("> ").strip()
    if escolha in CATEGORIAS:
        nome_cat, slug_cat, classe_tag = CATEGORIAS[escolha]
    else:
        nome_cat, slug_cat, classe_tag = ("Opinião Pessoal", "opiniao", "tag-opiniao")

    tempo_leitura = input("\n3. Tempo de leitura estimado (ex: 5 min) [Padrão: 5 min]:\n> ").strip()
    if not tempo_leitura:
        tempo_leitura = "5 min de leitura"
    elif not "min" in tempo_leitura:
        tempo_leitura = f"{tempo_leitura} min de leitura"

    is_poema = (slug_cat == "literatura")

    if not is_poema:
        premissa = input("\n4. Pergunta / Premissa / Hipótese Investigada:\n> ").strip()
        if not premissa:
            premissa = "Qual o entendimento e reflexão crítica sobre este tema?"
    else:
        premissa = input("\n4. Subtítulo / Epígrafe ou Tema do Poema/Conto:\n> ").strip()
        if not premissa:
            premissa = "Versos e reflexões sobre a existência e a criação."

    resumo = input("\n5. Resumo para o Card no index.html (2 ou 3 frases):\n> ").strip()
    if not resumo:
        resumo = "Uma reflexão aprofundada explorando diferentes perspectivas e conclusões práticas."

    data_atual = datetime.now().strftime("%d de %B, %Y").replace("January", "Janeiro").replace("February", "Fevereiro").replace("March", "Março").replace("April", "Abril").replace("May", "Maio").replace("June", "Junho").replace("July", "Julho").replace("August", "Agosto").replace("September", "Setembro").replace("October", "Outubro").replace("November", "Novembro").replace("December", "Dezembro")
    
    nome_arquivo = f"texto-{slugify(titulo)}.html"
    caminho_arquivo = os.path.join(os.path.dirname(__file__), nome_arquivo)

    # Corpo dinâmico de acordo com a categoria
    if is_poema:
        corpo_html = f"""
            <div class="poem-container" style="margin: 35px 0;">
                <div class="poem-stanza">
                    <span class="poem-verse">Escreva aqui a primeira estrofe do seu poema,</span>
                    <span class="poem-verse">Com o ritmo das palavras que ecoam no ar,</span>
                    <span class="poem-verse">Cada verso desenha um novo dilema,</span>
                    <span class="poem-verse">Que a mente inquieta se põe a desvendar.</span>
                </div>
                <div class="poem-stanza">
                    <span class="poem-verse">Na segunda estrofe, o conto se expande,</span>
                    <span class="poem-verse">Onde o silêncio da noite comanda.</span>
                </div>
            </div>

            <h2>Sobre a Obra & Contexto de Criação</h2>
            <p>Explique aqui o contexto, inspiração ou reflexão filosófica por trás da criação deste conto ou poema.</p>
"""
    elif slug_cat == "ciencia":
        corpo_html = f"""
            <div class="article-thesis-box" style="margin: 25px 0;">
                <strong>Pergunta / Hipótese Investigada:</strong>
                <p>“{premissa}”</p>
            </div>

            <h2>1. Introdução & Contexto do Problema</h2>
            <p>Apresente o estado da arte e a motivação experimental para a análise.</p>

            <blockquote>
                "Insira aqui uma citação marcante ou premissa essencial."
            </blockquote>

            <h2>2. Metodologia Experimental & Procedimento</h2>
            <p>Descreva o método de coleta de dados, ferramentas e arquitetura.</p>

            <div class="code-box">
# Exemplo de código ou algoritmo do estudo
def executar_ensaio():
    return {{"eficiencia": "98.5%", "resultado": "validado"}}
            </div>

            <h2>3. Dissecação dos Dados & Resultados</h2>
            <p>Apresente métricas empíricas e tabelas comparativas.</p>

            <h2>4. Conclusão & Aplicação Prática</h2>
            <p>Sintetize a resposta para a hipótese inicial.</p>
"""
    else:
        corpo_html = f"""
            <div class="article-thesis-box" style="margin: 25px 0;">
                <strong>Premissa & Foco da Análise:</strong>
                <p>“{premissa}”</p>
            </div>

            <h2>1. O Ponto de Partida & Contextualização</h2>
            <p>Apresente a discussão, fato histórico, evento esportivo ou observação social que motivou este texto.</p>

            <blockquote>
                "Destaque aqui a tese central ou pensamento de maior impacto da sua argumentação."
            </blockquote>

            <h2>2. Desenvolvimento dos Argumentos & Fatos</h2>
            <p>Aprofunde a análise com exemplos, fatos documentados, dados estatísticos ou raciocínio filosófico estruturado.</p>

            <h2>3. Conclusão & Considerações Finais</h2>
            <p>Sintetize o entendimento alcançado e as reflexões que ficam para o leitor.</p>
"""

    html_content = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{titulo} | Daniel Germano</title>
    <script>
        (function() {{
            const savedTheme = localStorage.getItem('dg_portfolio_theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
        }})();
    </script>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <div class="header-container">
            <a href="index.html" class="logo">DG<span>.</span></a>
            <nav>
                <a href="index.html#sobre" data-i18n="nav-about">Sobre</a>
                <a href="index.html#habilidades" data-i18n="nav-skills">Habilidades</a>
                <a href="index.html#projetos" data-i18n="nav-projects">Projetos</a>
                <a href="index.html#editorial" data-i18n="nav-editorial" class="active">Editorial & Ensaios</a>
                <a href="index.html#monetizacao" data-i18n="nav-monetization">Comissões & Apoio</a>
                <a href="index.html#certificacoes" data-i18n="nav-certs">Certificados</a>
                <a href="index.html#formacao" data-i18n="nav-edu">Formação</a>
            </nav>
        </div>
    </header>

    <div class="main-container" style="padding-top: 130px; max-width: 900px;">
        
        <div style="margin-bottom: 25px;">
            <a href="index.html#editorial" style="color: var(--accent-red); font-weight: 600;">&larr; Voltar para a lista de textos</a>
        </div>

        <article class="article-reader-container">
            
            <div class="article-meta">
                <span>📅 {data_atual}</span>
                <span>⏱️ {tempo_leitura}</span>
                <span class="project-tag {classe_tag}">{nome_cat}</span>
                <span>✍️ Por Daniel Germano</span>
            </div>

            <h1>{titulo}</h1>

            {corpo_html}

            <!-- Caixa de Monetização e Comissões -->
            <div style="background: var(--card-inner); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 30px; margin-top: 40px; text-align: center;">
                <span class="project-tag">Apoie Esta Produção Autoral</span>
                <h3 style="margin: 15px 0 10px 0; font-size: 1.4rem;">Gostou deste texto e quer apoiar ou encomendar um ensaio?</h3>
                <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 20px auto;">Você pode apoiar a continuidade de meus estudos e criações com qualquer contribuição via Pix ou solicitar um estudo/pesquisa sob medida.</p>

                <div class="pix-copy-box" style="max-width: 500px; margin: 0 auto 20px auto;">
                    <span class="pix-key-text" style="font-size: 0.88rem;">danielgermano.dev@gmail.com</span>
                    <button class="btn-copy-pix">Copiar Pix</button>
                </div>

                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <a href="index.html#monetizacao" class="btn btn-secondary">Ver Planos de Apoio</a>
                    <a href="https://wa.me/5511966302273?text=Olá+Daniel!+Li+seu+texto+autoral+e+gostaria+de+conversar" target="_blank" class="btn btn-primary">Falar no WhatsApp</a>
                </div>
            </div>

        </article>

    </div>

    <footer>
        <div class="footer-container">
            <p data-i18n="footer-text">&copy; 2026 Daniel Germano. Engenharia de Software, Pesquisa & Produção Autoral.</p>
            <div class="social-links">
                <a href="https://github.com/DanielGermano-Dev" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/daniel-germano-lima-dos-santos" target="_blank">LinkedIn</a>
                <a href="mailto:danielgermano.dev@gmail.com">E-mail</a>
            </div>
        </div>
    </footer>

    <script src="lang.js" defer></script>
    <script>
        document.addEventListener("DOMContentLoaded", () => {{
            const btnCopy = document.querySelector(".btn-copy-pix");
            if (btnCopy) {{
                btnCopy.addEventListener("click", () => {{
                    const pixKey = "danielgermano.dev@gmail.com";
                    navigator.clipboard.writeText(pixKey).then(() => {{
                        const originalText = btnCopy.innerText;
                        btnCopy.innerText = "Copiado! ✓";
                        btnCopy.style.background = "#ffffff";
                        btnCopy.style.color = "#000000";
                        setTimeout(() => {{
                            btnCopy.innerText = originalText;
                            btnCopy.style.background = "var(--accent-red)";
                            btnCopy.style.color = "#ffffff";
                        }}, 2000);
                    }});
                }});
            }}
        }});
    </script>
</body>
</html>
"""

    with open(caminho_arquivo, "w", encoding="utf-8") as f:
        f.write(html_content)

    print("\n" + "=" * 72)
    print(f"✅ Arquivo criado com sucesso: {nome_arquivo}")
    print("=" * 72)

    snippet_card = f"""
                <!-- Novo Texto: {titulo} -->
                <article class="article-card" data-editorial-category="{slug_cat}">
                    <div>
                        <div class="article-meta">
                            <span>📅 {data_atual}</span>
                            <span>⏱️ {tempo_leitura}</span>
                            <span class="project-tag {classe_tag}">{nome_cat}</span>
                        </div>
                        <h3>{titulo}</h3>
                        
                        <div class="article-thesis-box">
                            <strong>Foco / Premissa:</strong>
                            <p>“{premissa}”</p>
                        </div>
                        <p>{resumo}</p>
                    </div>
                    <div style="margin-top: 20px;">
                        <a href="{nome_arquivo}" class="btn btn-primary" data-i18n="editorial-read-btn">Ler Texto Completo &rarr;</a>
                    </div>
                </article>
"""
    print("\n📋 CÓDIGO DO CARD PARA O INDEX.HTML (na seção #editorial):")
    print("-" * 72)
    print(snippet_card)
    print("-" * 72)

if __name__ == "__main__":
    criar_materia()

