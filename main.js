
// FUNCTIONS IN TEMPLATE LITERALS

const templateStrings = document.querySelector('.templateStrings');

const cancers_women = ["breast", "ovarian", "cervical", "uterine", "endometrial"];
const cancers_men = ["prostate", "testicular"];
//copy pasted. edit to make my own words or just not so ... copy pasted
const cancer={
  name: "breast cancer",
  symptoms: ["Nipple tenderness or a lump or thickening in or near the breast or underarm area", "A change in the skin texture or an enlargement of pores in the skin of the breast  (some describe this as similar to an orange peel’s texture)", "A lump in the breast", "Any unexplained change in the size or shape of the breast", 
"Dimpling anywhere on the breast", 
"Unexplained swelling of the breast",
"Unexplained shrinkage of the breast",  
"Recent asymmetry of the breasts", 
"Nipple that is turned slightly inward or inverted", "Skin of the breast, areola, or nipple that becomes scaly, red, or swollen or may have ridges or pitting resembling the skin of an orange"]
};

function renderSymptomsList(symptoms){
  return `
    <ul>
      ${symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
    </ul>
  `};

const markup_bc_list = `
    <h3>Functions in template strings</h3>
    <h4>${cancer.name}</h4>
    ${renderSymptomsList(cancer.symptoms)}
`;
const cancerDiv = document.createElement('div');
cancerDiv.className = "exampleDiv";
cancerDiv.innerHTML = markup_bc_list;

templateStrings.append(cancerDiv);


// TAGGED FUNCTIONS


const metricTerms = {
  kiss: "kilo-",
  her: "hecto-",
  daily: "deca-",
  because: "-base",
  divorce: "deci-",
  costs: "centi-",
  money: "milli-"
};

function addMnemonic (strings, ...values){
  const hints = values.map(value=>{
    if(metricTerms[value]){
      return `<span class="metricPrefix" title="${metricTerms[value]}">${value}</span>`
    }
    return value;
  });

  return strings.reduce((sentence, string, i)=>{
    return `${sentence}${string}${hints[i] || ''}`;
  }, '');
}


const mnemTypes = ["expression", "music", "name", "model", "ode/rhyme", "spelling", "image", "note", "connections"];
const theme = "metric system";
const metricSentence = addMnemonic`One way to learn the most common prefixes in the ${theme} is to use the ${mnemTypes[0]} mnemonic device.
Just remember to
 ${'kiss'} ${'her'} ${'daily'} ${'because'} ${'divorce'} ${'costs'} ${'money'}!`;



const markup_dem_mnem = `
    <h3>Tagged templates</h3>
    <h4>Prefixes of the ${theme}:</h4>
    ${metricSentence}
`;
const demonDiv = document.createElement('div');
demonDiv.className = "exampleDiv";
demonDiv.innerHTML = markup_dem_mnem;

templateStrings.append(demonDiv);

/*element flashcarcs/quiz*/


function Elem(name, number, mass, trivia){
  this.name = name;
  this.number = number;
  this.mass = mass;
  this.trivia = trivia;
}
let elementCards = [];
/* http://small-tiyfe.herokuapp.com/collections/katyelements */
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', function(e){
  e.preventDefault();
  //get value of fields
 
  const name = document.getElementById('elemEntry').value.trim();
  const number = document.getElementById('atomNoEntry').value.trim();
  const mass = document.getElementById('atomMassEntry').value.trim();
  const trivia = document.getElementById('trivia').value.trim();
  
  let elementCard = new Elem(name, number, mass, trivia);
  console.log(elementCard);
  elementCards.push(elementCard);
  console.log(elementCards);
  document.querySelectorAll('.inputFields').value = '';
  //capture the entry, create an object and push to an array
});



const foods = ['meats', 'fruits', 'nuts', 'vegetables', 'dairy'];
const foodMarkup = `
<ul>
  ${foods.map(food => `<li>${food}</li>`).join('')}
</ul>
`
document.getElementById('food-forofloop').innerHTML = foodMarkup;
console.log(foodMarkup);
for (const food of foods){
  console.log(food);

}
const fruits = ['apple', 'pear', 'orange', 'strawberry'];
for (const [i, fruit] of fruits.entries()){
  console.log(`${fruit} is the ${i} item`);
}

const paras = document.querySelectorAll('.paras');
for (const para of paras){
  para.addEventListener('click', function(){
    console.log(this.textContent);
  })
}




