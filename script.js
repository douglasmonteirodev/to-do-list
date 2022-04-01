let tarefa = window.document.getElementById("txtTarefas");
let lista = window.document.getElementById("list");

onload = function () {
  lista.innerHTML = localStorage.getItem("chave");
  handleClick();
};

function add() {
  if (tarefa.value.length == 0) {
    alert("[ERRO] Digite uma tarefa");
  } else {
    lista.innerHTML += `<li > ${tarefa.value} <button class ="delete"> <i class="uil uil-trash-alt"></i> </button> </li>`;

    handleClick();
  }
  tarefa.value = "";
  tarefa.focus();
}

function handleClick() {
  localStorage.setItem("chave", lista.innerHTML);

  var tasks = document.querySelectorAll(".delete");

  for (index in tasks) {
    tasks[index].onclick = function () {
      this.parentNode.remove();
      localStorage.removeItem("chave");
      localStorage.setItem("chave", lista.innerHTML);
    };
  }
}

function clean() {
  lista.innerHTML = "";
  localStorage.removeItem("chave");
}

lista.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
