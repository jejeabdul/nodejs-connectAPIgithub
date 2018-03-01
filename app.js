let profile = require('./profile.js');

// profile.get('jejeabdul');
// profile.get('rendy14s');

// pakai map
// [1, 2, 3] => [2, 4, 6]
// let array = [1, 2, 3]
// let arrayNew = array.map(item=>{
//     return item*2
// })
// console.log(arrayNew);

let profiles = ['jejeabdul', 'rendy14s']
profiles.map(item => {
    return profile.get(item);
})