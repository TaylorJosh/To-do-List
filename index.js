let toDoItems = document.getElementsByTagName("li");


for (i = 0; i < toDoItems.length; i++) {
  let delBtn = document.createElement("span");
  let txt = document.createTextNode(" " + " \u2421");
  delBtn.className = "del";
  delBtn.appendChild(txt);
  toDoItems[i].appendChild(delBtn);
}


let del = document.getElementsByClassName("del");
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  }
}


function newListItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("addItem").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("Please enter task");
  } else {
    document.getElementById("toDoListItems").appendChild(li);
  }
  document.getElementById("addItem").value = "";
  let delBtn = document.createElement("span");
  let txt = document.createTextNode(" " + " \u2421");
  delBtn.className = "del";
  delBtn.appendChild(txt);
  li.appendChild(delBtn);
  for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}