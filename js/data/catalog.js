export const portions={standard:{id:'standard',label:'Standard',n:1,d:1},light:{id:'light',label:'Light',n:3,d:4},generous:{id:'generous',label:'Generous',n:3,d:2}};
export const windows={breakfast:'08:00–10:00',lunch:'12:00–14:00',snacks:'16:00–18:00',dinner:'19:00–21:00'};
const rows=[
['M01','Vegetable Poha','breakfast',250,129,340,8,57,9,5,'Rice flakes|peas|onion|peanut|lemon|mustard seed|oil|spices|salt','Peanut',1],
['M02','Moong Dal Chilla with Mint Chutney','breakfast',240,169,330,18,43,10,8,'Moong dal|onion|coriander|mint|lemon|oil|spices|salt','',1],
['M03','Idli, Sambar & Coconut Chutney','breakfast',320,149,390,12,66,9,7,'Rice|urad dal|toor dal|vegetables|coconut|tamarind|oil|spices|salt','',1],
['M04','Paneer Bhurji & Whole-Wheat Roti','breakfast',300,219,510,27,48,23,7,'Paneer|whole-wheat flour|onion|tomato|oil|spices|salt','Milk|Wheat/gluten',0],
['M05','Pav Bhaji','lunch|dinner',350,229,540,14,77,20,10,'Wheat pav|potato|peas|cauliflower|tomato|butter|oil|spices|salt','Wheat/gluten|Milk',0],
['M06','Tawa Pulao','lunch|dinner',350,199,480,12,78,13,8,'Rice|peas|carrot|beans|capsicum|tomato|oil|spices|salt','',1],
['M07','Paneer Makhani with Rice','lunch|dinner',360,249,640,26,70,28,6,'Paneer|rice|tomato|cashew|cream|butter|spices|salt','Milk|Cashew/tree nut',0],
['M08','High Protein Khichdi','lunch|dinner',350,219,470,24,64,13,11,'Rice|moong dal|soya granules|vegetables|oil|spices|salt','Soy',1],
['M09','Rajma Rice Bowl','lunch|dinner',350,209,500,18,83,10,13,'Kidney beans|rice|onion|tomato|oil|spices|salt','',1],
['M10','Chole & Jeera Rice','lunch|dinner',350,209,530,19,85,13,14,'Chickpeas|rice|onion|tomato|cumin|oil|spices|salt','',1],
['M11','Tofu Millet Bowl','lunch|dinner',350,259,490,26,60,17,10,'Tofu|millet|chickpeas|carrot|greens|lemon|oil|spices|salt','Soy',1],
['M12','Roasted Chana Chaat','snacks',180,129,270,13,42,6,10,'Roasted chickpeas|onion|tomato|cucumber|lemon|spices|salt','',1],
['M13','Hung Curd & Fruit Cup','snacks',220,159,250,17,31,7,3,'Hung curd|banana|apple|pomegranate','Milk',0],
['M14','Sweet Potato Chaat','snacks',220,139,260,5,52,5,7,'Sweet potato|onion|coriander|lemon|oil|spices|salt','',1],
['M15','Margherita Protein Pizza','lunch|dinner',300,279,650,30,80,24,8,'Wheat flour|soya flour|mozzarella|tomato|basil|olive oil|yeast|salt','Wheat/gluten|Soy|Milk',0],
['M16','Soya Keema & Rotis','lunch|dinner',330,229,520,32,63,15,13,'Soya granules|whole-wheat flour|peas|onion|tomato|oil|spices|salt','Soy|Wheat/gluten',1],
['M17','Dal Tadka & Brown Rice','lunch|dinner',350,199,480,19,77,11,11,'Toor dal|brown rice|onion|tomato|garlic|oil|spices|salt','',1],
['M18','Palak Paneer & Rotis','lunch|dinner',330,249,550,29,49,27,9,'Paneer|spinach|whole-wheat flour|onion|tomato|oil|spices|salt','Milk|Wheat/gluten',0],
['M19','Vegetable Dalia','breakfast',300,149,340,11,58,8,9,'Broken wheat|peas|carrot|beans|onion|oil|spices|salt','Wheat/gluten',1],
['M20','Sesame Tofu Wrap','lunch|dinner',280,239,470,25,54,17,9,'Tofu|whole-wheat flour|cabbage|carrot|sesame|lemon|oil|spices|salt','Soy|Wheat/gluten|Sesame',1]
];
export const meals=Object.fromEntries(rows.map((r,i)=>{const [id,name,ws,grams,price,kcal,p,c,f,fi,ingredients,allergens,vegan]=r;return [id,{id,name,mealWindows:ws.split('|'),standardServingGrams:grams,basePricePaise:price*100,nutritionPerStandard:{kcal,p,c,f,fi},ingredientIds:ingredients.split('|').map(x=>x.toLowerCase()),declaredAllergenIds:allergens?allergens.split('|').map(x=>x.toLowerCase()):[],vegan:!!vegan,portionIds:['M07','M08','M09','M10','M11','M17'].includes(id)?['standard','light','generous']:['standard'],featuredRank:i+1,crossContactStatus:'unknown',description:`A familiar ${ws.includes('breakfast')?'morning':'everyday'} dish with ${ingredients.split('|').slice(0,3).join(', ').toLowerCase()}.`,preparationNotes:'Prepared from the listed demo ingredients; final recipes and preparation need validation.'}]}));
export const mealList=Object.values(meals);
export const allergenChoices=['milk','wheat/gluten','soy','peanut','cashew/tree nut','sesame'];
export const ingredientAliases={milk:['milk','paneer','curd','hung curd','butter','cream','mozzarella'],soy:['soy','soya granules','soya flour','tofu'],'wheat/gluten':['wheat/gluten','wheat pav','whole-wheat flour','wheat flour','broken wheat'],peanut:['peanut'],sesame:['sesame'],'cashew/tree nut':['cashew/tree nut','cashew']};
export function available(meal,date,slot){return !!meal&&meal.mealWindows.includes(slot)&&meal.id!=='M15'&&!(meal.id==='M18'&&date==='2026-10-04'&&slot==='dinner')}
export function compatible(meal,{diet='vegetarian',allergens=[],ingredients=[]}={}){if(!meal)return false;if(diet==='vegan'&&!meal.vegan)return false;const tokens=new Set([...meal.ingredientIds,...meal.declaredAllergenIds]);return !allergens.some(a=>meal.declaredAllergenIds.includes(a))&&!ingredients.some(i=>[i,...(ingredientAliases[i]||[])].some(x=>tokens.has(x)))}
