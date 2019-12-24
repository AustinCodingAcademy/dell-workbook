var stars = ''

for (var i = 0; i < 800; i++) {
  var type = Math.round(Math.random() * 2)
  var numStars = Math.floor(Math.random() * 800)

  stars += '<div class="stars star' + type + '" style="margin-left:' + numStars * 1.23 + 'px; margin-bottom: ' + Math.random() * 2 + 'px"></div>'

  document.getElementById('starrysky').innerHTML = stars
}
