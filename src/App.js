import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class KisilerSatir extends React.Component {
  render() {
	  
	  var letterStyle = {
             
	  backgroundColor: this.props.kisi.renk 
       };
	  
	 
    var isim =  this.props.kisi.isim
     // <span style={{color: 'red'}}>
      //  {this.props.product.name}
     // </span>;
    return (
	
      <tr  style={letterStyle}>
        
        <td>{this.props.kisi.isim}</td>
		<td>{this.props.kisi.tanim}</td>
		<td>{this.props.kisi.dahili}</td>
		<td>{this.props.kisi.cep}</td>
		<td>{this.props.kisi.santral}</td>
		
		
      </tr>
	 
    );
  }
}

class KisiTablosu extends React.Component {
  render() {
    var satirlar = [];
    
    this.props.kisiler.forEach((kisi) => {
      if (
	  kisi.isim.replace('I','ı').replace('İ','i').toLocaleLowerCase().indexOf(this.props.filterText) === -1  && kisi.dahili.indexOf(this.props.filterText) === -1 && kisi.tanim.replace('I','ı').replace('İ','i').toLocaleLowerCase().indexOf(this.props.filterText) === -1 
	 
	  
	  ) {
        return;
      }
      
      satirlar.push(<KisilerSatir kisi={kisi} key={kisi.isim} />);
	  
     
      
    });
    return (
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Tanım</th>
			<th>Dahili</th>
			<th>Cep</th>
			<th>Santral</th>
			
          </tr>
        </thead>
        <tbody>{satirlar}</tbody>
      </table>
    );
  }
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Ara..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
   
    
	</form>
    );
  }
}


class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <KisiTablosu
          kisiler={this.props.kisiler}
          filterText={this.state.filterText}
          
        />
      </div>
    );
  }
}






export default App;
