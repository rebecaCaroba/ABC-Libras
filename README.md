# ABC Libras

Aplicativo web que converte letras digitadas em imagens do alfabeto em Libras.

## Sobre o projeto

O objetivo do projeto e facilitar o aprendizado visual do alfabeto em Libras.
Ao digitar um texto, o app identifica as letras validas e exibe a imagem correspondente para cada caractere.

## Funcionalidades

- Conversao de texto para letras em Libras em tempo real.
- Suporte a letras `A-Z` e `C cedilha` (`Ç`).
- Ignora automaticamente caracteres sem imagem (numeros, pontuacao, simbolos, espacos).
- Interface simples com lista de cards contendo imagem e letra.

## Tecnologias

- React 19
- TypeScript
- Vite
- Sass (SCSS)
- ESLint

## Como executar o projeto

### Pre-requisitos

- Node.js 18+ (recomendado: versao LTS)
- npm

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibira a URL local (geralmente `http://localhost:5173`).

### Build de producao

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: executa checagem TypeScript e gera build de producao.
- `npm run preview`: sobe um servidor para visualizar a build.
- `npm run lint`: executa analise de lint com ESLint.

## Estrutura de pastas

```text
src/
  assets/
    abc/                # Imagens das letras em Libras (A-Z e Ç)
  components/
    textField/
      index.tsx         # Campo de texto e renderizacao das letras
      style.scss        # Estilos do componente
  styles/
    config/             # Variaveis de cores, fontes e estilos base
    global.scss         # Estilos globais
  utils/
    librasImg.ts        # Mapeamento dinamico letra -> imagem
  App.tsx
  main.tsx
```

## Como funciona a conversao

1. O usuario digita no `textarea`.
2. O texto e convertido para maiusculo.
3. Cada caractere e comparado com o dicionario `letterToImage`.
4. Somente letras com imagem disponivel sao renderizadas na tela.

## Melhorias futuras

- Suporte a numeros em Libras.
- Suporte a palavras/sinais completos.
- Botao para limpar texto e exportar resultado.
- Melhorias de acessibilidade (navegacao por teclado e leitura de tela).

## Autor

Projeto desenvolvido por Rebeca Caroba com estudo de React + TypeScript aplicado a acessibilidade e Libras.
