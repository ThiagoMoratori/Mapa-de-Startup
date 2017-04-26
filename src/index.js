import React from 'react';
import ReactDOM from 'react-dom'




var HelloWorld = React.createClass({
  render: function(){
    return (
      <form action="/pagina-processa-dados-do-form" method="post">
        <div>
            <label for="razao">Razão:</label>
            <input type="text" id="razao" />
        </div>
        <div>
            <label for="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" />
        </div>
        <div>
            <label for="localizacao">Localização:</label>
            <input type="text" id="localizacao" />
        </div>
          <div>
            <label for="site">Site:</label>
            <input type="text" id="site" />
        </div>
        <div>
            <label for="colaboradores">Número de colaboradores:</label>
            <input type="text" id="colaboradores" />
        </div>
        <div>
            <label for="data-inicio">Data de início:</label>
            <input type="text" id="data-inicio" />
        </div>
        <div>
            <label for="area-atuacao">Área de atuação:</label>
            <input type="text" id="area-atuacao" />
        </div>
        <div>
            <label for="logo">Logo Upload:</label>
            <input type="text" id="logo" />
        </div>
        <div>
            <label for="situacao">Situação de atividade:</label>
            <input type="text" id="situacao" />
        </div>
          <div>
            <label for="produto">Principal Produto:</label>
            <input type="text" id="produto" />
        </div>
        <div>
            <label for="publico">Público Alvo:</label>
            <input type="text" id="publico" />
        </div>
        <div>
            <label for="faturamento">Faturamento Anual:</label>
            <input type="text" id="faturamento" />
        </div>
        <div>
            <label for="investidores">Investidores:</label>
            <input type="text" id="investidores" />
        </div>
        <div>
            <label for="capital">Capital Primário:</label>
            <input type="text" id="capital" />
        </div>
        <div>   
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </div>
	  </form>
    )
  }
});

function MapaStartup() {
  this.checkSetup();

  // Shortcuts to DOM Elements.
  this.razao = document.getElementById('razao');
  this.cnpj = document.getElementById('cnpj');
  this.localizacao = document.getElementById('localizacao');
  this.site = document.getElementById('site');
  this.datainicio = document.getElementById('data-inicio');
  this.areaatuacao = document.getElementById('area-atuacao');
  this.logo = document.getElementById('logo');
  this.situacao = document.getElementById('situacao');
  this.produto = document.getElementById('produto');
  this.publico = document.getElementById('publico');
  this.faturamento = document.getElementById('faturamento');
  this.investidores = document.getElementById('investidores');
  this.capital = document.getElementById('capital');

  // Saves message on form submit.
  this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
  this.signOutButton.addEventListener('click', this.signOut.bind(this));
  this.signInButton.addEventListener('click', this.signIn.bind(this));

  // Toggle for the button.
  var buttonTogglingHandler = this.toggleButton.bind(this);
  this.messageInput.addEventListener('keyup', buttonTogglingHandler);
  this.messageInput.addEventListener('change', buttonTogglingHandler);

  // Events for image upload.
  this.submitImageButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.mediaCapture.click();
  }.bind(this));
  this.mediaCapture.addEventListener('change', this.saveImageMessage.bind(this));

  this.initFirebase();
}


ReactDOM.render(<HelloWorld />, document.getElementById('root'));
