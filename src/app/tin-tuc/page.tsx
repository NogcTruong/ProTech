"use client";

import Image from "next/image";
import Link from "next/link";
import "./newslist.css";
import { useState } from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tin tức công nghệ - TechPro",
//   description:
//     "Cập nhật tin tức công nghệ mới nhất, đánh giá sản phẩm, hướng dẫn sử dụng laptop, bàn phím cơ, ghế công thái học. Thông tin chính xác, cập nhật hàng ngày từ TechPro.",
//   keywords: [
//     "tin tức công nghệ",
//     "hướng dẫn laptop",
//     "bàn phím cơ",
//     "ghế công thái học",
//     "techpro",
//     "công nghệ",
//   ],
//   alternates: {
//     canonical: "/tin-tuc",
//   },
// };

const data = [
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/articles/cach-de-laptop-chay-het-cong-suat-win-11-tang-toc-hieu-nang-toi-da-gkp.jpg",
    name: "Cách kiểm tra dung lượng RAM trên laptop",
    description:
      "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM trên laptop chạy Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
    category: "Tutorial",
    author: "Vũ Luan",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/articles/cach-doi-ten-laptop-man-hinh-khoa-windows-1011-don-gian-gd0.png",
    name: "Cách dùng Outlook trên laptop",
    description:
      "Tìm hiểu cách dùng Outlook trên laptop Windows và macOS nhanh chóng, đơn giản và an toàn. Bảo vệ tài khoản email, dọn dẹp thư quan trọng. Xem ngay!",
    category: "Tutorial",
    author: "Đỗ Huong Giang",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/social/articles/fake-ip-laptop-cach-doi-ip-may-tinh-don-gian-va-hieu-qua-trr.png",
    name: "Cài lại Win laptop: Hướng dẫn đơn giản, an toàn 2025",
    description:
      "Máy tính chậm, lag, lỗi? Hướng dẫn chi tiết cách cài lại Win 10/11 cho laptop, khắc phục mọi vấn đề, đảm bảo hiệu quả. Xem ngay!",
    category: "Tutorial",
    author: "Vũ Luan",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/10/27/laptop-bi-tut-pin-khi-khong-su-dung-nguyen-nhan-va-cach-khac-phuc-review-2ih.png",
    name: "Cách đổi tên laptop màn hình khóa Windows 10 & 11 đơn giản",
    description:
      "Hướng dẫn đổi tên laptop hiện trên màn hình khóa Windows 10&11 chi tiết, dễ thực hiện. Cần làm gì laptop cũ bán ngay! Xem tại ThinkPro.vn.",
    category: "Tutorial",
    author: "Vũ Luan",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/24/11/27/cach-mo-o-dia-cddvd-tren-laptop-windows-va-macbook-nhanh-chong-review-xJN.jpg",
    name: "RAM Laptop Samsung DDR5 16GB Bus 5600MHz",
    describe:
      " Laptop Win 11 chạy chậm? Khám phá ngay cách tối ưu laptop chạy hết công suất, tăng tốc hiệu năng, chơi game mượt mà. Xem hướng dẫn chi tiết tại Thinkpro.vn!",
    author: "Vũ Luân",
    date: "08/07/2025",
    price: 1490000,
    original_price: 1690000,
    discount: "-12%",
    category: "RAM",
    brand: "Samsung",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/articles/cach-doi-ten-laptop-man-hinh-khoa-windows-1011-don-gian-gd0.png",
    name: "Cách dùng Outlook trên laptop",
    description:
      "Tìm hiểu cách dùng Outlook trên laptop Windows và macOS nhanh chóng, đơn giản và an toàn. Bảo vệ tài khoản email, dọn dẹp thư quan trọng. Xem ngay!",
    category: "Tutorial",
    author: "Đỗ Huong Giang",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/social/articles/fake-ip-laptop-cach-doi-ip-may-tinh-don-gian-va-hieu-qua-trr.png",
    name: "Cài lại Win laptop: Hướng dẫn đơn giản, an toàn 2025",
    description:
      "Máy tính chậm, lag, lỗi? Hướng dẫn chi tiết cách cài lại Win 10/11 cho laptop, khắc phục mọi vấn đề, đảm bảo hiệu quả. Xem ngay!",
    category: "Tutorial",
    author: "Vũ Luan",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/10/27/laptop-bi-tut-pin-khi-khong-su-dung-nguyen-nhan-va-cach-khac-phuc-review-2ih.png",
    name: "Cách đổi tên laptop màn hình khóa Windows 10 & 11 đơn giản",
    description:
      "Hướng dẫn đổi tên laptop hiện trên màn hình khóa Windows 10&11 chi tiết, dễ thực hiện. Cần làm gì laptop cũ bán ngay! Xem tại ThinkPro.vn.",
    category: "Tutorial",
    author: "Vũ Luan",
    date: "08/07/2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/24/11/27/cach-mo-o-dia-cddvd-tren-laptop-windows-va-macbook-nhanh-chong-review-xJN.jpg",
    name: "RAM Laptop Samsung DDR5 16GB Bus 5600MHz",
    describe:
      " Laptop Win 11 chạy chậm? Khám phá ngay cách tối ưu laptop chạy hết công suất, tăng tốc hiệu năng, chơi game mượt mà. Xem hướng dẫn chi tiết tại Thinkpro.vn!",
    author: "Vũ Luân",
    date: "08/07/2025",
    price: 1490000,
    original_price: 1690000,
    discount: "-12%",
    category: "RAM",
    brand: "Samsung",
    link: "#",
  },
];

const dataNews = {
  "tất cả": {
    title: "Tất cả",
    main: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/580x326/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/05/27/dell-xps-9315-2-in-1-su-ket-hop-hoan-hao-giua-hieu-suat-va-thiet-ke-dot-pha-review-eg5.png",
        name: "Filter Camera Laptop: Top Ứng Dụng & Cách Sử Dụng Hiệu Quả",
        description:
          "Khám phá cách sử dụng filter camera laptop chuyên nghiệp cho hội thảo, làm việc. Tìm hiểu top ứng dụng, phân mềm tốt nhất để tỏa sáng. Cài đặt chất lượng video call...",
        category: "Tutorial",
        author: "Vũ Luan",
        date: "08/07/2025",
        link: "#",
      },
    ],
    newsSub: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/social/articles/chinh-sach-membership-x2d.png",
        name: "Chính sách Membership - Thăng hạng thăng deal",
        description:
          "Cập nhật chính sách Pro Member mới, ưu đãi hạng thành viên. Trở thành Pro Member - &quot;THĂNG HẠNG THĂNG DEAL&quot; cùng ThinkPro ngay hôm nay!",
        category: "Tutorial",
        author: "Lê Văn Mạnh",
        date: "10/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/18/13-cach-sua-loi-laptop-tu-ngat-wifi-win-10-nhanh-hieu-qua-review-H4p.png",
        name: "13 cách sửa lỗi laptop tự ngắt WiFi Win 10 nhanh, hiệu quả",
        description:
          "Sửa lỗi laptop tự ngắt WiFi win 10 đơn giản, chi tiết từ ThinkPro: Xóa DNS, reset network, cập nhật driver,... Click xem ngay!",
        category: "Review",
        author: "Nguyễn Tường Vy",
        date: "04/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/26/huong-dan-bo-qua-wifi-khi-cai-windows-11-tren-laptop-review-xN0.png",
        name: "Hướng dẫn bỏ qua Wifi khi cài Windows 11 trên Laptop",
        description:
          "Cần cài Windows 11 offline? Khám phá cách bỏ qua Wifi khi cài đặt Windows 11 trên laptop đơn giản, hiệu quả. Tạo tài khoản local dễ dàng! Xem ngay!",
        category: "Review",
        author: "Vũ Luân",
        date: "25/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/26/huong-dan-bo-qua-wifi-khi-cai-windows-11-tren-laptop-review-xN0.png",
        name: "Hướng dẫn bỏ qua Wifi khi cài Windows 11 trên Laptop",
        description:
          "Cần cài Windows 11 offline? Khám phá cách bỏ qua Wifi khi cài đặt Windows 11 trên laptop đơn giản, hiệu quả. Tạo tài khoản local dễ dàng! Xem ngay!",
        category: "Review",
        author: "Vũ Luân",
        date: "25/06/2025",
        link: "#",
      },
    ],
  },
  "tin tức": {
    title: "Tin tức",
    main: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/580x326/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/filter-camera-laptop-top-ung-dung-cach-su-dung-hieu-qua-review-PbX.png",
        name: "Cách kiểm tra dung lượng RAM trên laptop",
        description:
          "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM trên laptop chạy Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
        category: "Tutorial",
        author: "Vũ Luan",
        date: "08/07/2025",
        link: "#",
      },
    ],
    newsSub: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
        name: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
        description:
          "Laptop Win 11 chạy chậm? Tìm hiểu cách tắt ứng dụng chạy ngầm để tăng tốc máy tính và tiết kiệm pin. Hướng dẫn chi tiết tại ThinkPro!",
        category: "Review",
        author: "Vũ Luân",
        date: "04/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/24/cach-chon-mua-ghe-cong-thai-hoc-phu-hop-moi-dang-nguoi-review-JV9.jpg",
        name: "Cách chọn mua ghế công thái học phù hợp mọi dáng người",
        description:
          "Chọn mua ghế công thái học chuẩn cho mọi dáng người dựa trên các tiêu chí như chức năng điều chỉnh, thiết kế, chất liệu, bộ kháng lực, ngân sách,... Xem ngay!",
        category: "Review",
        author: "Nguyễn Công Minh",
        date: "25/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Phạm Quốc Toàn",
        date: "18/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-laptop-dell-don-gian-nhanh-chong-va-hieu-qua-nhat-review-FD0.png",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Lê Hoàng Thoại",
        date: "18/06/2025",
        link: "#",
      },
    ],
  },
  "đánh giá": {
    title: "Đánh giá",
    main: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/580x326/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/10/31/cach-kiem-tra-dung-luong-ram-toi-da-laptop-don-gian-nhat-review-8LZ.png",
        name: "Cách kiểm tra dung lượng RAM trên laptop",
        description:
          "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM trên laptop chạy Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
        category: "Tutorial",
        author: "Vũ Luan",
        date: "08/07/2025",
        link: "#",
      },
    ],
    newsSub: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/25/danh-gia-kinh-thuc-te-ao-ar-xreal-one-vua-ra-mat-tai-ces-2025-review-1ls.png",
        name: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
        description:
          "Laptop Win 11 chạy chậm? Tìm hiểu cách tắt ứng dụng chạy ngầm để tăng tốc máy tính và tiết kiệm pin. Hướng dẫn chi tiết tại ThinkPro!",
        category: "Review",
        author: "Vũ Luân",
        date: "04/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/06/trai-nghiem-ghe-cong-thai-hoc-linochair-tinh-nang-don-gian-cam-giac-ngoi-chat-review-w3i.jpg",
        name: "Cách chọn mua ghế công thái học phù hợp mọi dáng người",
        description:
          "Chọn mua ghế công thái học chuẩn cho mọi dáng người dựa trên các tiêu chí như chức năng điều chỉnh, thiết kế, chất liệu, bộ kháng lực, ngân sách,... Xem ngay!",
        category: "Review",
        author: "Nguyễn Công Minh",
        date: "25/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/10/31/_07A7893.jpg",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Phạm Quốc Toàn",
        date: "18/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-laptop-dell-don-gian-nhanh-chong-va-hieu-qua-nhat-review-FD0.png",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Lê Hoàng Thoại",
        date: "18/06/2025",
        link: "#",
      },
    ],
  },
  "tư vấn": {
    title: "Tư vấn",
    main: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/580x326/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/05/27/dell-xps-9315-2-in-1-su-ket-hop-hoan-hao-giua-hieu-suat-va-thiet-ke-dot-pha-review-eg5.png",
        name: "Cách kiểm tra dung lượng RAM trên laptop",
        description:
          "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM trên laptop chạy Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
        category: "Tutorial",
        author: "Vũ Luan",
        date: "08/07/2025",
        link: "#",
      },
    ],
    newsSub: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/09/15/huong-dan-ket-noi-tai-nghe-bluetooth-voi-laptop-windows-7-11-review-nRW.png",
        name: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
        description:
          "Laptop Win 11 chạy chậm? Tìm hiểu cách tắt ứng dụng chạy ngầm để tăng tốc máy tính và tiết kiệm pin. Hướng dẫn chi tiết tại ThinkPro!",
        category: "Review",
        author: "Vũ Luân",
        date: "04/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/01/ghe-cong-thai-hoc-la-gi-10-cong-dung-cua-ghe-cong-thai-hoc-review-jht.jpg",
        name: "Cách chọn mua ghế công thái học phù hợp mọi dáng người",
        description:
          "Chọn mua ghế công thái học chuẩn cho mọi dáng người dựa trên các tiêu chí như chức năng điều chỉnh, thiết kế, chất liệu, bộ kháng lực, ngân sách,... Xem ngay!",
        category: "Review",
        author: "Nguyễn Công Minh",
        date: "25/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/27/ghe-cong-thai-hoc-la-gi-cong-dung-cua-ghe-cong-thai-hoc-doi-voi-moi-nguoi-review-Sta.png",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Phạm Quốc Toàn",
        date: "18/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/3/2/cam-nang-chon-chuot-gaming-khong-day-thinkpro-thumb.jpg",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Lê Hoàng Thoại",
        date: "18/06/2025",
        link: "#",
      },
    ],
  },
  "thủ thuật": {
    title: "Thủ thuật",
    main: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/580x326/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/18/13-cach-sua-loi-laptop-tu-ngat-wifi-win-10-nhanh-hieu-qua-review-H4p.png",
        name: "Cách kiểm tra dung lượng RAM trên laptop",
        description:
          "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM trên laptop chạy Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
        category: "Tutorial",
        author: "Vũ Luan",
        date: "08/07/2025",
        link: "#",
      },
    ],
    newsSub: [
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/26/huong-dan-bo-qua-wifi-khi-cai-windows-11-tren-laptop-review-xN0.png",
        name: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
        description:
          "Laptop Win 11 chạy chậm? Tìm hiểu cách tắt ứng dụng chạy ngầm để tăng tốc máy tính và tiết kiệm pin. Hướng dẫn chi tiết tại ThinkPro!",
        category: "Review",
        author: "Vũ Luân",
        date: "04/07/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://d28jzcg6y4v9j1.cloudfront.net/social/articles/cach-tai-gta-vice-city-tren-laptoppc-chi-tiet-day-du-nhat-d8w.png",
        name: "Cách chọn mua ghế công thái học phù hợp mọi dáng người",
        description:
          "Chọn mua ghế công thái học chuẩn cho mọi dáng người dựa trên các tiêu chí như chức năng điều chỉnh, thiết kế, chất liệu, bộ kháng lực, ngân sách,... Xem ngay!",
        category: "Review",
        author: "Nguyễn Công Minh",
        date: "25/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/articles/cach-de-laptop-chay-het-cong-suat-win-11-tang-toc-hieu-nang-toi-da-gkp.jpg",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Phạm Quốc Toàn",
        date: "18/06/2025",
        link: "#",
      },
      {
        image:
          "https://imagor.owtg.one/unsafe/fit-in/320x180/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/31/cach-dang-xuat-outlook-tren-laptop-don-gian-va-nhanh-chong-review-tLE.jpg",
        name: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
        description:
          "Kính thực tế ảo đã dần trở nên phổ biến với hầu hết mọi người. Nhưng không phải ai cũng biết rõ tường tận về kính thực tế ảo. Cùng ThinkPro tìm hiểu ngay!",
        category: "Review",
        author: "Lê Hoàng Thoại",
        date: "18/06/2025",
        link: "#",
      },
    ],
  },
};

const tabHighlightStyle = {
  "tất cả": { top: 4, left: 4, width: 63, height: 36 },
  "tin tức": { top: 4, left: 67, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 137, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 220, width: 69, height: 36 },
  "thủ thuật": { top: 4, left: 289, width: 88, height: 36 },
};

export default function NewsList() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [activeTab, setActiveTab] = useState("tất cả");

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, data.length));
  };
  const visibleData = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <main className="container py-5 md:py-6">
      <div className="flex overflow-hidden">
        <div className="overflow-auto scrollbar-hide">
          <div className="relative space-y-2">
            <div className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center">
              <div
                className="absolute w-[63px] h-[36px] top-1 left-[4px] duration-200 ease-out focus:outline-none"
                style={{ ...tabHighlightStyle[activeTab] }}
              >
                <div className="w-full h-full bg-colorPrimary400 rounded-full shadow-sm"></div>
              </div>
              <button
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => setActiveTab("tất cả")}
              >
                <span className="truncate">Tất cả</span>
              </button>
              <button
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => setActiveTab("tin tức")}
              >
                <span className="truncate">Tin tức</span>
              </button>
              <button
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => setActiveTab("đánh giá")}
              >
                <span className="truncate">Đánh giá</span>
              </button>
              <button
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => setActiveTab("tư vấn")}
              >
                <span className="truncate">Tư vấn</span>
              </button>
              <button
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => setActiveTab("thủ thuật")}
              >
                <span className="truncate">Thủ thuật</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-10">
        <h1 className="text-2xl md:text-5xl font-bold font-lexend">
          {dataNews[activeTab]?.title}
        </h1>
      </div>
      <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-20 md:gap-y-10">
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-4">
          <div className="col-span-2 row-span-2">
            <Link
              href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
              className="flex flex-col space-y-4"
            >
              <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {dataNews[activeTab]?.main.map((product, idx) => (
                  <Image
                    key={idx}
                    width={400}
                    height={225}
                    alt="Dell XPS 9315 2-in-1: Sự kết hợp hoàn hảo giữa hiệu suất và thiết kế đột phá"
                    src={product.image}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
              <span className="text-2xl md:text-4xl font-bold font-lexend line-clamp-3">
                Dell XPS 9315 2-in-1: Sự kết hợp hoàn hảo giữa hiệu suất và
                thiết kế đột phá
              </span>
              <div className="flex items-center space-x-4 text-xs md:text-base">
                <span className="font-semibold text-emerald-600">
                  Nguyễn Đức Tuấn
                </span>
                <span>/</span>
                <span>12/07/2025</span>
              </div>
              <span className="text-lg md:text-2xl line-clamp-3">
                Dell XPS 9315 2-in-1 là chiếc laptop linh hoạt bậc nhất cùng
                hiệu suất ổn định và màn hình sắc nét &quot;chuẩn điện ảnh&quot;
              </span>
            </Link>
          </div>
          {dataNews[activeTab]?.newsSub?.map((news, nidx) => (
            <div key={nidx}>
              <Link
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex flex-col space-y-2"
              >
                <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    width={160}
                    height={90}
                    alt="Chính sách Membership - Thăng hạng thăng deal"
                    src={news.image}
                    className="lazyloaded"
                  />
                </div>
                <span className="text-sm md:text-xl font-bold font-lexend line-clamp-3">
                  {news.name}
                </span>
                <span className="text-sm md:text-base line-clamp-3">
                  {news.description}
                </span>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 max-md:space-y-1 text-xs md:text-base">
                  <span className="font-semibold text-[#00C25C]">
                    {news.author}
                  </span>
                  <span className="hidden md:block">/</span>
                  <span>{news.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col divide-y divide-space-y-4 md:divide-space-y-6">
            {visibleData.map((news, idx) => (
              <Link
                key={idx}
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex flex-row-reverse md:flex-row md:space-x-6"
              >
                <div className="w-[112px] md:w-[208px] ml-2 md:ml-0">
                  <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <Image
                      width={112}
                      height={63}
                      alt={news.name}
                      sizes="(max-width: 768px) 112px, 208px"
                      src={news.image}
                      className="lazyloaded"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                  <span className="text-sm md:text-xl font-bold font-lexend">
                    {news.name}
                  </span>
                  <span className="hidden md:block text-base line-clamp-3">
                    {news.description}
                  </span>
                  <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
                    <span className="font-semibold text-[#00C25C]">
                      {news.author}
                    </span>
                    <span>/</span>
                    <span>{news.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more"
                onClick={handleShowMore}
              >
                <span>Xem thêm</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-shrink-0"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="md:col-space-1">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-1 bg-green-500 rotate-[15deg]"></div>
              <h2 className="text-xl md:text-3xl font-bold font-lexend">
                Có thể bạn cũng thích
              </h2>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white border p-2"
              >
                <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                  <Image
                    width={72}
                    height={72}
                    alt="RAM Laptop Samsung DDR5 16GB Bus 5600MHz"
                    src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://media-api-beta.thinkpro.vn/media/core/products/2024/12/31/ram-laptop-samsung-ddr5-16gb-bus-5600mhz-thinkpro-mCA.jpg"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <span className="text-sm md:text-base font-medium line-clamp-2">
                    RAM Laptop Samsung DDR5 16GB Bus 5600MHz
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-base text-rose-600 font-medium">
                      1.490.000
                    </span>
                    <span className="text-sm md:text-base line-through">
                      1.690.000
                    </span>
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                      -12%
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white border p-2"
              >
                <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                  <Image
                    width={72}
                    height={72}
                    alt="RAM Laptop Samsung DDR5 16GB Bus 5600MHz"
                    src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/23/lenovo-xiaoxin-14c-2025-hgp.jpg"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <span className="text-sm md:text-base font-medium line-clamp-2">
                    RAM Laptop Samsung DDR5 16GB Bus 5600MHz
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-base text-rose-600 font-medium">
                      1.490.000
                    </span>
                    <span className="text-sm md:text-base line-through">
                      1.690.000
                    </span>
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                      -12%
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white border p-2"
              >
                <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                  <Image
                    width={72}
                    height={72}
                    alt="RAM Laptop Samsung DDR5 16GB Bus 5600MHz"
                    src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/18/mat-ban-go-mdf-pure-by-nicedesign-thinkpro-goodspace-Z9M.jpg"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <span className="text-sm md:text-base font-medium line-clamp-2">
                    RAM Laptop Samsung DDR5 16GB Bus 5600MHz
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-base text-rose-600 font-medium">
                      1.490.000
                    </span>
                    <span className="text-sm md:text-base line-through">
                      1.690.000
                    </span>
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                      -12%
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
                className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white border p-2"
              >
                <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                  <Image
                    width={72}
                    height={72}
                    alt="RAM Laptop Samsung DDR5 16GB Bus 5600MHz"
                    src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/10/14/khung-ban-nang-ha-bamboo-edge-by-nicedesign-sh222t6-dm-cl-thinkpro-goodspace-dSJ.jpg"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <span className="text-sm md:text-base font-medium line-clamp-2">
                    RAM Laptop Samsung DDR5 16GB Bus 5600MHz
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-base text-rose-600 font-medium">
                      1.490.000
                    </span>
                    <span className="text-sm md:text-base line-through">
                      1.690.000
                    </span>
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                      -12%
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
