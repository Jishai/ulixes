var GraphController = function(options) {
	var graph;
	
	this.options = {
		links : [],

	};
	this.options = options;

	this.setEntryPoint = function(formDOM) {
		formDOM.attr('action',"/graph/set_node");
		send(formDOM,function(d){
			console.log("this just happend", d);
			refreshGraph(d);
		});
	};

	this.listEntryPoints = function() {

	};
	
	this.openNodeForm = function(node){
		get("node",node,function(d){
			openForm("node",d);
		});
	};
	
	this.openEdgeForm = function(edge){
		get("edge",edge,function(d){
			openForm("edge",d);
		});
	};
	
	
	////////////////////////////////////////////////////////////
	var refreshGraph = function(data){
		graph.update(data.nodes,data.links);
	};
	
	var get = function(entity,data,successFunction) {
		$.ajax({
			url : "/graph/get_"+entity,
			data : data
			//dataType : "JSON" // you want a difference between normal and ajax-calls, and json is standard
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

	graph = new Graph(options.nodes,options.links,this.openNodeForm,this.openEdgeForm);
};
