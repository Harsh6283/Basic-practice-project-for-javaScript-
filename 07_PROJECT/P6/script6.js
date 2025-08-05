const insert = document.querySelector('#insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `<div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td id = "cap" >${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>`
     
    const textElement = document.querySelector('#cap')

    textElement.textContent = textElement.textContent.toLocaleUpperCase();

})



