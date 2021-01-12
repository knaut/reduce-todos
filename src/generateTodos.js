import { LoremIpsum } from 'lorem-ipsum'
import { v4 as uuid } from 'uuid'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 12,
    min: 4
  }
})

const capitalizeWords = function(words) {
  const stringArray = words.split(' ')
  const newStringArray = []

  for (let i = 0; stringArray.length > i; ++i) {
    const string = stringArray[i]
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)

    newStringArray.push( capitalizedString )
  }

  return newStringArray.join(' ')
}

export const generateTodos = function(number = 3) {
  const entities = {}
  const keys = []

  for (let n = 0; number > n; ++n) {
    
    const name = lorem.generateWords(
      Math.floor( Math.random() * 3 ) + 1
    )

    const capitalizedName = capitalizeWords(name)

    const description = lorem.generateSentences(
      Math.floor( Math.random() * 2 ) + 1
    )

    const id = uuid()

    const isCompleted = false

    entities[id] = { 
      id, 
      name: capitalizedName, 
      description,
      isCompleted
    }

    keys.push(id)
  }

  return { entities, keys }
}


