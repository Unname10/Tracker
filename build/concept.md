# Extension

1. Đếm thời gian truy cập từng trang web trong ngày/tuần/tháng
    - Dùng [hostname].session, so sánh với thời gian truy cập (startTime)
      ! Lấy thời gian hiện tại - từng thời gian truy cập, rồi đối chiếu
2. Tính thời gian truy cập hàng ngày/tuần/tháng
    - Lấy [hostname].session, tìm các session cùng ngày/tuần/tháng
      ! Tạo đối tượng Date(), dùng phương thức getDay(), getMonth(), getYear() để so sánh
    - Thuật toán lấy tuần của năm:
      currentDate = new Date();
      startDate = new Date(currentDate.getFullYear(), 0, 1);
      var days = Math.floor((currentDate - startDate) /
      (24 _ 60 _ 60 \* 1000));
    var weekNumber = Math.ceil(days / 7);
3. Có thể tùy chỉnh:
    - Thời gian làm mới storage
    - Có thể tắt các tùy chọn theo dõi truy cập: ngày/tuần/tháng
    - Lựa chọn các trang ngoại lệ

## Storage

{
www.google.com: {
session: [
{
startTime: ....,
stopTIme: ....,
},
{
startTime: ....,
stopTime: ....,
},
{
startTime: ....,
stopTime: ....,
}
]
}
}

## Render

let storage = chrome.storage.local.get([hostname])
let session = storage.session

session.reduce((total, current) => {
return current.startTime - current.stopTime
}, 0)
