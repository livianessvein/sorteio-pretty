
var vetAdc = []
var adc = document.getElementById('b1')
var sortear = document.getElementById('b2')
var txtres = document.getElementById('txtres')
var lAdc = document.getElementById('atributos')

function add(){
  var txtadc = document.getElementById('c1').value
  vetAdc.push(txtadc)
  lAdc.innerHTML= lAdc.innerHTML + txtadc + '<br/>' 
}

function sorteio(){
  i = Math.floor(Math.random()*vetAdc.length)
  txt = vetAdc[i]
  txtres.innerHTML= txt
}
adc.onclick = add
sortear.onclick = sorteio