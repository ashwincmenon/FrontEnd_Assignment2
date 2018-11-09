
   function Person(fn, ln) {
		this.first_name = fn;
		this.last_name = ln; 
	}

	function Grade(name,course,gpa) {
		this.name = name;
		this.course = course;
		this.gpa=gpa; 
	}

	
var person_set = new Array();
var grades=new Array();

  
   function add(p_obj) {
		person_set.push(p_obj); 
		
		// console.log(person_set); 
	}

  function addGrade(p_obj) {
		grades.push(p_obj); 
		
		// console.log(person_set); 
	}

	(function init(){ //Initializing and populating Student Data
     console.log("Initializing");
        p1=new Person("Ashwin","Menon");
	    p2=new Person("Vivek","Anand");
	    p3=new Person("Karthik","Menon");
	    p4=new Person("Jithin","Anand");
	    p5=new Person("Davis","Menon");
	    add(p1);add(p2);add(p3);add(p4);add(p5);


       g1=new Grade("Ashwin Menon","Software Design","4");
       g2=new Grade("Ashwin Menon","Database","3.7");
       g3=new Grade("Ashwin Menon","Networks","3.4");
       g4=new Grade("Vivek Anand","Backend","3.1");
       g5=new Grade("Vivek Anand","Seminar","2.8");
       g6=new Grade("Vivek Anand","Computer Architecture","2.5");
       g7=new Grade("Karthik Menon","Testing","2.2");
       g8=new Grade("Karthik Menon","Front End","2.5");
       g9=new Grade("Karthik Menon","Software Process","2.8");
       g10=new Grade("Jithin Anand","Project","2.2");
       g11=new Grade("Jithin Anand","Machine Learning","2.5");
       g12=new Grade("Jithin Anand","Neural Network","2.8");
       g13=new Grade("Davis Menon","Graphics","2.2");
       g14=new Grade("Davis Menon","Electronics","2.5");
       g15=new Grade("Davis Menon","Biology","2.8");
       addGrade(g1);addGrade(g2);addGrade(g3);addGrade(g4);addGrade(g5);addGrade(g6);
       addGrade(g7);addGrade(g8);addGrade(g9);addGrade(g10);addGrade(g11);addGrade(g12);
       addGrade(g13);addGrade(g14);addGrade(g15);

	   //console.log(grades);

})();

//console.log(person_set);

