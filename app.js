
var list = document.getElementById("mylist");
var todo = "";
function addItem(){
    todo = document.getElementById("mainInput");
    if(todo.value!=""){
    var listItem = document.createElement("li");
    text = document.createTextNode(todo.value);
    
    listItem.appendChild(text);
    
    todo.value = "";
    //Delete button
    var delbtn = document.createElement("button");
    var text2 = document.createTextNode("X");
    delbtn.appendChild(text2);
    delbtn.setAttribute("class", "addBtn");
    delbtn.setAttribute("class"," delbtn");
    delbtn.setAttribute("onclick","deleteItem(this)");
    //Edit button
    var editbtn =  document.createElement("button");
    editbtn.appendChild(document.createTextNode("Edit"));
    editbtn.classList.add("editbtn");
    editbtn.setAttribute("onclick","edit(this)");

    

    //Done button
    var donebtn =  document.createElement("button");
    
    var i = donebtn.appendChild(document.createElement("i"));
    i.classList.add("fa");
    i.classList.add("fa-check-square");
    donebtn.setAttribute("class","done");
    donebtn.setAttribute("onclick","done(this)");
    listItem.appendChild(donebtn);

    list.appendChild(listItem);
    listItem.appendChild(delbtn);
    listItem.appendChild(editbtn);
    



    editbtn.setAttribute("id","btn1");
    delbtn.setAttribute("id","btn2");
    donebtn.setAttribute("id","btn3");
    }
    else{
        alert("Please write something to add");
    }
}
function deleteAll(){
    list.innerHTML = "";
}
function deleteItem(item){
    item.parentNode.remove();
}
function edit(cell){
    var edited = prompt("Enter value to be edited",cell.parentNode.firstChild.nodeValue);
    if(edited != ""){
        cell.parentNode.firstChild.nodeValue = edited;}
    else{
        alert("Blank item cannot br added");
    }
}
function done(cell){
    
    document.getElementById("btn3").classList.toggle('checked');
    cell.parentNode.classList.toggle('over');
    cell.parentNode.lastChild.classList.toggle("disabled");
    
}
