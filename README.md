# ISO 27001 Hub — React + TailwindCSS

Portal moderno em **React puro com Vite** e **TailwindCSS**, sem Next.js, para apresentar conteúdo interpretativo sobre ISO/IEC 27001, ISO/IEC 27002, SGSI, gestão de riscos, controlos, FAQ, assistente de dúvidas e auditoria interna.

## O que inclui

- Homepage moderna e responsiva.
- Tema claro/escuro.
- Pesquisa global no portal.
- Explorador das cláusulas 4 a 10 da ISO/IEC 27001.
- Explorador de controlos ISO/IEC 27002 por temas: Organizacional, Pessoas, Físico e Tecnológico.
- FAQ filtrável por categoria.
- Assistente local de perguntas e respostas, sem backend.
- Checklist de implementação do SGSI.
- Área de preparação para auditoria interna.
- Glossário essencial.

## Como executar

```bash
npm install
npm run dev
```

Depois abra o endereço indicado pelo Vite, normalmente:

```bash
http://localhost:5173
```

## Como gerar build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    AssistantPanel.jsx
    AuditHub.jsx
    ClauseExplorer.jsx
    ControlExplorer.jsx
    FaqAccordion.jsx
    Footer.jsx
    Glossary.jsx
    Header.jsx
    Hero.jsx
    ImplementationChecklist.jsx
    SearchPanel.jsx
    SectionTitle.jsx
  data/
    knowledge.js
  lib/
    text.js
```

## Nota de utilização

O conteúdo é interpretativo e não substitui as normas oficiais. O projecto evita reproduzir integralmente texto normativo protegido. Para uso real, recomenda-se:

- ligar o assistente a uma base de conhecimento autorizada;
- adicionar autenticação para área administrativa;
- associar controlos a riscos, responsáveis, evidências e estado de implementação;
- criar backend para gestão de documentos, auditorias, não conformidades e acções correctivas;
- rever o conteúdo com auditor/consultor competente antes de publicação.
