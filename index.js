// https://eva.pingutil.com/

function verifyEmail() {
  let e = document.getElementById('email?')
  let email = e.value
  console.log(email)

  // ;) https://es.javascript.info/xmlhttprequest

  let xhr = new XMLHttpRequest();
  let url = `https://emailvalidation.abstractapi.com/v1/?api_key=4b5c40363aa54188b38d3e81d4255972&email=${email}`;

  xhr.open('GET', url, [true]);
  //xhr.responseType='json';
  xhr.send();

  xhr.onload = function() {
    if (xhr.status != 200) { // error HTTP?
      // maneja el error
      alert( 'Error: ' + xhr.status);
      return;
    }

    // obtiene la respuesta de xhr.response
  };

  xhr.onprogress = function(event) {
    // reporta progreso
    let data = JSON.parse(xhr.responseText);
    let confidence = data.quality_score;
    let format = (data.is_valid_format["text"])

  

    let disposability = (data.is_disposable_email["text"])


    //alert(`Loaded ${event.loaded} of ${event.total}`);

    let resultado = `
    <div class="result bg-dark text-info text-center"></div>

    <h3>The email you just entered: ${email}</h3>
    <br>
    <h3>Confidence & Deliverability (Decimal score between 0,01 and 0,99)</h3>
    <h3>Zero equals to null mail, while 0.90 or higher is a valid mail address:</h3>
    <br>
    <h3>${confidence}</h3>
    <br>
    <br>
    <h3>Is it a valid format?</h3>
    <br>
    <h3>${format}</h3>
    <br>
    <br>
    <h3>Is it disponsable email?:</h3>
    <br>
    <h3>${disposability}</h3>
    </div>

    `;

   document.getElementById('result').innerHTML = resultado;
  };

  xhr.onerror = function() {
    // manejo de un error no HTTP (ej. red caída)



};
};

/*
let xhr = new XMLHttpRequest();
let c = "albertoelpulques@gmail.com"
let url = `Zhttps://emailvalidation.abstractapi.com/v1/?api_key=4b5c40363aa54188b38d3e81d4255972&email=${c}`;
//let url = "Zhttps://emailvalidation.abstractapi.com/v1/?api_key=4b5c40363aa54188b38d3e81d4255972&email=jossealbertoricardo@gmail.com";

xhr.open('GET', url, [true]);
//xhr.responseType='json';
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { // error HTTP?
    // maneja el error
    alert( 'Error: ' + xhr.status);
    return;
  }

  // obtiene la respuesta de xhr.response
};

xhr.onprogress = function(event) {
  // reporta progreso
  let data = JSON.parse(xhr.responseText);
  console.log(data)
  console.log(data.email)
  console.log("Confidence & Deliverability (Decimal score between 0,01 and 0,99)")
  console.log(data.quality_score)
  console.log("Is valid format?")
  console.log(data.is_valid_format["text"])
  console.log("Is disposable email?")
  console.log(data.is_disposable_email["text"])
  alert(`Loaded ${event.loaded} of ${event.total}`);
};

xhr.onerror = function() {
  // manejo de un error no HTTP (ej. red caída)
};

*/