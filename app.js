import api from './helper/helper';
import getUsefulContents from './helper/file';

console.log(api.foo);

let teste = 'Hello World!';
console.log(teste);

const func1 = x => x * x; 
 
const func2 = (x, y) => { return x + y; }; 

const formatNumber = (value, params, locale) => {
    params = params || {};
    const formatted = new Intl.NumberFormat(locale,params);
    let output = '';

    try {
        if(params.valueInCents === 'true') {
          value = parseInt(value) / 100;
        }
        output = formatted.format(value);
        output = output.replace(/^([^0-9]+)/gm, '$1 ');
      } catch (e) {
        logger.log('ERROR', 'error formatNumber helper: ', e, ' / val: ', value);
      }
      return output;
}

/* obtendo data da API themoviedb */
const apiURL = 'https://api.themoviedb.org/3/movie/550?api_key=e2c70d159f475c3cf6bd625fd21f2312';
getUsefulContents(apiURL, data => { 
  let html = "";
  Object.keys(data).forEach(key => {    
    Object.keys(data.production_companies).forEach(key => {   
      html += `
        <div>
            <img src='${data.production_companies[key].logo_path}'/>
            <div>
                <p>${data.production_companies[key].name}</p>
            </div>
        </div>`;
    });    
  });
  //document.getElementById("list").innerHTML = html;  
});