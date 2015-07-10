var Fiddle;

$(document).ready(function() {
	Fiddle = fiddle;
	$("button").on('click', function() {
		var htmlContent = Fiddle.getHTMLContent();
		var cssContent = Fiddle.getCSSContent();
		var jsContent = Fiddle.getJSContent();
		var selectedLibrary = $("#sel_library").val();
		var finalHTMLContent = Fiddle.prepareFullHTML(htmlContent, cssContent, jsContent, selectedLibrary);
		$('#div_output iframe').attr('src',"data:text/html;charset=utf-8," + escape(finalHTMLContent));
	});
});
$(window).load(function() {
	if($.trim(Fiddle.getJSContent()).length) {alert("x");
		$("button").trigger('click');
	} else {

	}
});