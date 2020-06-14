let num = 2;
 
let Qualification = document.getElementById("Qualification");
let add = document.getElementById("addField");
  
  

add.onclick = function() {  
 let year = document.createElement("div");
 let degree = document.createElement("div");
 let marks = document.createElement("div");
 let _class = document.createElement("div");
 let var_year = 'year'+num;
 let var_degree = 'degree'+num;
 let var_marks = 'marks'+num;
 let var_class = 'class'+num;
   Qualification.appendChild(_class);
   Qualification.appendChild(marks);
   Qualification.appendChild(degree);
   Qualification.appendChild(year);

_class.innerHTML = "<br><label for = "+var_class+">Class:</label><input type = 'text' name = "+var_class+" id = "+var_class+" />" ;
marks.innerHTML = "<label for = "+var_marks+">Grades/Marks:</label><input type = 'text' name = "+var_marks+" id = "+var_marks+"/>" ;
degree.innerHTML = "<label for = "+var_degree+">Institution Name:</label><input type = 'text' name = "+var_degree+" id = "+var_degree+"/>" ;
year.innerHTML = "<label for = "+var_year+">year:</label><input type = 'text' name = "+var_year+" id = "+var_year+" placeholder = 'yyyy'/>" ;
num++;
};
 

