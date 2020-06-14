let obj = {}
let accessContent = document.getElementById("content");
 let params = new URLSearchParams(window.location.search).forEach(function(value,keys) {
    obj[keys] = value ;
    if(obj[keys]){
   // accessContent.append(`${keys} : ${value}`)
    //accessContent.append(document.createElement("br"))
    }
})
 document.getElementById("name").innerHTML = obj["name"];
 document.getElementById("phone").innerHTML = obj["phone"];
  document.getElementById("email").innerHTML = obj["email"];
  document.getElementById("Objective").innerHTML = obj["objective"];
  document.getElementById("age").innerHTML = obj["age"];
  document.getElementById("dob").innerHTML = obj["dob"];
  document.getElementById("gender").innerHTML = obj["gender"];
  document.getElementById("father").innerHTML = obj["father"];
  document.getElementById("mother").innerHTML = obj["mother"];

 // for appending education values
  let num=1;
  let table = document.querySelector("tbody");
  while(obj["degree"+num]){
        
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td_class = document.createElement("td");
    let td_marks = document.createElement("td");
    let td_degree = document.createElement("td");
    let td_year = document.createElement("td");
    tr.appendChild(td_class);
    tr.appendChild(td_marks);
    tr.appendChild(td_degree);
    tr.appendChild(td_year);
    td_class.innerHTML = obj["class"+num];
    td_marks.innerHTML = obj["marks"+num];
    td_degree.innerHTML = obj["degree"+num];
    td_year.innerHTML = obj["year"+num];
    num++;
   
  }
   
  document.getElementById("skills").innerHTML = obj["skill1"]+","+obj["skill2"]+","+obj["skill3"]+","+obj["skill4"]+","+obj["skill1"];
  document.getElementById("hobbies").innerHTML = obj["hobbie1"]+","+obj["hobbie2"]+","+obj["hobbie3"];
  document.getElementById("languages").innerHTML = obj["language1"]+","+obj["language2"]+","+obj["language3"];
