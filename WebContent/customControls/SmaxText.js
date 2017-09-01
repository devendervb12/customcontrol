
sap.ui.core.Control.extend("smax.ui.Text", {
	metadata : {
		properties : {
			text : "String" // framework read this line, framework will create
				// setter and getter method
		}
	},
	renderer : function(oRm, oControl){
		oRm.write("<p>"+oControl.getText()+"</p>")
	} //testing
});

