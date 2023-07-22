const body = document.querySelector("body"),
  nav = body.querySelector("nav"),
  sidebar = body.querySelector(".sidebar"),
  modeToggle = body.querySelector(".mode-toggle");

  modeToggle.addEventListener('click', function(){
    body.classList.toggle('dark')
  })
  sidebar.addEventListener('click', function(){
    nav.classList.toggle('close')
  })
