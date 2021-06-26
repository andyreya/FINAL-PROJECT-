// makes action occur when buttons with those id's are clicked

document.getElementById('button-one').addEventListener('click', function1)
document.getElementById('button-two').addEventListener('click', function2)
document.getElementById('button-three').addEventListener('click', function3)
document.getElementById('button-four').addEventListener('click', function4)
document.getElementById('button-five').addEventListener('click', function5)
document.getElementById('button-six').addEventListener('click', function6)
document.getElementById('button-seven').addEventListener('click', function7)
document.getElementById('button-eight').addEventListener('click', function8)
document.getElementById('button-nine').addEventListener('click', function9)
document.getElementById('button-ten').addEventListener('click', function10)

// The variables demonstrated bellow connect to the input boxes for each riddle

let riddle1 = 0
let riddle2 = 0
let riddle3 = 0
let riddle4 = 0
let riddle5 = 0
let riddle6 = 0
let riddle7 = 0
let riddle8 = 0
let riddle9 = 0
let riddle10 = 0


function function1 () {
  riddle1 = document.getElementById('input-1').value
  if (riddle1 === 'A piano' || riddle1 === 'a piano' || riddle1 === 'piano' || riddle1 === 'Piano') {
    document.getElementById('answer-1').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-1').innerHTML = 'Incorrect'
  }
}

function function2 () {
  riddle2 = document.getElementById('input-2').value
  if (riddle2 === 'A corner' || riddle2 === 'a corner' || riddle2 === 'corner' || riddle2 === 'Corner') {
    document.getElementById('answer-2').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-2').innerHTML = 'Incorrect'
  }
}

function function3 () {
  riddle3 = document.getElementById('input-3').value
  if (riddle3 === 'The future' || riddle3 === 'the future' || riddle3 === 'future' || riddle3 === 'Future') {
    document.getElementById('answer-3').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-3').innerHTML = 'Incorrect'
  }
}

function function4 () {
  riddle4 = document.getElementById('input-4').value
  if (riddle4 === 'A shadow' || riddle4 === 'a shadow' || riddle4 === 'shadow' || riddle4 === 'Shadow' || riddle4 === 'Shadows' || riddle4 === 'shadows') {
    document.getElementById('answer-4').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-4').innerHTML = 'Incorrect'
  }
}

function function5 () {
  riddle5 = document.getElementById('input-5').value
  if (riddle5 === 'The dictionary' || riddle5 === 'the dictionary' || riddle5 === 'dictionary' || riddle5 === 'Dictionary' || riddle5 === 'A Dictionary'|| riddle5 === 'a dictionary') {
    document.getElementById('answer-5').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-5').innerHTML = 'Incorrect'
  }
}

function function6 () {
  riddle6 = document.getElementById('input-6').value
  if (riddle6 === 'A window' || riddle6 === 'a window' || riddle6 === 'window' || riddle6 === 'Window' || riddle6 === 'A Window'|| riddle6 === 'a window') {
    document.getElementById('answer-6').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-6').innerHTML = 'Incorrect'
  }
}

function function7 () {
  riddle7 = document.getElementById('input-7').value
  if (riddle7 === 'Seven' || riddle7 === 'Number seven' || riddle7 === 'number seven' || riddle7 === 'seven' || riddle7 === '7'|| riddle7 === '07') {
    document.getElementById('answer-7').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-7').innerHTML = 'Incorrect'
  }
}

function function8 () {
  riddle8 = document.getElementById('input-8').value
  if (riddle8 === 'Short' || riddle8 === 'short') {
    document.getElementById('answer-8').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-8').innerHTML = 'Incorrect'
  }
}

function function9 () {
  riddle9 = document.getElementById('input-9').value
  if (riddle9 === 'A mirror' || riddle9 === 'a mirror' || riddle9 === 'Mirror' || riddle9 === 'mirror' || riddle9 === 'Mirrors'|| riddle9 === 'mirrors') {
    document.getElementById('answer-9').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-9').innerHTML = 'Incorrect'
  }
}

function function10 () {
  riddle10 = document.getElementById('input-10').value
  if (riddle10 === 'A coffin' || riddle10 === 'a coffin' || riddle10 === 'Coffin' || riddle10 === 'coffin' || riddle10 === 'Casket'|| riddle10 === 'casket') {
    document.getElementById('answer-10').innerHTML = 'Correct'
  } else {
    document.getElementById('answer-10').innerHTML = 'Incorrect'
  }
}
