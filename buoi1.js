// 1 : tạo thư mục quản lý source code .git
// git init
// 2 : kiểm tra sự thay đổi của folder
// git status
// 3 : lưu trữ sự thay đổi
// git add tenfile (lưu sự thay đổi 1 file)
// git add . (lưu tất cả sự thay đổi)
// 4 : Commit vào repository
// git commit -m "lưu file buoi1"

// git config --global user.name "nguyen van A"
// git config --global user.email "nguyenvana@gmail.com"

// git init
// tạo file mới
// git add . (lưu file mới)
// git commit -m "message" (đóng gói lưu trữ cho phiên làm việc)


// ctrl + ~ : mở terminal nhanh
// 1 - Khai báo biến (dynamic type)
// var a = 5
// re create
// var a = 10
// let b = 10
// let b = 15
// console.log(a)

// 2 : Kiểu dữ liệu
// let a 
// console.log(a)
// let a = 5
// console.log(typeof(typeof(a)))

// 3 : object
// mutable , immutable
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// console.log(teo.name)
// console.log(teo['name'])
// ctrl + /

// 4 : Array
// const arrNames = ["tèo","tí","tủn"]
// console.log(arrNames[0])

// 5 : Toan tu
// let a = 5
// let b = 10

// let c = a++ - b++ - --a - --b + --b - --a + a-- + b--
// 5 - 10 - --a - --b + --b - --a + a-- + b-- (a = 6 , b = 11)
// 6 - 11 - 5 - 10 + --b - --a + a-- + b-- (a = 5 , b = 10)
// 6 - 11 - 5 - 10 + 9 - 4 + a-- + b-- (a = 4 , b = 10)
// 6 - 11 - 5  + 9  (a = 3 , b = 8)
// -2

// console.log(a , b ,c)

// 6 : function
// function showName(name){
//     console.log(name)
//     return
// }
// function tinhTong(a , b){
//     return a + b
// }
// console.log(showName("Teo"))
// const ketQua = tinhTong(5,4)
// console.log(ketQua)

// 7 : Object method
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     showInfo : function (){
//         console.log("Ten : " + this.name + " , Tuoi : " + this.age)
//     }
// }
// teo.showInfo()

// 8 : Phep so sanh

// 6 gia tri bang false : false , null , '' , NaN , undefined , 0



// a > b = 1
// a < b = -1
// a == b = 0

// Toan tu ba ngoi
// bieuthuc ? true  : false
// if (a < b){
//     console.log(-1)
// }else if (a == b){
//     console.log(0)
// }else{
//     console.log(1)
// }
// let a = 5
// let b = 5
// a > b ? console.log("A lon hon b") : console.log("a be hon hoac bang b")

// 9 : Vong lap
// const arrNames = ["Teo","Ti","Tun","Tuan"]
// for(let i = 0 ; i < arrNames.length ; i++){
//     console.log(arrNames[i])
// }

// viet 1 phuong thuc kiem tra so nguyen to
// So input la so nguyen to , so input khong la so nguyen to

function kiemTraSoNguyenTo(number){
    let count = 0
    if (number < 2){
        console.log("Khong phai so nguyen to")
        return
    }

    for (let i = 2 ; i <= number ; i++ ){
        if (number % i == 0){
            count++
        }
    }
    if (count == 1){
        console.log("La so nguyen to")
    }else{
        console.log("Khong phai la so nguyen to")
    }
}



