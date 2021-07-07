fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))


console.log("arif");

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        //css class to countryDiv
        countryDiv.className = "country"

        //div elements
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = country.capital;

        // //div
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        //shortcut version


        const countryInfo = ` 
        <h3 class="country-name">${country.name} </h3>
        <p>${country.capital} </p>

        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)







        
    }
}