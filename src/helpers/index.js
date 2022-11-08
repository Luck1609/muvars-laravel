export default class Helper {
  baseUrl = 'https://api.rudragh.com';

  // Capitalize first letter
  ucwords = (info) => {
    if (info) {
      let splitted = info.split('');


      let first = splitted[0].toUpperCase();
      let end = splitted.slice(1);

      return first.concat(end.toString().replaceAll(',', ''))
    }
  }

  // Capitalize first letter
  CapitalizeEachWord = (info, param) => {
    if (info) {
      let splitted = info.split(param);
      let words = ''

      splitted.forEach(spl => {
        let word = `${spl.charAt(0).toUpperCase()}${spl.substring(1)} `;

        words = words.concat(word);
      });
      

      return words;
    }
  }

  isJsonString = (string) => {
    try {
      // console.log('type of json string', typeof(string), ))
      if (!isNaN(parseInt(string))) throw new Error('not a string')
      JSON.parse(string);
      return true;
    } catch (e) {
      return false;
    }
  }

  filterValues = ({ options, param }) => {
    let filtered = [];

    options.map(option => filtered = [...filtered, { label: param.label === 'string' ? option[param.label] : param.label(option), value: option[param.value] }])
    return filtered
  }
}


export const beautifyUrl = (url) => {
  let newUrl = url.split('-').join('_')
  
  return newUrl.split(' ').join('-')
}