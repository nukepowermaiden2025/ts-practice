
//Create a basic get and do some stuff with that
import axios from 'axios'

type Medicine = {
    name: string
    rxnorm: string
    [key: string] : string | number | undefined

}

const DOMAIN = 'https://rxnav.nlm.nih.gov';

(async () => {
    console.log('This is a cookie here')
    const url = new URL(`${DOMAIN}`)
    const med = 'azithromycin'
    url.pathname = '/REST/drugs.json'
    url.search = `?name=${med}`
    

    const {data} = await axios.request({ url: url.href, headers:{'Content-Type': 'application/json'} })
    console.log(JSON.stringify(data, null, 2))
})();