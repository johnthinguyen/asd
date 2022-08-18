var tagH3 = document.getElementById('string');
/**
 * inner html : phan noi dung o 2 the dong mo
 */
tagH3.innerHTML = 'Cybersoft.edu.'

// .value : phan noi dung cua the thuong chua gia tri cua nguoi dung nhap vao
var tagInput = document.getElementById('txt');
tagInput.value = 'hello khai loc xoay'

//truy xuat den gia tri value cua the
var tagInputNumber = document.getElementById('number');
console.log(tagInputNumber.value);
//alert(tagInputNumber.value);
//src: la noi dung hinh anh cua the img
var tagImg = document.getElementById('hinhanh');
tagImg.src = './img/hinh1.png';

//alert('chao moi nguoi');
function hienThiThongTin() {
    //lay gia tri nhap khi goi ham hien thi thong tin
    //input
    var input = document.getElementById('giatriNhap');
    var output = input.value;
    var tagSpanKetQua = document.getElementById('ketquaHienthi');
    tagSpanKetQua.innerHTML = output;

}


function tinhTien() {
    var tagTienLuong = document.getElementById('tienLuongMotGio');
    var tienLuong = tagTienLuong.value;
    var tagSoGioLam = document.getElementById('soGioLam');
    var gioLam = tagSoGioLam.value;
    var tongLuong = 0;
    tongLuong = gioLam * tienLuong;
    var ketQua = document.getElementById('tongLuong')
    ketQua.innerHTML = tongLuong.toLocaleString();
}
