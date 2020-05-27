import React from 'react';

import { Cards, Chart, CountryPicker, CountryCards } from './components';
import styles from './App.module.css';
import { fetchData, fetchCountryData } from './api'

import logo from './images/logo.png'

class App extends React.Component {

  state = {
    data: {},
    country: "",
    countryData: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const fetchedCountryData = await fetchCountryData(country);

    this.setState({ data: fetchedData, country: country, countryData: fetchedCountryData});
  }

  render() {
    const { data, country, countryData} = this.state

    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <CountryPicker className={styles.logo} handleCountryChange={this.handleCountryChange} />
        <CountryCards countryData={countryData} country={country} />
        <Cards data={data}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
