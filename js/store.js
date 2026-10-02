import {freshState} from './data/fixtures.js';
export const KEY='kedryn.demo.v1';
let state;let storageOk=true;let notice='';
try{const raw=localStorage.getItem(KEY);if(raw){const parsed=JSON.parse(raw);if(parsed.version!==1||!Array.isArray(parsed.cart)||!Array.isArray(parsed.orders)||!Array.isArray(parsed.logs)||!Array.isArray(parsed.commissions))throw Error('Stored demo data was incompatible');state=parsed}else{state=freshState();localStorage.setItem(KEY,JSON.stringify(state))}}catch(e){state=freshState();notice='Stored demo data was unavailable or incompatible. The demo was restored to its sample state.';try{localStorage.setItem(KEY,JSON.stringify(state))}catch{storageOk=false;notice='Browser storage is unavailable. Changes will last only until this page reloads.'}}
export const getState=()=>state;
export const storeNotice=()=>notice;
export const isStorageOk=()=>storageOk;
export function save(mutator){const next=structuredClone(state);mutator(next);state=next;try{localStorage.setItem(KEY,JSON.stringify(state))}catch{storageOk=false;notice='Browser storage is unavailable. Changes will last only until this page reloads.'}window.dispatchEvent(new Event('kedryn:state'));return state}
export function reset(){state=freshState();try{localStorage.setItem(KEY,JSON.stringify(state));storageOk=true;notice=''}catch{storageOk=false;notice='Browser storage is unavailable. Changes will last only until this page reloads.'}window.dispatchEvent(new Event('kedryn:state'));return state}
export const nextId=(s,key,prefix)=>`${prefix}${String(s.counters[key]++).padStart(3,'0')}`;
window.addEventListener('storage',e=>{if(e.key===KEY){notice='Demo changed in another tab. Reload to see the latest state.';window.dispatchEvent(new Event('kedryn:external'))}});
