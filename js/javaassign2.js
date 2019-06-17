
function changedisplay()
{
    var x=document.getElementById("hide").style.display;
    var arrowicon=document.getElementById("arrow");
    if(x=="none")
        {
            document.getElementById("hide").style.display="block";
             /*document.getElementById("mybtn").innerHTML="hide ";
           arrowicon.classList.remove("fa-arrow-alt-circle-down");
           arrowicon.classList.add("fa-arrow-alt-circle-up");
           */
            document.getElementById("mybtn").innerHTML="hide <i class='fas fa-arrow-alt-circle-up'></i> ";
         
        }
    else
    {
         document.getElementById("hide").style.display="none";
       /* document.getElementById("mybtn").innerHTML="show  ";
           arrowicon.classList.remove("fa-arrow-alt-circle-up");
           arrowicon.classList.add("fa-arrow-alt-circle-down");
        */
        document.getElementById("mybtn").innerHTML="show  <i class='fas fa-arrow-alt-circle-down'></i>";
        
    }
}
var all;
if(localStorage.getItem("myData")==null)
    {
        all=[];
    }
else
    {
        all=JSON.parse(localStorage.getItem("myData"));
    }


function adduser()
{
    var userName=document.getElementById("userName").value;
    var userPhone=document.getElementById("userPhone").value;
     var userEmail=document.getElementById("userEmail").value;  
     var userAge=document.getElementById("userAge").value;
    if(validateUserName() && validateMail() && validatePhone() && validateAge() )
        {

     var user={ Name:userName, Phone:userPhone, Email:userEmail, Age:userAge};
    all.push(user);
    display();
    
    localStorage.setItem("myData" , JSON.stringify(all));
        }
 
}


function hello()
{
   
    for(var i=0; i<clr.lenght; i++)
    {
         clr[i].value="";
    }
    
}
function deleterow(id)
{
   
    all.splice(id, 1); 
    //using stringfy to convert array to string 
    localStorage.setItem("myData",JSON.stringify(all));//set users array as string in local storage 
    display();
    clearForm();
}
 function display()
{
   var output="" ;
    for(var i=0; i< all.length; i++)
        {
            output+="<tr><td>"+all[i].Name+"</td><td>"+all[i].Phone+"</td><td>"+all[i].Email+"</td><td>"+all[i].Age+'</td><td><button onclick="deleterow(\''+i+'\')"class="btn btn-danger">Delete</button></td></tr>';
        }
    document.getElementById("tableBody").innerHTML=output;
    clearForm();
    
}
display();

/*how to clear form data after adding to table*/
function clearForm(){
    var inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++){
      inputs[i].value=""
    }
}

function validateUserName()
{
    var regex=/^[a-z]{3,10}$/;
        if(regex.test(userName.value)==false)
        {
            document.getElementById("userNameAlert").style.display="block";
            return false;
        }
    else
        {
          document.getElementById("userNameAlert").style.display="none";
            return true;
        }
}
function validatePhone()
{
    var regex=/^01(0|1|2|5)[0-9]{8}$/;
        if(regex.test(userPhone.value)==false)
        {
            document.getElementById("phoneAlert").style.display="block";
            return false;
        }
    else
        {
          document.getElementById("phoneAlert").style.display="none"; 
            return true;
        }
}
function validateAge()
{
    var regex=/^([1-6]{1}[0-9]{1}|70)$/;
        if(regex.test(userAge.value)==false)
        {
            document.getElementById("ageAlert").style.display="block";
            return false;
        }
    else
        {
          document.getElementById("ageAlert").style.display="none"; 
            return true;
        }
    
}
function validateMail()
{
    var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

        if(regex.test(userEmail.value)==false)
        {
            document.getElementById("mailAlert").style.display="block";
            return false;
        }
    else
        {
          document.getElementById("mailAlert").style.display="none"; 
            return true;
        }
}


var d,h,m,s,animate;
function init(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    clock();
    
};
function clock(){
    s++;
    if(s==60)
        {
            s=0;
            m++;
            if(m==60)
                {
                    m=0;
                    h++
                }
        }
    $('sec',s);
    $('min',m);
    $('hr',h);
    animate=setTimeout(clock,1000);
};
function $(id,val){
    if(val<10)
        {
            val='0'+val;
        }
    document.getElementById(id).innerHTML=val;
}
window.onload=init;