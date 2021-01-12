const oldStateLogCSS = `
  color: lightgray; 
  font-size: small;
  font-weight: bold;
`

const newStateLogCSS = `
  color: cyan; 
  font-size: small;
  font-weight: bold;
`

const actionLogCSS = `
  color: lime; 
  font-size: small;
  font-weight: bold;
  font-style: italic;
`

export const logOldState = function(state) {
  console.log('%cOLD STATE', oldStateLogCSS, state)
}

export const logNewState = function(state) {
  console.log('%cNEW STATE', newStateLogCSS, state)
}

export const logAction = function(action) {
  console.log('%cACTION', actionLogCSS, action)
}

