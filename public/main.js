let cards = []
let suits = ['spades', 'hearts', 'clubs', 'diams']
let numb = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

let output = document.getElementById('output')

for (s in suits) {
  let suit = suits[s][0].toUpperCase()
  let bgcolor = suit == 'S' || suit == 'C' ? 'black' : 'red'

  for (n in numb) {
    output.innerHTML +=
      "<span style='color:" +
      bgcolor +
      "'>&" +
      suits[s] +
      ';' +
      numb[n] +
      '</span>'
  }
}
let randomNum = Math.floor(Math.random() * 52 + 1)
console.log(randomNum)
