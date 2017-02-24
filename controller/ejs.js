var smart = require("smartweb");

module.exports = {
	get: function(req, res) {
		console.log("ejs:get() starting");
		var data={  
			names: ['foo', 'bar', 'baz']  
		};
		smart.showView(res, "list.ejs", data);
	}
};