import React, { useState, useEffect  }from "react";
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI();
  }, [setFetchedCountries])

  // console.log(fetchedCountries);
  
  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
        <option value=""> Global </option>
        {fetchedCountries.map((country, index) => 
          <option key={index} value={country.iso2}> {country.name} </option>
        )}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
