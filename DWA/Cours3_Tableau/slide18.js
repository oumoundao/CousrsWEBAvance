const array = ['chateau', 'eleve', 'Baron', 'antre','etage','espiegle'];
 array.sort()

console.log(array);


 array.sort((a,b)=> a.localeCompare(b,"fr"))

console.log(array);