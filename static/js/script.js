$('#textarea1').val('');
$('#textarea1').trigger('autoresize');

$(function () {
	$("#addToPreview").bind("click", function () {
		var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
		if (regex.test($("#fileaddToPreview").val().toLowerCase())) {
			if (typeof (FileReader) != "undefined") {
				var reader = new FileReader();
				reader.onload = function (e) {
					var table = $("<table />");
					var rows = e.target.result.split("\n");
					for (var i = 0; i < rows.length; i++) {
						var row = $("<tr />");
						var cells = rows[i].split(",");
						for (var j = 0; j < cells.length; j++) {
							var cell = $("<td />");
							cell.html(cells[j]);
							row.append(cell);
						}
						table.append(row);
					}
					$("#display").html('');
					$("#display").append(table);
				}
				reader.readAsText($("#fileaddToPreview")[0].files[0]);
			} else {
				alert("This browser does not support HTML5.");
			}
		} else {
			alert("Please load a valid txt/csv file.");
		}
	});
});