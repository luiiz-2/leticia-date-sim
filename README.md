# Quiz-presente romântico 💌

Um quiz íntimo e divertido feito com Vue 3 + Vite.

## Personalização rápida

Edite `src/data/quiz.ts` para trocar as 8 perguntas, alternativas e respostas corretas. O campo `correctIndex` começa em `0` para a primeira alternativa, `1` para a segunda e assim por diante.

As fotos personalizadas ficam em `src/assets/`: `memory-dog.jpg`, `memory-us.jpeg` e `memory-cat.jpeg`. Para trocar alguma delas, preserve os nomes dos arquivos ou atualize os imports em `src/App.vue`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica automaticamente a aplicação a cada push na branch `main`. No GitHub, habilite Pages com a fonte **GitHub Actions** em **Settings → Pages**.
