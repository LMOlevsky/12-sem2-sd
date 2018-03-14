var notRussiaMedals = [2,6,9];
var ChinaMedals = [1,6,2];
var which = "notRussia";
var svg = document.getElementById("svg");
var toggle = document.getElementById("toggle");
var header = document.getElementById("header");

var size = function(e){
    svg.innerHTML = "";
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", 100);
    c1.setAttribute("cy", 100);
    c1.setAttribute("fill", "gold");
    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c2.setAttribute("cx", 200);
    c2.setAttribute("cy", 200);
    c2.setAttribute("fill", "silver");
    var c3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c3.setAttribute("cx", 300);
    c3.setAttribute("cy", 300);
    c3.setAttribute("fill", "#CD7F32");
    svg.appendChild(c1);
    svg.appendChild(c2);
    svg.appendChild(c3);
    
    if (which == "notRussia"){
	console.log("notRussia data added");
	d3.selectAll("circle").data(notRussiaMedals);
	d3.select("h1").text("Olympic Athlete from Russia Medal Count");
	which = "China";
    }
    else if (which == "China"){
	console.log("China data added");
	d3.selectAll("circle").data(ChinaMedals);
	d3.select("h1").text("China Medal Count");
	which = "notRussia";
    }
    d3.selectAll("circle").attr("r", function(d){ return 5*d; });
};

toggle.addEventListener("click", size);
