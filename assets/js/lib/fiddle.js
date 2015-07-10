var fiddle = {
	getHTMLContent: function() {
		var htmlContent = $("#div_html textarea").val();
		return htmlContent
	},
	getCSSContent: function() {
		var cssContent = $("#div_css textarea").val();
		return cssContent
	},
	getJSContent: function() {
		var jsContent = $("#div_js textarea").val();
		return jsContent
	},
	resetElements: function() {
		this.resetHTMLContent();
		this.resetJSContent();
		this.resetCSSContent();
	},
	prepareFullHTML: function(htmlContent, cssContent, jsContent, selectedLibrary) {
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
	}
};

