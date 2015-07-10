

var configObject = ({
    htmlEditor : $("#div_html textarea"),
    cssEditor : $("#div_css textarea"),
    jsEditor : $("#div_js textarea"),
    outputContainer : $('#div_output iframe')
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
            this.resetOutput();
        }),

        this.resetOutput = (function() {
            configObject.outputContainer.attr('src', 'balnk.html');
        });

        this.resetHTMLContent = (function() {
            if(configObject.htmlEditor.length) {
                if(configObject.htmlEditor[0].tagName == "TEXTAREA") {
                    configObject.htmlEditor.val("");
                } else {
                    configObject.htmlEditor.empty();
                }
            }
        });

        this.resetJSContent = (function() {
            if(configObject.jsEditor.length) {
                if(configObject.jsEditor[0].tagName == "TEXTAREA") {
                    configObject.jsEditor.val("");
                } else {
                    configObject.jsEditor.empty();
                }
            }
        });        

        this.resetCSSContent = (function() {
            if(configObject.cssEditor.length) {
                if(configObject.cssEditor[0].tagName == "TEXTAREA") {
                    configObject.cssEditor.val("");
                } else {
                    configObject.cssEditor.empty();
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
        });

        this.showOutput = (function() {
            var htmlContent = this.getHTMLContent();
            var cssContent = this.getCSSContent();
            var jsContent = this.getJSContent();
            var selectedLibrary = $("#sel_library").val();
            var finalHTMLContent = this.prepareFullHTML(htmlContent, cssContent, jsContent, selectedLibrary);
            configObject.outputContainer.attr('src',"data:text/html;charset=utf-8," + escape(finalHTMLContent));
        });
});