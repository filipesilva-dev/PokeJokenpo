# PokéJokenpo

[![Online](https://img.shields.io/badge/Online-✓-brightgreen)](https://filipesilva-dev.github.io/PokeJokenpo/)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat\&logo=html5\&logoColor=white)]
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat\&logo=css3\&logoColor=white)]
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat\&logo=javascript\&logoColor=black)]

Mini game inspirado em Pedra, Papel e Tesoura, desenvolvido com temática Pokémon, utilizando **HTML, CSS e JavaScript puro**.

Acesse a página online: [PokéJokenpo no GitHub Pages](https://filipesilva-dev.github.io/PokeJokenpo/)

---

## Sobre o Projeto

O jogo é uma releitura de Pedra, Papel e Tesoura utilizando:

* **Geodude** (Pedra)
* **Kartana** (Papel)
* **Scizor** (Tesoura)

O usuário escolhe um Pokémon, o computador gera uma escolha aleatória, e o sistema determina o vencedor com base em regras condicionais.

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

* Uso de `DOMContentLoaded` para garantir carregamento correto do DOM
* Separação de responsabilidades em pastas (`css/`, `script/`, `img/`)
* Lógica isolada em funções:

  * `escolhaComputador()`
  * `resultado(usuario, computador)`
* Uso de `Math.random()` para simulação de adversário
* Estrutura simples e clara para facilitar manutenção

---

## Estrutura do Projeto

```
css/
script/
img/
index.html
```

---

## Como Executar Localmente

```bash
git clone https://github.com/filipesilva-dev/PokeJokenpo.git
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
