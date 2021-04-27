// 10 : For of
// const arrNames = ["Tèo","Tí","Tủn"]
// const teo = {
//     name :"Teo",
//     age : 10
// }

// for (const value of teo) {
//     console.log(value)
// }

/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    if (Array.isArray(arr)){
        let result = 1
        for (const value of arr) {
            result *= value
        }
        return result
    }else{
        return "Giá trị không phải là mảng"
    }
}

console.log(multiply([2, 3, 4])); // expect: 24
