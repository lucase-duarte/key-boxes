const container = document.querySelector('.container')

window.addEventListener('keydown', (event) => {
    container.innerHTML = `<div class="key">

        <small>event.Key</small>

        <div class="box">${event.key}</div>

      </div>

      <div class="key">

        <small>event.keyCode</small>

        <div class="box">${event.keyCode}</div>

      </div>

      <div class="key">

        <small>event.code</small>

        <div class="box">${event.code}</div>

      </div>`
})