// QuerySelector
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.backgroundColor = 'green';

 var item = document.getElementsByClassName('list-group-item');
 var thirdItem = item[2];
thirdItem.style.visibility = 'hidden';

//QuerySelectorALL

var secItem = document.querySelectorAll('.list-group-item');
secItem[1].style.color = 'green';

 var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
 
 for(var i=0;i<odd.length;i++)
{
   odd[i].style.backgroundColor = 'green';
 }