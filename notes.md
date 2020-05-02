- What is the differences between `.js` and `.jsx` ? 

    https://www.quora.com/In-ReactJS-what-is-the-difference-between-JS-and-JSX-for-a-filename?share=1

- What is the `CSS modules` ?   

    https://css-tricks.com/css-modules-part-1-need/     
    https://www.sitepoint.com/understanding-css-modules-methodology/
    https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

- New technique to import components.

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