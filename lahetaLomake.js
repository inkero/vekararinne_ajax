
		
		$("#dynamic-lomake").on('click', 'input[name="submit"]', function(e){
			e.preventDefault();
			e.stopPropagation();
			var url = "../vekararinne_lomake/index.php/formFunctions/validoi_lomake";
			
			$.ajax({
				type: "POST",
				url: url,
				data: $("#dynamic-lomake form").serialize(),
				success: function(data){
				$("#dynamic-lomake").html(data);
				},
				error: function(){
				alert('Tapahtui virhe, kokeile uudestaan.');
				}
			});
			
			return false;
			
		});
	
	























