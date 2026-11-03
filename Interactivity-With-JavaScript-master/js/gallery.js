// Hàm chạy khi trang web tải xong để thêm tabindex tự động
function up() {
    console.log("Trang đã tải xong!");
    let images = document.querySelectorAll(".preview"); // Hoặc tên class/thẻ tương ứng với ảnh của bạn
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho ảnh thứ " + (i + 1));
    }
}
