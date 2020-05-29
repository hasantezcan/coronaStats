- ## What is the differences between `.js` and `.jsx` ? 

    https://www.quora.com/In-ReactJS-what-is-the-difference-between-JS-and-JSX-for-a-filename?share=1

- ## What is the `CSS modules` ?   

    https://css-tricks.com/css-modules-part-1-need/     
    https://www.sitepoint.com/understanding-css-modules-methodology/
    https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

- ## New technique to import components.

    Import to component folder inside of `app.js`
    ```bash
        import { Cards, Charts, CountryPicker } from './components';
    ```

    And it's not work right now you have to create a `index.js` file inside of componenets foler.

    And then you have to export all componentes will you use in app.js 

    ```bash
        export { default as Cards } from './Cards/Cards'
        export { default as Chart } from './Chart/Chart'
        export { default as CountryPicker } from './CountryPicker/CountryPicker'
    ```

    thats all. 

- If you import a index file one of the in the folder like `api` you dont type the `index` after the folder name the js look firstly the index.js allready

    `import { fetchData } from './api'` 

    > fetchData the method existing inside of `./api/index.js`


- Spacial notes about asynchronous functions especcialy `componentDidMount`

    we type the async keyword right before the componentDidMount this is special stuvation becouse generally types befera the parantesies.   

    ```javascript
        async componentDidMount() {
            const data = await fetchData();

            console.log(data);
        }
    ```

- ## Destructing tip

    If the all variable names is simillar. Like this 

    ```js
        import axios from 'axios';

        const url = "https://covid19.mathdro.id/api";

        export const fetchData = async () => {
            try {
                const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
                
                const modifiedData = {
                confirmed: confirmed,
                recovered: recovered,
                deaths: deaths,
                lastUpdate: lastUpdate
                };
                
                return modifiedData;
            } catch (error) {
                
            }
        }
    ```

    You can delete dublicate variable names. Because js will understand who is who.

    ```js
        import axios from 'axios';

        const url = "https://covid19.mathdro.id/api";

        export const fetchData = async () => {
            try {
                const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
                
                const modifiedData = { confirmed, recovered, deaths, lastUpdate };
                
                return modifiedData;
            } catch (error) {
                
            }
        }
    ```
        
    this syntax is easier to understand.

    And lets make a one touch to perfect version.

    ```js
        import axios from 'axios';

        const url = "https://covid19.mathdro.id/api";

        export const fetchData = async () => {
            try {
                const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
                
                return { confirmed, recovered, deaths, lastUpdate };
            } catch (error) {
                
            }
        }
    ```

- ## Material-UI
    https://material-ui.com/

- ## import cx from 'classnames';

    Used for multiple class fetching

    ```js
        import cx from 'classnames';
        import styles from "./Cards.module.css";

        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
    ```

- ## state usage functional vs class base components

    ```js
        // functional component
        const [dailyData, setDailyData] = useState({});

        // class base component
        state = {
            dailyData: {}
        }
    ```

- ## add basic tooltip

    ```html
        <p title="tooltip text"> I am the thing </p>
    ```

    [soruce](http://www.javascriptkit.com/howto/toolmsg.shtml)
    [advence tooltip](http://jsfiddle.net/8nnwytbL/)