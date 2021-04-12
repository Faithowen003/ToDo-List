// check off specfic todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopProagation();
});


// adding items
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text
		var todoText = $(this).val();
		$(this).val("");
		//create a new li add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});


// fade icon
$(".fa-plus").click(function () {
	$("input[type='text'").fadeToggle();
});