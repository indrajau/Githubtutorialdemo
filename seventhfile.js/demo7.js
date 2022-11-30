var itemList=document.querySelector('#items');
// 1.parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
//2.lastElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';
//3.lastchild
console.log(itemList.lastChild);
//4.createchild
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";
//5.firstelement child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//6.first child
console.log(itemList.firstChild);
//7.next sibling
console.log(itemList.nextSibling);
//8.next element sibling
console.log(itemList.nextElementSibling);
//9.previous sibling
console.log(itemList.previousSibling);
//10.previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//11.create element
//create div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//12. setAttribute
newDiv.setAttribute('title', 'Hello Div');
//13.create node
var newDivText=document.createTextNode('HEllo word');
//14.appendchild
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontsize ='30px';
container.insertBefore(newDiv, h1);
