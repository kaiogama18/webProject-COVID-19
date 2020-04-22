import React from 'react';

import { Cards, Charjs, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import coronaImage from './images/image.png'
// import './App.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata })

    console.log({ data: fetchData })
  }

  handleCountryChange = async (country) => {
    const fetcheddata = await fetchData(country);


    this.setState({ data: fetcheddata, country: country })



  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />

        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charjs data={data} country={country} />

      </div>
    )
  }
}

export default App;
