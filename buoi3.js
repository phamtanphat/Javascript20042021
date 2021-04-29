// 15 : Hàm filter
// const arrNames = ["Tèo","Tí","Hoa","Tuấn","Dương"]

// const newArrNames = arrNames.filter(function(name){
//     if (name.length <= 3){
//         return true
//     }
//     return false
// }) 

// console.log(newArrNames)

const arrPerson = [
    {id : 1 , name : 'Tèo', age : 20 },
    {id : 2 , name : 'Tủn', age : 25 },
    {id : 3 , name : 'Hoa', age : 22 },
    {id : 4 , name : 'Tuấn', age : 21 },
    {id : 5 , name : 'Lan', age : 26 },
]
// Yêu cầu in ra mảng person dưới 25 tuổi
// ["Tèo","Tuấn","Hoa"]

const filterArrPerson = arrPerson.filter(function(person){
    if(person.age < 25){
        return true;
    }
    return false;
}).map(function(object){
    return object.name
})
console.log(filterArrPerson)