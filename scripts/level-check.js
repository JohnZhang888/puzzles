const levelNum = 10

if (Cookies.get('highestLevel') == undefined) {
  Cookies.set('highestLevel', 0, { expires: 30000 })
}

if (document.querySelector('html').dataset.num != undefined) {

  if (Number(document.querySelector('html').dataset.num) != 1 && Number(Cookies.get('highestLevel')) + 1 < Number(document.querySelector('html').dataset.num)) {
    document.querySelector('.container').innerHTML = ''
    window.location.href = "404.html"
  } else {
    if (Number(document.querySelector('html').dataset.num) > Number(Cookies.get('highestLevel'))) {
      Cookies.set('highestLevel', document.querySelector('html').dataset.num, { expires: 30000 })
    }
    Cookies.set('recentLevel', document.querySelector('html').dataset.num, { expires: 30000 })
    const puzzleBox = document.querySelector('.puzzle-box')
    puzzleBox.classList.remove('d-none')
  }
}

document.querySelector('#level-check').src = ''