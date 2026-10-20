# Foodtour Hải Phòng — website tĩnh

Website giới thiệu Foodtour Hải Phòng trọn ngày từ Ninh Bình. Dự án dùng HTML, CSS và JavaScript thuần; không cần cài framework hay dependencies, không có backend và không lưu thông tin khách.

## Chạy trên máy

Mở `index.html` trực tiếp trong trình duyệt. Hoặc từ thư mục này chạy một máy chủ tĩnh, ví dụ:

```powershell
python -m http.server 8000
```

Mở `http://localhost:8000`.

## Cấu hình hotline và Zalo

Trong phần cuối `index.html`, cập nhật `CONTACT_PHONE` và `ZALO_URL` khi thông tin liên hệ đổi. Cập nhật đồng thời các liên kết `tel:` và nội dung hotline hiển thị trong trang. Hiện hotline là `0899556966`; Zalo dự kiến dùng số này nhưng URL/tài khoản chưa được xác minh. Hãy kiểm tra tài khoản và thử mở liên kết trên điện thoại trước khi xuất bản. Trang không gửi nội dung form qua URL Zalo: khách xem/sao chép nội dung được tạo và tự gửi trong Zalo.

## Triển khai

Có thể triển khai thư mục này lên dịch vụ hosting website tĩnh bất kỳ. Tải các tệp lên thư mục gốc của hosting, bật HTTPS, rồi kiểm tra trang trên điện thoại và máy tính. Tên miền hiện chưa đăng ký; sau khi có tên miền, bổ sung `og:url`, canonical URL và `sitemap.xml` nếu cần. Chưa có URL website đã triển khai.

## Thiết kế poster trên website

Hai poster giới thiệu gói nhóm riêng 4 và 6 khách được trình bày trực tiếp bằng HTML/CSS để tự co giãn theo kích thước màn hình. Poster theo phong cách kem, đỏ và vàng như ảnh tham khảo; giá dùng theo thông tin đã thống nhất trong dự án. Ảnh trên poster là ảnh minh họa, cần thay bằng ảnh có quyền sử dụng trước khi xuất bản.

## Thông tin kinh doanh đã thống nhất

- Foodtour Hải Phòng, tour 1 ngày xuất phát từ Ninh Bình.
- Nhóm riêng 4 người: `899.000đ/người`, tổng tham khảo `3.596.000đ`.
- Nhóm riêng 6 người: `799.000đ/người`, tổng tham khảo `4.794.000đ`.
- Tour ghép: `999.000đ/người`, dự kiến thứ 3 và thứ 7 hằng tuần.
- Xe 4 hoặc 7 chỗ tùy phương án vận hành.
- Nội dung dự kiến: di chuyển, 6 món foodtour, 3 điểm check-in.
- Hotline và số Zalo dự kiến: `0899556966`.

## Checklist trước khi ra mắt

- Xác minh tài khoản và URL Zalo, thử gọi hotline.
- Chốt điểm đón, giờ đi/về, tuyến đường và loại xe.
- Chốt sáu món, quán ăn, khẩu phần, giá vốn và những gì giá tour bao gồm.
- Chốt ba địa điểm, khả năng tiếp cận, vé và phí gửi xe.
- Duyệt điều kiện đặt cọc, đổi ngày, hủy và hoàn tiền; hiện trang chưa công bố chính sách hoàn/hủy.
- Ảnh món ăn và địa danh hiện trỏ tới các ảnh thực tế được ghi nguồn trong trang. Xác nhận quyền sử dụng từng ảnh trước khi xuất bản; nếu muốn thể hiện đúng tour đã chạy, thay bằng ảnh do đơn vị tổ chức tự chụp tại đúng quán và điểm dừng đã chốt.
- Kiểm tra form, menu, gọi điện và Zalo trên thiết bị di động; rà soát nội dung, accessibility, SEO và hiệu năng.
- Chọn tên miền, cấu hình hosting HTTPS, rồi kiểm tra URL sau khi triển khai.

## Phạm vi hiện tại

Trang chỉ giới thiệu gói tour và tạo bản nháp tin nhắn trong trình duyệt. Không có lưu đơn, gửi form tự động, xác nhận chỗ, thanh toán, analytics hoặc backend. Gửi yêu cầu tư vấn không đồng nghĩa với đặt chỗ được xác nhận.



