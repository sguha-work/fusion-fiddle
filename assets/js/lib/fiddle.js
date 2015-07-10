var fiddle = (function() {
    this.getHTMLContent = (function() {
            var htmlContent = $("#div_html textarea").val();
            return htmlContent
        }),
        this.getCSSContent = (function() {
            var cssContent = $("#div_css textarea").val();
            return cssContent
        }),
        this.getJSContent = (function() {
            var jsContent = $("#div_js textarea").val();
            return jsContent
        }),
        this.resetElements = (function() {
            this.resetHTMLContent();
            this.resetJSContent();
            this.resetCSSContent();
        }),
        this.prepareFullHTML = (function(htmlContent, cssContent, jsContent, selectedLibrary) {
            var finalHTMLContent = '<!DOCTYPE html><html><head>';

            // adding the library
            if ($.trim(selectedLibrary)) {
                finalHTMLContent += '<script type="text/javascript" src="' + selectedLibrary + '"></script>';
            }

            // adding the css
            finalHTMLContent += "<style>" + cssContent + "</style>";

            finalHTMLContent += "</head><body>";

            // adding html content
            finalHTMLContent += htmlContent;

            // adding the javascript
            finalHTMLContent += "<script type='text/javascript'>" + jsContent + "</script>";

            finalHTMLContent += "</body></html>";

            return finalHTMLContent;
        })
});