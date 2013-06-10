// jshint asi:true

var seed = 0x0deadbeef

function c() {
  return String.fromCharCode(Math.floor(Math.random() * (122-97)) + 97)
}

function str(len) {
  var s = ''

  for (var i = 0; i < len; i++)
    s += c()

  return s
}

var rndid = module.exports = function (len) {
  var id = str(len || 7)

  // lookup to guarantee unique
  if (document.getElementById(id))
    // try again
    return rndid()

  return id
}
