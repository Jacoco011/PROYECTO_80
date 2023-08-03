var names_of_people=[];
names_of_people.sort();
function submit ()
{
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    console.log(GuestName);
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
     console.log(lenght_of_name);
      document.getElementById("mostrar_nombres").innerHTML=names_of_people.toString();


}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
        {
            if(s==names_of_people[j]){
                found=found+1;
            }
        }
    document.getElementById("p2").innerHTML="namefound"+found+ "time/s";
    console.log("found name "+found+" time/s");
}
