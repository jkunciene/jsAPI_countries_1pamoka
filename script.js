const konteineris = document.getElementById('vieta');
const paieska = document.getElementById('zodis');
const mygtukas = document.getElementById('mygtukas');
mygtukas.addEventListener('click', ieskok);

const fetchSalys = async () => {
  try {
    const pazadas = await fetch("https://restcountries.eu/rest/v2/all");
    //console.log(pazadas);
    const salys = await pazadas.json();
    //console.log(salys);
      salys.forEach(salis => {
        console.log(salis);

        const vienaSalis = document.createElement('div');
        const nuotrauka = document.createElement('img');
        const pavadinimas = document.createElement('h3');

        vienaSalis.className = "vienasalis";

        nuotrauka.src = salis.flag;
        pavadinimas.innerText = salis.name;

        konteineris.appendChild(vienaSalis);
        vienaSalis.appendChild(nuotrauka);
        vienaSalis.appendChild(pavadinimas);

        const sarasas = document.createElement('ul');
        vienaSalis.appendChild(sarasas);

        const kalbos = salis.languages;        
          console.log(kalbos)
          for(let i=0; i< kalbos.length; i++){
            console.log(kalbos[i].name);
            const kalba = document.createElement('li');
            kalba.innerText = kalbos[i].name;
            sarasas.appendChild(kalba);
          }
        
      })

  } catch(error){
    console.log(error)
  }
}
fetchSalys();
async function ieskok() {
  try{
    const ieskomaFraze = paieska.value;
    console.log(ieskomaFraze);
    let salis = await fetch(`https://restcountries.eu/rest/v2/name/${ieskomaFraze}`);
    let atsakymas = await salis.json();
    console.log(atsakymas);

    const kur = document.getElementById('paieska');
    const divas = document.createElement('div');
    const saliesPavadinimas = document.createElement('p')
    saliesPavadinimas.innerText = atsakymas[0].name;  
    kur.appendChild(divas);
    divas.appendChild(saliesPavadinimas);

  } catch(err) {
    console.log(err)
  }
}