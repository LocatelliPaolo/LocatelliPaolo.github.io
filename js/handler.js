$( document ).ready(function() {
	
	$(".navbar .menu .item").click(function() {
		$id = $(this).attr("id");
		
		if(!$("#"+$id).hasClass("active"))
		{
			$(".navbar .menu .item.active").removeClass("active");
			$("#"+$id).addClass("active");
			
			switch ($id) {
				case "menu-home":
				
					$(".navbar .menu .menu-line").css("left","0px");
					$(".visible-section").addClass("effect");	
					setTimeout(function(){
						$(".visible-section").addClass("hidden");
						$(".visible-section").removeClass("visible-section");
						$(".home").addClass("visible-section");
						$(".home").removeClass("hidden");
						setTimeout(function(){
							$(".home").removeClass("effect");
						}, 100);	
					}, 250);					
					break;
					
				case "menu-about":
				
					$(".navbar .menu .menu-line").css("left","120px");
					$(".visible-section").addClass("effect");	
					setTimeout(function(){
						$(".visible-section").addClass("hidden");
						$(".visible-section").removeClass("visible-section");
						$(".about").addClass("visible-section");
						$(".about").removeClass("hidden");
						setTimeout(function(){
							$(".about").removeClass("effect");
						}, 100);	
					}, 250);
					break;
				case "menu-contact":
					
					$(".navbar .menu .menu-line").css("left","240px");
					$(".visible-section").addClass("effect");	
					setTimeout(function(){
						$(".visible-section").addClass("hidden");
						$(".visible-section").removeClass("visible-section");
						$(".contact").addClass("visible-section");
						$(".contact").removeClass("hidden");
						setTimeout(function(){
							$(".contact").removeClass("effect");
						}, 100);	
					}, 250);
					break;
				default:break;
			}
		}
	});
	
});
