# PokéJokenpo

Mini game inspirado em Pedra, Papel e Tesoura, desenvolvido com temática Pokémon, utilizando HTML, CSS e JavaScript puro.

Projeto criado em 1 dia com o objetivo de reforçar fundamentos de desenvolvimento front-end e organização de código.

---

## Sobre o Projeto

O jogo é uma releitura de Pedra, Papel e Tesoura utilizando:

* **Geodude** (Pedra)
* **Kartana** (Papel)
* **Scizor** (Tesoura)

O usuário escolhe um Pokémon, o computador gera uma escolha aleatória e o sistema determina o vencedor com base em regras condicionais.

---

## Objetivo

Este projeto foi desenvolvido como prática intencional para:

* Reforçar manipulação de DOM
* Trabalhar eventos com `addEventListener`
* Aplicar lógica condicional
* Praticar organização de projeto front-end
* Desenvolver uma interface simples, funcional e organizada
* Construir um projeto completo em curto prazo

---

## Stack Utilizada

* HTML5 (estrutura semântica)
* CSS3 (Flexbox e animações com `@keyframes`)
* JavaScript Vanilla (sem frameworks ou bibliotecas)

---

## Decisões Técnicas

* Uso de `DOMContentLoaded` para garantir carregamento correto do DOM.
* Separação de responsabilidades em pastas (`css/`, `script/`, `img/`).
* Lógica isolada em funções:

  * `escolhaComputador()`
  * `resultado(usuario, computador)`
* Uso de `Math.random()` para simulação de adversário.
* Estrutura simples e clara para facilitar manutenção.

---

## Estrutura do Projeto

```
css/
script/
img/
index.html
```

---

## Como Executar

```bash
git clone https://github.com/seu-usuario/pokejokenpo.git
```

Abrir o arquivo `index.html` no navegador.

---

## Pontos de Evolução Planejados

* Substituir `alert()` por renderização dinâmica na interface
* Implementar sistema de pontuação
* Melhorar responsividade
* Criar modo melhor de três
* Melhorar feedback visual do vencedor
* Aplicar princípios básicos de Clean Code

---

## Autor

Filipe S. F.

Projeto desenvolvido para prática e consolidação de fundamentos em desenvolvimento front-end.
