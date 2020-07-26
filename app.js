var input = document.getElementById("todo-item");
var list  = document.getElementById("todo-list");
function addItem() {
    if (input.value == "") {
        alert("Enter Some Task");
    } else {
    // Create li with Child Text
var li = document.createElement("li")
var liText = document.createTextNode(input.value);
li.appendChild(liText)
list.appendChild(li)
// Create Edit Button
var editBtn = document.createElement("button");
var editBtntext = document.createTextNode("Edit");
editBtn.setAttribute("onclick","editTask(this)")
editBtn.appendChild(editBtntext)
li.appendChild(editBtn)
// Create Delete Button
var delBtn = document.createElement("button");
var delBtntext = document.createTextNode("Delete");
delBtn.setAttribute("onclick","delTask(this)")
delBtn.appendChild(delBtntext)
li.appendChild(delBtn)
input.value = ""
}

}


// Create Delete All Function

function deleteItem() {
    list.innerHTML = ""
}

// Create Delete Button Function
function delTask(e) {
   e.parentNode.remove()
}

// Create Edit Button Function
function editTask(e) {
    var edit = e.parentNode.firstChild.nodeValue;
    var update = prompt("Update Your Task",edit);
    e.parentNode.firstChild.nodeValue = update
}