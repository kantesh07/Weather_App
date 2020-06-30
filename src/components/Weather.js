import React, {Component} from 'react'

class Weather extends Component{
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>location: {this.props.city}, {this.props.country}</p>}
               {this.props.temprature && <p> temprature: {this.props.temprature}</p>}
               {this.props.feels_like && <p>feels like: {this.props.feels_like}</p>}
              {this.props.humidity &&  <p>humidity: {this.props.humidity}</p>}
               {this.props.pressure && <p>pressure: {this.props.pressure}</p>}
               {this.props.wind && <p>wind speed: {this.props.wind}</p>}
               {this.props.description && <p>decription: {this.props.description}</p>}
               {this.props.error && <p>error: {this.props.error}</p>}
            </div>
        )
    }
    
} 

export default Weather