import type { QuizQuestion } from '../types/quiz'

/**
 * Conteúdo de exemplo: troque os textos, alternativas e correctIndex
 * pelas memórias reais de vocês antes de compartilhar o link.
 */
export const isExampleContent = true

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Onde foi o nosso primeiro encontro?',
    hint: 'Aquele lugar que ficou guardado na memória 💭',
    options: [
      { label: 'No café que a gente ama', emoji: '☕' },
      { label: 'Em um restaurante italiano', emoji: '🍝' },
      { label: 'No cinema do shopping', emoji: '🎬' },
      { label: 'Em uma praça tranquila', emoji: '🌳' },
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    prompt: 'Qual foi a primeira coisa que você percebeu em mim?',
    hint: 'Vale escolher a resposta mais charmosa.',
    options: [
      { label: 'O meu sorriso', emoji: '😊' },
      { label: 'O meu jeito engraçado', emoji: '😂' },
      { label: 'A minha voz', emoji: '🎶' },
      { label: 'O meu olhar', emoji: '👀' },
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    prompt: 'Qual combinação tem mais a nossa cara?',
    hint: 'Uma pergunta muito séria, obviamente.',
    options: [
      { label: 'Pizza e filme', emoji: '🍕' },
      { label: 'Café e conversa', emoji: '☕' },
      { label: 'Sorvete e passeio', emoji: '🍦' },
      { label: 'Pipoca e série', emoji: '🍿' },
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    prompt: 'Qual momento nosso eu escolheria reviver?',
    hint: 'A resposta certa é a que faz o coração apertar de saudade.',
    options: [
      { label: 'A nossa primeira conversa', emoji: '💬' },
      { label: 'Aquele passeio inesperado', emoji: '🗺️' },
      { label: 'A nossa risada sem fim', emoji: '🤣' },
      { label: 'O nosso primeiro beijo', emoji: '💋' },
    ],
    correctIndex: 2,
  },
  {
    id: 5,
    prompt: 'Qual apelido combina mais com a nossa história?',
    hint: 'Atenção: existe uma alternativa perigosamente fofa.',
    options: [
      { label: 'Dupla dinâmica', emoji: '🦸' },
      { label: 'Casal do cafezinho', emoji: '☕' },
      { label: 'Meu porto seguro', emoji: '⚓' },
      { label: 'Os dois bobinhos', emoji: '🤪' },
    ],
    correctIndex: 2,
  },
  {
    id: 6,
    prompt: 'Qual música poderia ser a trilha sonora de nós dois?',
    hint: 'Escolha a que toca dentro da cabeça quando você lembra de mim.',
    options: [
      { label: 'Aquela que cantamos juntos', emoji: '🎤' },
      { label: 'Uma música bem dançante', emoji: '💃' },
      { label: 'A nossa música mais romântica', emoji: '🎵' },
      { label: 'O áudio engraçado que virou meme', emoji: '📱' },
    ],
    correctIndex: 2,
  },
  {
    id: 7,
    prompt: 'O que sempre melhora um dia difícil?',
    hint: 'Dica: geralmente envolve a gente falando besteira.',
    options: [
      { label: 'Uma mensagem inesperada', emoji: '💌' },
      { label: 'Um abraço demorado', emoji: '🫂' },
      { label: 'Uma piada interna', emoji: '🤭' },
      { label: 'Todas as opções anteriores', emoji: '✨' },
    ],
    correctIndex: 3,
  },
  {
    id: 8,
    prompt: 'Qual seria o nosso passeio perfeito?',
    hint: 'Não existe resposta errada quando tem companhia boa.',
    options: [
      { label: 'Conhecer um lugar novo', emoji: '✈️' },
      { label: 'Andar sem rumo pela cidade', emoji: '🚶' },
      { label: 'Ficar juntinhos em casa', emoji: '🏠' },
      { label: 'Um pouco de cada', emoji: '🌈' },
    ],
    correctIndex: 3,
  },
  {
    id: 9,
    prompt: 'O que eu mais gosto quando estou com você?',
    hint: 'Essa aqui veio direto do coração.',
    options: [
      { label: 'A paz de ser eu mesmo', emoji: '🌿' },
      { label: 'As nossas conversas', emoji: '🗣️' },
      { label: 'A forma como você me olha', emoji: '🥰' },
      { label: 'Tudo isso e mais um pouco', emoji: '💖' },
    ],
    correctIndex: 3,
  },
  {
    id: 10,
    prompt: 'Qual é a melhor parte da nossa história?',
    hint: 'Última pergunta. Capriche na resposta!',
    options: [
      { label: 'Tudo o que já vivemos', emoji: '📖' },
      { label: 'Tudo o que ainda vamos viver', emoji: '🔮' },
      { label: 'As pequenas coisas do dia a dia', emoji: '🌷' },
      { label: 'Ter encontrado você', emoji: '💘' },
    ],
    correctIndex: 3,
  },
]
