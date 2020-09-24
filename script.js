function dropdown()
                {
                    var x = document.getElementById("navbar");
                    if (x.className === "nav")
                        {
                            x.className += " responsive";
                        }
                        else
                        {
                            x.className = "nav";
                        }
                }

function button1()
{
    var x = document.getElementById("id");
    var y = document.getElementById('pass');
    var z = document.getElementById("a1");
    var z1 = document.getElementById("b");
    if(!x.value || !y.value)
        {
            alert("Please fill the all details")
        }
    else
        {
              
            alert("Hi,"+x.value+ " You have registered Succesfully")
            
        }
  
    
}

