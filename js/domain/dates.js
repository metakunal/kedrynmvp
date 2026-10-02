export const TODAY='2026-10-02';
export const DATES=['2026-10-03','2026-10-04','2026-10-05','2026-10-06','2026-10-07','2026-10-08','2026-10-09'];
export const dateLabel=d=>new Intl.DateTimeFormat('en-IN',{dateStyle:'medium',timeZone:'Asia/Kolkata'}).format(new Date(`${d}T12:00:00+05:30`));
export const validDelivery=d=>DATES.includes(d);
export function pastDates(count){const out=[];let d=new Date('2026-10-02T12:00:00+05:30');for(let i=0;i<count;i++){out.unshift(d.toISOString().slice(0,10));d=new Date(d.getTime()-86400000)}return out}
