import React from 'react';

import { Cards, Chart, CountryPicker, CountryCards } from './components';
import styles from './App.module.css';
import GitHubButton from 'react-github-btn'

import { fetchData, fetchCountryData } from './api'

import logo from './images/logo.png'
import coronaVirus from './images/corona-virus.svg'

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

  reloadPage() {
    window.location.reload();
    return false;
  }

  render() {
    const { data, country, countryData} = this.state

    return (
      <div className={styles.container}>
        <div className={styles.githubButton}>
          <GitHubButton 
            href="https://github.com/hasantezcan/covid-19-report" 
            data-icon="octicon-star" 
            data-size="large" 
            data-show-count="true" 
            aria-label="Star hasantezcan/covid-19-report on GitHub">Star
          </GitHubButton>
        </div>

        <img className={styles.coronaVirus} src={coronaVirus} alt=""/>
        <img className={styles.logo} src={logo} alt="logo" onClick={this.reloadPage} />
        <CountryPicker className={styles.logo} handleCountryChange={this.handleCountryChange} />
        <CountryCards countryData={countryData} country={country} />
        <Cards data={data}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
