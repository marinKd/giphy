import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchField from './components/SearchField'
import request from 'superagent';
import GifList from './components/GifList'
//7X5CFD0oV8ylPWfiLtsUkcFNuBy50raw api key
//https://api.giphy.com/v1/gifs/trending?api_key=7X5CFD0oV8ylPWfiLtsUkcFNuBy50raw&limit=5&rating=g
//https://api.giphy.com/v1/gifs/search?api_key=7X5CFD0oV8ylPWfiLtsUkcFNuBy50raw&q=KEYWORD___HERE&limit=5&offset=0&rating=g&lang=en
class App extends React.Component{
  constructor(){
    super();
    this.state={
      gifs:[]
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }


  handleTermChange(term){
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=7X5CFD0oV8ylPWfiLtsUkcFNuBy50raw`;
    request.get(url, (err, res) => {
      this.setState({gifs: res.body.data})
    });
  }

  render(){
    return(
      <div>
        <SearchField onTermChange={term => this.handleTermChange(term)}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

