
/* ******************************* general ******************************* */

// grab body node for faster access of DOM
var body = document.body;

// grab ul node
var itemList = body.getElementsByClassName("list")[0];

// check if it is html node or not
var result = itemList.nodeType === 1;

// create new node
var newNode = document.createElement("li");
newNode.textContent = 'item5';

// create another new node
var newNode2 = document.createElement("li");
newNode2.textContent = 'item0';

// append newly created nodes
if (result) {
    var addedNode = itemList.appendChild(newNode);

    // insert at firstlocation in node list
    //itemList.prepend(newNode2);

    // used to insert node in a specific location
    itemList.insertBefore(newNode2, itemList.firstElementChild)
}

console.log(addedNode);

/* *******************************  getElementsByTagName() ******************************* */

var img = body.getElementsByTagName('img'); // retrive all img node from the loaded page

// retrive img node with named attribute 'myimg'
var myimg = img.namedItem('myimg');

console.log(myimg);


/* ******************************* getElementsByName() ******************************* */

var myCar = document.getElementsByName('car');
