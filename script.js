let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {
        let novoItem = `<div class="item">
        <div class="item-icone">
          <span class="material-symbols-outlined bolinha">
            radio_button_unchecked
            </span>
        </div>
        <div class="item-nome">
          ${valorInput}
        </div>
        <div class="item-botao">
          <span class="material-symbols-outlined delete">delete</span>
        </div>
      </div>`;

      main.innerHTML += novoItem

      input.value = "";
      input.focus();
    }


}

input.addEventListener("keyup", function (event) {

    if(event.keyCode === 13) {
        btnAdd.click();
    }
})