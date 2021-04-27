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

// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };

// function getkey(object){
//     for (const key in object) {
//         console.log(key)
//         for (const keyBedRoom in object[key]) {
//             console.log(keyBedRoom)
//             for (const keyBed in object[key][keyBedRoom]){
//                 console.log(keyBed)
//             }
//         }  
//     }
// }

// function getKey(object){
//     for (const key in object) {
//         console.log(key)
//         if (typeof object[key] === 'object'){
//             getKey(object[key])
//         } 
//     }
// }

// getKey(apartment)

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */

//12 : Array method
// const arrNumbers = [4,1,2,5,10,9]

// Thêm phần tử cuối mảng
// arrNumbers.push(11)
// Xóa phần tử cuối
// arrNumbers.pop()
// Thêm phần tử ở đầu
// arrNumbers.unshift(15)
// Xóa phần tử ở đầu
// arrNumbers.shift()
// Xóa phần tử ở giữa
// arrNumbers.splice(1,4)
// Thêm ở giữa
// arrNumbers.splice(1,0,20,21,22,23)

// console.log(arrNumbers)

// function removeEnd(arr, n) {
// 	arr.splice(arr.length - n , n)
//     return arr
// }

// console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));

// Viết hàm JavaScript để lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng

// function first(arr, n) {
//     return arr.slice(0, n)
// }

// console.log(first([1, 2, 3 , 4 , 5 , 6], 5)); // expect [1, 2]

// 13 : Higher order function
// interface

// function nhan2(number){
//     return number * 2
// }

// function tinhTong(arr , func){
//     let result = 0
//     for (const value of arr) {
//         result += value
//     }
//     return func(result)
// }

// console.log(tinhTong([1,2],nhan2))

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
// `function transform(numbers, callback) {
//     const newArr = []
//     for (const value of numbers) {
//         newArr.push(callback(value))
//     }
//     return newArr
// }

// function double(num) {
//   return num * 2;
// }

// var output = transform([2, 4, 6], double);
// console.log(output);`
// Expect: [4, 8, 12]


