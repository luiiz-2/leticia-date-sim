export interface QuizOption {
  label: string
  emoji: string
}

export interface QuizQuestion {
  id: number
  prompt: string
  hint: string
  options: QuizOption[]
  correctIndex: number
}

export type QuizScreen = 'intro' | 'quiz' | 'result'
