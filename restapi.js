const loadcountryAPI = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data))

}
l

const displaycoutries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map (country => getcountry(country))
   
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');

}
const getcountry = (country) =>{
    console.log(country);
    return 
    <div class='country.div'>

    <h2>${country.name.common}</h2>
    <img src = "${country.flag.png}"></img>
         <h4 >region ${country.region}</h4>  
        <h5>captial ${country.captial}</h5>
        <h6>population ${country.population}</h6>




    </div>
}
loadcountryAPI()
