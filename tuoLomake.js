
		
		function loadScript(){
		$.getScript( "lahetaLomake.js");
		}
		
		var url = "../vekararinne_lomake/index.php/FormFunctions/rakenna_lomake";
	
		$.ajax({
			url: url,
			success: function(data){
			$("#dynamic-lomake").html(data);
			loadScript();
			}
		});
		
		
		
	
	























