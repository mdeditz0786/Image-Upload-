const image_input = document.querySelector("#image_input");
var uploaded_image = "";


image_input.addEventListener("change", function(){
    var reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})

const triggers = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];
  const basicInstances = [
    'alert-primary',
    'alert-secondary',
    'alert-success',
    'alert-danger',
    'alert-warning',
    'alert-info',
    'alert-light',
    'alert-dark',
  ];
  
  triggers.forEach((trigger, index) => {
    let basicInstance = mdb.Alert.getInstance(document.getElementById(basicInstances[index]));
    document.getElementById(trigger).addEventListener('click', () => {
      basicInstance.show();
    });
  });