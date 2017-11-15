var b="";
var a="";
var c="";
var d="";
var e="";
var g="";
var x="";
var s="";
var fq="";
var fp="";
var fi="";
var fr="";
var gt=0;
var tot="";
$(document).ready(function(){
 $.ajax({
 	 type:"GET",
  	url:"https:5a0ad7919c21d90012623e6f.mockapi.io/food",
  	dataType:"json",
  	success:function(result){
  			 d="";
         c=result;
         
  		for ( i = 0; i < c.length; i++) {
  		 d+="<option>"+c[i].foodname+"</option>" 
  		}
  		$("#foodItem").html(d)
  	}
  })
  
 $("#foodItem").change(function(){
   a=$("#foodItem").val();
  console.log(a)
  for(i = 0 ; i < c.length;i++){
    if(a===c[i].foodname){
   $("#foodPrice").val(c[i].price);
    e = c[i].price;
    console.log(e);
  }

 }
   });
   
  $("#addbtn").click(function(){
     g=$("#foodQuantity").val();
     console.log(g);
        x= g * e; 
        console.log(x); 
        fi=a;
        console.log(fi); 
        fp=e;
        console.log(fp);
        fq=g;
        console.log(fq);
        fr=x;
        console.log(fr);
        $("#selection").append("<tr><td>"+fi+"</td><td>"+fp+"</td><td>"+fq+"</td><td>"+fr+"</tr></td>");
        tot=fr;
        gt+=tot;
         $("#gtotal").html(gt)
        console.log(gt);

    })
    
 });


