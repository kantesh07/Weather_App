import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.props.getWeather}>
                   <label>City:</label><br></br>
                   <input type='text' name="city" placeholder='city'/>
                   <br></br>
                   <label>Country:</label><br></br>
                   <input type='text' name="country" placeholder='country'/>
                   <br></br>
                   <button>get weather</button>
               </form>
            </div>
        )
    }
}

export default Form