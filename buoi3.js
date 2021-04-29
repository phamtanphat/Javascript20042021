// 15 : Hàm filter
// const arrNames = ["Tèo","Tí","Hoa","Tuấn","Dương"]

// const newArrNames = arrNames.filter(function(name){
//     if (name.length <= 3){
//         return true
//     }
//     return false
// }) 

// console.log(newArrNames)

// const arrPerson = [
//     {id : 1 , name : 'Tèo', age : 20 },
//     {id : 2 , name : 'Tủn', age : 25 },
//     {id : 3 , name : 'Hoa', age : 22 },
//     {id : 4 , name : 'Tuấn', age : 21 },
//     {id : 5 , name : 'Lan', age : 26 },
// ]


// const filterArrPerson = arrPerson.filter(function(person){
//     if(person.age < 25){
//         return true;
//     }
//     return false;
// }).map(function(object){
//     return object.name
// })
// console.log(filterArrPerson)

//16 : Hàm reduce

// const arrNums = [1,2,3,4,5]

// const newArrNums = arrNums.reduce(function(accumulator, currentValue){

//     return accumulator + currentValue
//     // Lần 1 : 
//     // accumulator : 0 (Value)
//     // currentValue : 1 (Value)
//     // return 5
//     // Lần 2 : 
//     // accumulator : 5 (Value)
//     // currentValue : 2 (Value)
//     // return 7
//     // Lần 3 :
//     // accumulator : 7 (Value)
//     // currentValue : 3 (Value)
// },0)

// console.log(newArrNums)

// const arrPerson = [
//     {id : 1 , name : 'Tèo', age : 20 },
//     {id : 2 , name : 'Tủn', age : 25 },
//     {id : 3 , name : 'Hoa', age : 22 },
//     {id : 4 , name : 'Tuấn', age : 21 },
//     {id : 5 , name : 'Lan', age : 26 },
// ]

// // Yêu cầu in ra mảng person dưới 25 tuổi
// // ["Tèo","Tuấn","Hoa"]

// // const newArr = arrPerson.reduce(function(accumulator, currentValue){
// //     if (currentValue.age < 25){
// //         accumulator.push(currentValue.name);
// //     }
// //     return accumulator
// // },[])

// // console.log(newArr)

// function countOccurrences(arr) {
//     const object = arr.reduce(function(accumulator,currentValue){
//         if(currentValue in accumulator){
//             accumulator[currentValue]++
//         }else{
//             accumulator[currentValue] = 1
//         }
//         return accumulator
//     },{})
//     console.log(object)
// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]);
// {a : 3 , b : 2 , c : 1}

// const ob = {"a" : 1}
// ob["a"] = 2
// ob["b"] = 1
// console.log(ob)

// 16 : hàm sort
// const arrNums = [1,10,2,20,15,5,6]

// console.log(arrNums.sort(function(a , b){
//     return b - a 
// }))

// const arrChar = ['a','A','b','c','C','D']

// console.log(arrChar.sort())

// 18 : Function scope {}

// let a = 5

// function setValue(){
//     a = 10
//     console.log(a)
// }
// setValue() // 10
// console.log(a) // 5

// 19 : Arrow function

// const arrNums = [1,2,3,4,5];

// const newArr = arrNums.map(function(number){
//     return number * 2
// })
// const newArr2 = arrNums.map((number) => {
//     return number  * 2
// })

const teo = {
    name : 'teo', 
    age : 20,
    showInfo : function(){
        const fn = () => {
            const fn2 = () => {
                console.log(this.name)
            }
            fn2()
        }
        fn()
        
    }
}

teo.showInfo()




