export class Register {

  btnEvent(){
    const btnCadastro = document.querySelector(".btn-register");

    btnCadastro.addEventListener('click', this.fecthUser);
  }

  fecthUser(){
    const data = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    fetch("http://localhost:3333/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
  }

  bind(){
    this.fecthUser = this.fecthUser.bind(this);
  }

  init(){
    this.btnEvent()
  }
}