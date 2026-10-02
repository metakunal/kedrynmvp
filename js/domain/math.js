import {meals,portions} from '../data/catalog.js';
export const rupees=p=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(p/100);
export const roundDiv=(a,b)=>Math.floor((a+Math.floor(b/2))/b);
export function portionPrice(mealId,portionId='standard'){const m=meals[mealId],p=portions[portionId];if(!m||!m.portionIds.includes(portionId))throw Error('Unsupported meal portion');return roundDiv(m.basePricePaise*p.n,p.d)}
export function portionNutrition(mealId,portionId='standard',quantity=1){const m=meals[mealId],p=portions[portionId];if(!m||!m.portionIds.includes(portionId))throw Error('Unsupported meal portion');return Object.fromEntries(Object.entries(m.nutritionPerStandard).map(([k,v])=>[k,v*p.n/p.d*quantity]))}
export const addNutrition=(items)=>items.reduce((a,n)=>{for(const k of ['kcal','p','c','f','fi'])a[k]+=(n[k]||0);return a},{kcal:0,p:0,c:0,f:0,fi:0});
export const nutritionText=n=>`${Math.round(n.kcal)} kcal · ${Number(n.p.toFixed(1))}g protein`;
export function cartTotals(lines){const groups={};let merchandise=0;for(const l of lines){const value=portionPrice(l.mealId,l.portionId)*l.quantity;const key=`${l.deliveryDate}|${l.deliveryWindowId}`;groups[key]=(groups[key]||0)+value;merchandise+=value}const delivery=Object.values(groups).reduce((a,v)=>a+(v>=50000?0:4000),0);return {groups,merchandise,delivery,discount:0,tax:0,grand:merchandise+delivery}}
export const commissionFor=eligiblePaise=>roundDiv(eligiblePaise*1000,10000);
export function lineSnapshot(l){const meal=meals[l.mealId],price=portionPrice(l.mealId,l.portionId),p=portions[l.portionId];return {...l,name:meal.name,portionLabel:p.label,servingGramsPerUnit:meal.standardServingGrams*p.n/p.d,nutritionPerUnit:portionNutrition(l.mealId,l.portionId),unitPricePaise:price,lineTotalPaise:price*l.quantity}}
