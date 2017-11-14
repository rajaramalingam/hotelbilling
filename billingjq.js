var a="";
var b="";
var c;
$(document).ready(function(){
 $.ajax({
 	 type:"GET",
  	url:"http:5a0ad7919c21d90012623e6f.mockapi.io/food",
  	dataType:"json",
  	success:function(result){
  			var text="";
         c=result;
  		for ( i = 0; i < c.length; i++) {
  		 text+="<option>"+c[i].foodname+"</option>" 
  		}
  		$("#foodItem").html(text)
    
      // var txt="";
      // for ( i = 0; i < result.length; i++) {
      //  txt+="<option>"+result[i].price+"</option>" 
      // }
      // $("#foodPrice").html()
  	}
  })
 $("#foodItem").change(function(){
  a=$("#foodItem").val();
  console.log(a)
  if(a=c[i].foodname){
    b=c[i].price;
  }
 })


 });
