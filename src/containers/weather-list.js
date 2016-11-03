import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';



class WeatherList extends Component {
	renderWeather(city) {
		const name = city.city.name
		const temps = city.list.map(weather => weather.main.temp);
		const humidities = city.list.map(weather => weather.main.humidity);
		const pressures = city.list.map(weather => weather.main.pressure);
    const { lat, lon } = city.city.coord;

		return (
			<tr key={ name }>
        <td><GoogleMap lat={lat} lon={lon} /></td>
			  <td><Chart data={temps} color="red" unit="K"/></td>
			  <td><Chart data={pressures} color="green" unit="hPa"/></td>
			  <td><Chart data={humidities} color="black" unit="%"/></td>
			</tr>
		);

	}

	render() {
		return (
      <table className="table table-hover">
	      <thead>
	        <tr >
	          <th className="tableHeader">City</th>
	          <th className="tableHeader">Temperature (K)</th>
	          <th className="tableHeader">Pressure (hPa)</th>
	          <th className="tableHeader">Humidity (%)</th>
	        </tr>
	      </thead>
	      <tbody>
          { this.props.weather.map(this.renderWeather)}
	      </tbody>
      </table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);