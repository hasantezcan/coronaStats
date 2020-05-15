import React, { useState, useEffect  }from "react";
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI();
  }, [setFetchedCountries])

  console.log(fetchedCountries);
  

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global"> Global </option>
        {fetchedCountries.map((country, index) => 
          <option key={index} value={country}> {country} </option>
        )}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
