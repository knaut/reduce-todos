import { LoremIpsum } from 'lorem-ipsum'
import { v4 as uuid } from 'uuid'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

export const generateTodos = function(number = 3) {
  const entities = {}
  const keys = []

  for (let n = 0; number > n; ++n) {
    
    const name = lorem.generateWords(
      Math.floor( Math.random() * 4 ) + 1
    )

    const description = lorem.generateSentences(
      Math.floor( Math.random() * 2 ) + 1
    )

    const id = uuid()

    entities[id] = { id, name, description }
    keys.push(id)
  }

  return { entities, keys }
}


