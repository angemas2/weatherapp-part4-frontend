// Insert your code here

document.querySelector("#register").addEventListener("click", function () {
  let email = document.querySelector("#registerEmail").value;
  let password = document.querySelector("#registerPassword").value;

  fetch("https://weatherapp-part4-backend-dusky.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  let email = document.querySelector("#connectionEmail").value;
  let password = document.querySelector("#connectionPassword").value;

  fetch("https://weatherapp-part4-backend-dusky.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
