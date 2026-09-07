# Quiz-presente romântico 💌

Um quiz íntimo e divertido feito com Vue 3 + Vite.

## Personalização rápida

Edite `src/data/quiz.ts` para trocar as 10 perguntas, alternativas e respostas corretas. O campo `correctIndex` começa em `0` para a primeira alternativa, `1` para a segunda e assim por diante.

Troque as ilustrações em `src/assets/memory-1.svg`, `memory-2.svg` e `memory-3.svg` pelas fotos de vocês. Para manter o layout, preserve os nomes dos arquivos ou atualize os imports em `src/App.vue`.

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
