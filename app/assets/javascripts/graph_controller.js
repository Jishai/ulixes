var GraphController = function(options) {
	
	this.options = {
		links : [],

	};
	this.options = options;

	this.setEntryPoint = function(formDOM) {
		send(formDOM,function(d){});
	};

	this.listEntryPoints = function() {

	};
	
	this.openNodeForm = function(node){
		openForm("node",node);
		
		
		
		// get(node.id,function(d){
			// openForm("node",d);
// 			
		// });
	};
	
	this.openEdgeForm = function(edge){
		openForm("edge",edge);
		
		
		// get(edge.id,function(d){
			// openForm("edge",d);
		// });
	};
	
	var get = function(entity,id,successFunction) {
		var valuesToSubmit = formDOM.serialize();
		$.ajax({
			url : formDOM.attr('action'), //sumbits it to the given url of the form
			data : valuesToSubmit,
			dataType : "JSON" // you want a difference between normal and ajax-calls, and json is standard
		}).success(function(json) {
			successFunction(json);
		});
	};

	var send = function(formDOM,successFunction) {
		var valuesToSubmit = formDOM.serialize();
		$.ajax({
			url : formDOM.attr('action'), //sumbits it to the given url of the form
			data : valuesToSubmit,
			dataType : "JSON" // you want a difference between normal and ajax-calls, and json is standard
		}).success(function(json) {
			successFunction(json);
		});
	};

	graph(options.nodes,options.links,this.openNodeForm,this.openEdgeForm);
};
