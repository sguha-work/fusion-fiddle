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

$(document).ready(function() {
	$("button").on('click', function() {
		var htmlContent = getHTMLContent();
		var cssContent = getCSSContent();
		var jsContent = getJSContent();
		var selectedLibrary = $("#sel_library").val();
	})
});