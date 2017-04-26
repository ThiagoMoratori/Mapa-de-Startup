import React from 'react';
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBr9wGS-JzixSHSMJpdVXGz-DyUPjlNdNg",
  authDomain: "mapa-de-startup.firebaseapp.com",
  databaseURL: "https://mapa-de-startup.firebaseio.com",
  projectId: "mapa-de-startup",
  storageBucket: "mapa-de-startup.appspot.com",
  messagingSenderId: "562968674625"
};
firebase.initializeApp(config);

class Main extends React.Component{
  mapaStartup() {
    
      // Shortcuts to DOM Elements.
      var razao = document.getElementById('razao');
      var cnpj = document.getElementById('cnpj');
      var localizacao = document.getElementById('localizacao');
      var site = document.getElementById('site');
      var datainicio = document.getElementById('data-inicio');
      var areaatuacao = document.getElementById('area-atuacao');
      var logo = document.getElementById('logo');
      var situacao = document.getElementById('situacao');
      var produto = document.getElementById('produto');
      var publico = document.getElementById('publico');
      var faturamento = document.getElementById('faturamento');
      var investidores = document.getElementById('investidores');
      var capital = document.getElementById('capital');

     

      firebase.database().ref('company/').push({
        razao:  razao.value,
        cnpj:  cnpj.value,
        localizacao:  localizacao.value,
        site:  site.value,
        datainicio:  datainicio.value,
        areaatuacao:  areaatuacao.value,
        logo:  logo.value,
        situacao:  situacao.value,
        produto:  produto.value,
        publico:  publico.value,
        faturamento:  faturamento.value,
        investidores:  investidores.value,
        capital:  capital.value,
      });
      
    
  }

  render(){
    return (
      <div>
        <div>
            <label htmlFor="razao">Razão:</label>
            <input type="text" id="razao" />
        </div>
        <div>
            <label htmlFor="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" />
        </div>
        <div>
            <label htmlFor="localizacao">Localização:</label>
            <input type="text" id="localizacao" />
        </div>
          <div>
            <label htmlFor="site">Site:</label>
            <input type="text" id="site" />
        </div>
        <div>
            <label htmlFor="colaboradores">Número de colaboradores:</label>
            <input type="text" id="colaboradores" />
        </div>
        <div>
            <label htmlFor="data-inicio">Data de início:</label>
            <input type="text" id="data-inicio" />
        </div>
        <div>
            <label htmlFor="area-atuacao">Área de atuação:</label>
            <input type="text" id="area-atuacao" />
        </div>
        <div>
            <label htmlFor="logo">Logo Upload:</label>
            <input type="text" id="logo" />
        </div>
        <div>
            <label htmlFor="situacao">Situação de atividade:</label>
            <input type="text" id="situacao" />
        </div>
          <div>
            <label htmlFor="produto">Principal Produto:</label>
            <input type="text" id="produto" />
        </div>
        <div>
            <label htmlFor="publico">Público Alvo:</label>
            <input type="text" id="publico" />
        </div>
        <div>
            <label htmlFor="faturamento">Faturamento Anual:</label>
            <input type="text" id="faturamento" />
        </div>
        <div>
            <label htmlFor="investidores">Investidores:</label>
            <input type="text" id="investidores" />
        </div>
        <div>
            <label htmlFor="capital">Capital Primário:</label>
            <input type="text" id="capital" />
        </div>
        <div>   
            <button onClick={this.mapaStartup.bind()}>Submit</button>
        </div>
	  </div>
    )
  }
  
}



ReactDOM.render(<Main />, document.getElementById('root'));
