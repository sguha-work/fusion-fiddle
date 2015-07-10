
var configObject = ({
    htmlEditor : $("#div_html textarea"),
    cssEditor : $("#div_css textarea"),
    jsEditor : $("#div_js textarea")
});
var fiddle = (function() {
    this.getHTMLContent = (function() {
            var htmlContent = configObject.htmlEditor.val();
            return htmlContent
        }),

        this.getCSSContent = (function() {
            var cssContent = configObject.cssEditor.val();
            return cssContent
        }),

        this.getJSContent = (function() {
            var jsContent = configObject.jsEditor.val();
            return jsContent
        }),

        this.resetElements = (function() {
            this.resetHTMLContent();
            this.resetJSContent();
            this.resetCSSContent();
        }),

        this.resetHTMLContent = (function() {
            if(configObject.htmlEditor.length) {
                if(configObject.htmlEditor[0].tagName == "TEXTAREA") {
                    configObject.htmlEditor.val("");
                } else {
                    configObject.htmlEditor.empty()
                }
            }
        });

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