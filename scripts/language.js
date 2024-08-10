  const copyButton = document.querySelector('.copy-button')

function ci(className, innerHTML) {
  const classToChange = document.querySelectorAll(className)
  for (let i = 0; i < classToChange.length; i++) {
    toChange = classToChange[i]
    toChange.innerHTML = innerHTML
  }
}

function toChinese() {
  document.querySelector('html').lang = 'zh-CN'
  ci('.-example-description', '示例描述。')
  ci('.-language-button', '<i class="bi bi-globe"></i>&ensp;EN')
  ci('.-auto', '<i class="bi bi-circle-half"></i>&ensp;自动')
  ci('.-light', '<i class="bi bi-sun-fill"></i>&ensp;浅色')
  ci('.-dark', '<i class="bi bi-moon-stars-fill"></i>&ensp;深色')  
  ci('.-rate', '评价') 
  ci('.-about', '关于')
  ci('.-john-homepage', 'John 主页')
  ci('.-puzzle-list', '谜题列表')
  ci('.-lock', '<i class="bi bi-lock"></i> 锁定谜题')
  ci('.-tips', '提示')
  $('.No-english').hide();
  
  otherChineseText()
}

function toEnglish() {
  document.querySelector('html').lang = 'en-US'
  ci('.-example-description', 'Example description.')
  ci('.-language-button', '<i class="bi bi-globe"></i>&ensp;中')
  ci('.-auto', '<i class="bi bi-circle-half"></i>&ensp;Auto')
  ci('.-light', '<i class="bi bi-sun-fill"></i>&ensp;Light')
  ci('.-dark', '<i class="bi bi-moon-stars-fill"></i>&ensp;Dark')
  ci('.-rate', 'Rate')
  ci('.-about', 'About')
  ci('.-john-homepage', 'John Homepage')
  ci('.-puzzle-list', 'Puzzle List')
  ci('.-lock', '<i class="bi bi-lock"></i> Lock Puzzles')
  ci('.-tips', 'Tips')
  $('.No-english').show();
  
  otherEnglishText()
}

switch (Cookies.get('language')) {
  case 'zh_cn':
    toChinese()
    break
  case 'en_us':
    toEnglish()
    break
  default:
    Cookies.set('language', 'zh_cn')
    toChinese()
    break
}

function changeLanguage() {
  switch (Cookies.get('language')) {
    case 'zh_cn':
      Cookies.set('language', 'en_us')
      toEnglish()
      break
    case 'en_us':
      Cookies.set('language', 'zh_cn')
      toChinese()
      break
  }
}


