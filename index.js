function validateForm(){
  const x = document.forms["myform"]["name"].value;
  const y = document.forms["myform"]["email"].value;
  const z = document.forms["myform"]["message"].value;
  if( x === "" || y === "" || z === ""){
    alert("all filed are required !");
    return ;
  }

}
function myFunction(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}


function sendMail(event) {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_8o3196k";
    const templateID = "template_slzwqmn";
     console.log(params)
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log("colud not sent email " , err));
    
  }





  