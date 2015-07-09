var getHTMLContent = (function() {
	var htmlContent = $("#div_html textarea").val();
	return htmlContent
});

var getCSSContent = (function() {
	var cssContent = $("#div_css textarea").val();
	return cssContent
});

var getJSContent = (function() {
	var jsContent = $("#div_js textarea").val();
	return jsContent
});

var prepareFullHTML = (function(htmlContent, cssContent, jsContent, selectedLibrary) {
	var finalHTMLContent = '<!DOCTYPE html><html><head>';
	
	// adding the library
	if($.trim(selectedLibrary)) {
		finalHTMLContent += '<script type="text/javascript" src="'+selectedLibrary+'"></script>';
	}

	// adding the css
	finalHTMLContent += "<style>"+cssContent+"</style>";

	finalHTMLContent += "</head><body>";

	// adding html content
	finalHTMLContent += htmlContent;

	// adding the javascript
	finalHTMLContent += "<script type='text/javascript'>"+jsContent+"</script>";

	finalHTMLContent += "</body></html>";

	return finalHTMLContent;
});

$(document).ready(function() {
	$("button").on('click', function() {
		var htmlContent = getHTMLContent();
		var cssContent = getCSSContent();
		var jsContent = getJSContent();
		var selectedLibrary = $("#sel_library").val();
		var finalHTMLContent = prepareFullHTML(htmlContent, cssContent, jsContent, selectedLibrary);
		$('#div_output iframe').attr('src',"data:text/html;charset=utf-8," + escape(finalHTMLContent));
	});
});
$(window).load(function() {
	if($.trim(getJSContent()).length) {
		$("button").trigger('click');
	}
});