$(document).ready(function() {
  var $numbers = $('span.number')
  var $operators = $('span.operator')
  var $clear = $('span#clear')
  var $equals = $('span#equals')

  $numbers.click(appendNumber)
  $operators.click(appendOperator)
  $clear.click(clearScreen)
  $equals.click(evaluateEquation)

})

var $screen = $('div#screen')

function appendNumber() {
  var $screenText = $screen.text()
  var $currentNumber = $(this).text()

  $screen.text($screenText + $currentNumber)
}

function appendOperator() {
  var $screenText = $screen.text()
  var $currentOperator = $(this).text()

  if ($screenText === 'Error') {
    console.log("invalid input")
  } else {
    $screen.text($screenText + $currentOperator)
  }
}

function clearScreen() {
  $screen.text('')
}

function evaluateEquation() {
  var $screenText = $screen.text()
  var $currentOperator = $(this).text()
  var indexToSliceAt;
  var slicedText = ''

  for (var i = 0; i < $screenText.length; i++) {
    if ($screenText[i] === "÷") {
      indexToSliceAt = (i)
      slicedText = $screenText.slice(indexToSliceAt)
    }
  }

  if ($screenText === 'Error') {
    console.log("invalid input")
  } else {
    $screen.text($screenText + $currentOperator)
  }

  if ($screenText.includes('x')) {
    $screenText = $screenText.replace('x', '*')
  }
  if ($screenText.includes('÷')) {
    $screenText = $screenText.replace('÷', '/')
  }

  var lastChar = $screenText[$screenText.length - 1]
  var counter = 0

  for (var i = 0; i < $screenText.length; i++) {
    if ($screenText[i] === '+' || $screenText[i] === '-' || $screenText[i] === '*' || $screenText[i] === '÷') {
      counter++
    }
  }

  if (counter > 1) {
    $screen.text('Error')
  } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "÷") {
    $screen.text('Error')
  } else if (slicedText === "÷0" || slicedText === "÷00") {
    $screen.text('Error')
  } else {
    var result = eval($screenText)
    $screen.text(result)
  }
}
