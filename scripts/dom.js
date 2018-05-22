var itemList = document.getElementsByTagName("ul")[0];

// check if it is html element or not
var result = itemList.nodeType === 1;

var newNode = document.createElement("li");
newNode.textContent = 'item5';

var newNode2 = document.createElement("li");
newNode2.textContent = 'item0';

// appendChild
if (result) {
    itemList.appendChild(newNode);
    itemList.prepend(newNode2);
}