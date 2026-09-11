<script setup lang="ts">
import { computed, ref } from 'vue'
import memoryDog from './assets/memory-dog.jpg'
import memoryUs from './assets/memory-us.jpeg'
import memoryCat from './assets/memory-cat.jpeg'
import { quizQuestions } from './data/quiz'
import type { QuizScreen } from './types/quiz'

const screen = ref<QuizScreen>('intro')
const currentQuestion = ref(0)
const selectedOption = ref<number | null>(null)
const correctAnswers = ref(0)

const memories = [
  { src: memoryDog, alt: 'Cachorro usando óculos', label: 'o doguinho' },
  { src: memoryUs, alt: 'Uma foto nossa juntos', label: 'a nossa foto' },
  { src: memoryCat, alt: 'Gatinho segurando um coração', label: 'o gatinho' },
]
const totalQuestions = quizQuestions.length
const passingScore = Math.ceil(totalQuestions * 0.6)
const question = computed(() => quizQuestions[currentQuestion.value])
const progress = computed(() => ((currentQuestion.value + 1) / totalQuestions) * 100)
const passed = computed(() => correctAnswers.value >= passingScore)
const resultMessage = computed(() => {
  if (passed.value) return 'Você desbloqueou a surpresa. Eu escolheria você de novo em qualquer história. 💖'
  return 'Quase! Acho que algumas memórias merecem uma revisão juntinhos. 😌'
})

function startQuiz() {
  currentQuestion.value = 0
  selectedOption.value = null
  correctAnswers.value = 0
  screen.value = 'quiz'
}

function chooseOption(index: number) {
  selectedOption.value = index
}

function nextQuestion() {
  if (selectedOption.value === null) return

  if (selectedOption.value === question.value.correctIndex) {
    correctAnswers.value += 1
  }

  if (currentQuestion.value === totalQuestions - 1) {
    screen.value = 'result'
    return
  }

  currentQuestion.value += 1
  selectedOption.value = null
}

function backToIntro() {
  screen.value = 'intro'
  selectedOption.value = null
}
</script>

<template>
  <main class="page-shell">
    <div class="floating-heart heart-one">♡</div>
    <div class="floating-heart heart-two">♥</div>
    <div class="floating-heart heart-three">♡</div>

    <section class="app-card" :class="`screen-${screen}`">
      <header class="topbar">
        <button v-if="screen !== 'intro'" class="back-button" type="button" aria-label="Voltar para o início" @click="backToIntro">
          ← <span>início</span>
        </button>
        <span v-else class="topbar-mark">para nós dois <span>✦</span></span>
        <span class="topbar-lock">feito com carinho <span>♡</span></span>
      </header>

      <Transition name="fade" mode="out-in">
        <div v-if="screen === 'intro'" key="intro" class="intro-view">
          <div class="eyebrow"><span>✦</span> um quiz muito especial <span>✦</span></div>
          <h1>Quanto você conhece<br /><em>a nossa história?</em></h1>
          <p class="intro-copy">Preparei uma brincadeira rápida com algumas das minhas memórias favoritas. Responda com o coração. 💌</p>

          <div class="memory-strip" aria-label="Nossas memórias">
            <figure v-for="(memory, index) in memories" :key="memory.src" class="memory-photo" :class="`memory-${index + 1}`">
              <img :src="memory.src" :alt="memory.alt" />
              <figcaption>{{ memory.label }}</figcaption>
            </figure>
          </div>

          <button class="primary-button" type="button" @click="startQuiz">começar a brincadeira <span>→</span></button>
          <p class="tiny-note">8 perguntinhas · uma surpresa no final</p>
        </div>

        <div v-else-if="screen === 'quiz'" key="quiz" class="quiz-view">
          <div class="quiz-heading">
            <div>
              <span class="eyebrow">pergunta {{ String(currentQuestion + 1).padStart(2, '0') }} <span>✦</span></span>
              <h2>{{ question.prompt }}</h2>
              <p>{{ question.hint }}</p>
            </div>
            <div class="question-counter">{{ currentQuestion + 1 }}<small>/{{ totalQuestions }}</small></div>
          </div>

          <div class="progress-track" aria-label="Progresso do quiz">
            <div class="progress-value" :style="{ width: `${progress}%` }"></div>
          </div>

          <div class="options-grid">
            <button
              v-for="(option, index) in question.options"
              :key="option.label"
              class="option-card"
              :class="{ selected: selectedOption === index }"
              type="button"
              :aria-pressed="selectedOption === index"
              @click="chooseOption(index)"
            >
              <span class="option-emoji">{{ option.emoji }}</span>
              <span>{{ option.label }}</span>
              <span class="option-check">{{ selectedOption === index ? '✓' : '' }}</span>
            </button>
          </div>

          <div class="quiz-footer">
            <span class="answer-hint">{{ selectedOption === null ? 'Escolha uma alternativa' : 'Resposta escolhida ✨' }}</span>
            <button class="primary-button next-button" type="button" :disabled="selectedOption === null" @click="nextQuestion">
              {{ currentQuestion === totalQuestions - 1 ? 'ver meu resultado' : 'próxima' }} <span>→</span>
            </button>
          </div>
        </div>

        <div v-else key="result" class="result-view" :class="{ approved: passed }">
          <div v-if="passed" class="confetti" aria-hidden="true">
            <i v-for="n in 18" :key="n" :class="`confetti-piece piece-${n}`"></i>
          </div>
          <div class="result-icon">{{ passed ? '🎁' : '🌷' }}</div>
          <span class="eyebrow">resultado do nosso quiz <span>✦</span></span>
          <h2>{{ passed ? 'Você ganhou a surpresa!' : 'Foi quase, meu bem!' }}</h2>
          <div class="score-pill"><strong>{{ correctAnswers }}</strong><span>de {{ totalQuestions }} acertos</span></div>
          <p class="result-copy">{{ resultMessage }}</p>

          <div v-if="passed" class="present-reveal">
            <span class="present-sparkle">✦</span>
            <span class="present-label">presente desbloqueado</span>
            <strong>Seu presente está te esperando 🎀</strong>
            <small>Agora você pode fechar este quiz e receber um abraço.</small>
          </div>

          <button v-if="passed" class="primary-button" type="button" @click="startQuiz">jogar de novo <span>↗</span></button>
          <button v-else class="primary-button" type="button" @click="startQuiz">tentar de novo <span>↻</span></button>
          <button class="text-button" type="button" @click="backToIntro">voltar ao começo</button>
        </div>
      </Transition>
    </section>

    <footer class="page-footer">feito especialmente para uma pessoa muito querida <span>♥</span></footer>
  </main>
</template>
