const newStateLogCSS = `
  color: cyan; 
  font-size: small;
  font-weight: bold;
`

const logState = function(state) {
  console.log('%cNEW STATE', newStateLogCSS, state)
}

export default logState