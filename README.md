# OLIVEIRA DA CUNHA ADVOCACIA — DRA. MARCILENE CUNHA

Site institucional de alto padrão da **Dra. Marcilene Cunha**, desenvolvido com arquitetura visual premium inspirada em referências internacionais de alto nível, mantendo fidelidade estrita à identidade visual oficial e conformidade com as regras éticas da OAB.

---

## 🎨 Identidade Visual & Design System

### Paleta Oficial
- **Ouro Institucional:** `#B19154` (Gradientes `#C9A96E` a `#8E7036`)
- **Champanhe Suave:** `#D9C59D` (Apoio, detalhes e elegância)
- **Bordô / Marsala:** `#591115` (Fundo institucional profundo `#3A0B0E` a `#1A0304`)
- **Neutro Quente:** `#FAF8F5` (Contraste limpo, legibilidade e leveza)

### Tipografia
- **Títulos & Autoridade:** `Cinzel` (Google Fonts)
- **Subtítulos, Textos e Ações:** `Montserrat` (Google Fonts)

---

## ⚖️ As 4 Áreas de Atuação
1. **Direito Previdenciário:** Aposentadorias, benefícios por incapacidade, pensões e revisões perante o INSS e RPPS.
2. **Planejamento Previdenciário:** Auditoria do CNIS, simulação das regras de transição pós-Reforma e projeção de benefício máximo.
3. **Direito Administrativo:** Defesa de servidores públicos em sindicâncias e PADs, anulação de penalidades, concursos públicos e direitos funcionais.
4. **Direito Cível:** Inventários judiciais e extrajudiciais, direito de família, contratos e ações indenizatórias.

---

## 🏛️ Diretrizes Éticas e Profissionais (OAB)
- **Advocacia 100% Individual:** Condução exclusiva pela Dra. Marcilene Cunha (sem equipe, associados ou sócios simulados).
- **Sem Falsas Promessas:** Ausência de garantias de resultado ou métricas infladas.
- **Transparência e Sigilo:** Canal reservado e atendimento em todo o Brasil.

---

## 🚀 Estrutura de Arquivos
```
OLIVEIRADACUNHA/
├── index.html                   # Estrutura completa das 8 seções + Header e Rodapé
├── firebase.json                # Configuração para Firebase Hosting
├── README.md                    # Documentação do projeto
├── assets/
│   ├── css/
│   │   └── style.css            # Design System, variáveis, animações e responsividade
│   ├── js/
│   │   └── main.js              # Interações, scroll suave, menu mobile e formulário
│   └── images/
│       ├── logo.png             # Logomarca oficial
│       ├── portrait-hero.svg    # Visual do Hero
│       ├── presentation-photo.svg
│       ├── service-*.svg        # Ilustrações temáticas das 4 áreas
│       ├── impact-visual.svg
│       ├── contact-visual.svg
│       └── article-*.svg
├── logomarca.png                # Arquivo original de marca
└── PALETA DE CORES E FONTES.jpg # Arquivo de referência visual
```

---

## 📦 Como Publicar

### No Firebase Hosting:
```bash
firebase deploy --only hosting
```

### No GitHub:
```bash
git add .
git commit -m "feat: site institucional premium Dra. Marcilene Cunha"
gh repo create OLIVEIRADACUNHA --public --source=. --remote=origin --push
```
