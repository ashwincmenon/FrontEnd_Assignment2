
function Search() {//Event handler which handles the event "click" on the search button
  //console.log("Search button clicked");
  var s=document.getElementById('lname').value;
  var tb=document.getElementById("tableBody");
	tb.innerHTML="";
	var lb=document.getElementById("studentlabel");
	lb.innerHTML="";

    if(s)
	document.getElementById("myList").innerHTML="";
  for(i=0;i<person_set.length;i++)
  	if(s.toLowerCase() == person_set[i].last_name.toLowerCase())
  		{console.log(person_set[i].first_name.toUpperCase());
  			var node = document.createElement("div");//Adding nodes(students) dynamically
  			node.setAttribute("id", i);
  			node.onclick = function () {
  				var divid=event.target.id;
                generateGrade(divid);
            };
            var textnode = document.createTextNode(person_set[i].first_name +" "+ person_set[i].last_name);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);}
  
}


function generateGrade(divid){//Generating the grade table dynamically

	console.log(divid);
	var el=document.getElementById(divid).innerHTML;
	console.log(el);
	var table = document.getElementById("t1");

	var tb=document.getElementById("tableBody");
	tb.innerHTML="";

	console.log(tb);
    
	for(i=0;i<grades.length;i++)
		if(el.toLowerCase() == grades[i].name.toLowerCase())
			{var name=grades[i].name;
				var row = tb.insertRow();
				 var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = grades[i].course;
                cell2.innerHTML = grades[i].gpa;
				document.getElementById("studentlabel").innerHTML="Grades for " + name + " :";
				console.log(grades[i].course + grades[i].gpa);}

}






