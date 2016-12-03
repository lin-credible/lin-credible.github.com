
var width = 200,
    height = 210;

var color = d3.scale.category20();

var radius = d3.scale.sqrt()
    .range([0, 6]);

var svg = d3.select("#bellyQ").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .size([width, height])
    .charge(-100)
    .linkDistance(function(d) { return radius(d.source.size) + radius(d.target.size) + 4; });

d3.json("demo.json", function(graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .on("tick", tick)
      .start();

  console.log(graph);

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("g")
      .attr("class", "link");

  link.append("line")
      .style("stroke-width", function(d) { return (d.bond * 2 - 1) * 2 + "px"; });

  link.filter(function(d) { return d.bond > 1; }).append("line")
      .attr("class", "separator");

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("circle")
      .attr("r", function(d) { return radius(d.size); })
      .style("fill", function(d) { return color(d.atom);});

  node.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("fill", function(d) {
      	if(d.atom == 'Colin'){
      		return "white";
      	}else{
      		return "black";
      	}
      })
      .text(function(d) { return d.atom;});

  function tick() {
    link.selectAll("line")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }
});