var body = document.body;

var itemList = body.getElementsByTagName("ul")[0];

// check if it is html element or not
var result = itemList.nodeType === 1;

var newNode = document.createElement("li");
newNode.textContent = 'item5';

var newNode2 = document.createElement("li");
newNode2.textContent = 'item00';

// appendChild
if (result) {
    var addedNode = itemList.appendChild(newNode);
    // insert at firstlocation in node list
    //itemList.prepend(newNode2);

    // used to insert node in a specific location
    itemList.insertBefore(newNode2, itemList.firstElementChild)
}

console.log(addedNode);