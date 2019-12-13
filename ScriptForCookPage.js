
var removeOrder= document.getElementsByClassName('btn-primary');
console.log(removeOrder)
for (var i=0; i<removeOrder.length; i++){
  var button=removeOrder[i];
    button.addEventListener('click', function(){
        var buttonclicked=event.target
        buttonclicked.parentElement.parentElement.remove();
              
    });

}

    var order=document.getElementsByClassName("btn-primary")
    var num =document.getElementsByClassName('large').value;
    for (var i=0; i<order.length; i++){
        var but=order[i];
        but.addEventListener('click', function(){
         num=parseInt(num.innertext-1);
         document.getElementsByClassName("large")[0].innertext=num;
});}

var submit = document.getElementsByClassName('btn btn-default btn-md pull-right');
var text= document.getElementById("message");

   submit.addEventListener('click', function(){
        text.innerHTML="";
       
   });


