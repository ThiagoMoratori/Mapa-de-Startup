import React from 'react';
import ReactDOM from 'react-dom'
import firebase from 'firebase'


var Main = React.createClass({
  mapaStartup: function() {
    
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

      firebase.database().ref('company/' +  cnpj.value).set({
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
      })
    
  },
  render: function(){
    return (
      <form>
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
            <button class="btn btn-lg btn-primary btn-block" onClick={this.mapaStartup} type="submit">Sign in</button>
        </div>
	  </form>
    )
  }
  
});



ReactDOM.render(<Main />, document.getElementById('root'));
