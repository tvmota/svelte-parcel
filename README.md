# ![alt text](src/assets/img/readme_icon.png) [Sveldex](https://sveldex.netlify.com/) 
![alt text](src/assets/img/pwa_logo.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c8c1e3ac-725b-45df-bb6d-8071970a3f42/deploy-status)](https://app.netlify.com/sites/sveldex/deploys)

Projeto feito com base em outro projeto que fiz em angular [NgPokedex](https://github.com/tvmota/ng-pokedex) e também foi utilizado como objeto de estudos sobre o framework UI svelte para a escrita de um artigo sobre o mesmo.

### Instruções para execução
##### Instalação
```bash
$ git clone https://github.com/tvmota/svelte-parcel
$ cd svelte-parcel
#----------Execução_Com_NPM---------
$ npm i
#----------Execução_Com_YARN---------
$ yarn
```
##### Execução
```bash
#----------Execução_Com_NPM---------
$ npm run dev
#----------Execução_Com_YARN---------
$ yarn dev
```
##### Geração do build para deploy
```bash
#----------Execução_Com_NPM---------
$ npm run build
#----------Execução_Com_YARN---------
$ yarn build
```

### Libs utilizadas

- **Framework UI**: [Svelte](https://svelte.dev/)
Framework UI para construção da aplicação, que tem como vantagem principal compilar os componentes svelte em JS puro.

- **Toolkit CSS**: [Tailwind](https://tailwindcss.com/)
Biblioteca utilitária que prove classes básicas para construções de componentes, assim trabalhando muito bem com frameworks UI(angular, react, vue, etc)

- **Roteamento**: [Svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
Biblioteca para utilização de rotas com o sveltejs  

- **Empacotador(Module Bundler)**: [Parcel](https://parceljs.org/)
Empacotador alternativo ao consagrado webpack, com muitas facilidades para o desenvolvimento e rapidez para compilação dos modúlos

- **Processador CSS**: [Postcss](https://postcss.org/)
Processador css que utiliza plugins para processar o css, como exemplo neste projeto foi utilizado para compilar o tailwind e também o purgecss para otimizar o css removendo css inutilizado


### Referencias

- [**Loader(Geral)**](https://code.sololearn.com/W8Wydo5pM84d/#html)
- [**Loader(evolutionComponent)**](https://css.30secondsofcode.org/snippet/bouncing-loader)

that's all follks, for now