$(document).ready(function(){
	$("#addbtn").click(function(){
	var bill={
	foodname:$("#foodItem").val(),
	price:$("#foodPrice").val(),
}
	$.post("https:5a0ad7919c21d90012623e6f.mockapi.io/food",bill)
});
});