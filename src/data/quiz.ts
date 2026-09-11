import type { QuizQuestion } from '../types/quiz'

/** Perguntas personalizadas sobre momentos, memes e gostos de vocês. */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Onde foi o nosso primeiro encontro?',
    hint: 'Aquele lugar que ficou guardado na memória 💭',
    options: [
      { label: 'Restaurante Forno Santa Fé', emoji: '🍝' },
      { label: 'Em um café', emoji: '☕' },
      { label: 'No cinema do shopping', emoji: '🎬' },
      { label: 'No Tanque — milagrosamente teve sol', emoji: '🌳' },
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    prompt: 'No nosso primeiro encontro, falamos mais sobre:',
    hint: 'Uma conversa absolutamente normal para um primeiro encontro.',
    options: [
      { label: 'A situação caótica da Esparta e suas fofocas', emoji: '🏛️' },
      { label: 'Os melhores restaurantes da cidade', emoji: '🍴' },
      { label: 'Uma teoria muito séria sobre gatos', emoji: '🐈' },
      { label: 'Planos secretos para dominar o mundo', emoji: '🌎' },
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    prompt: 'Quem mandou matar o fazendeiro?',
    hint: 'A resposta está em uma das maiores investigações da nossa história.',
    options: [
      { label: 'Foi a família do Valdemarzinho', emoji: '🕵️' },
      { label: 'Foi o vizinho misterioso', emoji: '🏠' },
      { label: 'Foi o próprio fazendeiro', emoji: '🌾' },
      { label: 'Foi o cachorro de óculos', emoji: '🐶' },
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    prompt: 'Qual música me lembra você?',
    hint: 'Aquela que tem uma vibe muito nossa 🎧',
    options: [
      { label: 'Something About Us — Daft Punk', emoji: '🎶' },
      { label: 'The Less I Know the Better — Tame Impala', emoji: '💫' },
      { label: 'Sweet Disposition — The Temper Trap', emoji: '✨' },
      { label: 'Sunflower — Rex Orange County', emoji: '🌻' },
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    prompt: 'Qual o nome da playlist que fiz dedicada pra ti?',
    hint: 'Pequena no nome, enorme no significado.',
    options: [
      { label: '4u', emoji: '💌' },
      { label: 'for us', emoji: '🎧' },
      { label: 'our little songs', emoji: '🎵' },
      { label: 'mix 01', emoji: '💿' },
    ],
    correctIndex: 0,
  },
  {
    id: 6,
    prompt: 'Qual foi o primeiro presente que te dei?',
    hint: 'Um gesto simples, mas cheio de carinho 🌷',
    options: [
      { label: 'Uma flor', emoji: '🌷' },
      { label: 'Uma cartinha', emoji: '✉️' },
      { label: 'Um chocolate', emoji: '🍫' },
      { label: 'Um chaveiro', emoji: '🔑' },
    ],
    correctIndex: 0,
  },
  {
    id: 9,
    prompt: 'O que eu mais gosto quando estou com você?',
    hint: 'Essa aqui veio direto do coração.',
    options: [
      { label: 'A paz de ser eu mesmo', emoji: '🌿' },
      { label: 'As nossas conversas', emoji: '🗣️' },
      { label: 'Olhar pra você', emoji: '🥰' },
      { label: 'Tudo isso e mais um pouco', emoji: '💖' },
    ],
    correctIndex: 3,
  },
  {
    id: 10,
    prompt: 'Qual saga de livros você ainda não leu, da Sarah J. Maas?',
    hint: 'Uma pergunta para testar a sua estante literária 📚',
    options: [
      { label: 'Corte de Espinhos e Rosas', emoji: '🌹' },
      { label: 'Casa de Terra e Sangue', emoji: '🏛️' },
      { label: 'Trono de Vidro', emoji: '👑' },
      { label: 'Reino de Cinzas', emoji: '🔥' },
    ],
    correctIndex: 1,
  },
]
