import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather'
import Form from './components/Form'
import Title from './components/Title'


const API_KEY = '4e4a66ca2607988ca5ad3cafe8e2262b';

class App extends Component {

  state = {
    temprature: undefined,
    feels_like: undefined,
    humidity: undefined,
    pressure: undefined,
    city: undefined,
    country:undefined,
    wind: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}id=524901&APPID=${API_KEY}`)
    const data = await api_call.json()
   if(city && country){
    console.log(data) 
    this.setState(
      {
        temprature:data.main.temp,
        feels_like:data.main.feels_like,
        humidity: data.main.humidity,
        pressure:data.main.pressure,
        wind:data.wind.speed,
        country:data.sys.country,
        city:data.name,
        description:data.weather[0].description,
        error:""
      }
    )
   }
   else{
    this.setState({
        temprature:undefined,
        feels_like:undefined,
        humidity:undefined,
        pressure:undefined,
        wind:undefined,
        country:undefined,
        city:undefined,
        description:undefined,
        error:"enter a valid city and country"
      })
  }
}

  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                <Title/>
                </div>

                <div className='col-xs-7 form-container'>
                <Form getWeather={this.getWeather}/>
         <Weather temprature={this.state.temprature}
                  feels_like={this.state.feels_like}
                  humidity={this.state.humidity}
                  pressure={this.state.pressure}
                  wind={this.state.wind}
                  country={this.state.country}
                  city={this.state.city}
                  description={this.state.description}
                  error={this.state.error}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
        