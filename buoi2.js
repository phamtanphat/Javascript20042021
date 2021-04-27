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

// function multiply(arr) {
//     if (Array.isArray(arr)){
//         let result = 1
//         for (const value of arr) {
//             result *= value
//         }
//         return result
//     }else{
//         return "Giá trị không phải là mảng"
//     }
// }

// console.log(multiply([2, 3, 4])); // expect: 24


// 11 : for in
// const arrNames = ["Tèo","Tí","Tủn"]
// const teo = {
//     name :"Teo",
//     age : 10
// }

// for (const key in teo) {
//     console.log(key)
// }
/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getkey(object){
    for (const key in object) {
        console.log(key)
        for (const keyBedRoom in object[key]) {
            console.log(keyBedRoom)
            for (const keyBed in object[key][keyBedRoom]){
                console.log(keyBed)
            }
        }  
    }
}

getkey(apartment)

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */
