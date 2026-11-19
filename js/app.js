    const IMG_HERO_TEMPLE = "anh_chua_huong_ap_toan_canh.jpg";
    const IMG_3D_MASTERPLAN = "anh_quy_hoach_5ha_chua_huong_ap.jpg";
    const IMG_STELE_ARTIFACTS = "anh_van_bia_ban_giap_hau_bi_ky.jpg";
    const IMG_LY_NAM_DE = "anh_vua_ly_nam_de_va_phap_to.jpg";

    const HERO_SLIDES = [
      {
        badge: "🏛️ DI TÍCH LỊCH SỬ QUỐC GIA (2014) • TRƯỜNG THCS PHỔ YÊN",
        heading: "Kho Học Liệu Số Chùa Hương Ấp (Vạn Xuân Tự)",
        sub: "Tích hợp Các Hiện Vật Khảo Cổ, không gian Kể Chuyện Lịch Sử đa phương tiện và Bảo Tồn Ký Ức Cộng Đồng tại TP. Phổ Yên, tỉnh Thái Nguyên.",
        img: IMG_HERO_TEMPLE
      },
      {
        badge: "👑 KHỞI NGUỒN ĐẾ NGHIỆP VẠN XUÂN (NĂM 544)",
        heading: "Đức Vua Lý Nam Đế & Hơn 10 Năm Tu Học",
        sub: "Từ mái chùa cổ Hương Ấp dưới sự dạy dỗ của Pháp Tổ Thiền sư đến cuộc khởi nghĩa năm 542 và khai sinh nhà nước Vạn Xuân độc lập.",
        img: IMG_LY_NAM_DE
      },
      {
        badge: "🎬 KHÔNG GIAN KỂ CHUYỆN LỊCH SỬ SỐ",
        heading: "Phim Hoạt Hình, Truyện Tranh Số & Bản Đồ Tương Tác",
        sub: "Trải nghiệm lịch sử địa phương sinh động qua phim hoạt hình, truyện tranh số, bộ học liệu trải nghiệm và trò chơi trắc nghiệm.",
        img: IMG_3D_MASTERPLAN
      },
      {
        badge: "🏺 CÁC HIỆN VẬT KHẢO CỔ & BẢO TỒN KÝ ỨC",
        heading: "Di Vật Chùa Hương Ấp & Ký Ức Làng Cổ Pháp",
        sub: "Chuẩn hóa hồ sơ hiện vật khảo cổ, kho tư liệu đối chiếu xưa và nay, góc ký ức làng Cổ Pháp và không gian đóng góp cộng đồng.",
        img: IMG_STELE_ARTIFACTS
      }
    ];

    let heroSlideIndex = 0;
    let heroAutoPlay = true;
    let heroIntervalId = null;
    let isInitialLoadComplete = false;

    // DANH MỤC CÁC HIỆN VẬT KHẢO CỔ TẠI CHÙA HƯƠNG ẤP (24) & LÀNG CỔ PHÁP (26)
    const INITIAL_24_HA_RELICS = [
      { id: "HA-VB-01", name: "Bia đá Bản giáp hậu bi ký", type: "Văn bia", era: "Thời Nguyễn", location: "Sân chùa Hương Ấp", condition: "Nguyên vẹn; QR: QR-HA-01", qr: "QR-HA-01", group: "HA", desc: "Bia đá xanh nguyên khối khắc chữ Hán-Nôm ghi chép việc bầu hậu và công đức tu bổ Chùa Hương Ấp của nhân dân bản giáp.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-KT-02", name: "Tường bao gạch đá ong cổ", type: "Kiến trúc", era: "Thế kỷ XVII - XIX", location: "Bao quanh khuôn viên", condition: "Rêu phong cổ kính; QR: QR-HA-02", qr: "QR-HA-02", group: "HA", desc: "Hệ thống tường gạch đá ong cổ đặc trưng vùng trung du Phổ Yên - Thái Nguyên, kết cấu lỗ tổ ong bền vững qua nhiều thế kỷ.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-03", name: "Bộ tượng Tam Thế Phật", type: "Tượng gỗ", era: "Thời Nguyễn", location: "Chính điện Tam Bảo", condition: "Sơn son thếp vàng; QR: QR-HA-03", qr: "QR-HA-03", group: "HA", desc: "Bộ ba pho tượng Tam Thế Phật (Quá khứ - Hiện tại - Vị lai) chạm khắc gỗ mít sơn son thếp vàng uy nghiêm tại thượng điện.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-04", name: "Tượng Phật A Di Đà", type: "Tượng gỗ", era: "Thời Nguyễn", location: "Chính điện", condition: "Tốt; QR: QR-HA-04", qr: "QR-HA-04", group: "HA", desc: "Tượng Phật A Di Đà tọa thiền trên tòa sen, gương mặt từ bi, đường nét chạm khắc tiêu biểu mỹ thuật Phật giáo thời Nguyễn.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-05", name: "Tượng Quan Âm Chuẩn Đề", type: "Tượng gỗ", era: "Thời Nguyễn", location: "Chính điện", condition: "Tốt; QR: QR-HA-05", qr: "QR-HA-05", group: "HA", desc: "Tượng Bồ Tát Quan Âm Chuẩn Đề nhiều tay biểu trưng cho năng lực cứu độ chúng sinh, chạm khắc tinh xảo.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-06", name: "Tượng Đức Ông (Cấp Cô Độc)", type: "Tượng gỗ", era: "Thời Nguyễn", location: "Gian tả chính điện", condition: "Tốt; QR: QR-HA-06", qr: "QR-HA-06", group: "HA", desc: "Tượng Đức Ông Cấp Cô Độc đặt tại gian tả tiền đường, biểu tượng hộ trì Tam Bảo.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-07", name: "Tượng Thánh Hiền (A Nan)", type: "Tượng gỗ", era: "Thời Nguyễn", location: "Gian hữu chính điện", condition: "Tốt; QR: QR-HA-07", qr: "QR-HA-07", group: "HA", desc: "Tượng Đức Thánh Hiền A Nan Đà đặt tại gian hữu chính điện, đại diện cho trí tuệ đa văn trong Phật giáo.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-08", name: "Tượng Hộ Pháp Khuyến Thiện", type: "Tượng đất mộc", era: "Thế kỷ XIX", location: "Tiền đường", condition: "Tốt; QR: QR-HA-08", qr: "QR-HA-08", group: "HA", desc: "Tượng Kim Cương Hộ Pháp Khuyến Thiện đắp bằng đất luyện cổ truyền, nét mặt hiền hòa khuyên người hướng thiện.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-09", name: "Tượng Hộ Pháp Trừng Ác", type: "Tượng đất mộc", era: "Thế kỷ XIX", location: "Tiền đường", condition: "Tốt; QR: QR-HA-09", qr: "QR-HA-09", group: "HA", desc: "Tượng Kim Cương Hộ Pháp Trừng Ác đắp đất mộc thế kỷ XIX, oai phong lẫm liệt răn đe điều ác.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-TP-10", name: "Tượng Pháp Tổ Thiền Sư", type: "Tượng thờ", era: "Thời Nguyễn", location: "Nhà Tổ Chùa Hương Ấp", condition: "Đặc biệt tôn nghiêm; QR: QR-HA-10", qr: "QR-HA-10", group: "HA", desc: "Pho tượng thờ vị Thiền sư khả kính đã đón cậu bé Lý Bí mồ côi về nuôi dưỡng và truyền dạy văn võ hơn 10 năm tại chùa.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_LY_NAM_DE },
      { id: "HA-TP-11", name: "Tượng Vua Lý Nam Đế", type: "Tượng thờ", era: "Phục dựng cung kính", location: "Nhà Tổ / Đền thờ", condition: "Tốt; QR: QR-HA-11", qr: "QR-HA-11", group: "HA", desc: "Tượng thờ Đức vua Lý Nam Đế (Lý Bí) trong trang phục Hoàng đế Vạn Xuân, thể hiện đạo lý uống nước nhớ nguồn.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_LY_NAM_DE },
      { id: "HA-CD-12", name: "Đại hồng chung (Chuông đồng)", type: "Pháp khí", era: "Thời Nguyễn (Tự Đức)", location: "Gác chuông chùa", condition: "Âm vang chuẩn; QR: QR-HA-12", qr: "QR-HA-12", group: "HA", desc: "Quả chuông đồng lớn đúc dưới triều vua Tự Đức, thân chuông khắc bài minh ca ngợi cảnh đẹp Vạn Xuân Tự.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-CD-13", name: "Khánh đồng cổ", type: "Pháp khí", era: "Thời Nguyễn", location: "Chính điện", condition: "Tốt; QR: QR-HA-13", qr: "QR-HA-13", group: "HA", desc: "Chiếc khánh đồng hình bán nguyệt chạm hoa văn mây rồng, dùng trong các khóa lễ trọng đại của chùa.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-DT-14", name: "Bát hương gốm men lam", type: "Đồ thờ tự", era: "Thế kỷ XIX", location: "Bàn thờ Tam Bảo", condition: "Men cổ nguyên vẹn; QR: QR-HA-14", qr: "QR-HA-14", group: "HA", desc: "Bát hương gốm men trắng vẽ lam họa tiết lưỡng long chầu nguyệt có niên đại thế kỷ XIX.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-DT-15", name: "Đôi chân đèn gốm Bát Tràng", type: "Đồ thờ tự", era: "Thời Nguyễn", location: "Chính điện", condition: "Tốt; QR: QR-HA-15", qr: "QR-HA-15", group: "HA", desc: "Đôi chân đèn gốm cổ dòng Bát Tràng đặt đối xứng trên hương án chính điện Tam Bảo.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-DT-16", name: "Bộ đỉnh hương đồng tam sự", type: "Đồ đồng", era: "Thế kỷ XIX", location: "Trước ban Tam Bảo", condition: "Tốt; QR: QR-HA-16", qr: "QR-HA-16", group: "HA", desc: "Bộ tam sự bằng đồng thau gồm đỉnh đồng nắp nghê và đôi hạc đồng chầu thế kỷ XIX.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-HP-17", name: "Hoành phi 'Vạn Xuân Cổ Tự'", type: "Mộc thư", era: "Thời Nguyễn", location: "Chính điện", condition: "Chữ Hán sơn thếp; QR: QR-HA-17", qr: "QR-HA-17", group: "HA", desc: "Bức hoành phi gỗ sơn son thếp vàng khắc 4 chữ Hán lớn 'Vạn Xuân Cổ Tự' (Ngôi chùa cổ Vạn Xuân).", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-HP-18", name: "Hoành phi 'Thiên Đức Lưu Quang'", type: "Mộc thư", era: "Thời Nguyễn", location: "Nhà Tổ", condition: "Tốt; QR: QR-HA-18", qr: "QR-HA-18", group: "HA", desc: "Hoành phi khắc chữ 'Thiên Đức Lưu Quang' nhắc nhớ niên hiệu Thiên Đức (544) của Đức vua Lý Nam Đế.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-CD-19", name: "Đôi câu đối ca ngợi Lý Bí", type: "Mộc thư", era: "Thời Nguyễn", location: "Cột tiền đường", condition: "Chữ sắc nét; QR: QR-HA-19", qr: "QR-HA-19", group: "HA", desc: "Đôi câu đối lòng máng treo tại cột tiền đường ca ngợi công đức Pháp Tổ Thiền sư và chí lớn khai quốc của vua Lý Bí.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-DT-20", name: "Mâm bồng gỗ chạm hoa sen", type: "Đồ tế tự", era: "Thế kỷ XIX", location: "Nhà Tổ", condition: "Tốt; QR: QR-HA-20", qr: "QR-HA-20", group: "HA", desc: "Mâm bồng gỗ mít tiện tròn, chân đế chạm cánh sen dùng dâng lễ phẩm tại Nhà Tổ.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "HA-DT-21", name: "Ngai thờ gỗ sơn son", type: "Đồ tế tự", era: "Thời Nguyễn", location: "Hậu cung", condition: "Tốt; QR: QR-HA-21", qr: "QR-HA-21", group: "HA", desc: "Ngai thờ gỗ chạm đầu rồng sơn son thếp vàng lưu giữ tại hậu cung Chùa Hương Ấp.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_LY_NAM_DE },
      { id: "HA-KT-22", name: "Chân tảng đá kê cột chùa", type: "Kiến trúc", era: "Thời Lê - Nguyễn", location: "Hiên tiền đường", condition: "Nguyên khối; QR: QR-HA-22", qr: "QR-HA-22", group: "HA", desc: "Chân tảng đá xanh nguyên khối chạm cánh sen cổ dùng kê hệ thống cột gỗ lim tiền đường.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-KT-23", name: "Ngói mũi hài cổ", type: "Vật liệu", era: "Thời Lê Trung Hưng", location: "Khuôn viên lưu giữ", condition: "Mảnh vỡ khảo cổ; QR: QR-HA-23", qr: "QR-HA-23", group: "HA", desc: "Hiện vật ngói mũi hài đất nung thu thập khi khảo sát kiến trúc cổ của chùa Hương Ấp.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_HERO_TEMPLE },
      { id: "HA-DT-24", name: "Bình vôi cổ thời Nguyễn", type: "Cổ vật", era: "Thế kỷ XIX", location: "Phòng truyền thống chùa", condition: "Men rạn đặc trưng; QR: QR-HA-24", qr: "QR-HA-24", group: "HA", desc: "Bình vôi gốm men rạn cổ thế kỷ XIX lưu giữ tại phòng truyền thống Chùa Hương Ấp.", source: "Hồ sơ di tích quốc gia 2014", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS }
    ];

    // HIỆN VẬT MỚI CỦA CHÙA HƯƠNG ẤP (ảnh trong thư mục hien_vat_ha/) — KHÔNG hiển thị mã định danh & QR
    const NEW_HA_RELICS = [
      { id: "HA-KC-01", name: "Nồi đồng cổ", type: "Đồ đồng", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Gỉ đồng xanh lốm đốm, miệng loe", qr: "", group: "HA", desc: "Chiếc nồi đồng cổ thân phình, miệng loe, bề mặt phủ lớp gỉ đồng xanh do thời gian, được lưu giữ tại chùa Hương Ấp.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/noi_dong.jpg" },
      { id: "HA-KC-02", name: "Bộ bát, đĩa gốm cổ", type: "Đồ gốm", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Một số hiện vật bị mẻ, vỡ", qr: "", group: "HA", desc: "Bộ bát, đĩa gốm men lam, men trắng ngà và men nâu với nhiều họa tiết khác nhau, một số chiếc còn dấu chồng nung dưới lòng.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/bat_dia_gom.jpg" },
      { id: "HA-KC-03", name: "Đĩa gốm men lam và men nâu", type: "Đồ gốm", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Tốt", qr: "", group: "HA", desc: "Hai chiếc đĩa gốm nhỏ: một đĩa men trắng vẽ lam – tím, một đĩa men nâu sẫm có vết mẻ ở miệng.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/dia_nho.jpg" },
      { id: "HA-KC-04", name: "Bình gốm men rạn có lỗ tròn", type: "Đồ gốm", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Men rạn, nguyên vẹn", qr: "", group: "HA", desc: "Chiếc bình gốm men rạn thân tròn, đắp nổi các cụm hoa quả trang trí và khoét một lỗ tròn ở thân; đi kèm phần nắp nhỏ.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/binh_gom_lo_tron.jpg" },
      { id: "HA-KC-05", name: "Mảnh lư gốm men nâu ba chân", type: "Đồ gốm", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Mảnh vỡ", qr: "", group: "HA", desc: "Mảnh lư gốm men nâu có ba chân, thân trang trí băng hoa văn chữ triện (hồi văn) và các mảng hoa văn mây cuộn.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/lu_gom_men_nau.jpg" },
      { id: "HA-KC-06", name: "Sưu tập rìu đá", type: "Rìu đá khảo cổ", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Nhiều tiêu bản, đã đánh số", qr: "", group: "HA", desc: "Bộ sưu tập rìu, bôn đá nhiều kích cỡ và màu sắc, được mài nhẵn phần lưỡi – minh chứng cư dân cổ từng sinh sống trên vùng đất này.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/riu_da.jpg" },
      { id: "HA-KC-07", name: "Rìu đồng cổ", type: "Đồ đồng", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Một chiếc nguyên vẹn, một chiếc gãy", qr: "", group: "HA", desc: "Hai tiêu bản rìu đồng cổ phủ gỉ xanh: một chiếc có họng tra cán, một chiếc lưỡi xéo bị gãy.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/riu_dong.jpg" },
      { id: "HA-KC-08", name: "Toàn cảnh sưu tập hiện vật khảo cổ", type: "Sưu tập", era: "Đang giám định", location: "Phòng truyền thống chùa Hương Ấp", condition: "Trưng bày trên bàn gỗ", qr: "", group: "HA", desc: "Toàn bộ sưu tập hiện vật khảo cổ tại chùa Hương Ấp gồm nồi đồng, đồ gốm, bát đĩa, rìu đá và rìu đồng được trưng bày trên bàn gỗ.", source: "Sưu tập hiện vật chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/suu_tap_tong_quan.jpg" },
      { id: "HA-KC-09", name: "Cổng chùa Hương Ấp", type: "Kiến trúc", era: "Đang cập nhật", location: "Lối vào chùa Hương Ấp", condition: "Tốt", qr: "", group: "HA", desc: "Cổng tam quan sơn vàng ghi chữ 'Chùa Hương Ấp – Giáo hội Phật giáo Việt Nam', hai bên có câu đối chữ Việt.", source: "Ảnh tư liệu chùa Hương Ấp", rights: "Học liệu mở phục vụ giáo dục", img: "hien_vat_ha/cong_chua.jpg" }
    ];

    // Bỏ mã QR của hiện vật Chùa Hương Ấp (mọi hiện vật không thuộc Làng Cổ Pháp) & bổ sung hiện vật mới
    function isHaRelic(a) { return !!a && !(a.group === 'CP' || /^CP-/.test(String(a.id || ''))); }
    function normalizeHaRelics(list, injectNew) {
      let out = (list || []).filter(isHaRelic).map(a => {
        if (!isHaRelic(a)) return a;
        const b = Object.assign({}, a);
        b.qr = '';
        if (typeof b.condition === 'string') b.condition = b.condition.replace(/;?\s*QR:\s*[^;]*$/i, '').trim();
        if (b.id === 'HA-CD-12' && (!b.img || b.img === IMG_STELE_ARTIFACTS)) b.img = 'hien_vat_ha/chuong_dong.jpg';
        return b;
      });
      if (injectNew) {
        const have = new Set(out.map(a => a && a.id));
        let removedIds = [];
        try { removedIds = JSON.parse(localStorage.getItem('huongap_ha_kc_removed') || '[]'); } catch (e) { }
        const missing = NEW_HA_RELICS.filter(r => !have.has(r.id) && !removedIds.includes(r.id)).map(r => Object.assign({}, r));
        if (missing.length) {
          let idx = -1;
          out.forEach((a, i) => { if (isHaRelic(a)) idx = i; });
          out.splice(idx + 1, 0, ...missing);
        }
      }
      return out;
    }

    const INITIAL_26_CP_RELICS = [];
    for (let i = 1; i <= 15; i++) {
      const codeNum = String(i).padStart(2, '0');
      INITIAL_26_CP_RELICS.push({
        id: `CP-RD-${codeNum}`,
        name: `Rìu đá tiền sử làng Cổ Pháp tiêu bản số ${codeNum}`,
        type: "Rìu đá khảo cổ",
        era: i <= 6 ? "Đồ đá cũ (15.000 - 30.000 năm)" : "Đồ đá mới (4.000 - 10.000 năm)",
        location: "Sưu tập di vật nhân dân làng Cổ Pháp, phường Vạn Xuân",
        condition: `Nguyên tiêu bản đá; QR: QR-CP-${codeNum}`,
        qr: `QR-CP-${codeNum}`,
        group: "CP",
        desc: `Công cụ rìu đá ${i <= 6 ? 'ghè đẽo cuội sông' : 'mài nhẵn hai mặt có vai'} do nhân dân vùng Cổ Pháp - Tiên Phong phát hiện, minh chứng cư dân Việt cổ sinh sống liên tục trên quê hương Lý Nam Đế.`,
        source: "Sưu tập khảo cổ làng Cổ Pháp & Báo Thái Nguyên",
        rights: "Học liệu mở phục vụ giáo dục",
        img: IMG_STELE_ARTIFACTS
      });
    }
    INITIAL_26_CP_RELICS.push(
      { id: "CP-RDG-16", name: "Rìu đồng Đông Sơn họng tra cán tiêu bản 01", type: "Rìu đồng Đông Sơn", era: "Văn hóa Đông Sơn (~2.500 năm)", location: "Sưu tập làng Cổ Pháp, phường Vạn Xuân", condition: "Patina đồng xanh cổ; QR: QR-CP-16", qr: "QR-CP-16", group: "CP", desc: "Rìu chiến bằng đồng thau thời kỳ Văn hóa Đông Sơn có họng tra cán và đường gân nổi, minh chứng kỹ thuật luyện kim và truyền thống võ công cổ đại.", source: "Hồ sơ di vật làng Cổ Pháp & Bảo tàng Thái Nguyên", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS },
      { id: "CP-RDG-17", name: "Rìu đồng Đông Sơn lưỡi xéo tiêu bản 02", type: "Rìu đồng Đông Sơn", era: "Văn hóa Đông Sơn (~2.500 năm)", location: "Sưu tập làng Cổ Pháp, phường Vạn Xuân", condition: "Hoa văn kỷ hà rõ nét; QR: QR-CP-17", qr: "QR-CP-17", group: "CP", desc: "Tiêu bản rìu đồng Đông Sơn thứ hai thu thập tại vùng đất Cổ Pháp, trang trí hoa văn hình học tinh xảo.", source: "Hồ sơ di vật làng Cổ Pháp & Bảo tàng Thái Nguyên", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS }
    );
    const ceramicItems = [
      ["CP-GM-18", "Đĩa sứ tráng men ngọc thời Lê Sơ", "Gốm sứ cổ", "Thế kỷ XV", "Men ngọc cổ; QR: QR-CP-18", "Đĩa sứ lòng sâu tráng men ngọc bích phát hiện tại khu dân cư cổ làng Cổ Pháp."],
      ["CP-GM-19", "Đĩa sứ men lam vẽ hoa cúc dây", "Gốm sứ cổ", "Thế kỷ XVI - XVII", "Nguyên lòng đĩa; QR: QR-CP-19", "Đĩa gốm sứ tráng men trắng vẽ lam họa tiết hoa cúc cách điệu thời Lê Trung Hưng."],
      ["CP-GM-20", "Bát gốm men nâu cổ làng Cổ Pháp", "Gốm sứ cổ", "Thế kỷ XVI", "Khá nguyên vẹn; QR: QR-CP-20", "Bát gốm men nâu sắt phản ánh đời sống sinh hoạt của cư dân vùng Giã Năng - Cổ Pháp xưa."],
      ["CP-GM-21", "Đĩa sứ tráng men rạn thế kỷ XVIII", "Gốm sứ cổ", "Thế kỷ XVIII", "Tốt; QR: QR-CP-21", "Đĩa sứ cổ dùng trong nghi lễ thờ cúng truyền thống của cư dân địa phương."],
      ["CP-BV-22", "Bình vôi cổ quai nặn hình dây trầu số 01", "Gốm sứ cổ", "Thế kỷ XVII", "Tốt; QR: QR-CP-22", "Bình vôi gốm sành tráng men cổ gắn liền với tục ăn trầu truyền thống vùng Cổ Pháp."],
      ["CP-BV-23", "Bình vôi gốm men ngọc thế kỷ XVIII số 02", "Gốm sứ cổ", "Thế kỷ XVIII", "Tốt; QR: QR-CP-23", "Bình vôi bụng tròn quai uốn cong mềm mại do nhân dân địa phương hiến tặng trưng bày."],
      ["CP-BV-24", "Bình vôi cổ men lam thời Nguyễn số 03", "Gốm sứ cổ", "Thế kỷ XIX", "Nguyên vẹn; QR: QR-CP-24", "Bình vôi sứ vẽ lam tinh xảo lưu giữ tại không gian trưng bày di vật làng Cổ Pháp."],
      ["CP-BV-25", "Bình vôi sành nâu cổ truyền số 04", "Gốm sứ cổ", "Thế kỷ XVIII - XIX", "Tốt; QR: QR-CP-25", "Hiện vật bình vôi sành nâu mộc mạc đặc trưng vùng trung du Bắc Bộ."],
      ["CP-BV-26", "Vò gốm nhỏ tráng men cổ làng Cổ Pháp", "Gốm sứ cổ", "Thế kỷ XVII - XIX", "Tốt; QR: QR-CP-26", "Vò gốm cổ thu thập trong quá trình khảo sát điền dã tại phường Vạn Xuân, TP. Phổ Yên."]
    ];
    ceramicItems.forEach((c, idx) => {
      INITIAL_26_CP_RELICS.push({
        id: c[0], name: c[1], type: c[2], era: c[3],
        location: "Sưu tập di vật nhân dân làng Cổ Pháp, phường Vạn Xuân",
        condition: c[4], qr: `QR-CP-${18 + idx}`, group: "CP",
        desc: c[5], source: "Hồ sơ khảo sát thực địa Trường THCS Phổ Yên", rights: "Học liệu mở phục vụ giáo dục", img: IMG_STELE_ARTIFACTS
      });
    });

    const INITIAL_COMIC_PAGES = [
      {
        id: "LB-01",
        pageNumber: "Trang bìa",
        title: "Lý Bí và sự hình thành Nhà nước Vạn Xuân",
        img: "truyen_tranh/01_bia.jpg",
        caption: "Truyện tranh lịch sử: Lý Bí và sự hình thành Nhà nước Vạn Xuân. Lời: Lương Duyên, Nguyên Thi. Tranh: Khắc Khoan, Hồng Trâm, Duy Thái. Nhà xuất bản Giáo dục Việt Nam."
      },
      {
        id: "LB-02",
        pageNumber: "Trang 04",
        title: "Tiểu sử Lý Bí (? - 548)",
        img: "truyen_tranh/02_trang_04.jpg",
        caption: "Lý Bí quê ở huyện Thái Bình (Sơn Tây, Hà Nội). Đầu thế kỷ VI, nhà Lương đô hộ Giao Châu, thiết lập chính sách cai trị hà khắc, đẩy người dân vào cảnh lầm than. Tháng Giêng năm 542, Lý Bí khởi binh chống nhà Lương, chiếm thành Long Biên. Đầu năm 544, Lý Bí lên ngôi hoàng đế (Lý Nam Đế), đặt niên hiệu Thiên Đức, đặt tên nước là Vạn Xuân. Năm 545, vua Lương cho quân tái chiếm Vạn Xuân, Lý Nam Đế rút về động Khuất Lão, giao binh quyền lại cho Triệu Quang Phục. Năm 548, Lý Nam Đế băng hà, ở ngôi được 5 năm."
      },
      {
        id: "LB-03",
        pageNumber: "Trang 05",
        title: "Nhà Lương đô hộ và chia cắt nước ta",
        img: "truyen_tranh/03_trang_05.jpg",
        caption: "Đầu thế kỷ VI, nhà Lương đô hộ nước ta. Chúng chia nước ta thành: Giao Châu (đồng bằng và trung du Bắc Bộ); Ái Châu (Thanh Hóa); Đức Châu, Lợi Châu, Minh Châu (Nghệ An và Hà Tĩnh) và Hoàng Châu (Quảng Ninh)."
      },
      {
        id: "LB-04",
        pageNumber: "Trang 06",
        title: "Chính sách cai trị tàn bạo của nhà Lương",
        img: "truyen_tranh/04_trang_06.jpg",
        caption: "Nhà Lương thiết lập chính sách cai trị tàn bạo, hà khắc. Bọn chúng đặt ra hàng trăm thứ thuế, đẩy người dân vào cảnh lầm than. Nỗi oán hận, căm hờn của nhân dân ta đối với bè lũ đô hộ dâng lên đến đỉnh điểm."
      },
      {
        id: "LB-05",
        pageNumber: "Trang 07",
        title: "Thứ sử Tiêu Tư tàn bạo mất lòng dân",
        img: "truyen_tranh/05_trang_07.jpg",
        caption: "Thứ sử Giao Châu bấy giờ là Tiêu Tư đã áp dụng chế độ tôn thất sĩ tộc, phân biệt đẳng cấp, khinh rẻ người Việt. Sử cũ của Trung Quốc cũng phải thừa nhận: Tiêu Tư tàn bạo mất lòng dân. Vì thế, xung đột trong giới quý tộc Việt - Lương diễn ra gay gắt, châm ngòi cho cuộc khởi nghĩa của Lý Bí."
      },
      {
        id: "LB-06",
        pageNumber: "Trang 08",
        title: "Thủ lĩnh Lý Bí từ quan về quê ở ẩn",
        img: "truyen_tranh/06_trang_08.jpg",
        caption: "Thủ lĩnh Lý Bí xuất thân từ một hào trưởng địa phương, quê ở Thái Bình (Sơn Tây, Hà Nội). Ông là người học rộng, hiểu sâu, văn võ song toàn. Ông từng giữ chức chỉ huy quân đội ở Đức Châu (nam Nghệ An - Hà Tĩnh). Vì bất bình với bè lũ đô hộ nên Lý Bí từ quan về quê ở ẩn."
      },
      {
        id: "LB-07",
        pageNumber: "Trang 09",
        title: "Quê hương vùng lưu vực sông Hồng",
        img: "truyen_tranh/07_trang_09.jpg",
        caption: "Quê hương Lý Bí thuộc lưu vực sông Hồng, quanh năm phù sa màu mỡ. Từ xa xưa, nơi đây vốn là cội nguồn của nền văn minh lúa nước."
      },
      {
        id: "LB-08",
        pageNumber: "Trang 10",
        title: "Lý Bí bí mật chiêu mộ binh sĩ",
        img: "truyen_tranh/08_trang_10.jpg",
        caption: "Chứng kiến cảnh nhân dân cơ cực, căm hận bọn bất lương, Lý Bí bí mật chiêu mộ binh sĩ, ngày đêm luyện tập võ nghệ, chờ thời cơ dấy binh khởi nghĩa."
      },
      {
        id: "LB-09",
        pageNumber: "Trang 11",
        title: "Tinh Thiều cùng Lý Bí mưu việc dấy binh",
        img: "truyen_tranh/09_trang_11.jpg",
        caption: "Cùng quê Lý Bí có Tinh Thiều giỏi văn chương, lại tinh thông binh pháp, nhưng không được trọng dụng. Tinh Thiều phẫn chí, uất hận, than rằng: Dùi mài kinh sử cả một đời vậy mà chỉ để gác cổng thành cho bọn ngoại bang. Thật đáng hổ thẹn! Rồi sau đó, Tinh Thiều bỏ về quê, quyết chí cùng Lý Bí mưu việc dấy binh."
      },
      {
        id: "LB-10",
        pageNumber: "Trang 12",
        title: "Kết giao hào kiệt các châu",
        img: "truyen_tranh/10_trang_12.jpg",
        caption: "Thời cơ đã tới nhưng do chưa thuận lòng dân, Lý Bí tìm cách kết giao với hào kiệt các châu. Chưa đầy một tháng thì Triệu Túc - thủ lĩnh Chu Diên, và con là Triệu Quang Phục, đã dẫn quân đến. Tướng Phạm Tu - nổi tiếng chinh chiến sa trường, cũng tìm về đầu quân."
      },
      {
        id: "LB-11",
        pageNumber: "Trang 13",
        title: "Nghĩa quân mở trận đầu, vây thành Long Biên",
        img: "truyen_tranh/11_trang_13.jpg",
        caption: "Tháng Giêng năm 542, nghĩa quân mở trận đầu, đánh chiếm các vùng địa phương nhằm thu phục lòng người. Khi lực đã mạnh, nghĩa quân liền tiến công, phất cờ hiệu bao vây thành Long Biên (Bắc Ninh)."
      }
    ];

    const state = {
      updatedAt: 0,
      lang: 'vi',
      activeSection: 'home',
      archiveTab: 'tab-relics',
      storySubTab: 'story-anim',
      memorySubTab: 'mem-compare',
      archiveViewMode: 'grid',
      collectionFilter: 'all',
      selectedRelicId: 'HA-KT-02',
      quizIndex: 0,
      quizScore: 0,
      quizAnswered: false,
      activeMediaIndex: 0,
      activeAnimIndex: 0,
      activeCompareIndex: 0,
      storyMapPlaying: false,
      storyMapTimer: null,
      storyMapStep: 0,
      expData: { preGood: 24.2, postGood: 68.3 },
      siteConfig: {
        title: "KHO HỌC LIỆU SỐ & BẢN ĐỒ DI SẢN CHÙA HƯƠNG ẤP (VẠN XUÂN TỰ)",
        slogan: "Phục vụ Giáo dục Lịch sử Địa phương & Bảo tồn Di tích Quốc gia – Trường THCS Phổ Yên, Thái Nguyên",
        schoolName: "TRƯỜNG THCS PHỔ YÊN – THÀNH PHỐ PHỔ YÊN, TỈNH THÁI NGUYÊN",
        researchGroup: "Nhóm Nghiên cứu Khoa học Kỹ thuật Trường THCS Phổ Yên (2026 - 2027)",
        heroHeading: "Kho Học Liệu Số Chùa Hương Ấp (Vạn Xuân Tự)",
        customBannerImg: null,
        customSteleImg: null,
        customStudentAudioUrl: null,
        prefaceVi: "Kính thưa Ban Giám khảo, quý thầy cô giáo và các bạn học sinh! Chúng em là nhóm học sinh nghiên cứu Khoa học Kỹ thuật của Trường Trung học cơ sở Phổ Yên, tỉnh Thái Nguyên. Hôm nay, chúng em xin thuyết minh về Hệ sinh thái Kho học liệu số và Bản đồ di sản tương tác Chùa Hương Ấp (tên chữ là Vạn Xuân Tự) tại phường Vạn Xuân, thành phố Phổ Yên. Đây là ngôi cổ tự gắn liền với hơn 10 năm tuổi thơ tu học của Đức vua Lý Nam Đế dưới sự dạy dỗ của Pháp Tổ Thiền sư, trước khi Ngài phất cờ khởi nghĩa năm 542 và lập nên nhà nước Vạn Xuân độc lập vào mùa xuân năm 544."
      },
      // 1. CÁC HIỆN VẬT KHẢO CỔ
      artifacts: normalizeHaRelics([...INITIAL_24_HA_RELICS, ...NEW_HA_RELICS, ...INITIAL_26_CP_RELICS], false),

      // 2. KỂ CHUYỆN LỊCH SỬ -> 2.1. PHIM HOẠT HÌNH
      animations: [
        {
          id: "ANIM-01",
          title: "Tập 1: Cậu Bé Lý Bí & Hơn 10 Năm Tu Học Tại Chùa Hương Ấp",
          duration: "03:30",
          poster: IMG_LY_NAM_DE,
          videoDataUrl: null,
          script: "Năm 503 tại làng Cổ Pháp (nay thuộc phường Vạn Xuân, TP. Phổ Yên), cậu bé Lý Bí khôi ngô tuấn tú ra đời. Sớm mồ côi cha mẹ, Lý Bí được Pháp Tổ Thiền sư trụ trì Chùa Hương Ấp đón về nuôi dưỡng, truyền dạy kinh sử và võ nghệ suốt hơn 10 năm."
        },
        {
          id: "ANIM-02",
          title: "Tập 2: Thao Trường Cánh Đồng Tráng & Khởi Nghĩa Mùa Xuân Năm 542",
          duration: "04:15",
          poster: IMG_HERO_TEMPLE,
          videoDataUrl: null,
          script: "Trưởng thành với tài văn võ song toàn, Lý Bí liên kết hào kiệt khắp nơi, tập hợp trai tráng luyện tập binh đao tại Cánh Đồng Tráng và phất cờ khởi nghĩa đánh đuổi Thứ sử Tiêu Tư nhà Lương vào mùa xuân năm 542."
        },
        {
          id: "ANIM-03",
          title: "Tập 3: Mùa Xuân Năm 544 – Lên Ngôi Hoàng Đế & Dựng Nước Vạn Xuân",
          duration: "04:00",
          poster: IMG_3D_MASTERPLAN,
          videoDataUrl: null,
          script: "Sau khi đánh tan quân Lương xâm lược, tháng Giêng năm 544, Lý Bí chính thức lên ngôi Hoàng đế (Lý Nam Đế), đặt quốc hiệu Vạn Xuân với ước vọng đất nước trường tồn muôn mùa xuân, niên hiệu Thiên Đức."
        }
      ],

      // 2. KỂ CHUYỆN LỊCH SỬ -> 2.2. TRUYỆN TRANH SỐ (BỘ ẢNH TRUYỆN TRANH LỊCH SỬ)
      comics: INITIAL_COMIC_PAGES.map(x => Object.assign({}, x)),

      // 2. KỂ CHUYỆN LỊCH SỬ -> 2.3. BẢN ĐỒ TƯƠNG TÁC (6 ĐIỂM)
      mapPois: [
        {
          id: "poi-1",
          name: "1. Chùa Hương Ấp (Vạn Xuân Tự)",
          lat: 21.4182,
          lng: 105.9015,
          badge: "Di tích Lịch sử Quốc gia",
          desc: "Nơi cậu bé Lý Bí ở và tu học hơn 10 năm dưới sự dạy dỗ của Pháp Tổ Thiền sư.",
          digital: "Ảnh tường đá ong, thuyết minh học sinh, liên kết kho hiện vật khảo cổ."
        },
        {
          id: "poi-2",
          name: "2. Đền Mục (Đền Lý Nam Đế)",
          lat: 21.4125,
          lng: 105.8980,
          badge: "Di tích Lịch sử Quốc gia",
          desc: "Nơi tôn thờ chính Đức vua Lý Nam Đế trên quê hương phường Vạn Xuân.",
          digital: "Ảnh kiến trúc đền, âm thanh lịch sử khởi nghĩa 544, câu hỏi ôn tập."
        },
        {
          id: "poi-3",
          name: "3. Núi Khao Vương",
          lat: 21.4250,
          lng: 105.9120,
          badge: "Địa danh lịch sử",
          desc: "Ngọn núi nơi vua tổ chức khao thưởng ba quân tướng sĩ sau chiến thắng giặc Lương.",
          digital: "Ảnh toàn cảnh đỉnh núi, tư liệu truyền thuyết địa phương."
        },
        {
          id: "poi-4",
          name: "4. Cánh Đồng Tráng",
          lat: 21.4160,
          lng: 105.8940,
          badge: "Địa danh lịch sử",
          desc: "Bình nguyên nơi Lý Bí tập hợp trai tráng vùng Cổ Pháp luyện tập võ nghệ, binh đao.",
          digital: "Ảnh khảo sát thực địa, bài giảng lịch sử giáo dục địa phương."
        },
        {
          id: "poi-5",
          name: "5. Giếng Ngọc & Chùa Mãn Tăng",
          lat: 21.4090,
          lng: 105.9050,
          badge: "Cảnh quan di sản",
          desc: "Mạch nước thiêng nghìn năm và ngôi chùa cổ phụ cận gắn với sinh hoạt tuổi thơ Đức vua.",
          digital: "Ảnh giếng cổ, tư liệu phỏng vấn cụ từ làng Cổ Pháp."
        },
        {
          id: "poi-6",
          name: "6. Trường THCS Phổ Yên",
          lat: 21.4140,
          lng: 105.8850,
          badge: "Không gian giáo dục",
          desc: "Trung tâm nghiên cứu, kết nối và tổ chức các hành trình trải nghiệm di sản học đường.",
          digital: "Kế hoạch bài dạy trải nghiệm, báo cáo thực nghiệm sư phạm."
        }
      ],

      // 2. KỂ CHUYỆN LỊCH SỬ -> 2.4. BỘ HỌC LIỆU TRẢI NGHIỆM
      experientialKits: [
        {
          id: "KIT-01",
          title: "Kế Hoạch Bài Dạy (Giáo Án Số Hóa) Lịch Sử Địa Phương Lớp 7",
          type: "Giáo án chuẩn CV 5512",
          img: IMG_HERO_TEMPLE,
          desc: "Thiết kế hoạt động dạy học trải nghiệm tại Chùa Hương Ấp gắn với chủ đề Khởi nghĩa Lý Bí và sự ra đời nhà nước Vạn Xuân."
        },
        {
          id: "KIT-02",
          title: "Phiếu Học Tập Thực Địa & Sổ Tay Giải Mã Văn Bia Cổ",
          type: "Phiếu trải nghiệm học sinh",
          img: IMG_STELE_ARTIFACTS,
          desc: "Bộ phiếu hướng dẫn học sinh quét mã tại sân chùa, đối chiếu 3 cột văn bia 'Bản giáp hậu bi ký' (HA-VB-01) và ghi chép 8 tiêu chí hiện vật."
        },
        {
          id: "KIT-03",
          title: "Bộ Thẻ Flashcard Khám Phá Di Vật Khảo Cổ Làng Cổ Pháp",
          type: "Học liệu trực quan",
          img: IMG_LY_NAM_DE,
          desc: "Bộ thẻ học tập tương tác giúp học sinh nhận diện 15 rìu đá tiền sử, 02 rìu đồng Đông Sơn và hệ thống tượng thờ tại Vạn Xuân Tự."
        }
      ],

      // 3. BẢO TỒN KÝ ỨC & TRI THỨC CỘNG ĐỒNG -> 3.1. KHO TƯ LIỆU ĐỐI CHIẾU XƯA VÀ NAY
      comparePairs: [
        {
          id: "CMP-LB",
          title: "Tượng Lý Bí xưa và nay",
          desc: "Đối chiếu pho tượng thờ Lý Bí (Lý Nam Đế) trước đây và hiện nay tại di tích.",
          beforeImg: "tuong_ly_bi_xua.jpg",
          afterImg: "tuong_ly_bi_nay.jpg"
        },
        {
          id: "CMP-04",
          title: "Chùa Hương Ấp xưa và nay",
          desc: "Cặp tư liệu đối chiếu Xưa và Nay được giáo viên, học sinh và nhân dân cập nhật vào Kho học liệu số Chùa Hương Ấp.",
          beforeImg: "huong_ap_tongquan_1.jpg",
          afterImg: "huong_ap_tongquan_3.jpg"
        },
        {
          id: "CMP-03",
          title: "Không Gian Thờ Tự Pháp Tổ Thiền Sư & Đức Vua Lý Nam Đế",
          desc: "Sự tiếp nối mạch nguồn tri ân từ ngôi Tổ đường cổ kính đến quần thể Di tích Quốc gia 54,06 ha tại phường Vạn Xuân, TP. Phổ Yên.",
          beforeImg: IMG_LY_NAM_DE,
          afterImg: IMG_3D_MASTERPLAN
        }
      ],

      // 3. BẢO TỒN KÝ ỨC & TRI THỨC CỘNG ĐỒNG -> 3.2. GÓC KÝ ỨC LÀNG CỔ PHÁP
      coPhapMemories: [
        {
          id: "CPM-01",
          title: "Ký Ức Về Mạch Nước Thiêng Giếng Ngọc & Tuổi Thơ Đức Vua Lý Bí",
          narrator: "Cụ Từ & Các bậc cao niên xóm Định Thành, phường Vạn Xuân",
          story: "Từ bao đời nay, người dân làng Cổ Pháp vẫn gìn giữ câu chuyện truyền miệng về cậu bé Lý Bí mỗi sáng gánh nước từ Giếng Ngọc về Chùa Hương Ấp hầu Phật và học chữ cùng Pháp Tổ Thiền sư. Mạch nước đá ong quanh năm trong vắt, mùa hạn không bao giờ cạn.",
          mediaType: "image",
          mediaUrl: IMG_HERO_TEMPLE
        },
        {
          id: "CPM-02",
          title: "Chuyện Kể Dân Gian Về Cánh Đồng Tráng & Lễ Hội Đền Mục – Hương Ấp",
          narrator: "Các cụ cao niên Ban Khánh tiết Di tích Quốc gia",
          story: "Hằng năm vào dịp lễ hội truyền thống tháng Giêng và ngày 12 tháng 9 âm lịch (ngày sinh Đức vua Lý Nam Đế), nhân dân vùng Cổ Pháp lại tổ chức rước lễ giữa Đền Mục và Chùa Hương Ấp, ôn lại hào khí trai tráng luyện quân trên Cánh Đồng Tráng năm xưa.",
          mediaType: "image",
          mediaUrl: IMG_LY_NAM_DE
        },
        {
          id: "CPM-03",
          title: "Hành Trình Nhân Dân Làng Cổ Pháp Gìn Giữ 26 Di Vật Khảo Cổ",
          narrator: "Nhân dân địa phương hiến tặng & sưu tầm",
          story: "Trong quá trình canh tác và đào ao làm vườn tại vùng đất Cổ Pháp, bà con nhân dân đã phát hiện 15 chiếc rìu đá tiền sử, 2 chiếc rìu đồng Đông Sơn cùng nhiều đĩa sứ, bình vôi cổ và tự nguyện hiến tặng để lưu giữ làm minh chứng lịch sử cho thế hệ trẻ.",
          mediaType: "image",
          mediaUrl: IMG_STELE_ARTIFACTS
        }
      ],

      timelines: [
        {
          year: "MỐC 1: NĂM 503 – 518 (THỜI THƠ ẤU & TU HỌC)",
          title: "Lý Bí đản sinh tại làng Cổ Pháp & Hơn 10 năm tu học tại Chùa Hương Ấp",
          desc: "Đức vua Lý Nam Đế (Lý Bí) sinh ngày 12 tháng 9 năm Quý Mùi (503) tại làng Cổ Pháp, châu Giã Năng (nay thuộc phường Vạn Xuân, TP. Phổ Yên, Thái Nguyên). Năm 5 tuổi mồ côi cha, 7 tuổi mồ côi mẹ, ông được Pháp Tổ Thiền sư chùa Hương Ấp đón về nuôi dưỡng, truyền dạy kinh sử và võ nghệ hơn 10 năm."
        },
        {
          year: "MỐC 2: NĂM 542 – THÁNG GIÊNG 544 (DỰNG NƯỚC VẠN XUÂN)",
          title: "Luyện quân tại Cánh đồng Tráng, Khởi nghĩa năm 542 & Lên ngôi Hoàng đế năm 544",
          desc: "Từ căn cứ hậu phương Cổ Pháp - Cánh đồng Tráng, mùa xuân năm 542 Lý Bí phất cờ khởi nghĩa đánh đuổi Thứ sử Tiêu Tư nhà Lương. Tháng Giêng năm 544, ông lên ngôi Hoàng đế (Lý Nam Đế), đặt quốc hiệu Vạn Xuân, niên hiệu Thiên Đức."
        },
        {
          year: "MỐC 3: NGÀY 12/12/2014 (DI TÍCH QUỐC GIA)",
          title: "Bộ VHTTDL xếp hạng Di tích Lịch sử Quốc gia & Quy hoạch tổng thể 54,06 ha",
          desc: "Theo Quyết định số 4101/QĐ-BVHTTDL năm 2014, Chùa Hương Ấp và Đền Mục được công nhận Di tích Lịch sử Quốc gia. Tỉnh Thái Nguyên phê duyệt quy hoạch tổng thể bảo tồn Khu di tích Lý Nam Đế diện tích 54,06 ha."
        },
        {
          year: "MỐC 4: 02/11/2023 – 2027 (ĐẠI TRÙNG TU 5 HA & SỐ HÓA KHKT)",
          title: "Khởi công Dự án Tu bổ 5 ha Chùa Hương Ấp & Xây dựng Kho Học Liệu Số THCS Phổ Yên",
          desc: "Ngày 02/11/2023 khởi công dự án tu bổ Chùa Hương Ấp quy mô 5 ha (kinh phí 140 - 142 tỷ đồng). Năm học 2026 - 2027, Trường THCS Phổ Yên triển khai xây dựng Kho học liệu số và Bản đồ di sản tương tác."
        }
      ],

      mediaItems: [
        {
          code: "TM-HS-01",
          title: "Phần 1 – Học sinh thuyết minh: Tổng quan Di tích Quốc gia Chùa Hương Ấp & Tuổi thơ Vua Lý Nam Đế",
          duration: "03:45",
          poster: IMG_HERO_TEMPLE,
          transcript: "Kính thưa thầy cô và các bạn! Em xin thuyết minh phần thứ nhất: Chùa Hương Ấp (Vạn Xuân Tự) tọa lạc tại xóm Định Thành, phường Vạn Xuân, thành phố Phổ Yên, tỉnh Thái Nguyên. Nơi đây lưu giữ câu chuyện xúc động về cậu bé Lý Bí sinh năm 503 tại làng Cổ Pháp; lên 5 tuổi mồ côi cha, 7 tuổi mồ côi mẹ, được Pháp Tổ Thiền sư đón vào chùa nuôi dưỡng, rèn luyện văn võ suốt hơn 10 năm ròng rã để hun đúc chí lớn dựng nước Vạn Xuân."
        },
        {
          code: "TM-HS-02",
          title: "Phần 2 – Học sinh thuyết minh: Ý nghĩa Văn bia 'Bản giáp hậu bi ký' (HA-VB-01) & Tường đá ong cổ (HA-KT-02)",
          duration: "04:10",
          poster: IMG_STELE_ARTIFACTS,
          transcript: "Thưa Ban Giám khảo và các bạn! Trên sân chùa Hương Ấp hiện còn lưu giữ nguyên vẹn tấm bia đá cổ 'Bản giáp hậu bi ký' thời Nguyễn có niên đại gần 200 năm cùng hệ thống tường bao xây bằng gạch đá ong cổ thế kỷ XVII – XIX. Qua quá trình khảo sát thực địa, nhóm học sinh Trường THCS Phổ Yên đã tiến hành đối chiếu phiên âm, dịch nghĩa 3 cột tiếng Việt rõ ràng để các bạn học sinh khi tới thăm chùa chỉ cần quét mã là hiểu ngay nội dung văn bia."
        },
        {
          code: "TM-HS-03",
          title: "Phần 3 – Học sinh thuyết minh: Các Hiện vật Khảo cổ tại Chùa & Di vật Làng Cổ Pháp",
          duration: "04:30",
          poster: IMG_LY_NAM_DE,
          transcript: "Em xin thuyết minh về giá trị khảo cổ học đặc sắc của di tích: Bên cạnh các hiện vật quý trong chùa như tượng Pháp Tổ Thiền sư, tượng vua Lý Nam Đế, chuông đồng thời Tự Đức, nhân dân làng Cổ Pháp còn sưu tầm được bộ di vật cổ gồm 15 chiếc rìu đá tiền sử có niên đại từ 10.000 đến 30.000 năm và 2 chiếc rìu đồng Văn hóa Đông Sơn, chứng minh vùng đất Phổ Yên là cái nôi cư trú lâu đời của người Việt cổ."
        },
        {
          code: "TM-HS-04",
          title: "Phần 4 – Học sinh thuyết minh: Kể chuyện lịch sử & Bảo tồn ký ức cộng đồng",
          duration: "03:50",
          poster: IMG_3D_MASTERPLAN,
          transcript: "Kính thưa quý vị! Không dừng lại ở việc lưu trữ tĩnh, dự án của chúng em chuyển hóa lịch sử thành Phim hoạt hình, Truyện tranh số, Bản đồ tương tác 6 điểm di tích và Kho tư liệu đối chiếu xưa và nay, kết nối ký ức của các cụ cao niên làng Cổ Pháp với thế hệ học sinh hôm nay."
        }
      ],

      quizQuestions: [
        {
          q: "Theo văn bia cổ lưu giữ tại sân Chùa Hương Ấp (Mã định danh: HA-VB-01), tên gọi chính thức của tấm bia đá thời Nguyễn này là gì?",
          options: [
            "Bia đá 'Bản giáp hậu bi ký'",
            "Bia đá 'Vạn Xuân khai quốc bi'",
            "Bia đá 'Cổ Pháp thiền tự bi'",
            "Bia đá 'Thiên Đức vạn đại bi'"
          ],
          correct: 0,
          citeCode: "HA-VB-01",
          gapTopic: "Các Hiện Vật Khảo Cổ - Văn bia Hán-Nôm",
          gapAdvice: "Theo hồ sơ học liệu số mã HA-VB-01, tấm bia đá cổ thời Nguyễn tại sân chùa Hương Ấp có tên là 'Bản giáp hậu bi ký' (QR: QR-HA-01), ghi chép công đức tu bổ chùa của bản giáp."
        },
        {
          q: "Thuở nhỏ mồ côi cha mẹ, cậu bé Lý Bí được vị cao tăng nào đón về Chùa Hương Ấp nuôi dưỡng hơn 10 năm (hiện được tôn thờ tại Nhà Tổ với mã hiện vật HA-TP-10)?",
          options: [
            "Pháp Tổ Thiền Sư",
            "Thiền sư Vạn Hạnh",
            "Khuông Việt Đại Sư",
            "Thiền sư Mãn Giác"
          ],
          correct: 0,
          citeCode: "HA-TP-10",
          gapTopic: "Lịch sử Vạn Xuân Tự & Hiện vật HA-TP-10",
          gapAdvice: "Hồ sơ hiện vật HA-TP-10 (Tượng Pháp Tổ Thiền Sư tại Nhà Tổ Chùa Hương Ấp) ghi rõ Ngài là người trực tiếp nuôi dưỡng và truyền dạy văn võ cho Lý Bí suốt hơn 10 năm."
        },
        {
          q: "Nét kiến trúc độc bản bao quanh khuôn viên Chùa Hương Ấp có niên đại Thế kỷ XVII - XIX (Mã định danh: HA-KT-02) được xây dựng bằng vật liệu gì?",
          options: [
            "Tường bao gạch đá ong cổ đặc trưng vùng trung du",
            "Đá xanh nguyên khối chạm rồng",
            "Gạch vồ thời Mạc",
            "Gỗ lim ghép bản"
          ],
          correct: 0,
          citeCode: "HA-KT-02",
          gapTopic: "Kiến trúc di tích (HA-KT-02)",
          gapAdvice: "Theo học liệu mã HA-KT-02, tường bao quanh khuôn viên Chùa Hương Ấp được xây bằng gạch đá ong cổ (Thế kỷ XVII - XIX) mang vẻ đẹp rêu phong cổ kính độc bản."
        },
        {
          q: "Bức hoành phi cổ treo tại Nhà Tổ Chùa Hương Ấp (Mã định danh: HA-HP-18) khắc 4 chữ Hán nào để tưởng nhớ niên hiệu của vua Lý Nam Đế?",
          options: [
            "Thiên Đức Lưu Quang",
            "Vạn Cổ Anh Linh",
            "Nam Đế Thánh Cung",
            "Cổ Pháp Linh Từ"
          ],
          correct: 0,
          citeCode: "HA-HP-18",
          gapTopic: "Hiện vật Mộc thư HA-HP-18",
          gapAdvice: "Hồ sơ hiện vật HA-HP-18 tại Nhà Tổ Chùa Hương Ấp là bức hoành phi 'Thiên Đức Lưu Quang' nhắc nhớ niên hiệu Thiên Đức (năm 544) của Hoàng đế Lý Nam Đế."
        },
        {
          q: "Trong bộ sưu tập di vật khảo cổ làng Cổ Pháp (Mã CP-RD-01 đến CP-BV-26), nhóm hiện vật nào chứng minh cư dân Việt cổ đã cư trú tại đây từ thời Tiền sử và thời kỳ Đông Sơn?",
          options: [
            "15 rìu đá tiền sử (CP-RD-01..15) và 02 rìu đồng Đông Sơn (CP-RDG-16..17)",
            "Chỉ có tiền đồng thời Đường",
            "Bộ sưu tập 20 kiếm sắt thời Tây Sơn",
            "Trống đồng Ngọc Lũ nguyên chiếc"
          ],
          correct: 0,
          citeCode: "CP-RDG-16",
          gapTopic: "Các Hiện Vật Khảo Cổ - Di vật Cổ Pháp",
          gapAdvice: "Kho học liệu số lưu trữ 15 tiêu bản rìu đá tiền sử (CP-RD-01 đến CP-RD-15) và 02 tiêu bản rìu đồng Văn hóa Đông Sơn (CP-RDG-16, CP-RDG-17) do nhân dân làng Cổ Pháp sưu tầm."
        },
        {
          q: "Trên Bản đồ tương tác, bình nguyên nơi Lý Bí tập hợp trai tráng vùng Cổ Pháp luyện tập võ nghệ có tên là gì và tọa độ nào?",
          options: [
            "Cánh Đồng Tráng (21.4160° B, 105.8940° Đ)",
            "Đầm Dạ Trạch (20.8500° B, 106.0100° Đ)",
            "Hồ Suối Lạnh (21.3800° B, 105.8200° Đ)",
            "Đồi Pháo Thủ (21.5900° B, 105.8400° Đ)"
          ],
          correct: 0,
          citeCode: "HA-TP-11",
          gapTopic: "Bản đồ tương tác (Điểm số 4 - Cánh Đồng Tráng)",
          gapAdvice: "Cánh Đồng Tráng nằm tại tọa độ 21.4160° B, 105.8940° Đ thuộc phường Vạn Xuân, TP. Phổ Yên."
        }
      ],
      leaderboard: [
        { name: "Nguyễn Minh Châu - Lớp 7A1, Trường THCS Phổ Yên", score: "60/60 điểm • Đã nộp Phiếu HA-VB-01", badge: "🏅 Xuất sắc" },
        { name: "Trần Hoàng Nam - Lớp 7A2, Trường THCS Phổ Yên", score: "50/60 điểm • Đã nộp Phiếu HA-KT-02", badge: "⭐ Tốt" },
        { name: "Lê Thu Hà - Lớp 9A1, Trường THCS Phổ Yên", score: "60/60 điểm • Đã nộp Phiếu CP-RDG-16", badge: "🏅 Xuất sắc" }
      ],
      comments: [
        {
          author: "Hội đồng Tư vấn Sử học - Trường THCS Phổ Yên",
          time: "Đã thẩm định",
          text: "Danh mục Các Hiện Vật Khảo Cổ đã được chuẩn hóa đầy đủ 8 tiêu chí thông tin, kết hợp Kể chuyện lịch sử và Bảo tồn ký ức cộng đồng rất khoa học.",
          mediaType: null,
          mediaUrl: null
        },
        {
          author: "Cô Nguyễn Thị Mai - Giáo viên Lịch sử & Địa lý, Trường THCS Phổ Yên",
          time: "Thực nghiệm Lớp 7",
          text: "Phim hoạt hình, Truyện tranh số và Trò chơi trắc nghiệm trong mục Kể chuyện lịch sử giúp học sinh hào hứng tiếp thu kiến thức ngay tại lớp và thực địa.",
          mediaType: null,
          mediaUrl: null
        },
        {
          author: "Bác Ngô Văn Hòa - Nhân chứng cao niên làng Cổ Pháp, phường Vạn Xuân",
          time: "Đóng góp thực địa",
          text: "Rất mừng vì nhà trường đã mở Góc ký ức làng Cổ Pháp và Kho tư liệu đối chiếu xưa và nay để bà con nhân dân cùng đóng góp hình ảnh, tư liệu quý.",
          mediaType: "image",
          mediaUrl: IMG_STELE_ARTIFACTS
        }
      ],
      chatHistory: [
        {
          sender: "bot",
          name: "📚 Trợ lý Kho Học Liệu Số",
          text: "Xin chào! Tôi là Trợ lý tra cứu của **Trường THCS Phổ Yên**. Bạn có thể tra cứu nhanh **Các Hiện Vật Khảo Cổ** (`HA-VB-01`..`CP-BV-26`), khám phá **Kể chuyện lịch sử** (Phim hoạt hình, Truyện tranh số, Bản đồ tương tác, Bộ học liệu trải nghiệm, Trò chơi trắc nghiệm) hoặc **Bảo tồn ký ức và tri thức cộng đồng**!"
        }
      ]
    };

    let leafletMap = null;
    let leafletMarkers = [];
    let leafletPolyline = null;
    let quizChartInstance = null;
    let customAudioPlayer = null;
    let quickEditingRelicId = null;
    let replacingComicIndex = null;

    // =========================================================================
    // 0. ENGINE NÉN ẢNH HD & ĐỌC FILE VIDEO/AUDIO BỀN VỮNG (KHÔNG BAO GIỜ MẤT ẢNH/VIDEO)
    // =========================================================================
    function compressAndReadImage(file, maxW, maxH, quality) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const rawDataUrl = e.target.result;
          const img = new Image();
          img.onload = function () {
            let w = img.width;
            let h = img.height;
            if (w > maxW || h > maxH) {
              const ratio = Math.min(maxW / w, maxH / h);
              w = Math.round(w * ratio);
              h = Math.round(h * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL('image/jpeg', quality || 0.82);
            resolve(compressed);
          };
          img.onerror = function () {
            resolve(rawDataUrl);
          };
          img.src = rawDataUrl;
        };
        reader.readAsDataURL(file);
      });
    }

    function readMediaFileAsDataUrl(file) {
      if (file.type.startsWith('image/')) {
        return compressAndReadImage(file, 1150, 880, 0.82);
      }
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    }

    // =========================================================================
    // 1. BANNER ĐỘNG & BĂNG CHUYỀN ĐỘNG
    // =========================================================================
    function setHeroSlide(idx) {
      heroSlideIndex = (idx + HERO_SLIDES.length) % HERO_SLIDES.length;
      const slide = HERO_SLIDES[heroSlideIndex];
      const imgEl = document.getElementById('heroBannerImg');
      const badgeEl = document.getElementById('heroTopicBadge');
      const headEl = document.getElementById('heroHeading');
      const subEl = document.getElementById('heroSubheading');

      if (imgEl) {
        imgEl.style.opacity = '0.35';
        setTimeout(() => {
          imgEl.src = (heroSlideIndex === 0 && state.siteConfig.customBannerImg) ? state.siteConfig.customBannerImg : slide.img;
          imgEl.style.opacity = '0.9';
        }, 180);
      }
      if (badgeEl) badgeEl.textContent = slide.badge;
      if (headEl) headEl.textContent = heroSlideIndex === 0 ? state.siteConfig.heroHeading : slide.heading;
      if (subEl) subEl.textContent = slide.sub;

      const labels = ['01. Cổ Tự', '02. Vua Lý Bí', '03. Kể Chuyện', '04. Hiện Vật'];
      for (let i = 0; i < 4; i++) {
        const dot = document.getElementById('hero-dot-' + i);
        if (dot) {
          dot.textContent = labels[i];
          dot.className = (i === heroSlideIndex)
            ? "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 text-slate-950 transition shadow"
            : "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-white hover:bg-white/15 transition";
        }
      }
    }

    function startHeroCarousel() {
      if (heroIntervalId) clearInterval(heroIntervalId);
      heroIntervalId = setInterval(() => {
        if (heroAutoPlay && state.activeSection === 'home') {
          setHeroSlide(heroSlideIndex + 1);
        }
      }, 5000);
    }

    function toggleHeroAutoPlay() {
      heroAutoPlay = !heroAutoPlay;
      const lbl = document.getElementById('heroPlayPauseLabel');
      const dot = document.getElementById('heroLiveDot');
      if (lbl) lbl.textContent = heroAutoPlay ? "Trình chiếu động: Đang chạy" : "Trình chiếu động: Đang dừng";
      if (dot) {
        dot.className = heroAutoPlay ? "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" : "w-2.5 h-2.5 rounded-full bg-amber-400";
      }
      showToast(heroAutoPlay ? "Đã bật tự động chuyển cảnh Banner động" : "Đã tạm dừng chuyển cảnh Banner", "info");
    }

    function renderDynamicRelicCarousel() {
      const track = document.getElementById('dynamicRelicCarouselTrack');
      if (!track) return;
      const featured = state.artifacts.slice(0, 10);
      const loopItems = [...featured, ...featured];
      track.innerHTML = loopItems.map(a => `
        <div onclick="openMetadataModal('${a.id}')" class="cursor-pointer w-72 sm:w-80 shrink-0 archive-card archive-card-hover rounded-2xl overflow-hidden flex flex-col justify-between">
          <div class="relative h-40 bg-slate-900 overflow-hidden">
            <img decoding="async" loading="lazy" src="${a.img}" alt="${escapeHtml(a.name)}" class="w-full h-full object-cover" />
            <span class="absolute top-2.5 left-2.5 bg-[#0F4C81] text-white font-mono text-xs font-bold px-3 py-1 rounded-lg shadow">
              ${escapeHtml(a.id)}
            </span>
            <span class="absolute bottom-2 right-2 bg-amber-400 text-slate-950 font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-md">
              ${escapeHtml(a.qr || ('QR-' + a.id))}
            </span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-xs font-bold text-[#0D9488] uppercase">${escapeHtml(a.type)} • ${escapeHtml(a.era)}</div>
            <h4 class="font-extrabold text-base text-slate-900 truncate">${escapeHtml(a.name)}</h4>
            <p class="text-sm text-slate-600 line-clamp-2">${escapeHtml(a.desc)}</p>
          </div>
        </div>
      `).join('');
    }

    function applyBrightPalette(themeKey) {
      if (themeKey === 'emerald') {
        document.documentElement.style.setProperty('--brand-primary', '#065F46');
        document.documentElement.style.setProperty('--brand-secondary', '#0D9488');
        showToast("Đã chuyển sang Bảng màu Xanh Ngọc Sinh Thái Tươi Sáng!", "success");
      } else if (themeKey === 'crimson') {
        document.documentElement.style.setProperty('--brand-primary', '#991B1B');
        document.documentElement.style.setProperty('--brand-secondary', '#D97706');
        showToast("Đã chuyển sang Bảng màu Đỏ Son - Vàng Kim Tươi Sáng!", "success");
      } else {
        document.documentElement.style.setProperty('--brand-primary', '#0F4C81');
        document.documentElement.style.setProperty('--brand-secondary', '#0D9488');
        showToast("Đã chuyển sang Bảng màu Xanh Lam Học Thuật Tươi Sáng!", "success");
      }
    }

    // =========================================================================
    // 2. ĐIỀU HƯỚNG CÁC CHUYÊN MỤC CHÍNH & MỤC NHỎ
    // =========================================================================
    function switchSection(secId) {
      if (secId === 'cat3') {
        // Bản đồ tương tác nay nằm trong mục Kể chuyện lịch sử (cat1 -> story-map)
        switchSection('overview');
        return;
      }
      const mapLegacy = { sec1: 'cat1', sec2: 'cat2', sec3: 'cat1', sec4: 'cat1', sec5: 'cat2', sec6: 'cat1', builder: 'home', cms: 'home' };
      const target = mapLegacy[secId] || secId;
      state.activeSection = target;

      if (target !== 'overview') ovPauseOtherVideos(null);
      const homeWrap = document.getElementById('view-home-wrapper');
      const secIds = ['overview', 'cat1', 'cat2', 'cat4', 'cat5'];

      if (target === 'home') {
        if (homeWrap) homeWrap.classList.remove('hidden');
        secIds.forEach(s => {
          const el = document.getElementById('section-' + s);
          if (el) el.classList.add('hidden');
        });
      } else {
        if (homeWrap) homeWrap.classList.add('hidden');
        secIds.forEach(s => {
          const el = document.getElementById('section-' + s);
          if (el) el.classList.toggle('hidden', s !== target);
        });
      }

      const navIds = ['home', 'overview', 'cat2', 'cat1', 'cat4', 'cat5'];
      navIds.forEach(n => {
        const btn = document.getElementById('nav-' + n);
        if (!btn) return;
        if (n === target) {
          btn.className = "nav-tab px-4 py-2.5 rounded-xl text-sm font-extrabold bg-[#0F4C81] text-white shrink-0 transition flex items-center gap-2 shadow-md";
        } else {
          btn.className = "nav-tab px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-sky-50 border border-slate-200 shrink-0 transition flex items-center gap-2";
        }
      });

      setTimeout(() => {
        syncBeforeAfterWidth();
        if (target === 'overview') {
          initLeafletMap();
          if (leafletMap) leafletMap.invalidateSize();
        }
        if (target === 'cat5') {
          initOrUpdateQuizChart();
        }
      }, 100);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function ovPauseOtherVideos(activeEl) {
      ['ovVideo1', 'ovVideo2'].forEach(id => {
        const v = document.getElementById(id);
        if (v && v !== activeEl && !v.paused) v.pause();
      });
    }
    function ovHandleVideoError(fileName) {
      if (typeof showToast === 'function') {
        showToast('Không tìm thấy tệp video "' + fileName + '" cùng thư mục với file HTML!', 'warn');
      }
    }

    // =========================================================================
    // THƯ VIỆN ẢNH TỔNG QUAN DI TÍCH (lưu trong localStorage của trình duyệt)
    // =========================================================================
    const OV_KEY = 'huongap_overview_gallery_v2';
    const OV_DEFAULT = [
      { src: 'huong_ap_tongquan_3.jpg', cap: 'Toàn cảnh chùa Hương Ấp' },
      { src: 'huong_ap_tongquan_1.jpg', cap: 'Bậc đá dẫn lên chùa' },
      { src: 'huong_ap_tongquan_2.jpg', cap: 'Cổng chùa Hương Ấp' },
      { src: 'huong_ap_tongquan_4.jpg', cap: 'Tượng Phật trong chính điện' },
      { src: 'huong_ap_tongquan_5.jpg', cap: 'Khám thờ Tổ' }
    ];
    function ovEsc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
    function ovLoad() {
      try { const r = JSON.parse(localStorage.getItem(OV_KEY)); if (Array.isArray(r)) return r; } catch (e) { }
      // Giữ lại ảnh người dùng đã thêm ở phiên bản cũ (v1)
      const base = OV_DEFAULT.map(x => Object.assign({}, x));
      try {
        const old = JSON.parse(localStorage.getItem('huongap_overview_gallery_v1'));
        if (Array.isArray(old)) old.forEach(o => { if (o && o.src && !/^huong_ap_tongquan_\d\.jpg$/.test(o.src)) base.push(o); });
      } catch (e) { }
      return base;
    }
    function ovSave(list) {
      try { localStorage.setItem(OV_KEY, JSON.stringify(list)); }
      catch (e) { if (typeof showToast === 'function') showToast('Bộ nhớ trình duyệt đầy, không lưu được ảnh mới!', 'error'); }
    }
    function ovRender() {
      const grid = document.getElementById('ovGalleryGrid');
      if (!grid) return;
      const list = ovLoad();
      let html = list.map((it, i) => {
        const feat = i === 0;
        return `
        <figure class="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm flex flex-col ${feat ? 'col-span-2 md:row-span-2' : ''}">
          <img decoding="async" src="${ovEsc(it.src)}" alt="${ovEsc(it.cap)}" loading="lazy" class="w-full object-cover cursor-pointer hover:opacity-90 transition ${feat ? 'h-56 md:h-auto md:flex-1 md:min-h-0' : 'h-44'}" style="object-position:center ${/_5\.jpg$/.test(it.src) ? '25%' : '50%'}" onclick="ovOpenLightbox(${i})" />
          <figcaption class="px-3 py-2 text-xs font-bold text-slate-800 flex items-center justify-between gap-2 bg-white">
            <span class="truncate">${ovEsc(it.cap) || 'Hình ảnh di tích'}</span>
          </figcaption>
        </figure>`;
      }).join('');
      grid.innerHTML = html;
    }
    function ovAddFiles(input) {
      const files = Array.from(input.files || []);
      let pending = files.length;
      if (!pending) return;
      const list = ovLoad();
      const done = () => { if (--pending === 0) { ovSave(list); ovRender(); input.value = ''; } };
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const sc = Math.min(1, 1280 / Math.max(img.width, img.height));
            const c = document.createElement('canvas');
            c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
            c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
            list.push({ src: c.toDataURL('image/jpeg', 0.82), cap: file.name.replace(/\.[^.]+$/, '') });
            done();
          };
          img.onerror = done;
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
    }
    function ovRemove(i) { const l = ovLoad(); l.splice(i, 1); ovSave(l); ovRender(); }
    function ovEditCaption(i) {
      const l = ovLoad(); const v = prompt('Chú thích ảnh:', l[i].cap);
      if (v !== null) { l[i].cap = v; ovSave(l); ovRender(); }
    }
    function ovResetGallery() { if (confirm('Khôi phục thư viện ảnh về mặc định (2 ảnh)?')) { localStorage.removeItem(OV_KEY); ovRender(); } }
    function ovOpenLightbox(i) {
      const it = ovLoad()[i]; if (!it) return;
      document.getElementById('ovLightboxImg').src = it.src;
      document.getElementById('ovLightboxCap').textContent = it.cap || '';
      document.getElementById('ovLightbox').classList.remove('hidden');
    }
    function ovCloseLightbox() { document.getElementById('ovLightbox').classList.add('hidden'); }
    document.addEventListener('DOMContentLoaded', ovRender);
    if (document.readyState !== 'loading') ovRender();

    // Chuyển 4 mục nhỏ trong "KỂ CHUYỆN LỊCH SỬ"
    function switchStorySubTab(subId) {
      state.storySubTab = subId;
      const subs = ['story-anim', 'story-comic', 'story-kit', 'story-quiz'];
      subs.forEach(k => {
        const box = document.getElementById(k.replace('story-', 'story-sub-'));
        if (box) box.classList.toggle('hidden', k !== subId);
      });
      const btnMap = {
        'story-anim': 'st-tab-anim',
        'story-comic': 'st-tab-comic',
        'story-map': 'st-tab-map',
        'story-kit': 'st-tab-kit',
        'story-quiz': 'st-tab-quiz'
      };
      Object.keys(btnMap).forEach(k => {
        const b = document.getElementById(btnMap[k]);
        if (b) {
          b.className = (k === subId)
            ? "px-4 py-2.5 rounded-xl text-sm font-extrabold bg-[#0F4C81] text-white shadow transition flex items-center gap-2"
            : "px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-800 hover:bg-blue-50 border border-slate-200 transition flex items-center gap-2";
        }
      });
      if (subId === 'story-map') {
        setTimeout(() => {
          initLeafletMap();
          if (leafletMap) leafletMap.invalidateSize();
        }, 120);
      }
    }

    // Chuyển 3 mục nhỏ trong "BẢO TỒN KÝ ỨC VÀ TRI THỨC CỘNG ĐỒNG"
    function switchMemorySubTab(subId) {
      state.memorySubTab = subId;
      const subs = ['mem-compare', 'mem-cophap', 'mem-community'];
      subs.forEach(k => {
        const box = document.getElementById(k.replace('mem-', 'mem-sub-'));
        if (box) box.classList.toggle('hidden', k !== subId);
      });
      const btnMap = {
        'mem-compare': 'mem-tab-compare',
        'mem-cophap': 'mem-tab-cophap',
        'mem-community': 'mem-tab-community'
      };
      Object.keys(btnMap).forEach(k => {
        const b = document.getElementById(btnMap[k]);
        if (b) {
          b.className = (k === subId)
            ? "px-4 py-2.5 rounded-xl text-sm font-extrabold bg-[#0F4C81] text-white shadow transition"
            : "px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-800 hover:bg-blue-50 border border-slate-300 transition";
        }
      });
      if (subId === 'mem-compare') {
        setTimeout(syncBeforeAfterWidth, 100);
      }
    }

    function switchArchiveTab(tabId) {
      state.archiveTab = tabId;
      const tabs = ['tab-relics', 'tab-stele', 'tab-media'];
      tabs.forEach(t => {
        const box = document.getElementById('archive-' + t);
        if (box) box.classList.toggle('hidden', t !== tabId);
      });
      const btnMap = {
        'tab-relics': 'arch-btn-relics',
        'tab-stele': 'arch-btn-stele',
        'tab-media': 'arch-btn-media'
      };
      Object.keys(btnMap).forEach(k => {
        const b = document.getElementById(btnMap[k]);
        if (b) {
          b.className = (k === tabId)
            ? "px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0F4C81] text-white shadow transition"
            : "px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-800 hover:bg-blue-50 border border-slate-300 transition";
        }
      });
    }

    // =========================================================================
    // 3. MỤC 1: CÁC HIỆN VẬT KHẢO CỔ
    // =========================================================================
    function executeGlobalArchiveSearch() {
      const inp = document.getElementById('globalArchiveSearchInput');
      const q = (inp ? inp.value : '').trim();
      if (!q) {
        showToast("Hãy nhập mã hiện vật (VD: HA-VB-01, CP-RD-01) hoặc tên hiện vật để tìm kiếm!", "warn");
        return;
      }
      const exact = state.artifacts.find(a => a.id.toLowerCase() === q.toLowerCase());
      if (exact) {
        openMetadataModal(exact.id);
        return;
      }
      switchSection('cat2');
      switchArchiveTab('tab-relics');
      const quickInp = document.getElementById('relicQuickFilterInput');
      if (quickInp) {
        quickInp.value = q;
        renderRelicsArchive();
      }
      showToast(`Đã lọc Các Hiện Vật Khảo Cổ theo từ khóa: "${q}"`, "info");
    }

    function setRelicCollectionFilter(col) {
      state.collectionFilter = col;
      ['all', 'HA', 'CP'].forEach(c => {
        const btn = document.getElementById('col-flt-' + c);
        if (btn) {
          btn.className = (c === col)
            ? "flex-1 py-2.5 px-3 rounded-xl text-sm font-bold bg-[#0F4C81] text-white transition shadow-sm"
            : "flex-1 py-2.5 px-3 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-300 hover:bg-blue-50 transition";
        }
      });
      renderRelicsArchive();
    }

    function toggleArchiveViewMode(mode) {
      state.archiveViewMode = mode;
      const gBox = document.getElementById('relicsGridContainer');
      const tBox = document.getElementById('relicsTableContainer');
      const gBtn = document.getElementById('view-btn-grid');
      const tBtn = document.getElementById('view-btn-table');

      if (mode === 'table') {
        gBox.classList.add('hidden');
        tBox.classList.remove('hidden');
        tBtn.className = "px-3 py-2.5 rounded-xl text-sm font-bold bg-[#0F4C81] text-white";
        gBtn.className = "px-3 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-300";
      } else {
        tBox.classList.add('hidden');
        gBox.classList.remove('hidden');
        gBtn.className = "px-3 py-2.5 rounded-xl text-sm font-bold bg-[#0F4C81] text-white";
        tBtn.className = "px-3 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-300";
      }
    }

    function getFilteredRelics() {
      const typeFlt = document.getElementById('relicTypeFilter') ? document.getElementById('relicTypeFilter').value : 'all';
      const q = (document.getElementById('relicQuickFilterInput') ? document.getElementById('relicQuickFilterInput').value : '').trim().toLowerCase();

      return state.artifacts.filter(a => {
        if (state.collectionFilter !== 'all' && a.group !== state.collectionFilter) return false;
        if (typeFlt !== 'all') {
          const t = (a.type + ' ' + a.name).toLowerCase();
          if (typeFlt === 'Tượng' && !t.includes('tượng')) return false;
          if (typeFlt === 'Pháp khí' && !(t.includes('pháp khí') || t.includes('đồ thờ') || t.includes('đồ đồng') || t.includes('đồ tế'))) return false;
          if (typeFlt === 'Kiến trúc' && !(t.includes('kiến trúc') || t.includes('vật liệu'))) return false;
          if (typeFlt === 'Văn bia' && !t.includes('văn bia')) return false;
          if (typeFlt === 'Mộc thư' && !t.includes('mộc thư')) return false;
          if (typeFlt === 'Rìu đá' && !t.includes('rìu đá')) return false;
          if (typeFlt === 'Rìu đồng' && !t.includes('rìu đồng')) return false;
          if (typeFlt === 'Gốm sứ' && !(t.includes('gốm') || t.includes('sứ') || t.includes('bình vôi'))) return false;
        }
        if (q) {
          const hay = `${a.id} ${a.name} ${a.type} ${a.era} ${a.location} ${a.desc}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
    }

    function renderRelicsArchive() {
      if (state.collectionFilter !== 'all') state.collectionFilter = 'all';
      ['all', 'HA'].forEach(c => {
        const b = document.getElementById('col-flt-' + c);
        if (b) b.className = (c === state.collectionFilter)
          ? "flex-1 py-2.5 px-3 rounded-xl text-sm font-bold bg-[#0F4C81] text-white transition shadow-sm"
          : "flex-1 py-2.5 px-3 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-300 hover:bg-blue-50 transition";
      });
      const list = getFilteredRelics();
      const statusEl = document.getElementById('relicFilterResultStatus');
      if (statusEl) {
        statusEl.textContent = `Đang hiển thị ${list.length} / ${state.artifacts.length} hiện vật trong mục Các Hiện Vật Khảo Cổ`;
      }

      const grid = document.getElementById('relicsGridContainer');
      if (grid) {
        grid.innerHTML = list.map(a => `
          <div class="archive-card archive-card-hover rounded-2xl overflow-hidden flex flex-col justify-between">
            <div>
              <div class="relative h-44 bg-slate-900 overflow-hidden">
                <img decoding="async" loading="lazy" src="${a.img}" alt="${escapeHtml(a.name)}" class="w-full h-full object-cover" />
                ${isHaRelic(a) ? '' : `<span class="absolute top-3 left-3 bg-[#0F4C81] text-white font-mono text-xs font-extrabold px-3 py-1 rounded-lg shadow">
                  ${escapeHtml(a.id)}
                </span>
                <span class="absolute top-3 right-3 bg-amber-400 text-slate-950 font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg shadow">
                  ${escapeHtml(a.qr || ('QR-' + a.id))}
                </span>`}
                ${a.customImgUpdated ? '<span class="absolute bottom-2 left-2 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow">✓ Đã lưu ảnh mới</span>' : ''}
              </div>
              <div class="p-5 space-y-2">
                <div class="flex items-center justify-between text-xs font-bold text-[#0D9488] uppercase">
                  <span>${escapeHtml(a.type)}</span>
                  <span>• ${escapeHtml(a.era)}</span>
                </div>
                <h4 class="font-extrabold text-lg text-slate-900 leading-snug">${escapeHtml(a.name)}</h4>
                <p class="text-sm text-slate-500 font-medium">📍 ${escapeHtml(a.location)}</p>
                <p class="text-sm text-slate-700 line-clamp-2">${escapeHtml(a.desc)}</p>
              </div>
            </div>
            <div class="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-slate-100">
              <button type="button" onclick="openMetadataModal('${a.id}')" class="flex-1 bg-[#0F4C81] hover:bg-blue-900 text-white text-sm font-bold py-2.5 rounded-xl transition">
                ${isHaRelic(a) ? '🏷️ Hồ Sơ' : '🏷️ Hồ Sơ &amp; QR'}
              </button>
            </div>
          </div>
        `).join('');
      }

      const tbody = document.getElementById('relicsTableBody');
      if (tbody) {
        tbody.innerHTML = list.map(a => `
          <tr class="hover:bg-blue-50/50 transition">
            <td class="p-3.5 font-mono font-bold text-[#0F4C81]">${isHaRelic(a) ? '—' : escapeHtml(a.id)}</td>
            <td class="p-3.5 font-bold text-slate-900">${escapeHtml(a.name)}</td>
            <td class="p-3.5 text-slate-700">${escapeHtml(a.type)}</td>
            <td class="p-3.5 text-slate-700">${escapeHtml(a.era)}</td>
            <td class="p-3.5 text-slate-600">${escapeHtml(a.location)}</td>
            <td class="p-3.5 font-mono text-xs text-[#0D9488] font-bold">${escapeHtml(a.condition)}</td>
            <td class="p-3.5 text-center whitespace-nowrap">
              <button type="button" onclick="openMetadataModal('${a.id}')" class="bg-[#0F4C81] text-white px-3 py-1.5 rounded-lg text-xs font-bold">Chi tiết</button>
            </td>
          </tr>
        `).join('');
      }

      const cmsSel = document.getElementById('cmsSelectExistingRelic');
      if (cmsSel) {
        cmsSel.innerHTML = `<option value="">-- Chọn hiện vật có sẵn để chỉnh sửa (hoặc để trống để Tạo mới) --</option>` +
          state.artifacts.map(a => `<option value="${a.id}">[${a.id}] ${escapeHtml(a.name)} (${escapeHtml(a.era)})</option>`).join('');
      }
    }

    function handleSteleImageUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      compressAndReadImage(file, 1150, 880, 0.82).then(dataUrl => {
        state.siteConfig.customSteleImg = dataUrl;
        const steleEl = document.getElementById('steleMainImageEl');
        if (steleEl) steleEl.src = dataUrl;
        const vbIdx = state.artifacts.findIndex(x => x.id === 'HA-VB-01');
        if (vbIdx >= 0) {
          state.artifacts[vbIdx].img = dataUrl;
          state.artifacts[vbIdx].customImgUpdated = true;
        }
        event.target.value = '';
        commitAndSaveState("Đã lưu vĩnh viễn ảnh Văn bia mới vào IndexedDB!");
      });
    }

    // =========================================================================
    // 4. MỤC 2: KỂ CHUYỆN LỊCH SỬ (5 MỤC NHỎ: HOẠT HÌNH, TRUYỆN TRANH, BẢN ĐỒ, BỘ HỌC LIỆU, TRÒ CHƠI)
    // =========================================================================
    // 4.1. Phim hoạt hình lịch sử
    // VIDEO PHIM HOẠT HÌNH: lấy trực tiếp từ FILE .mp4 đặt cùng thư mục với file HTML (KHÔNG nhúng base64 vào code)
    // Muốn đổi video: sửa tên file ở đây (hoặc đổi tên file .mp4 cho khớp).
    const ANIM_VIDEO_FILES = {
      'ANIM-01': 'Phim hoạt hình- Khởi nghĩa Lý Bí năm 542 - YouTube.mp4',     // Tập 1
      'ANIM-02': 'Phim hoạt hình- Khởi nghĩa Lý Bí năm 542 - YouTube_1.mp4',    // Tập 2
      'ANIM-03': 'Phim hoạt hình- Khởi nghĩa Lý Bí năm 542 - YouTube_2.mp4',
    };
    function applyAnimVideoFiles() {
      (state.animations || []).forEach(a => {
        const f = ANIM_VIDEO_FILES[a.id];
        if (f) {
          a.videoUrl = encodeURI(f);
          a.videoDataUrl = null; // bỏ bản base64 cũ (nếu có) để file lưu trữ nhẹ
        }
      });
    }

    function renderAnimationSection() {
      const list = state.animations;
      if (state.activeAnimIndex >= list.length) state.activeAnimIndex = 0;
      const cur = list[state.activeAnimIndex] || list[0];

      const vidEl = document.getElementById('animVideoPlayer');
      const stageEl = document.getElementById('animVisualStage');

      const curVideoSrc = cur.videoUrl || cur.videoDataUrl;
      if (curVideoSrc) {
        if (vidEl) {
          // Chỉ gán lại src khi đổi tập (tránh video bị tải lại/giật về 0 mỗi lần render)
          if (vidEl.getAttribute('src') !== curVideoSrc) {
            vidEl.preload = 'metadata';
            vidEl.onerror = function () {
              if (cur.videoUrl) showToast('Không tìm thấy file video "' + decodeURI(cur.videoUrl) + '". Hãy để file .mp4 cùng thư mục với file HTML.', 'warn');
            };
            vidEl.src = curVideoSrc;
          }
          vidEl.poster = cur.poster || IMG_LY_NAM_DE;
          vidEl.classList.remove('hidden');
        }
        if (stageEl) stageEl.classList.add('hidden');
      } else {
        if (vidEl) {
          vidEl.pause();
          vidEl.classList.add('hidden');
        }
        if (stageEl) {
          stageEl.classList.remove('hidden');
          document.getElementById('animStageImg').src = cur.poster || IMG_LY_NAM_DE;
          document.getElementById('animEpisodeBadge').textContent = `🎥 ${cur.id} • Phim Hoạt Hình Lịch Sử Số`;
          document.getElementById('animStageTitle').textContent = cur.title;
          document.getElementById('animStageScript').textContent = cur.script;
        }
      }

      const box = document.getElementById('animEpisodeListContainer');
      if (box) {
        box.innerHTML = list.map((ep, idx) => {
          const active = idx === state.activeAnimIndex;
          return `
            <div onclick="selectAnimationEpisode(${idx})" class="cursor-pointer p-4 rounded-2xl border-2 ${active ? 'border-[#0F4C81] bg-blue-50/70' : 'border-slate-200 bg-white hover:bg-slate-50'} flex items-center gap-3.5 transition">
              <div class="relative w-24 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-300">
                <img decoding="async" loading="lazy" src="${ep.poster || IMG_LY_NAM_DE}" alt="${escapeHtml(ep.title)}" class="w-full h-full object-cover" />
                <span class="absolute bottom-1 right-1 bg-black/80 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded">${(ep.videoUrl || ep.videoDataUrl) ? '🎬 Video MP4' : ep.duration}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-[#0D9488] uppercase">${escapeHtml(ep.id)} ${(ep.videoUrl || ep.videoDataUrl) ? '• Đã gắn Video' : ''}</div>
                <div class="font-extrabold text-sm sm:text-base text-slate-900 truncate">${escapeHtml(ep.title)}</div>
                <p class="text-xs text-slate-600 line-clamp-1">${escapeHtml(ep.script)}</p>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    function selectAnimationEpisode(idx) {
      state.activeAnimIndex = idx;
      renderAnimationSection();
    }

    function playCurrentAnimationNarration() {
      const cur = state.animations[state.activeAnimIndex] || state.animations[0];
      if (!cur) return;
      speakText(cur.title + ". " + cur.script, 'vi-VN');
    }

    function handleAnimationVideoUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      showToast("Đang đọc và lưu vĩnh viễn tệp Video vào IndexedDB...", "info");
      readMediaFileAsDataUrl(file).then(videoDataUrl => {
        const titleInp = document.getElementById('newAnimTitleInput');
        const scriptInp = document.getElementById('newAnimScriptInput');
        const customTitle = titleInp && titleInp.value.trim();
        const customScript = scriptInp && scriptInp.value.trim();

        if (customTitle) {
          const newId = `ANIM-0${state.animations.length + 1}`;
          state.animations.unshift({
            id: newId,
            title: customTitle,
            duration: "Video tải lên",
            poster: IMG_LY_NAM_DE,
            videoDataUrl: videoDataUrl,
            script: customScript || ("Phim hoạt hình lịch sử: " + customTitle)
          });
          state.activeAnimIndex = 0;
          if (titleInp) titleInp.value = '';
          if (scriptInp) scriptInp.value = '';
        } else {
          const cur = state.animations[state.activeAnimIndex] || state.animations[0];
          cur.videoDataUrl = videoDataUrl;
          if (customScript) cur.script = customScript;
        }
        event.target.value = '';
        commitAndSaveState(`Đã lưu vĩnh viễn Video phim hoạt hình "${file.name}" vào bộ nhớ IndexedDB!`);
      });
    }

    function handleAnimationPosterUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      compressAndReadImage(file, 1150, 880, 0.82).then(imgUrl => {
        const cur = state.animations[state.activeAnimIndex] || state.animations[0];
        if (cur) cur.poster = imgUrl;
        event.target.value = '';
        commitAndSaveState("Đã lưu vĩnh viễn ảnh cảnh phim hoạt hình mới vào IndexedDB!");
      });
    }

    function addNewAnimationEpisodeText() {
      const titleInp = document.getElementById('newAnimTitleInput');
      const scriptInp = document.getElementById('newAnimScriptInput');
      const t = titleInp ? titleInp.value.trim() : '';
      const s = scriptInp ? scriptInp.value.trim() : '';
      if (!t && !s) {
        showToast("Hãy nhập tên tập phim hoặc nội dung thuyết minh tập phim!", "warn");
        return;
      }
      if (t) {
        state.animations.unshift({
          id: `ANIM-0${state.animations.length + 1}`,
          title: t,
          duration: "03:30",
          poster: IMG_LY_NAM_DE,
          videoDataUrl: null,
          script: s || ("Kịch bản phim hoạt hình lịch sử: " + t)
        });
        state.activeAnimIndex = 0;
      } else {
        const cur = state.animations[state.activeAnimIndex];
        if (cur && s) cur.script = s;
      }
      if (titleInp) titleInp.value = '';
      if (scriptInp) scriptInp.value = '';
      commitAndSaveState("Đã lưu tập phim hoạt hình vào bộ nhớ vĩnh viễn!");
    }

    // 4.2. Truyện tranh số (Digital Comic - Bộ ảnh Truyện Tranh Lịch Sử Lý Bí)
    let comicViewMode = 'grid';
    let activeComicPageIdx = 0;
    let activeComicLightboxIdx = 0;

    function setComicViewMode(mode) {
      comicViewMode = mode === 'single' ? 'single' : 'grid';
      renderComicsSection();
    }

    function stepComicPage(delta) {
      const list = state.comics || [];
      if (!list.length) return;
      activeComicPageIdx = (activeComicPageIdx + delta + list.length) % list.length;
      renderComicsSection();
    }

    function jumpComicPage(idx) {
      const list = state.comics || [];
      if (idx >= 0 && idx < list.length) {
        activeComicPageIdx = idx;
        renderComicsSection();
      }
    }

    function speakComicPage(idx, ev) {
      if (ev) ev.stopPropagation();
      const c = (state.comics || [])[idx];
      if (!c) return;
      speakText((c.caption || c.title || c.pageNumber || ''), 'vi-VN');
    }

    function openComicLightbox(idx) {
      const list = state.comics || [];
      if (!list[idx]) return;
      activeComicLightboxIdx = idx;
      const c = list[idx];
      const box = document.getElementById('comicLightbox');
      const img = document.getElementById('comicLightboxImg');
      const title = document.getElementById('comicLightboxTitle');
      const counter = document.getElementById('comicLightboxCounter');
      if (img) { img.src = c.img; img.alt = c.title || c.pageNumber || ''; }
      if (title) title.textContent = `${c.pageNumber || ('Trang ' + (idx + 1))}${c.title ? ' — ' + c.title : ''}`;
      if (counter) counter.textContent = `Trang ${idx + 1} / ${list.length} • Dùng phím ◀ ▶ để lật trang, ESC để đóng`;
      if (box) box.classList.remove('hidden');
    }

    function closeComicLightbox() {
      const box = document.getElementById('comicLightbox');
      if (box) box.classList.add('hidden');
    }

    function stepComicLightbox(delta, ev) {
      if (ev) ev.stopPropagation();
      const list = state.comics || [];
      if (!list.length) return;
      openComicLightbox((activeComicLightboxIdx + delta + list.length) % list.length);
    }

    function bindComicKeyboardNav() {
      if (window.__comicImgKeyBound) return;
      window.__comicImgKeyBound = true;
      document.addEventListener('keydown', (e) => {
        const box = document.getElementById('comicLightbox');
        const lbOpen = box && !box.classList.contains('hidden');
        if (lbOpen) {
          if (e.key === 'Escape') closeComicLightbox();
          else if (e.key === 'ArrowRight') stepComicLightbox(1);
          else if (e.key === 'ArrowLeft') stepComicLightbox(-1);
          return;
        }
        if (state.activeSection === 'cat1' && state.storySubTab === 'story-comic' && comicViewMode === 'single') {
          const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '';
          if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable)) return;
          if (e.key === 'ArrowRight') stepComicPage(1);
          else if (e.key === 'ArrowLeft') stepComicPage(-1);
        }
      });
    }

    function renderComicsSection() {
      bindComicKeyboardNav();
      if (!Array.isArray(state.comics) || !state.comics.length) {
        state.comics = INITIAL_COMIC_PAGES.map(x => Object.assign({}, x));
      }
      const list = state.comics;
      if (activeComicPageIdx >= list.length) activeComicPageIdx = 0;

      const gridBtn = document.getElementById('comicModeGridBtn');
      const bookBtn = document.getElementById('comicModeBookBtn');
      const grid = document.getElementById('comicPagesGrid');
      const single = document.getElementById('comicSingleReader');

      if (gridBtn && bookBtn) {
        gridBtn.className = comicViewMode === 'grid'
          ? 'px-3.5 py-2 rounded-xl text-sm font-bold bg-[#0F4C81] text-white shadow transition'
          : 'px-3.5 py-2 rounded-xl text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-blue-50 transition';
        bookBtn.className = comicViewMode === 'single'
          ? 'px-3.5 py-2 rounded-xl text-sm font-bold bg-[#0F4C81] text-white shadow transition'
          : 'px-3.5 py-2 rounded-xl text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-blue-50 transition';
      }

      if (grid) {
        grid.classList.toggle('hidden', comicViewMode !== 'grid');
        if (comicViewMode === 'grid') {
          grid.innerHTML = list.map((c, idx) => `
            <figure class="archive-card rounded-2xl overflow-hidden flex flex-col border border-slate-200 bg-white shadow-sm">
              <div class="relative bg-slate-100 flex-1 flex items-center justify-center cursor-pointer group" onclick="openComicLightbox(${idx})">
                <img decoding="async" src="${c.img}" alt="${escapeHtml(c.title || c.pageNumber)}" loading="lazy" class="w-full h-auto block object-contain group-hover:opacity-95 transition" />
              </div>
              <figcaption class="px-3 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
                <span class="font-extrabold text-[#0F4C81] truncate">${escapeHtml(c.pageNumber || ('Trang ' + (idx + 1)))}</span>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button type="button" onclick="openComicLightbox(${idx})" class="bg-blue-50 hover:bg-blue-100 text-[#0F4C81] font-bold px-2 py-1 rounded-lg" title="Phóng to đọc rõ">🔍</button>
                  <button type="button" onclick="speakComicPage(${idx}, event)" class="bg-teal-50 hover:bg-teal-100 text-[#0D9488] font-bold px-2 py-1 rounded-lg" title="Nghe đọc trang này">🎙️</button>
                </div>
              </figcaption>
            </figure>
          `).join('');
        }
      }

      if (single) {
        single.classList.toggle('hidden', comicViewMode !== 'single');
        if (comicViewMode === 'single') {
          const c = list[activeComicPageIdx];
          single.innerHTML = `
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="font-extrabold text-base text-[#0F4C81]">
                  📖 ${escapeHtml(c.pageNumber || ('Trang ' + (activeComicPageIdx + 1)))} <span class="text-slate-500 font-semibold text-sm">(${activeComicPageIdx + 1} / ${list.length})</span>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                  <button type="button" onclick="speakComicPage(${activeComicPageIdx}, event)" class="bg-[#0D9488] hover:bg-teal-700 text-white text-sm font-bold px-3.5 py-2 rounded-xl shadow">🎙️ Nghe đọc trang này</button>
                  <button type="button" onclick="openComicLightbox(${activeComicPageIdx})" class="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-bold px-3 py-2 rounded-xl">🔍 Phóng to</button>
                  <button type="button" onclick="stepComicPage(-1)" class="bg-white hover:bg-blue-50 text-slate-800 border border-slate-300 text-sm font-bold px-3.5 py-2 rounded-xl">◀ Trước</button>
                  <button type="button" onclick="stepComicPage(1)" class="bg-[#0F4C81] hover:bg-blue-900 text-white text-sm font-bold px-3.5 py-2 rounded-xl">Sau ▶</button>
                </div>
              </div>
              <div class="flex justify-center">
                <img decoding="async" loading="lazy" src="${c.img}" alt="${escapeHtml(c.title || c.pageNumber)}" onclick="openComicLightbox(${activeComicPageIdx})" class="max-h-[78vh] w-auto max-w-full rounded-xl border border-slate-300 shadow-lg bg-white object-contain cursor-pointer" />
              </div>
              <div class="flex flex-wrap justify-center gap-1.5 pt-2">
                ${list.map((p, i) => `
                  <button type="button" onclick="jumpComicPage(${i})" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${i === activeComicPageIdx ? 'bg-[#0F4C81] text-white shadow' : 'bg-white text-slate-700 border border-slate-300 hover:bg-blue-50'}">
                    ${escapeHtml(p.pageNumber || ('Trang ' + (i + 1)))}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }
      }
    }

    function triggerReplaceComicImage(idx) {
      replacingComicIndex = idx;
      const inp = document.getElementById('replaceSingleComicImgInput');
      if (inp) {
        inp.value = '';
        inp.click();
      }
    }

    function handleReplaceSingleComicImg(event) {
      const file = event.target.files && event.target.files[0];
      if (!file || replacingComicIndex === null) return;
      const idx = replacingComicIndex;
      compressAndReadImage(file, 1200, 1700, 0.86).then(imgUrl => {
        if (state.comics[idx]) {
          state.comics[idx].img = imgUrl;
          commitAndSaveState(`Đã cập nhật ảnh ${state.comics[idx].pageNumber || ('Trang ' + (idx + 1))}!`);
        }
        event.target.value = '';
      });
    }

    function handleAddComicPageUpload(event) {
      const files = Array.from((event.target && event.target.files) || []);
      if (!files.length) return;
      Promise.all(files.map(f => compressAndReadImage(f, 1200, 1700, 0.86))).then(urls => {
        urls.forEach((imgUrl, k) => {
          const nextNum = state.comics.length + 1;
          state.comics.push({
            id: `LB-CUSTOM-${Date.now()}-${k}`,
            pageNumber: `Trang bổ sung ${nextNum}`,
            title: files[k] ? files[k].name.replace(/\.[^.]+$/, '') : `Trang bổ sung ${nextNum}`,
            img: imgUrl,
            caption: `Trang truyện tranh bổ sung số ${nextNum}.`
          });
        });
        event.target.value = '';
        commitAndSaveState(`Đã thêm ${urls.length} trang ảnh vào Truyện Tranh Số!`);
      });
    }

    function resetComicPagesDefault() {
      if (!confirm('Khôi phục mục Truyện Tranh Số về bộ 11 ảnh mặc định?')) return;
      state.comics = INITIAL_COMIC_PAGES.map(x => Object.assign({}, x));
      activeComicPageIdx = 0;
      commitAndSaveState('Đã khôi phục bộ 11 trang truyện tranh mặc định!');
    }

    // 4.4. Bộ học liệu trải nghiệm
    function renderExperientialKits() {
      const grid = document.getElementById('experientialKitsGrid');
      if (!grid) return;
      grid.innerHTML = state.experientialKits.map((k, idx) => `
        <div class="archive-card rounded-2xl overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-44 bg-slate-900 overflow-hidden">
              <img decoding="async" loading="lazy" src="${k.img || IMG_HERO_TEMPLE}" alt="${escapeHtml(k.title)}" class="w-full h-full object-cover" />
              <span class="absolute top-3 left-3 bg-[#0D9488] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                🎒 ${escapeHtml(k.type)}
              </span>
            </div>
            <div class="p-5 space-y-2">
              <h4 class="font-extrabold text-lg text-slate-900">${escapeHtml(k.title)}</h4>
              <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(k.desc)}</p>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-slate-100">
            <button type="button" onclick="${idx === 0 ? 'downloadLessonPlanDoc()' : 'downloadFieldWorksheet()'}" class="flex-1 bg-[#0F4C81] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition">
              📥 Tải Học Liệu
            </button>
          </div>
        </div>
      `).join('');
    }

    function addNewExperientialKit() {
      const titleInp = document.getElementById('newKitTitleInput');
      const descInp = document.getElementById('newKitDescInput');
      const fileInp = document.getElementById('newKitFileInput');
      const title = titleInp ? titleInp.value.trim() : '';
      const desc = descInp ? descInp.value.trim() : '';

      if (!title) {
        showToast("Vui lòng nhập Tên bộ học liệu trải nghiệm!", "warn");
        return;
      }

      const saveKitItem = (imgUrl) => {
        state.experientialKits.unshift({
          id: `KIT-0${state.experientialKits.length + 1}`,
          title: title,
          type: "Học liệu trải nghiệm bổ sung",
          img: imgUrl || IMG_STELE_ARTIFACTS,
          desc: desc || ("Tài liệu học tập trải nghiệm thực địa tại Di tích Quốc gia Chùa Hương Ấp: " + title)
        });
        if (titleInp) titleInp.value = '';
        if (descInp) descInp.value = '';
        if (fileInp) fileInp.value = '';
        commitAndSaveState(`Đã lưu bộ học liệu trải nghiệm "${title}" vào bộ nhớ vĩnh viễn!`);
      };

      if (fileInp && fileInp.files && fileInp.files[0]) {
        const f = fileInp.files[0];
        if (f.type.startsWith('image/')) {
          compressAndReadImage(f, 1100, 850, 0.82).then(saveKitItem);
        } else {
          saveKitItem(IMG_STELE_ARTIFACTS);
        }
      } else {
        saveKitItem(IMG_STELE_ARTIFACTS);
      }
    }

    function addQuickQuizQuestion() {
      const q = document.getElementById('quickQuizQ').value.trim();
      const cor = document.getElementById('quickQuizCorrect').value.trim();
      const wr = document.getElementById('quickQuizWrongs').value.trim();
      const cite = (document.getElementById('quickQuizCite').value.trim()) || 'HA-VB-01';
      if (!q || !cor) {
        showToast("Vui lòng nhập Câu hỏi và Phương án đúng!", "warn");
        return;
      }
      const wrongs = wr ? wr.split(',').map(s => s.trim()).filter(Boolean) : ["Phương án nhiễu 1", "Phương án nhiễu 2", "Phương án nhiễu 3"];
      while (wrongs.length < 3) wrongs.push("Phương án nhiễu khác");

      state.quizQuestions.unshift({
        q: q,
        options: [cor, wrongs[0], wrongs[1], wrongs[2]],
        correct: 0,
        citeCode: cite,
        gapTopic: "Trò chơi trắc nghiệm Kể chuyện lịch sử",
        gapAdvice: `Đáp án đúng là: ${cor} (Đối chiếu hiện vật khảo cổ mã ${cite}).`
      });
      document.getElementById('quickQuizQ').value = '';
      document.getElementById('quickQuizCorrect').value = '';
      document.getElementById('quickQuizWrongs').value = '';
      resetQuiz();
      commitAndSaveState("Đã thêm câu hỏi mới vào Trò chơi trắc nghiệm và lưu vĩnh viễn!");
    }

    // =========================================================================
    // 5. MỤC 3: BẢO TỒN KÝ ỨC VÀ TRI THỨC CỘNG ĐỒNG
    // (3.1. Kho tư liệu đối chiếu xưa và nay | 3.2. Góc ký ức làng Cổ Pháp | 3.3. Không gian đóng góp tư liệu cộng đồng)
    // =========================================================================
    function renderComparePairsSection() {
      const list = state.comparePairs;
      if (state.activeCompareIndex >= list.length) state.activeCompareIndex = 0;
      const cur = list[state.activeCompareIndex] || list[0];

      if (cur) {
        const tEl = document.getElementById('activeComparePairTitle');
        const dEl = document.getElementById('activeComparePairDesc');
        const bEl = document.getElementById('beforeAncientImg');
        const aEl = document.getElementById('after3dImg');
        if (tEl) tEl.textContent = cur.title;
        if (dEl) dEl.textContent = cur.desc;
        if (bEl) bEl.src = cur.beforeImg;
        if (aEl) aEl.src = cur.afterImg;
      }

      const grid = document.getElementById('comparePairsGalleryGrid');
      if (grid) {
        grid.innerHTML = list.map((p, idx) => {
          const active = idx === state.activeCompareIndex;
          return `
            <div onclick="selectComparePair(${idx})" class="cursor-pointer p-4 rounded-2xl border-2 ${active ? 'border-[#0F4C81] bg-blue-50/70 shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50'} space-y-2.5 transition">
              <div class="grid grid-cols-2 gap-2 h-28">
                <div class="relative rounded-xl overflow-hidden bg-slate-900">
                  <img decoding="async" loading="lazy" src="${p.beforeImg}" alt="Xưa" class="w-full h-full object-cover" />
                  <span class="absolute bottom-1 left-1 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">XƯA</span>
                </div>
                <div class="relative rounded-xl overflow-hidden bg-slate-900">
                  <img decoding="async" loading="lazy" src="${p.afterImg}" alt="Nay" class="w-full h-full object-cover" />
                  <span class="absolute bottom-1 right-1 bg-[#0F4C81] text-white text-[10px] font-extrabold px-2 py-0.5 rounded">NAY</span>
                </div>
              </div>
              <div class="font-extrabold text-sm sm:text-base text-slate-900">${escapeHtml(p.title)}</div>
              <p class="text-xs text-slate-600 line-clamp-2">${escapeHtml(p.desc)}</p>
            </div>
          `;
        }).join('');
      }
      setTimeout(syncBeforeAfterWidth, 60);
    }

    function selectComparePair(idx) {
      state.activeCompareIndex = idx;
      renderComparePairsSection();
    }

    function handleUploadBeforeAfterImage(event, side) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      compressAndReadImage(file, 1200, 880, 0.82).then(imgUrl => {
        const cur = state.comparePairs[state.activeCompareIndex] || state.comparePairs[0];
        if (cur) {
          if (side === 'before') cur.beforeImg = imgUrl;
          else cur.afterImg = imgUrl;
        }
        event.target.value = '';
        commitAndSaveState(`Đã cập nhật và lưu vĩnh viễn ảnh ${side === 'before' ? 'XƯA' : 'NAY'} vào Kho tư liệu đối chiếu!`);
      });
    }

    function saveNewComparePair() {
      const titleInp = document.getElementById('newCompareTitleInput');
      const title = (titleInp && titleInp.value.trim()) ? titleInp.value.trim() : "Chùa Hương Ấp xưa và nay";
      const cur = state.comparePairs[state.activeCompareIndex] || state.comparePairs[0];
      state.comparePairs.unshift({
        id: `CMP-0${state.comparePairs.length + 1}`,
        title: title,
        desc: "Cặp tư liệu đối chiếu Xưa và Nay được giáo viên, học sinh và nhân dân cập nhật vào Kho học liệu số Chùa Hương Ấp.",
        beforeImg: cur ? cur.beforeImg : IMG_HERO_TEMPLE,
        afterImg: cur ? cur.afterImg : IMG_3D_MASTERPLAN
      });
      state.activeCompareIndex = 0;
      if (titleInp) titleInp.value = '';
      commitAndSaveState(`Đã thêm cặp tư liệu đối chiếu "${title}" và lưu vĩnh viễn!`);
    }

    // 5.2. Góc ký ức làng Cổ Pháp
    function renderCoPhapMemories() {
      const grid = document.getElementById('coPhapMemoriesGrid');
      if (!grid) return;
      grid.innerHTML = state.coPhapMemories.map((m) => {
        let mediaHtml = '';
        if (m.mediaType === 'video' && m.mediaUrl) {
          mediaHtml = `<video src="${m.mediaUrl}" controls class="w-full h-52 object-cover bg-black rounded-t-2xl"></video>`;
        } else if (m.mediaType === 'audio' && m.mediaUrl) {
          mediaHtml = `
            <div class="h-36 bg-gradient-to-r from-[#0F4C81] to-[#0D9488] flex flex-col items-center justify-center p-4 rounded-t-2xl text-white">
              <span class="text-xs font-bold uppercase text-amber-300 mb-2">🎙️ Tư Liệu Ghi Âm Nhân Chứng Làng Cổ Pháp</span>
              <audio src="${m.mediaUrl}" controls class="w-full"></audio>
            </div>`;
        } else {
          mediaHtml = `
            <div class="relative h-52 bg-slate-900 overflow-hidden rounded-t-2xl">
              <img decoding="async" loading="lazy" src="${m.mediaUrl || IMG_HERO_TEMPLE}" alt="${escapeHtml(m.title)}" class="w-full h-full object-cover" />
              <span class="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow">
                🌾 Ký Ức Làng Cổ Pháp
              </span>
            </div>`;
        }
        return `
          <div class="archive-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200">
            <div>
              ${mediaHtml}
              <div class="p-5 space-y-2">
                <div class="text-xs font-extrabold text-[#0D9488] uppercase">👤 Nhân chứng / Nguồn: ${escapeHtml(m.narrator)}</div>
                <h4 class="font-extrabold text-lg text-slate-900">${escapeHtml(m.title)}</h4>
                <p class="text-base text-slate-700 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  "${escapeHtml(m.story)}"
                </p>
              </div>
            </div>
            <div class="px-5 pb-4 flex flex-wrap items-center justify-between gap-2">
              <button type="button" onclick="speakText('${escapeHtml(m.title)}. ${escapeHtml(m.story)}', 'vi-VN')" class="text-sm font-bold text-[#0F4C81] hover:underline">
                🎙️ Nghe đọc tư liệu
              </button>

            </div>
          </div>
        `;
      }).join('');
    }

    function addCoPhapMemoryItem() {
      const tInp = document.getElementById('cpMemTitleInput');
      const nInp = document.getElementById('cpMemNarratorInput');
      const sInp = document.getElementById('cpMemStoryInput');
      const fInp = document.getElementById('cpMemMediaInput');

      const title = tInp ? tInp.value.trim() : '';
      const narrator = (nInp && nInp.value.trim()) ? nInp.value.trim() : "Nhân chứng cao niên làng Cổ Pháp, phường Vạn Xuân";
      const story = sInp ? sInp.value.trim() : '';

      if (!title && !story) {
        showToast("Vui lòng nhập Tiêu đề hoặc Nội dung câu chuyện ký ức làng Cổ Pháp!", "warn");
        return;
      }

      const finalizeMemory = (mType, mUrl) => {
        state.coPhapMemories.unshift({
          id: `CPM-0${state.coPhapMemories.length + 1}`,
          title: title || "Ký ức văn hóa - lịch sử làng Cổ Pháp",
          narrator: narrator,
          story: story || ("Tư liệu ký ức do " + narrator + " cung cấp và đóng góp vào Kho học liệu số."),
          mediaType: mType,
          mediaUrl: mUrl
        });
        if (tInp) tInp.value = '';
        if (nInp) nInp.value = '';
        if (sInp) sInp.value = '';
        if (fInp) fInp.value = '';
        commitAndSaveState("Đã lưu tư liệu mới vào Góc ký ức làng Cổ Pháp (Lưu vĩnh viễn trong IndexedDB)!");
      };

      if (fInp && fInp.files && fInp.files[0]) {
        const file = fInp.files[0];
        const mType = file.type.startsWith('video/') ? 'video' : (file.type.startsWith('audio/') ? 'audio' : 'image');
        readMediaFileAsDataUrl(file).then(dataUrl => finalizeMemory(mType, dataUrl));
      } else {
        finalizeMemory('image', IMG_HERO_TEMPLE);
      }
    }

    // =========================================================================
    // 6. MODAL METADATA, BẢN ĐỒ, TRẮC NGHIỆM, THƯ VIỆN THUYẾT MINH
    // =========================================================================
    function openMetadataModal(relicId) {
      const a = state.artifacts.find(x => x.id === relicId) || state.artifacts[0];
      if (!a) return;
      state.selectedRelicId = a.id;

      document.getElementById('metaModalCode').textContent = a.id;
      document.getElementById('metaModalTitle').textContent = a.name;
      document.getElementById('metaModalImg').src = a.img;
      document.getElementById('metaModalQrCode').textContent = a.qr || ('QR-' + a.id);

      document.getElementById('metaField1').textContent = a.id;
      document.getElementById('metaField2').textContent = a.name;
      document.getElementById('metaField3').textContent = a.type;
      document.getElementById('metaField4').textContent = a.era;
      document.getElementById('metaField5').textContent = a.location;
      document.getElementById('metaField6').textContent = `${a.desc} (${a.condition})`;
      document.getElementById('metaField7').textContent = a.source || "Hồ sơ di tích quốc gia 2014 & THCS Phổ Yên";
      document.getElementById('metaField8').textContent = a.rights || "Học liệu mở phục vụ giáo dục";

      const editBtn = document.getElementById('metaModalEditBtn');
      if (editBtn) {
        editBtn.onclick = function () {
          closeModal('metadataModal');
          openCmsToEditRelic(a.id);
        };
      }

      drawQrMatrixOnCanvas(a.id);
      const haOnly = isHaRelic(a);
      ['metaModalCode', 'metaRowCode', 'metaQrHeader', 'qrCanvasDisplay', 'metaModalQrCode', 'metaPrintQrBtn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = haOnly ? 'none' : '';
      });
      openModal('metadataModal');
    }

    function drawQrMatrixOnCanvas(codeStr) {
      const canvas = document.getElementById('qrCanvasDisplay');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const size = 130;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);

      const cells = 15;
      const cellSize = Math.floor((size - 10) / cells);
      const offset = 5;

      let hash = 2166136261;
      for (let i = 0; i < codeStr.length; i++) {
        hash ^= codeStr.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }

      ctx.fillStyle = '#0F172A';
      for (let r = 0; r < cells; r++) {
        for (let c = 0; c < cells; c++) {
          const inTL = r < 4 && c < 4;
          const inTR = r < 4 && c >= cells - 4;
          const inBL = r >= cells - 4 && c < 4;
          if (inTL || inTR || inBL) {
            const isBorder = r === 0 || r === 3 || c === 0 || c === 3 || r === cells - 1 || r === cells - 4 || c === cells - 1 || c === cells - 4;
            const isCenter = (r >= 1 && r <= 2 && c >= 1 && c <= 2) || (r >= 1 && r <= 2 && c >= cells - 3 && c <= cells - 2) || (r >= cells - 3 && r <= cells - 2 && c >= 1 && c <= 2);
            if (isBorder || isCenter) {
              ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize - 1, cellSize - 1);
            }
          } else {
            const bit = ((hash >> ((r * cells + c) % 24)) ^ (r * 7 + c * 13)) & 1;
            if (bit) {
              ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize - 1, cellSize - 1);
            }
          }
        }
      }
    }

    function printQrLabel() {
      const a = state.artifacts.find(x => x.id === state.selectedRelicId) || state.artifacts[0];
      showToast(`Đã chuẩn bị nhãn in Mã QR thực địa: ${a.qr || ('QR-' + a.id)} (${a.name})`, "success");
    }

    function speakCurrentMetadataModal() {
      const a = state.artifacts.find(x => x.id === state.selectedRelicId) || state.artifacts[0];
      if (!a) return;
      speakText(`Em xin thuyết minh về hiện vật ${a.name}${isHaRelic(a) ? '' : ', mã số ' + a.id}. Đây là hiện vật thuộc loại hình ${a.type}, có niên đại ${a.era}, hiện đang được lưu giữ tại ${a.location}. ${a.desc}`, 'vi-VN');
    }

    function renderMapPoiList() {
      const container = document.getElementById('mapPoiListContainer');
      if (!container) return;
      container.innerHTML = state.mapPois.map((poi, idx) => `
        <button
          type="button"
          onclick="focusMapPoi(${idx})"
          class="w-full p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-blue-50/70 hover:border-[#0F4C81] text-left transition space-y-1.5"
        >
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-[#0F4C81] bg-white px-2.5 py-0.5 rounded-lg border border-blue-200">${escapeHtml(poi.badge)}</span>
            <span class="text-xs font-mono text-slate-500">${poi.lat.toFixed(4)}° B, ${poi.lng.toFixed(4)}° Đ</span>
          </div>
          <div class="font-extrabold text-base text-slate-900">${escapeHtml(poi.name)}</div>
          <p class="text-sm text-slate-700">${escapeHtml(poi.desc)}</p>
        </button>
      `).join('');
    }

    function initLeafletMap() {
      const mapEl = document.getElementById('heritageLeafletMap');
      if (!mapEl || typeof L === 'undefined') return;

      if (!leafletMap) {
        leafletMap = L.map('heritageLeafletMap').setView([21.4182, 105.9015], 14);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
          attribution: '© Bản đồ Di sản Số Chùa Hương Ấp | Trường THCS Phổ Yên',
          maxZoom: 19
        }).addTo(leafletMap);
      }

      leafletMarkers.forEach(m => leafletMap.removeLayer(m));
      leafletMarkers = [];
      if (leafletPolyline) {
        leafletMap.removeLayer(leafletPolyline);
      }

      const coordsList = [];
      state.mapPois.forEach((poi) => {
        coordsList.push([poi.lat, poi.lng]);
        const marker = L.marker([poi.lat, poi.lng]).addTo(leafletMap);
        marker.bindPopup(`
          <div style="font-family:'Be Vietnam Pro',sans-serif;max-width:240px;">
            <div style="font-size:11px;font-weight:700;color:#0D9488;text-transform:uppercase;">${escapeHtml(poi.badge)}</div>
            <div style="font-size:14px;font-weight:800;color:#0F4C81;margin:3px 0;">${escapeHtml(poi.name)}</div>
            <div style="font-size:12px;color:#334155;">${escapeHtml(poi.desc)}</div>
          </div>
        `);
        marker.on('click', () => {
          updateSelectedPoiCard(poi);
          const autoSpeak = document.getElementById('autoAudioMapToggle');
          if (autoSpeak && autoSpeak.checked) {
            speakText("Em xin thuyết minh về điểm di tích: " + poi.name + ". " + poi.desc, 'vi-VN');
          }
        });
        leafletMarkers.push(marker);
      });

      leafletPolyline = L.polyline(coordsList, {
        color: '#0F4C81',
        weight: 4,
        dashArray: '6, 10'
      }).addTo(leafletMap);
    }

    function focusMapPoi(idx) {
      const poi = state.mapPois[idx];
      if (!poi) return;
      updateSelectedPoiCard(poi);
      if (leafletMap && leafletMarkers[idx]) {
        leafletMap.setView([poi.lat, poi.lng], 15, { animate: true });
        leafletMarkers[idx].openPopup();
      }
      const autoSpeak = document.getElementById('autoAudioMapToggle');
      if (autoSpeak && autoSpeak.checked) {
        speakText("Em xin thuyết minh về điểm di tích: " + poi.name + ". " + poi.desc, 'vi-VN');
      }
    }

    function updateSelectedPoiCard(poi) {
      document.getElementById('poiDetailCoord').textContent = `📍 ${poi.lat.toFixed(4)}° B, ${poi.lng.toFixed(4)}° Đ`;
      document.getElementById('poiDetailType').textContent = poi.badge;
      document.getElementById('poiDetailTitle').textContent = poi.name;
      document.getElementById('poiDetailDesc').textContent = poi.desc;
      document.getElementById('poiDetailDigitalContent').textContent = "📦 Học liệu tích hợp: " + (poi.digital || "Thuyết minh học sinh & Kho hiện vật khảo cổ");
    }

    function toggleStoryMapAutoTour() {
      const btn = document.getElementById('btnStoryMapTour');
      if (state.storyMapPlaying) {
        state.storyMapPlaying = false;
        if (state.storyMapTimer) clearInterval(state.storyMapTimer);
        if (btn) btn.innerHTML = `<span>▶ Chạy Hành Trình Tự Động (6 Điểm)</span>`;
        stopSpeech();
        showToast("Đã dừng hành trình tự động trên bản đồ.", "info");
        return;
      }

      state.storyMapPlaying = true;
      state.storyMapStep = 0;
      if (btn) btn.innerHTML = `<span>⏹ Dừng Hành Trình Tự Động</span>`;
      focusMapPoi(0);
      showToast("Đang chạy hành trình tự động qua 6 điểm di tích!", "success");

      if (state.storyMapTimer) clearInterval(state.storyMapTimer);
      state.storyMapTimer = setInterval(() => {
        if (!state.storyMapPlaying) return;
        state.storyMapStep = (state.storyMapStep + 1) % state.mapPois.length;
        focusMapPoi(state.storyMapStep);
      }, 6500);
    }

    function speakSelectedPoi() {
      const title = document.getElementById('poiDetailTitle').textContent;
      const desc = document.getElementById('poiDetailDesc').textContent;
      speakText("Em xin thuyết minh về điểm di tích: " + title + ". " + desc, 'vi-VN');
    }

    // =========================================================================
    // 7. CỔNG QUẢN TRỊ & ĐỔI ẢNH 1 CHẠM CHO CÁC HIỆN VẬT KHẢO CỔ
    // =========================================================================
    function openCmsToEditRelic(relicId) {
      switchSection('cms');
      if (relicId) {
        const sel = document.getElementById('cmsSelectExistingRelic');
        if (sel) sel.value = relicId;
        loadRelicIntoCmsForm(relicId);
      } else {
        resetCmsRelicForm();
      }
    }

    function loadRelicIntoCmsForm(relicId) {
      if (!relicId) {
        resetCmsRelicForm();
        return;
      }
      const a = state.artifacts.find(x => x.id === relicId);
      if (!a) return;

      const hdr = document.getElementById('cmsRelicFormHeader');
      if (!hdr) return;
      const setV = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
      hdr.textContent = `✏️ Đang Chỉnh Sửa Hiện Vật: [${a.id}]`;
      setV('newArtCode', a.id);
      setV('newArtGroup', a.group || (a.id.startsWith('CP') ? 'CP' : 'HA'));
      setV('newArtName', a.name);
      setV('newArtType', a.type);
      setV('newArtEra', a.era);
      setV('newArtLocation', a.location);
      setV('newArtCondition', a.condition);
      setV('newArtDesc', a.desc);
      setV('newArtSource', a.source || "Hồ sơ di tích quốc gia 2014");
      setV('newArtRights', a.rights || "Học liệu mở phục vụ giáo dục");

      const delBtn = document.getElementById('btnDeleteRelicCms');
      if (delBtn) delBtn.classList.remove('hidden');
      showToast(`Đã nạp hiện vật [${a.id}] lên biểu mẫu để chỉnh sửa!`, "info");
    }

    function resetCmsRelicForm() {
      const hdr = document.getElementById('cmsRelicFormHeader');
      if (!hdr) return;
      const sel = document.getElementById('cmsSelectExistingRelic');
      if (sel) sel.value = '';
      const nextNum = state.artifacts.length + 1;
      const setV = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
      hdr.textContent = "1. Đẩy Hiện Vật Khảo Cổ Mới / Chỉnh Sửa Chi Tiết";
      setV('newArtCode', `HA-DT-${nextNum}`);
      setV('newArtName', '');
      setV('newArtType', 'Cổ vật khảo cổ');
      setV('newArtEra', 'Thời Nguyễn');
      setV('newArtLocation', 'Chùa Hương Ấp, phường Vạn Xuân');
      setV('newArtCondition', `Tốt; QR: QR-HA-${nextNum}`);
      setV('newArtDesc', '');
      const delBtn = document.getElementById('btnDeleteRelicCms');
      if (delBtn) delBtn.classList.add('hidden');
    }

    function saveOrUpdateRelicFromCms() {
      const code = document.getElementById('newArtCode').value.trim() || (`HA-DT-${state.artifacts.length + 1}`);
      const group = document.getElementById('newArtGroup').value;
      const name = document.getElementById('newArtName').value.trim();
      const type = document.getElementById('newArtType').value.trim() || "Cổ vật";
      const era = document.getElementById('newArtEra').value.trim() || "Thời Nguyễn";
      const loc = document.getElementById('newArtLocation').value.trim() || "Chùa Hương Ấp";
      const cond = document.getElementById('newArtCondition').value.trim() || (`Tốt; QR: QR-${code}`);
      const desc = document.getElementById('newArtDesc').value.trim() || ("Học liệu số hóa thuộc Dự án KHKT Trường THCS Phổ Yên: " + name);
      const src = document.getElementById('newArtSource').value.trim() || "Hồ sơ di tích quốc gia 2014";
      const rights = document.getElementById('newArtRights').value.trim() || "Học liệu mở phục vụ giáo dục";
      const imgInput = document.getElementById('newArtImgInput');

      if (!name) {
        showToast("Vui lòng nhập Tên gọi khoa học của Hiện vật!", "warn");
        return;
      }

      const commitSave = (uploadedImgUrl) => {
        const existingIdx = state.artifacts.findIndex(x => x.id.toLowerCase() === code.toLowerCase());
        const record = {
          id: code,
          name: name,
          type: type,
          era: era,
          location: loc,
          condition: cond,
          qr: `QR-${code}`,
          group: group,
          desc: desc,
          source: src,
          rights: rights,
          img: uploadedImgUrl || (existingIdx >= 0 ? state.artifacts[existingIdx].img : IMG_STELE_ARTIFACTS),
          customImgUpdated: Boolean(uploadedImgUrl || (existingIdx >= 0 && state.artifacts[existingIdx].customImgUpdated))
        };

        if (existingIdx >= 0) {
          state.artifacts[existingIdx] = record;
        } else {
          state.artifacts.unshift(record);
        }

        commitAndSaveState(`Đã lưu vĩnh viễn hiện vật khảo cổ [${code}] "${name}" vào bộ nhớ IndexedDB!`);
        const logEl = document.getElementById('uploadStatusLog');
        if (logEl) {
          logEl.innerHTML = `✅ <strong>Đã lưu vĩnh viễn hiện vật [${escapeHtml(code)}] "${escapeHtml(name)}" vào cơ sở dữ liệu IndexedDB!</strong> Tắt máy hay mở lại trang vẫn giữ nguyên 100% hình ảnh và thông tin.`;
        }
      };

      if (imgInput && imgInput.files && imgInput.files[0]) {
        compressAndReadImage(imgInput.files[0], 1150, 880, 0.82).then(compressedDataUrl => {
          imgInput.value = '';
          commitSave(compressedDataUrl);
        });
      } else {
        commitSave(null);
      }
    }

    function addNewArtifactFromBuilder() {
      saveOrUpdateRelicFromCms();
    }

    function deleteSelectedRelicFromCms() {
      const code = document.getElementById('newArtCode').value.trim();
      const idx = state.artifacts.findIndex(x => x.id === code);
      if (idx >= 0) {
        const removed = state.artifacts.splice(idx, 1)[0];
        try { const rl = JSON.parse(localStorage.getItem('huongap_ha_kc_removed') || '[]'); rl.push(removed.id); localStorage.setItem('huongap_ha_kc_removed', JSON.stringify(rl)); } catch (e) { }
        resetCmsRelicForm();
        commitAndSaveState(`Đã xóa học liệu [${removed.id}] khỏi danh sách.`);
      }
    }

    function triggerQuickRelicImageSelect(relicId) {
      quickEditingRelicId = relicId;
      const inp = document.getElementById('quickSingleRelicImgInput');
      if (inp) {
        inp.value = '';
        inp.click();
      }
    }

    function handleQuickSingleRelicImageChange(event) {
      const file = event.target.files && event.target.files[0];
      if (!file || !quickEditingRelicId) return;
      const targetId = quickEditingRelicId;
      compressAndReadImage(file, 1150, 880, 0.82).then(compressedDataUrl => {
        const idx = state.artifacts.findIndex(x => x.id === targetId);
        if (idx >= 0) {
          state.artifacts[idx].img = compressedDataUrl;
          state.artifacts[idx].customImgUpdated = true;
          const modalImg = document.getElementById('metaModalImg');
          if (modalImg && state.selectedRelicId === targetId) {
            modalImg.src = compressedDataUrl;
          }
          commitAndSaveState(`Đã cập nhật và lưu vĩnh viễn ảnh mới cho hiện vật [${targetId}]!`);
          const logEl = document.getElementById('uploadStatusLog');
          if (logEl) {
            logEl.innerHTML = `✅ <strong>Đã cập nhật và lưu vĩnh viễn ảnh mới cho hiện vật [${escapeHtml(targetId)}] "${escapeHtml(state.artifacts[idx].name)}"!</strong> Ảnh đã được nén chuẩn HD và lưu an toàn vào cơ sở dữ liệu <code>IndexedDB</code>.`;
          }
        }
        event.target.value = '';
      });
    }

    function renderCmsQuickImageGrid() {
      const box = document.getElementById('cmsQuickImageGrid');
      if (!box) return;
      box.innerHTML = state.artifacts.map(a => `
        <div class="bg-white p-2.5 rounded-xl border ${a.customImgUpdated ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200'} flex flex-col justify-between gap-2 shadow-sm">
          <div>
            <div class="relative h-24 rounded-lg overflow-hidden bg-slate-900">
              <img decoding="async" loading="lazy" src="${a.img}" alt="${escapeHtml(a.name)}" class="w-full h-full object-cover" />
              <span class="absolute top-1 left-1 bg-[#0F4C81] text-white font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">${escapeHtml(a.id)}</span>
              ${a.customImgUpdated ? '<span class="absolute bottom-1 right-1 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">✓ Đã lưu</span>' : ''}
            </div>
            <div class="text-xs font-bold text-slate-900 truncate mt-1.5" title="${escapeHtml(a.name)}">${escapeHtml(a.name)}</div>
          </div>
          <button type="button" onclick="triggerQuickRelicImageSelect('${a.id}')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-1.5 rounded-lg transition">
            📷 Đổi ảnh ngay
          </button>
        </div>
      `).join('');
    }

    // =========================================================================
    // 8. DÒNG THỜI GIAN, SLIDER, TRẮC NGHIỆM, BIỂU ĐỒ
    // =========================================================================
    function selectTimeline(idx) {
      const item = state.timelines[idx] || state.timelines[0];
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('tl-btn-' + i);
        if (btn) {
          btn.className = (i === idx)
            ? "tl-btn p-4 rounded-2xl border-2 border-[#0F4C81] bg-[#0F4C81] text-white text-left transition shadow-sm"
            : "tl-btn p-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 text-left hover:bg-blue-50 transition";
        }
      }
      const box = document.getElementById('timelineDetailBox');
      if (box) {
        box.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <span class="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#0F4C81] text-white">${escapeHtml(item.year)}</span>
            <button type="button" onclick="speakText('${escapeHtml(item.title)}. ${escapeHtml(item.desc)}', 'vi-VN')" class="text-sm font-bold text-[#0F4C81] hover:underline">
              🎙️ Nghe thuyết minh mốc lịch sử này
            </button>
          </div>
          <h4 class="text-lg font-extrabold text-slate-900 mb-1">${escapeHtml(item.title)}</h4>
          <p class="text-sm sm:text-base text-slate-700 leading-relaxed">${escapeHtml(item.desc)}</p>
        `;
      }
    }

    function updateBeforeAfterSlider(val) {
      const layer = document.getElementById('baBeforeLayer');
      const slider = document.getElementById('baRangeSlider');
      if (layer) layer.style.width = val + '%';
      if (slider && slider.value !== String(val)) slider.value = val;
      syncBeforeAfterWidth();
    }

    function setSliderPos(val) {
      updateBeforeAfterSlider(val);
    }

    function syncBeforeAfterWidth() {
      const wrap = document.querySelector('.ba-slider-wrap');
      const beforeImg = document.getElementById('beforeAncientImg');
      if (wrap && beforeImg && wrap.clientWidth > 0) {
        beforeImg.style.width = wrap.clientWidth + 'px';
      }
    }
    window.addEventListener('resize', syncBeforeAfterWidth);

    function renderQuizQuestion() {
      const list = state.quizQuestions;
      if (state.quizIndex >= list.length) state.quizIndex = 0;
      const item = list[state.quizIndex];
      state.quizAnswered = false;

      document.getElementById('quizProgressLabel').textContent = `Câu hỏi ${state.quizIndex + 1} / ${list.length}`;
      document.getElementById('quizScoreLabel').textContent = `Điểm: ${state.quizScore} / ${list.length * 10}`;
      document.getElementById('aiKnowledgeGapBox').classList.add('hidden');

      const container = document.getElementById('quizCardContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-blue-50 text-[#0F4C81]">
              ${escapeHtml(item.gapTopic)}
            </span>
            <span class="text-xs font-mono font-bold text-rose-700">Hiện vật đối chiếu: ${escapeHtml(item.citeCode || 'HA-VB-01')}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            Câu ${state.quizIndex + 1}: ${escapeHtml(item.q)}
          </h3>
          <div class="space-y-3" id="quizOptionsBox">
            ${item.options.map((opt, idx) => `
              <button
                type="button"
                onclick="submitQuizAnswer(${idx})"
                id="q-opt-${idx}"
                class="w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-[#0F4C81] hover:bg-blue-50/40 text-sm sm:text-base font-medium text-slate-800 transition flex items-start gap-3"
              >
                <span class="w-7 h-7 rounded-full bg-slate-100 border border-slate-300 text-[#0F4C81] font-extrabold flex items-center justify-center shrink-0 text-sm">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <span>${escapeHtml(opt)}</span>
              </button>
            `).join('')}
          </div>
          <div class="flex justify-between items-center pt-3">
            <button type="button" onclick="prevQuizQuestion()" class="text-sm font-bold text-slate-500 hover:text-slate-800">← Câu trước</button>
            <button type="button" onclick="nextQuizQuestion()" class="bg-[#0F4C81] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-900">Câu tiếp theo →</button>
          </div>
        </div>
      `;
    }

    function submitQuizAnswer(choiceIdx) {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      const item = state.quizQuestions[state.quizIndex];

      item.options.forEach((_, idx) => {
        const btn = document.getElementById('q-opt-' + idx);
        if (!btn) return;
        if (idx === item.correct) {
          btn.className = "w-full text-left p-4 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-sm sm:text-base font-bold text-emerald-900 flex items-start gap-3";
        } else if (idx === choiceIdx) {
          btn.className = "w-full text-left p-4 rounded-xl border-2 border-rose-600 bg-rose-50 text-sm sm:text-base font-bold text-rose-900 flex items-start gap-3";
        }
      });

      const gapBox = document.getElementById('aiKnowledgeGapBox');
      const gapExp = document.getElementById('aiGapExplanation');
      const citeBadge = document.getElementById('quizCitationCodeBadge');
      const gapBtn = document.getElementById('aiGapRecommendBtn');
      const citeCode = item.citeCode || 'HA-VB-01';

      if (citeBadge) citeBadge.textContent = `Mã hiện vật: ${citeCode}`;
      if (gapBtn) {
        gapBtn.onclick = function () { openMetadataModal(citeCode); };
      }

      if (choiceIdx === item.correct) {
        state.quizScore += 10;
        document.getElementById('quizScoreLabel').textContent = `Điểm: ${state.quizScore} / ${state.quizQuestions.length * 10}`;
        showToast("Chính xác! +10 điểm Lịch sử địa phương.", "success");
        if (gapBox) {
          gapBox.classList.remove('hidden');
          gapExp.innerHTML = `✅ <strong>Chính xác! Dẫn chứng từ Kho hiện vật khảo cổ [${escapeHtml(citeCode)}]:</strong> ${escapeHtml(item.gapAdvice)}`;
        }
      } else {
        showToast(`Chưa chính xác! Hệ thống đã trích dẫn hiện vật [${citeCode}] bên dưới.`, "warn");
        if (gapBox) {
          gapBox.classList.remove('hidden');
          gapExp.innerHTML = `⚠️ <strong>Trích dẫn tự động từ Kho hiện vật khảo cổ [${escapeHtml(citeCode)}]:</strong> ${escapeHtml(item.gapAdvice)}`;
        }
      }
    }

    function nextQuizQuestion() {
      state.quizIndex = (state.quizIndex + 1) % state.quizQuestions.length;
      renderQuizQuestion();
    }

    function prevQuizQuestion() {
      state.quizIndex = (state.quizIndex - 1 + state.quizQuestions.length) % state.quizQuestions.length;
      renderQuizQuestion();
    }

    function resetQuiz() {
      state.quizIndex = 0;
      state.quizScore = 0;
      renderQuizQuestion();
    }

    function renderLeaderboard() {
      const box = document.getElementById('quizLeaderboardList');
      if (!box) return;
      box.innerHTML = state.leaderboard.map(r => `
        <div class="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2">
          <div>
            <div class="font-bold text-slate-900">${escapeHtml(r.name)}</div>
            <div class="text-xs text-[#0F4C81] font-semibold">${escapeHtml(r.score)}</div>
          </div>
          <span class="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded text-xs shrink-0">${escapeHtml(r.badge)}</span>
        </div>
      `).join('');
    }

    function saveQuizRecord() {
      const inp = document.getElementById('quizStudentName');
      const relicSel = document.getElementById('worksheetRelicSelect');
      const noteInp = document.getElementById('worksheetNoteInput');
      const name = (inp && inp.value.trim()) ? inp.value.trim() : "Học sinh Trường THCS Phổ Yên";
      const relicCode = relicSel ? relicSel.value : "HA-VB-01";
      const maxScore = state.quizQuestions.length * 10;

      state.leaderboard.unshift({
        name: name,
        score: `${state.quizScore}/${maxScore} điểm • Đã nộp Phiếu ${relicCode}`,
        badge: "🏅 Hoàn thành"
      });
      if (inp) inp.value = '';
      if (noteInp) noteInp.value = '';
      commitAndSaveState(`Đã lưu Phiếu học tập thực địa (${relicCode}) của ${name}!`);
    }

    function initOrUpdateQuizChart() {
      const ctx = document.getElementById('quizAnalyticsChart');
      if (!ctx || typeof Chart === 'undefined') return;
      if (quizChartInstance) {
        quizChartInstance.destroy();
      }
      const preGood = parseFloat(state.expData.preGood) || 24.2;
      const postGood = parseFloat(state.expData.postGood) || 68.3;

      quizChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Điểm Giỏi / Xuất sắc (%)', 'Điểm Khá (%)', 'Hiểu rõ Hiện vật khảo cổ (%)', 'Hứng thú Học tập (%)'],
          datasets: [
            {
              label: 'Trước thực nghiệm (120 Học sinh)',
              data: [preGood, 42.5, 18.0, 54.0],
              backgroundColor: '#94A3B8',
              borderRadius: 8
            },
            {
              label: 'Sau thực nghiệm (Sử dụng Kho Học Liệu Số - 120 Học sinh)',
              data: [postGood, 27.5, 91.5, 96.7],
              backgroundColor: '#0F4C81',
              borderRadius: 8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } }
          },
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
    }

    // =========================================================================
    // 9. THƯ VIỆN BÀI THUYẾT MINH CỦA HỌC SINH & PHÁT GIỌNG THU ÂM
    // =========================================================================
    function renderMediaSection() {
      const box = document.getElementById('mediaPlaylistContainer');
      if (!box) return;

      box.innerHTML = state.mediaItems.map((m, idx) => {
        const active = idx === state.activeMediaIndex;
        return `
          <button
            type="button"
            onclick="selectMediaClip(${idx})"
            class="w-full p-4 rounded-2xl border-2 ${active ? 'border-[#0F4C81] bg-blue-50/60' : 'border-slate-200 bg-white hover:bg-slate-50'} text-left flex items-center gap-3.5 transition"
          >
            <img decoding="async" loading="lazy" src="${m.poster}" alt="${escapeHtml(m.title)}" class="w-20 h-14 object-cover rounded-xl border border-slate-300 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="text-xs font-mono font-bold text-[#0D9488]">${escapeHtml(m.code)} • ${m.duration}</div>
              <div class="text-sm font-bold text-slate-900 truncate">${escapeHtml(m.title)}</div>
              <div class="text-xs text-slate-500">Học sinh Trường THCS Phổ Yên thuyết minh</div>
            </div>
          </button>
        `;
      }).join('');

      const cur = state.mediaItems[state.activeMediaIndex] || state.mediaItems[0];
      document.getElementById('activeMediaPoster').src = cur.poster;
      document.getElementById('activeMediaCodeBadge').textContent = `🎬 Mã học liệu: ${cur.code}`;
      document.getElementById('activeMediaTitle').textContent = cur.title;
      document.getElementById('activeMediaTranscript').textContent = cur.transcript;
      document.getElementById('activeMediaDuration').textContent = `Thời lượng: ${cur.duration}`;
    }

    function selectMediaClip(idx) {
      state.activeMediaIndex = idx;
      renderMediaSection();
      playCurrentMediaAudio();
    }

    function playCurrentMediaAudio() {
      const cur = state.mediaItems[state.activeMediaIndex] || state.mediaItems[0];
      speakText(cur.title + ". " + cur.transcript, 'vi-VN');
    }

    function speakSteleTranslation() {
      speakText("Em xin thuyết minh nội dung dịch nghĩa tiếng Việt của văn bia Bản giáp hậu bi ký tại sân chùa Hương Ấp: Bài ký trên bia bầu hậu của Bản giáp. Từng nghe: Đất thánh Cổ Pháp, danh lam Vạn Xuân. Ngôi cổ tự Hương Ấp trải qua các triều đại đều được trùng tu. Xưa Đức vua Lý Nam Đế thuở nhỏ xuất gia tu học tại chùa này, nhờ Pháp Tổ Thiền sư nuôi dưỡng, dạy dỗ suốt hơn mười năm, sau phất cờ khởi nghĩa, sáng lập nên nhà nước Vạn Xuân.", "vi-VN");
    }

    function handleStudentVoiceUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      readMediaFileAsDataUrl(file).then(audioDataUrl => {
        state.siteConfig.customStudentAudioUrl = audioDataUrl;
        event.target.value = '';
        commitAndSaveState("Đã lưu vĩnh viễn tệp thu âm giọng thuyết minh của Học sinh (" + file.name + ") vào IndexedDB!");
      });
    }

    function speakText(text, langCode) {
      try {
        if (state.siteConfig.customStudentAudioUrl) {
          if (customAudioPlayer) {
            customAudioPlayer.pause();
          }
          customAudioPlayer = new Audio(state.siteConfig.customStudentAudioUrl);
          customAudioPlayer.play();
          showToast("🎙️ Đang phát tệp thu âm giọng thuyết minh của Học sinh THCS Phổ Yên...", "info");
          return;
        }
        const isVi = !langCode || /^vi/i.test(langCode);
        text = String(text || '').replace(/\*\*/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (!text) return;
        stopSpeech();
        const wave = document.getElementById('mediaWaveIndicator');
        const waveOn = () => { if (wave) { wave.classList.remove('hidden'); wave.classList.add('flex'); } };
        const waveOff = () => { if (wave) { wave.classList.add('hidden'); wave.classList.remove('flex'); } };
        const viVoice = ('speechSynthesis' in window) ? findVietnameseVoice() : null;
        if (('speechSynthesis' in window) && (!isVi || viVoice)) {
          // Máy có sẵn giọng phù hợp -> dùng giọng của máy
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = isVi ? 'vi-VN' : (langCode || 'en-US');
          if (viVoice && isVi) utter.voice = viVoice;
          utter.rate = 1.0;
          waveOn();
          utter.onend = waveOff;
          utter.onerror = waveOff;
          window.speechSynthesis.speak(utter);
          showToast("🎙️ Đang phát lời thuyết minh của học sinh...", "info");
          return;
        }
        // Máy KHÔNG có giọng tiếng Việt -> đọc bằng giọng tiếng Việt trực tuyến (cần Internet)
        speakVietnameseOnline(text, waveOn, waveOff);
      } catch (e) { }
    }

    function findVietnameseVoice() {
      try {
        const voices = window.speechSynthesis.getVoices() || [];
        return voices.find(v => /^vi([-_]|$)/i.test(v.lang)) ||
          voices.find(v => /vietnam|tiếng việt|hoaimy|namminh/i.test(v.name)) || null;
      } catch (e) { return null; }
    }
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function () { window.speechSynthesis.getVoices(); }; } catch (e) { }
    }

    let ttsSessionId = 0;
    let ttsOnlineAudio = null;
    function splitTtsChunks(text, max) {
      const parts = text.match(/[^.!?;:\n]+[.!?;:]?/g) || [text];
      const chunks = [];
      let cur = '';
      const push = s => { s = s.trim(); if (s) chunks.push(s); };
      parts.forEach(p => {
        p = p.trim();
        if (!p) return;
        if (p.length > max) {
          push(cur); cur = '';
          let words = p.split(' '), buf = '';
          words.forEach(w => { if ((buf + ' ' + w).length > max) { push(buf); buf = w; } else buf = buf ? buf + ' ' + w : w; });
          push(buf);
        } else if ((cur + ' ' + p).length > max) { push(cur); cur = p; }
        else cur = cur ? cur + ' ' + p : p;
      });
      push(cur);
      return chunks;
    }
    function speakVietnameseOnline(text, waveOn, waveOff) {
      const session = ++ttsSessionId;
      const chunks = splitTtsChunks(text, 180);
      let i = 0, failed = false;
      waveOn();
      showToast("🎙️ Đang đọc bằng giọng tiếng Việt trực tuyến...", "info");
      const next = () => {
        if (session !== ttsSessionId) return;
        if (i >= chunks.length) { waveOff(); return; }
        const url = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&q=' + encodeURIComponent(chunks[i++]);
        const a = new Audio(url);
        ttsOnlineAudio = a;
        a.onended = next;
        a.onerror = () => {
          if (session !== ttsSessionId) return;
          waveOff();
          if (!failed) { failed = true; showToast("Không phát được giọng tiếng Việt: máy cần kết nối Internet hoặc cài giọng Vietnamese trong hệ điều hành.", "error"); }
        };
        const pr = a.play();
        if (pr && pr.catch) pr.catch(() => { if (session === ttsSessionId) a.onerror(); });
      };
      next();
    }

    function stopSpeech() {
      try {
        if (customAudioPlayer) { customAudioPlayer.pause(); customAudioPlayer.currentTime = 0; }
        ttsSessionId++;
        if (ttsOnlineAudio) { ttsOnlineAudio.pause(); ttsOnlineAudio = null; }
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        const wave = document.getElementById('mediaWaveIndicator');
        if (wave) {
          wave.classList.add('hidden');
          wave.classList.remove('flex');
        }
      } catch (e) { }
    }

    function speakPreface() {
      speakText(state.siteConfig.prefaceVi, 'vi-VN');
    }

    // =========================================================================
    // 10. TRỢ LÝ TRA CỨU & ĐÓNG GÓP TƯ LIỆU CỘNG ĐỒNG (CÓ ẢNH / VIDEO ĐÍNH KÈM LƯU VĨNH VIỄN)
    // =========================================================================
    function generateChatbotReply(q) {
      const m = q.toLowerCase();
      const foundRelic = state.artifacts.find(a => m.includes(a.id.toLowerCase()) || m.includes(a.name.toLowerCase()));
      if (foundRelic) {
        return `**[${foundRelic.id}] ${foundRelic.name}** — Loại hình: ${foundRelic.type} | Niên đại: ${foundRelic.era} | Vị trí: ${foundRelic.location}. Mô tả: ${foundRelic.desc}`;
      }
      return "Hệ thống **Trường THCS Phổ Yên** hiện gồm: (1) **Các Hiện Vật Khảo Cổ**, (2) **Kể Chuyện Lịch Sử** (Phim hoạt hình, Truyện tranh số, Bản đồ tương tác, Bộ học liệu trải nghiệm, Trò chơi trắc nghiệm) và (3) **Bảo Tồn Ký Ức & Tri Thức Cộng Đồng** (Kho tư liệu đối chiếu xưa và nay, Góc ký ức làng Cổ Pháp, Không gian đóng góp tư liệu cộng đồng). Mọi hình ảnh và video đẩy lên đều được lưu vĩnh viễn trong `IndexedDB`!";
    }

    function sendChatQuestion(qText) {
      state.chatHistory.push({ sender: 'user', name: 'Người tra cứu', text: qText });
      state.chatHistory.push({ sender: 'bot', name: '📚 Trợ lý Kho Học Liệu Số', text: generateChatbotReply(qText) });
      renderChatMessages();
    }

    function handleWidgetChatSubmit() {
      const inp = document.getElementById('widgetChatInput');
      if (!inp || !inp.value.trim()) return;
      const t = inp.value.trim();
      inp.value = '';
      sendChatQuestion(t);
    }

    function handleHomeChatSubmit() {
      const inp = document.getElementById('homeChatInput');
      if (inp && inp.value.trim()) {
        sendChatQuestion(inp.value.trim());
        inp.value = '';
      }
    }

    function renderChatMessages() {
      const box = document.getElementById('widgetChatMessages');
      if (!box) return;
      box.innerHTML = state.chatHistory.map(item => {
        const formatted = item.text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        if (item.sender === 'user') {
          return `<div class="flex justify-end"><div class="bg-[#0F4C81] text-white px-3.5 py-2 rounded-2xl rounded-br-none max-w-[85%]">${escapeHtml(item.text)}</div></div>`;
        }
        return `<div class="flex justify-start"><div class="bg-white border border-slate-200 text-slate-800 px-3.5 py-2.5 rounded-2xl rounded-bl-none max-w-[90%] shadow-sm"><div class="text-xs font-bold text-[#0D9488] mb-0.5">${escapeHtml(item.name)}</div><div>${formatted}</div></div></div>`;
      }).join('');
      box.scrollTop = box.scrollHeight;
    }

    function toggleChatWidget(forceOpen) {
      const panel = document.getElementById('floatingChatPanel');
      if (!panel) return;
      if (typeof forceOpen === 'boolean') panel.classList.toggle('hidden', !forceOpen);
      else panel.classList.toggle('hidden');
    }

    function setLanguage(lang) { state.lang = lang; }
    function toggleLanguage() { }

    function applyCustomBuilderForm() {
      const stuPref = document.getElementById('bldStudentPreface') ? document.getElementById('bldStudentPreface').value.trim() : '';
      if (stuPref) state.siteConfig.prefaceVi = stuPref;
      const t = document.getElementById('bldSiteTitle').value.trim();
      const s = document.getElementById('bldSiteSlogan').value.trim();
      const sch = document.getElementById('bldSchoolName').value.trim();
      const h = document.getElementById('bldHeroHeading').value.trim();
      const preG = parseFloat(document.getElementById('expPreGood').value);
      const postG = parseFloat(document.getElementById('expPostGood').value);

      if (t) state.siteConfig.title = t;
      if (s) state.siteConfig.slogan = s;
      if (sch) state.siteConfig.schoolName = sch;
      if (h) state.siteConfig.heroHeading = h;
      if (!isNaN(preG)) state.expData.preGood = preG;
      if (!isNaN(postG)) state.expData.postGood = postG;

      initOrUpdateQuizChart();
      commitAndSaveState("Đã cập nhật thông tin Cổng học liệu số và lưu vĩnh viễn!");
    }

    function handleBuilderBannerUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      compressAndReadImage(file, 1400, 900, 0.84).then(dataUrl => {
        state.siteConfig.customBannerImg = dataUrl;
        document.getElementById('heroBannerImg').src = dataUrl;
        HERO_SLIDES[0].img = dataUrl;
        event.target.value = '';
        commitAndSaveState("Đã nén chuẩn HD và lưu vĩnh viễn ảnh Banner Trang chủ!");
      });
    }

    function addNewMapPoiFromBuilder() {
      const name = document.getElementById('newPoiName').value.trim();
      const lat = parseFloat(document.getElementById('newPoiLat').value);
      const lng = parseFloat(document.getElementById('newPoiLng').value);
      const desc = document.getElementById('newPoiDesc').value.trim() || "Điểm di tích bổ sung vào Bản đồ tương tác.";

      if (!name || isNaN(lat) || isNaN(lng)) {
        showToast("Vui lòng nhập Tên điểm và Tọa độ thực địa hợp lệ!", "warn");
        return;
      }

      state.mapPois.push({
        id: 'poi-' + Date.now(),
        name: `${state.mapPois.length + 1}. ${name}`,
        lat: lat,
        lng: lng,
        badge: "Điểm Di tích Thực địa",
        desc: desc,
        digital: "Tư liệu bổ sung từ Cổng Quản trị THCS Phổ Yên"
      });
      document.getElementById('newPoiName').value = '';
      document.getElementById('newPoiDesc').value = '';
      commitAndSaveState(`Đã ghim điểm "${name}" lên Bản đồ tương tác và lưu vĩnh viễn!`);
    }

    function addNewQuizFromBuilder() {
      const q = document.getElementById('newQuizQ').value.trim();
      const cor = document.getElementById('newQuizCorrect').value.trim();
      const wr = document.getElementById('newQuizWrong').value.trim();
      const cite = (document.getElementById('newQuizCiteCode') ? document.getElementById('newQuizCiteCode').value.trim() : 'HA-VB-01') || 'HA-VB-01';

      if (!q || !cor) {
        showToast("Vui lòng nhập Câu hỏi và Đáp án đúng!", "warn");
        return;
      }

      const wrongs = wr ? wr.split(',').map(s => s.trim()).filter(Boolean) : ["Phương án nhiễu 1", "Phương án nhiễu 2", "Phương án nhiễu 3"];
      while (wrongs.length < 3) wrongs.push("Phương án nhiễu khác");

      state.quizQuestions.unshift({
        q: q,
        options: [cor, wrongs[0], wrongs[1], wrongs[2]],
        correct: 0,
        citeCode: cite,
        gapTopic: "Câu hỏi bổ sung từ Giáo viên THCS Phổ Yên",
        gapAdvice: `Đáp án đúng là: ${cor} (Đối chiếu hiện vật mã ${cite} trong Kho học liệu số).`
      });

      document.getElementById('newQuizQ').value = '';
      document.getElementById('newQuizCorrect').value = '';
      document.getElementById('newQuizWrong').value = '';
      resetQuiz();
      commitAndSaveState(`Đã đẩy câu hỏi mới (trích dẫn mã ${cite}) vào Trò chơi trắc nghiệm!`);
    }

    function handleUniversalFileUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const fname = file.name.toLowerCase();
      const logEl = document.getElementById('uploadStatusLog');

      if (file.type.startsWith('image/')) {
        compressAndReadImage(file, 1150, 880, 0.82).then(compressedDataUrl => {
          const code = `HA-DT-${state.artifacts.length + 1}`;
          state.artifacts.unshift({
            id: code,
            name: "Tư liệu Ảnh Thực địa: " + file.name,
            type: "Tư liệu khảo sát",
            era: "Cập nhật 2026 - 2027",
            location: "Chùa Hương Ấp, phường Vạn Xuân",
            condition: `Nguyên bản số; QR: QR-${code}`,
            qr: `QR-${code}`,
            group: "HA",
            desc: "Hình ảnh khảo sát thực địa được đẩy trực tiếp lên Kho học liệu số.",
            source: "Nhóm nghiên cứu Trường THCS Phổ Yên",
            rights: "Học liệu mở phục vụ giáo dục",
            img: compressedDataUrl,
            customImgUpdated: true
          });
          event.target.value = '';
          commitAndSaveState(`Đã lưu vĩnh viễn ảnh [${code}] vào IndexedDB!`);
          if (logEl) logEl.innerHTML = `✅ <strong>Đã nén chuẩn HD và đẩy ảnh "${escapeHtml(file.name)}" lên mục Các Hiện Vật Khảo Cổ với mã [${code}]!</strong>`;
        });
        return;
      }

      if (file.type.startsWith('video/')) {
        readMediaFileAsDataUrl(file).then(videoDataUrl => {
          state.animations.unshift({
            id: `ANIM-0${state.animations.length + 1}`,
            title: "Phim tư liệu / Hoạt hình: " + file.name,
            duration: "Video tải lên",
            poster: IMG_LY_NAM_DE,
            videoDataUrl: videoDataUrl,
            script: "Video tư liệu được đẩy lên và lưu trữ vĩnh viễn trong chuyên mục Kể chuyện lịch sử."
          });
          state.activeAnimIndex = 0;
          event.target.value = '';
          commitAndSaveState(`Đã lưu vĩnh viễn Video "${file.name}" vào mục Phim hoạt hình!`);
        });
        return;
      }

      if (file.type.startsWith('audio/')) {
        readMediaFileAsDataUrl(file).then(audioDataUrl => {
          state.siteConfig.customStudentAudioUrl = audioDataUrl;
          event.target.value = '';
          commitAndSaveState(`Đã lưu vĩnh viễn tệp âm thanh thuyết minh "${file.name}" vào IndexedDB!`);
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        if (fname.endsWith('.json')) {
          try {
            const parsed = JSON.parse(content);
            applySavedPayloadToState(parsed);
            commitAndSaveState("Đã nạp gói dữ liệu sao lưu (.JSON) và lưu vĩnh viễn vào IndexedDB!");
            if (logEl) logEl.innerHTML = `🎉 <strong>Đã nạp gói dữ liệu "${escapeHtml(file.name)}" (${state.artifacts.length} hiện vật khảo cổ) thành công!</strong>`;
          } catch (err) {
            showToast("Tệp sao lưu không hợp lệ!", "warn");
          }
        } else if (fname.endsWith('.csv')) {
          const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
          let count = 0;
          lines.slice(1).forEach((line, idx) => {
            const cols = line.split(',');
            if (cols.length >= 2) {
              const code = cols[0].trim() || (`HA-CSV-${idx + 1}`);
              state.artifacts.unshift({
                id: code,
                name: (cols[1] || 'Hiện vật khảo cổ').trim(),
                type: (cols[2] || 'Hiện vật khảo cổ').trim(),
                era: (cols[3] || 'Thời Nguyễn').trim(),
                location: (cols[4] || 'Chùa Hương Ấp').trim(),
                condition: `Tốt; QR: QR-${code}`,
                qr: `QR-${code}`,
                group: code.startsWith('CP') ? 'CP' : 'HA',
                desc: cols.slice(5).join(', ').trim() || "Học liệu được đẩy lên từ tệp bảng biểu.",
                source: "Hồ sơ di tích quốc gia 2014",
                rights: "Học liệu mở phục vụ giáo dục",
                img: IMG_STELE_ARTIFACTS
              });
              count++;
            }
          });
          commitAndSaveState(`Đã đẩy thêm ${count} hiện vật mới vào Kho số!`);
        }
        event.target.value = '';
      };
      reader.readAsText(file, 'UTF-8');
    }

    function downloadSampleJsonTemplate() {
      const payload = buildFullStatePayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
      triggerDownload(blob, "kho_hoc_lieu_so_van_xuan_tu_thcs_pho_yen.json");
      showToast("Đã tải tệp sao lưu toàn bộ Ảnh, Video & Dữ liệu (.JSON)!", "success");
    }

    function downloadSampleCsvTemplate() {
      const rows = ["Mã định danh,Tên hiện vật,Loại hình,Niên đại,Vị trí lưu giữ,Mô tả khoa học"];
      state.artifacts.forEach(a => {
        rows.push(`"${a.id}","${a.name}","${a.type}","${a.era}","${a.location}","${a.desc}"`);
      });
      const blob = new Blob(["\uFEFF" + rows.join("\n")], { type: 'text/csv;charset=utf-8' });
      triggerDownload(blob, "danh_muc_cac_hien_vat_khao_co_thcs_pho_yen.csv");
      showToast("Đã xuất bảng Các Hiện Vật Khảo Cổ (.CSV)!", "success");
    }

    function downloadLessonPlanDoc() {
      const text = [
        "KẾ HOẠCH BÀI DẠY (GIÁO ÁN SỐ HÓA) - GIÁO DỤC LỊCH SỬ ĐỊA PHƯƠNG LỚP 7",
        "Đơn vị: Trường THCS Phổ Yên, TP. Phổ Yên, Tỉnh Thái Nguyên",
        "Chủ đề: Khởi nghĩa Lý Bí và Sự ra đời Nhà nước Vạn Xuân gắn với Di tích Quốc gia Chùa Hương Ấp (Vạn Xuân Tự)",
        "-------------------------------------------------------------------------",
        "I. MỤC TIÊU BÀI HỌC (Theo CV 5512/BGDĐT):",
        "1. Kiến thức: Trình bày được thân thế Lý Bí (sinh năm 503 tại Cổ Pháp), hơn 10 năm tu học với Pháp Tổ Thiền sư tại Chùa Hương Ấp; diễn biến khởi nghĩa năm 542 và sự kiện lên ngôi Hoàng đế lập nước Vạn Xuân năm 544.",
        "2. Năng lực số & Sử học: Biết tra cứu Các Hiện Vật Khảo Cổ (HA-VB-01 đến CP-BV-26), học qua Phim hoạt hình, Truyện tranh số, Bản đồ tương tác và Kho tư liệu đối chiếu xưa và nay.",
        "3. Phẩm chất: Tự hào truyền thống quê hương Phổ Yên - Thái Nguyên và có ý thức bảo tồn ký ức cộng đồng."
      ].join("\n");
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      triggerDownload(blob, "Giao_an_Lich_su_dia_phuong_Lop_7_THCS_Pho_Yen.txt");
      showToast("Đã tải Giáo án số hóa môn Lịch sử địa phương Lớp 7!", "success");
    }

    function downloadFieldWorksheet() {
      const text = [
        "PHIẾU HỌC TẬP TRẢI NGHIỆM THỰC ĐỊA TẠI DI TÍCH QUỐC GIA CHÙA HƯƠNG ẤP",
        "Trường THCS Phổ Yên - Dự án KHKT Cấp Tỉnh 2026 - 2027",
        "-------------------------------------------------------------------------",
        "Họ và tên học sinh: ........................................ Lớp: .............",
        "Nhiệm vụ 1: Quét mã QR-HA-01 tại sân chùa, đối chiếu 3 cột văn bia 'Bản giáp hậu bi ký' (HA-VB-01) và ghi lại thông tin về Pháp Tổ Thiền sư.",
        "Nhiệm vụ 2: Trải nghiệm mục Kể chuyện lịch sử (Phim hoạt hình, Truyện tranh số, Bản đồ tương tác) và trả lời câu hỏi trong Trò chơi trắc nghiệm.",
        "Nhiệm vụ 3: Sưu tầm 01 câu chuyện hoặc bức ảnh gia đình để đóng góp vào mục Bảo tồn ký ức và tri thức cộng đồng."
      ].join("\n");
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      triggerDownload(blob, "Phieu_hoc_tap_thuc_dia_Chua_Huong_Ap_THCS_Pho_Yen.txt");
      showToast("Đã tải Phiếu học tập trải nghiệm thực địa dành cho học sinh!", "success");
    }

    // XUẤT BẢN THÀNH FILE HTML MỚI NHÚNG CỨNG 100% DỮ LIỆU, ẢNH & VIDEO MỚI NHẤT
    function exportStandaloneWebsiteHtml() {
      state.updatedAt = Date.now();
      const embeddedPayload = buildFullStatePayload();
      const embeddedStateJson = JSON.stringify(embeddedPayload).replace(/<\/script/gi, '<\\/script');
      let htmlStr = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      htmlStr = htmlStr.replace(/<script id="embedded-archive-state-script">[\s\S]*?<\/script>/gi, '');
      htmlStr = htmlStr.replace(/<script>window\.__EMBEDDED_ARCHIVE_STATE__\s*=[\s\S]*?<\/script>/gi, '');
      const injectScript = `<script id="embedded-archive-state-script">window.__EMBEDDED_ARCHIVE_STATE__ = ${embeddedStateJson};<\/script></head>`;
      htmlStr = htmlStr.replace('</head>', injectScript);
      const blob = new Blob([htmlStr], { type: 'text/html;charset=utf-8' });
      triggerDownload(blob, "index.html");
      showToast("Đã xuất tệp index.html nhúng cứng 100% Ảnh, Video & Tư liệu mới (Sẵn sàng đưa lên Netlify)!", "success");
    }

    function triggerDownload(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    }

    // Không gian đóng góp tư liệu cộng đồng (có đính kèm Ảnh hoặc Video lưu vĩnh viễn)
    function renderCommunityComments() {
      const box = document.getElementById('communityCommentsList');
      const badge = document.getElementById('commentCountBadge');
      if (badge) badge.textContent = `${state.comments.length} tư liệu đã đóng góp`;
      if (!box) return;
      box.innerHTML = state.comments.map(c => {
        let mediaBlock = '';
        if (c.mediaType === 'video' && c.mediaUrl) {
          mediaBlock = `<video src="${c.mediaUrl}" controls class="w-full h-40 object-cover rounded-xl mb-2 bg-black"></video>`;
        } else if (c.mediaType === 'image' && c.mediaUrl) {
          mediaBlock = `<img decoding="async" loading="lazy" src="${c.mediaUrl}" alt="Tư liệu cộng đồng" class="w-full h-40 object-cover rounded-xl mb-2 border border-slate-200" />`;
        }
        return `
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2.5 shadow-sm">
            <div>
              ${mediaBlock}
              <p class="text-slate-700 italic leading-relaxed text-base">"${escapeHtml(c.text)}"</p>
            </div>
            <div class="pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs">
              <strong class="text-[#0F4C81]">${escapeHtml(c.author)}</strong>
              <span class="text-[#0D9488] font-bold">${escapeHtml(c.time)}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    function addCommunityComment() {
      const aInp = document.getElementById('commentAuthorInput');
      const cInp = document.getElementById('commentContentInput');
      const mInp = document.getElementById('commentMediaInput');
      const author = (aInp && aInp.value.trim()) ? aInp.value.trim() : "Giáo viên / Nhân dân địa phương";
      const content = cInp ? cInp.value.trim() : "";

      if (!content && !(mInp && mInp.files && mInp.files[0])) {
        showToast("Vui lòng nhập nội dung hoặc chọn ảnh/video tư liệu đóng góp!", "warn");
        return;
      }

      const commitComment = (mType, mUrl) => {
        state.comments.unshift({
          author: author,
          time: "Đã lưu vĩnh viễn",
          text: content || "Đóng góp hình ảnh / video tư liệu vào Không gian cộng đồng Chùa Hương Ấp.",
          mediaType: mType,
          mediaUrl: mUrl
        });
        if (cInp) cInp.value = '';
        if (mInp) mInp.value = '';
        commitAndSaveState("Đã lưu đóng góp tư liệu cộng đồng (kèm ảnh/video) vào bộ nhớ vĩnh viễn!");
      };

      if (mInp && mInp.files && mInp.files[0]) {
        const file = mInp.files[0];
        const mType = file.type.startsWith('video/') ? 'video' : 'image';
        readMediaFileAsDataUrl(file).then(dataUrl => commitComment(mType, dataUrl));
      } else {
        commitComment(null, null);
      }
    }

    function openModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('hidden');
    }

    function closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    }

    function submitMemberLogin() {
      const name = document.getElementById('authNameInput').value.trim() || "Ban Chủ nhiệm KHKT";
      closeModal('authModal');
      showToast("Đã xác nhận quyền Quản trị cho: " + name, "success");
    }

    function runSemanticSearch() { executeGlobalArchiveSearch(); }
    function quickSemanticQuery(q) {
      const inp = document.getElementById('globalArchiveSearchInput');
      if (inp) { inp.value = q; executeGlobalArchiveSearch(); }
    }
    function closeSemanticSearch() { }
    function changePersona() { }
    function scrollToSub(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    function handleOcrImageUpload(e) { handleUniversalFileUpload(e); }
    function toggleOcrScan() { switchSection('cat2'); switchArchiveTab('tab-stele'); }
    function toggleSuperResolution() { switchSection('cat2'); }
    function rotate3DArtifact() { switchSection('cat2'); }
    function resetOcrViewer() { switchSection('cat2'); }
    function speakCurrentArtifact() { speakSteleTranslation(); }
    function filterArtifacts(flt) { setRelicCollectionFilter(flt === 'temple' ? 'HA' : (flt === 'cophap' ? 'CP' : 'all')); }
    function generateAiTourPlan() { switchSection('overview'); }
    function updateVideoSubtitleLang() { }
    function playCurrentVideoVoice() { playCurrentMediaAudio(); }
    function applyPresetDataset() { renderAllUiFromState(); }
    function changeThemeColor(hex) { document.documentElement.style.setProperty('--brand-primary', hex); }

    function showToast(msg, type) {
      const container = document.getElementById('toastContainer');
      if (!container) return;
      const el = document.createElement('div');
      const bg = type === 'warn' ? 'bg-rose-700' : 'bg-[#0F4C81]';
      el.className = `${bg} text-white border-2 border-amber-300 px-5 py-3 rounded-2xl shadow-xl text-sm font-bold transition-all duration-300 pointer-events-auto`;
      el.textContent = msg;
      container.appendChild(el);
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
      }, 3200);
    }

    function escapeHtml(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    // =========================================================================
    // 11. CƠ SỞ DỮ LIỆU INDEXEDDB DUNG LƯỢNG LỚN (KHÔNG BAO GIỜ MẤT ẢNH / VIDEO KHI MỞ LẠI)
    // =========================================================================
    const IDB_NAME = 'VanXuanTuArchiveDB_v6';
    const IDB_STORE = 'archive_state_store';
    const IDB_KEY = 'main_archive_payload';

    function buildFullStatePayload() {
      return {
        updatedAt: state.updatedAt || Date.now(),
        siteConfig: state.siteConfig,
        menuLabels: state.menuLabels,
        artifacts: state.artifacts,
        animations: state.animations,
        comics: state.comics,
        mapPois: state.mapPois,
        experientialKits: state.experientialKits,
        comparePairs: state.comparePairs,
        coPhapMemories: state.coPhapMemories,
        quizQuestions: state.quizQuestions,
        comments: state.comments,
        leaderboard: state.leaderboard,
        expData: state.expData
      };
    }

    function openArchiveIndexedDB() {
      return new Promise((resolve) => {
        if (!('indexedDB' in window)) {
          resolve(null);
          return;
        }
        const req = window.indexedDB.open(IDB_NAME, 1);
        req.onupgradeneeded = function (e) {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(IDB_STORE)) {
            db.createObjectStore(IDB_STORE);
          }
        };
        req.onsuccess = function (e) { resolve(e.target.result); };
        req.onerror = function () { resolve(null); };
      });
    }

    function savePayloadToIndexedDB(payload) {
      return openArchiveIndexedDB().then(db => {
        if (!db) return false;
        return new Promise((resolve) => {
          try {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            tx.objectStore(IDB_STORE).put(payload, IDB_KEY);
            tx.oncomplete = function () {
              const badge = document.getElementById('idbStorageBadge');
              const topBadge = document.getElementById('topPersistBadge');
              const customCount = state.artifacts.filter(a => a.customImgUpdated).length;
              if (badge) {
                badge.textContent = `✅ Đã lưu vĩnh viễn ${state.artifacts.length} hiện vật (${customCount} ảnh mới) & toàn bộ Video/Tư liệu vào IndexedDB`;
              }
              if (topBadge) {
                topBadge.textContent = `💾 Đã lưu vĩnh viễn (${state.artifacts.length} Hiện vật • ${state.animations.length} Phim • ${state.comics.length} Trang truyện)`;
              }
              resolve(true);
            };
            tx.onerror = function () { resolve(false); };
          } catch (err) {
            resolve(false);
          }
        });
      });
    }

    function loadPayloadFromIndexedDB() {
      return openArchiveIndexedDB().then(db => {
        if (!db) return null;
        return new Promise((resolve) => {
          try {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const req = tx.objectStore(IDB_STORE).get(IDB_KEY);
            req.onsuccess = function () { resolve(req.result || null); };
            req.onerror = function () { resolve(null); };
          } catch (err) {
            resolve(null);
          }
        });
      });
    }

    function applySavedPayloadToState(parsed) {
      if (!parsed) return;
      if (parsed.siteConfig) Object.assign(state.siteConfig, parsed.siteConfig);
      if (parsed.menuLabels) Object.assign(state.menuLabels, parsed.menuLabels);
      // Chuẩn hóa số thứ tự menu cũ (đã thêm mục 1. Tổng Quan Di Tích)
      (function fixMenuNumbering() {
        const fix = {
          '1. Các Hiện Vật Khảo Cổ': '2. Các Hiện Vật Khảo Cổ',
          '2. Kể Chuyện Lịch Sử': '3. Kể Chuyện Lịch Sử',
          '3. Bảo Tồn Ký Ức & Tri Thức Cộng Đồng': '4. Bảo Tồn Ký Ức & Tri Thức Cộng Đồng',
          '4. Kết Quả Thực Nghiệm': '5. Kết Quả Thực Nghiệm',
          '4. Bộ Học Liệu Trải Nghiệm': '3. Bộ Học Liệu Trải Nghiệm',
          '5. Trò Chơi Trắc Nghiệm': '4. Trò Chơi Trắc Nghiệm'
        };
        const fixObj = o => { if (o) Object.keys(o).forEach(k => { if (typeof o[k] === 'string') { const t = o[k].trim(); if (fix[t]) o[k] = fix[t]; } }); };
        fixObj(state.menuLabels);
      })();
      if (Array.isArray(parsed.artifacts) && parsed.artifacts.length > 0) {
        const oldMap = {};
        state.artifacts.forEach(a => { oldMap[a.id] = a; });
        state.artifacts = parsed.artifacts.map(item => {
          const prev = oldMap[item.id];
          if (prev && prev.customImgUpdated && !item.customImgUpdated) {
            return Object.assign({}, item, { img: prev.img, customImgUpdated: true });
          }
          return item;
        });
        state.artifacts = normalizeHaRelics(state.artifacts, true);
      }
      if (Array.isArray(parsed.animations) && parsed.animations.length) state.animations = parsed.animations;
      if (Array.isArray(parsed.comics) && parsed.comics.length) {
        const hasNewBook = parsed.comics.some(c => c && /^LB-/.test(String(c.id || '')));
        if (hasNewBook) {
          state.comics = parsed.comics.filter(c => c && !/^COMIC-0[1-4]$/.test(String(c.id || '')));
        }
      }
      if (Array.isArray(parsed.mapPois) && parsed.mapPois.length >= 6) state.mapPois = parsed.mapPois;
      if (Array.isArray(parsed.experientialKits) && parsed.experientialKits.length) state.experientialKits = parsed.experientialKits;
      if (Array.isArray(parsed.comparePairs) && parsed.comparePairs.length) state.comparePairs = parsed.comparePairs;
      if (Array.isArray(parsed.coPhapMemories) && parsed.coPhapMemories.length) state.coPhapMemories = parsed.coPhapMemories;
      if (Array.isArray(parsed.quizQuestions) && parsed.quizQuestions.length) state.quizQuestions = parsed.quizQuestions;
      if (Array.isArray(parsed.comments) && parsed.comments.length) state.comments = parsed.comments;
      if (Array.isArray(parsed.leaderboard) && parsed.leaderboard.length) state.leaderboard = parsed.leaderboard;
      if (parsed.expData) Object.assign(state.expData, parsed.expData);
      if (parsed.updatedAt) state.updatedAt = parsed.updatedAt;
    }

    // CHỈ RENDER GIAO DIỆN (KHÔNG GHI ĐÈ INDEXEDDB KHI MỚI KHỞI ĐỘNG)
    function renderAllUiFromState() {
      document.getElementById('siteMainTitle').textContent = state.siteConfig.title;
      document.getElementById('siteSlogan').textContent = state.siteConfig.slogan;
      document.getElementById('topSchoolName').textContent = state.siteConfig.schoolName;
      document.getElementById('footerSchoolName').textContent = state.siteConfig.schoolName;
      document.getElementById('heroHeading').textContent = state.siteConfig.heroHeading;

      const setBld = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
      setBld('bldSiteTitle', state.siteConfig.title);
      setBld('bldSiteSlogan', state.siteConfig.slogan);
      setBld('bldSchoolName', state.siteConfig.schoolName);
      setBld('bldHeroHeading', state.siteConfig.heroHeading);

      if (state.siteConfig.customBannerImg) {
        const hb = document.getElementById('heroBannerImg');
        if (hb) hb.src = state.siteConfig.customBannerImg;
        HERO_SLIDES[0].img = state.siteConfig.customBannerImg;
      }
      if (state.siteConfig.customSteleImg) {
        const stEl = document.getElementById('steleMainImageEl');
        if (stEl) stEl.src = state.siteConfig.customSteleImg;
      }

      const haCount = state.artifacts.filter(a => a.group === 'HA').length;
      const cpCount = state.artifacts.filter(a => a.group === 'CP').length;
      document.getElementById('footerTotalRelics').textContent = `${state.artifacts.length} hiện vật (${haCount} Chùa + ${cpCount} Cổ Pháp)`;
      document.getElementById('footerTotalPois').textContent = `${state.mapPois.length} điểm di tích`;

      const btnAll = document.getElementById('col-flt-all');
      const btnHA = document.getElementById('col-flt-HA');
      const btnCP = document.getElementById('col-flt-CP');
      if (btnAll) btnAll.textContent = `Các hiện vật (${state.artifacts.length})`;
      if (btnHA) btnHA.textContent = `Chùa Hương Ấp (${haCount})`;
      if (btnCP) btnCP.textContent = `Làng Cổ Pháp (${cpCount})`;

      renderDynamicRelicCarousel();
      renderRelicsArchive();
      renderCmsQuickImageGrid();
      renderAnimationSection();
      renderComicsSection();
      renderExperientialKits();
      renderComparePairsSection();
      renderCoPhapMemories();
      renderQuizQuestion();
      renderLeaderboard();
      renderMediaSection();
      renderMapPoiList();
      renderCommunityComments();
      applyMenuLabelsToDom();
      refreshSourceCodeTextarea();
      if (leafletMap) initLeafletMap();
    }

    // LƯU VĨNH VIỄN VÀO INDEXEDDB + LOCALSTORAGE KHI NGƯỜI DÙNG ĐẨY/SỬA BẤT KỲ ẢNH, VIDEO, TƯ LIỆU NÀO
    function commitAndSaveState(toastMessage) {
      state.updatedAt = Date.now();
      renderAllUiFromState();
      if (!isInitialLoadComplete) return;
      const payload = buildFullStatePayload();
      savePayloadToIndexedDB(payload);
      try {
        localStorage.setItem('van_xuan_tu_bright_archive_v6', JSON.stringify(payload));
      } catch (quotaErr) {
        // Khi tổng dung lượng Ảnh & Video vượt 5MB của LocalStorage, IndexedDB đã lưu giữ an toàn 100%!
      }
      if (toastMessage) {
        showToast(toastMessage, "success");
      }
    }

    function syncAllUiFromState() {
      commitAndSaveState(null);
    }

    function saveStateToLocal() {
      commitAndSaveState(null);
    }

    function initHeroParticles() {
      const canvas = document.getElementById('heroParticlesCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let pts = [];
      function resize() {
        canvas.width = canvas.clientWidth || 900;
        canvas.height = canvas.clientHeight || 450;
      }
      resize();
      window.addEventListener('resize', resize);
      for (let i = 0; i < 28; i++) {
        pts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2.5 + 1.0,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.45 - 0.15,
          a: Math.random() * 0.65 + 0.25
        });
      }
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -10) p.y = canvas.height + 10;
          if (p.x < -10) p.x = canvas.width + 10;
          if (p.x > canvas.width + 10) p.x = -10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(253, 224, 71, ${p.a})`;
          ctx.fill();
        });
        requestAnimationFrame(draw);
      }
      draw();
    }


    // =========================================================================
    // 12. NHÃN MENU
    // =========================================================================
    state.menuLabels = {
      nav_home: "Trang Chủ Động",
      nav_cat2: "2. Các Hiện Vật Khảo Cổ",
      nav_cat1: "3. Kể Chuyện Lịch Sử",
      nav_cat4: "4. Bảo Tồn Ký Ức & Tri Thức Cộng Đồng",
      nav_cat5: "5. Kết Quả Thực Nghiệm",
      st_anim: "1. Phim Hoạt Hình",
      st_comic: "2. Truyện Tranh Số",
      st_map: "3. Bản Đồ Tương Tác",
      st_kit: "3. Bộ Học Liệu Trải Nghiệm",
      st_quiz: "4. Trò Chơi Trắc Nghiệm",
      mem_compare: "🌓 1. Kho Tư Liệu Đối Chiếu Xưa Và Nay",
      mem_cophap: "🌾 2. Góc Ký Ức Làng Cổ Pháp",
      mem_comm: "🤝 3. Không Gian Đóng Góp Tư Liệu Cộng Đồng",
      arch_relics: "🏺 Các Hiện Vật Khảo Cổ",
      arch_stele: "📜 Văn Bia Đối Chiếu 3 Cột (HA-VB-01)"
    };

    function applyMenuLabelsToDom() {
      const ml = state.menuLabels || {};
      const setSpanText = (btnId, val) => {
        if (!val) return;
        const btn = document.getElementById(btnId);
        if (!btn) return;
        const spans = btn.querySelectorAll('span');
        if (spans.length >= 2) spans[1].textContent = val;
        else btn.textContent = val;
      };
      setSpanText('nav-home', ml.nav_home);
      setSpanText('nav-cat2', ml.nav_cat2);
      setSpanText('nav-cat1', ml.nav_cat1);
      setSpanText('nav-cat4', ml.nav_cat4);
      setSpanText('nav-cat5', ml.nav_cat5);

      setSpanText('st-tab-anim', ml.st_anim);
      setSpanText('st-tab-comic', ml.st_comic);
      setSpanText('st-tab-map', ml.st_map);
      setSpanText('st-tab-kit', ml.st_kit);
      setSpanText('st-tab-quiz', ml.st_quiz);

      const setBtnDirect = (btnId, val) => {
        if (!val) return;
        const b = document.getElementById(btnId);
        if (b) b.textContent = val;
      };
      setBtnDirect('mem-tab-compare', ml.mem_compare);
      setBtnDirect('mem-tab-cophap', ml.mem_cophap);
      setBtnDirect('mem-tab-community', ml.mem_comm);
      setBtnDirect('arch-btn-relics', ml.arch_relics);
      setBtnDirect('arch-btn-stele', ml.arch_stele);

      // Đồng bộ lại các ô input trong bảng CMS
      const syncInput = (inpId, val) => {
        const el = document.getElementById(inpId);
        if (el && val) el.value = val;
      };
      syncInput('lbl_nav_home', ml.nav_home);
      syncInput('lbl_nav_cat2', ml.nav_cat2);
      syncInput('lbl_nav_cat1', ml.nav_cat1);
      syncInput('lbl_nav_cat4', ml.nav_cat4);
      syncInput('lbl_nav_cat5', ml.nav_cat5);
      syncInput('lbl_st_anim', ml.st_anim);
      syncInput('lbl_st_comic', ml.st_comic);
      syncInput('lbl_st_map', ml.st_map);
      syncInput('lbl_st_kit', ml.st_kit);
      syncInput('lbl_st_quiz', ml.st_quiz);
      syncInput('lbl_mem_compare', ml.mem_compare);
      syncInput('lbl_mem_cophap', ml.mem_cophap);
      syncInput('lbl_mem_comm', ml.mem_comm);
      syncInput('lbl_arch_relics', ml.arch_relics);
      syncInput('lbl_arch_stele', ml.arch_stele);

    }

    function saveMenuLabelsFromCms() {
      const g = id => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };
      state.menuLabels = {
        nav_home: g('lbl_nav_home') || state.menuLabels.nav_home,
        nav_cat2: g('lbl_nav_cat2') || state.menuLabels.nav_cat2,
        nav_cat1: g('lbl_nav_cat1') || state.menuLabels.nav_cat1,
        nav_cat4: g('lbl_nav_cat4') || state.menuLabels.nav_cat4,
        nav_cat5: g('lbl_nav_cat5') || state.menuLabels.nav_cat5,
        st_anim: g('lbl_st_anim') || state.menuLabels.st_anim,
        st_comic: g('lbl_st_comic') || state.menuLabels.st_comic,
        st_map: g('lbl_st_map') || state.menuLabels.st_map,
        st_kit: g('lbl_st_kit') || state.menuLabels.st_kit,
        st_quiz: g('lbl_st_quiz') || state.menuLabels.st_quiz,
        mem_compare: g('lbl_mem_compare') || state.menuLabels.mem_compare,
        mem_cophap: g('lbl_mem_cophap') || state.menuLabels.mem_cophap,
        mem_comm: g('lbl_mem_comm') || state.menuLabels.mem_comm,
        arch_relics: g('lbl_arch_relics') || state.menuLabels.arch_relics,
        arch_stele: g('lbl_arch_stele') || state.menuLabels.arch_stele
      };
      applyMenuLabelsToDom();
      commitAndSaveState("Đã lưu tên tất cả các Đề mục lớn & Đề mục nhỏ vào bộ nhớ vĩnh viễn!");
    }

    // Các hàm Sửa nhanh bằng Modal trực quan ngay trong trang (không dùng hộp thoại trình duyệt)
    let activeQuickEditTarget = null;

    function promptEditComicItem(idx) {
      const item = state.comics[idx];
      if (!item) return;
      activeQuickEditTarget = { type: 'comic', index: idx };
      document.getElementById('qeModalHeader').textContent = "✏️ Sửa Trang Truyện Tranh Số";
      document.getElementById('qeLabel1').textContent = "Tiêu đề Trang truyện:";
      document.getElementById('qeInput1').value = item.title || '';
      document.getElementById('qeLabel2').textContent = "Số trang (VD: Trang 01):";
      document.getElementById('qeInput2').value = item.pageNumber || '';
      document.getElementById('qeLabel3').textContent = "Lời thoại / Nội dung thuyết minh:";
      document.getElementById('qeInput3').value = item.caption || '';
      openModal('quickInlineEditModal');
    }

    function deleteComicItem(idx) {
      if (state.comics.length <= 1) {
        showToast("Cần giữ lại ít nhất 1 trang truyện tranh!", "warn");
        return;
      }
      state.comics.splice(idx, 1);
      commitAndSaveState("Đã xóa trang truyện tranh và cập nhật bộ nhớ!");
    }

    function promptEditKitItem(idx) {
      const item = state.experientialKits[idx];
      if (!item) return;
      activeQuickEditTarget = { type: 'kit', index: idx };
      document.getElementById('qeModalHeader').textContent = "✏️ Sửa Bộ Học Liệu Trải Nghiệm";
      document.getElementById('qeLabel1').textContent = "Tên Bộ học liệu trải nghiệm:";
      document.getElementById('qeInput1').value = item.title || '';
      document.getElementById('qeLabel2').textContent = "Phân loại học liệu:";
      document.getElementById('qeInput2').value = item.type || '';
      document.getElementById('qeLabel3').textContent = "Mô tả chi tiết bộ học liệu:";
      document.getElementById('qeInput3').value = item.desc || '';
      openModal('quickInlineEditModal');
    }

    function deleteKitItem(idx) {
      if (state.experientialKits.length <= 1) return;
      state.experientialKits.splice(idx, 1);
      commitAndSaveState("Đã xóa học liệu khỏi danh sách!");
    }

    function promptEditCoPhapItem(idx) {
      const item = state.coPhapMemories[idx];
      if (!item) return;
      activeQuickEditTarget = { type: 'cophap', index: idx };
      document.getElementById('qeModalHeader').textContent = "✏️ Sửa Tư Liệu Góc Ký Ức Làng Cổ Pháp";
      document.getElementById('qeLabel1').textContent = "Tiêu đề Ký ức:";
      document.getElementById('qeInput1').value = item.title || '';
      document.getElementById('qeLabel2').textContent = "Nhân chứng / Nguồn cung cấp:";
      document.getElementById('qeInput2').value = item.narrator || '';
      document.getElementById('qeLabel3').textContent = "Nội dung câu chuyện ký ức:";
      document.getElementById('qeInput3').value = item.story || '';
      openModal('quickInlineEditModal');
    }

    function deleteCoPhapItem(idx) {
      if (state.coPhapMemories.length <= 1) return;
      state.coPhapMemories.splice(idx, 1);
      commitAndSaveState("Đã xóa mục ký ức và cập nhật bộ nhớ!");
    }

    function confirmQuickInlineEditModal() {
      if (!activeQuickEditTarget) return;
      const v1 = document.getElementById('qeInput1').value.trim();
      const v2 = document.getElementById('qeInput2').value.trim();
      const v3 = document.getElementById('qeInput3').value.trim();
      const { type, index } = activeQuickEditTarget;

      if (type === 'comic' && state.comics[index]) {
        if (v1) state.comics[index].title = v1;
        if (v2) state.comics[index].pageNumber = v2;
        if (v3) state.comics[index].caption = v3;
      } else if (type === 'kit' && state.experientialKits[index]) {
        if (v1) state.experientialKits[index].title = v1;
        if (v2) state.experientialKits[index].type = v2;
        if (v3) state.experientialKits[index].desc = v3;
      } else if (type === 'cophap' && state.coPhapMemories[index]) {
        if (v1) state.coPhapMemories[index].title = v1;
        if (v2) state.coPhapMemories[index].narrator = v2;
        if (v3) state.coPhapMemories[index].story = v3;
      }
      closeModal('quickInlineEditModal');
      commitAndSaveState("Đã lưu nội dung chỉnh sửa trực tiếp vào bộ nhớ vĩnh viễn!");
    }


    // =========================================================================
    // 13. HỆ THỐNG XEM, SAO CHÉP & XUẤT MÃ NGUỒN (CODE) CHO ĐƠN VỊ TỰ CHỈNH SỬA
    // =========================================================================
    function generateExportableSourceCode(cleanBase64Placeholder) {
      state.updatedAt = Date.now();
      let htmlStr = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      htmlStr = htmlStr.replace(/<script id="embedded-archive-state-script">[\s\S]*?<\/script>/gi, '');
      htmlStr = htmlStr.replace(/<script>window\.__EMBEDDED_ARCHIVE_STATE__\s*=[\s\S]*?<\/script>/gi, '');
      if (cleanBase64Placeholder) {
        // Giữ nguyên cấu trúc code sạch gọn để mở trong VS Code / Notepad dễ đọc và chỉnh sửa
        htmlStr = htmlStr.replace(/data:image\/jpeg;base64,[A-Za-z0-9+/=]{200,}/g, 'https://images.unsplash.com/photo-1599708153386-62bf3f035c78?auto=format&fit=crop&w=900&q=80');
      } else {
        const embeddedPayload = buildFullStatePayload();
        const embeddedStateJson = JSON.stringify(embeddedPayload).replace(/<\/script/gi, '<\\/script');
        const injectScript = `<script id="embedded-archive-state-script">window.__EMBEDDED_ARCHIVE_STATE__ = ${embeddedStateJson};<\/script></head>`;
        htmlStr = htmlStr.replace('</head>', injectScript);
      }
      return htmlStr;
    }

    function refreshSourceCodeTextarea() {
      const box = document.getElementById('fullSourceCodeTextarea');
      const countEl = document.getElementById('sourceCodeCharCount');
      if (!box) return;
      const cleanCode = generateExportableSourceCode(true);
      box.value = cleanCode;
      if (countEl) {
        countEl.textContent = `Tổng số dòng: ${cleanCode.split('\n').length} dòng (${Math.round(cleanCode.length / 1024)} KB mã nguồn sạch)`;
      }
    }

    function toggleSourceCodeViewerBox() {
      const wrap = document.getElementById('sourceCodeViewerContainer');
      if (!wrap) return;
      wrap.classList.toggle('hidden');
      if (!wrap.classList.contains('hidden')) {
        refreshSourceCodeTextarea();
      }
    }

    function copyFullAppSourceCode() {
      refreshSourceCodeTextarea();
      const box = document.getElementById('fullSourceCodeTextarea');
      if (!box) return;
      box.select();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(box.value).then(() => {
          showToast("📋 Đã sao chép toàn bộ Mã nguồn (Code) vào bộ nhớ tạm! Bạn có thể dán (Ctrl+V) ngay.", "success");
        }).catch(() => {
          document.execCommand('copy');
          showToast("📋 Đã sao chép toàn bộ Mã nguồn (Code)!", "success");
        });
      } else {
        document.execCommand('copy');
        showToast("📋 Đã sao chép toàn bộ Mã nguồn (Code)!", "success");
      }
    }

    function downloadCleanSourceCodeTxt() {
      const cleanCode = generateExportableSourceCode(true);
      const blob = new Blob([cleanCode], { type: 'text/plain;charset=utf-8' });
      triggerDownload(blob, "Ma_Nguon_Web_App_Chua_Huong_Ap_THCS_Pho_Yen.txt");
      showToast("📥 Đã tải tệp Mã nguồn sạch (.TXT) để gửi qua Zalo hoặc mở bằng VS Code / Notepad!", "success");
    }

    // KHỞI ĐỘNG CHUẨN: ĐỌC TRƯỚC TỪ INDEXEDDB -> LOCALSTORAGE -> EMBEDDED STATE RỒI MỚI RENDER (TRÁNH GHI ĐÈ MẤT ẢNH!)
    window.addEventListener('DOMContentLoaded', async function () {
      selectTimeline(0);
      renderChatMessages();
      resetCmsRelicForm();
      initHeroParticles();
      startHeroCarousel();

      let emb = null;
      try {
        const resp = await fetch('./data/archive-data.json', { cache: 'no-cache' });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        emb = await resp.json();
      } catch (err) {
        console.error('Không tải được data/archive-data.json:', err);
        const isFile = location.protocol === 'file:';
        const banner = document.createElement('div');
        banner.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#fef3c7;color:#78350f;border-top:3px solid #f59e0b;padding:12px 16px;font:600 14px sans-serif;text-align:center';
        banner.textContent = isFile
          ? '⚠️ Trang đang mở trực tiếp bằng file:// nên không đọc được dữ liệu (data/archive-data.json). Hãy chạy qua máy chủ cục bộ, ví dụ: python -m http.server 8000 rồi mở http://localhost:8000'
          : '⚠️ Không tải được dữ liệu data/archive-data.json. Vui lòng kiểm tra kết nối hoặc tải lại trang.';
        document.body.appendChild(banner);
      }
      loadPayloadFromIndexedDB().then(idbData => {
        let loc = null;
        try {
          const raw = localStorage.getItem('van_xuan_tu_bright_archive_v6');
          if (raw) loc = JSON.parse(raw);
        } catch (e) { }

        // Sắp xếp các nguồn theo thời gian cập nhật từ cũ đến mới để hợp nhất không sót bất kỳ ảnh/video nào
        const candidates = [emb, loc, idbData].filter(Boolean);
        candidates.sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
        candidates.forEach(src => applySavedPayloadToState(src));
        // Đã xóa cặp đối chiếu CMP-01 (Tường Đá Ong Cổ) & CMP-02 (Sân Chùa & Văn Bia) và chuẩn hóa tiêu đề
        if (Array.isArray(state.comparePairs)) {
          state.comparePairs = state.comparePairs
            .filter(p => p && p.id !== 'CMP-01' && p.id !== 'CMP-02' && !(p.title && p.title.includes('Tường Đá Ong Cổ')))
            .map(p => (p.title && p.title.trim().startsWith('Tư liệu đối chiếu Xưa'))
              ? Object.assign({}, p, { title: 'Chùa Hương Ấp xưa và nay' })
              : p);
          const LB = {
            id: "CMP-LB",
            title: "Tượng Lý Bí xưa và nay",
            desc: "Đối chiếu pho tượng thờ Lý Bí (Lý Nam Đế) trước đây và hiện nay tại di tích.",
            beforeImg: "tuong_ly_bi_xua.jpg",
            afterImg: "tuong_ly_bi_nay.jpg"
          };
          if (!state.comparePairs.some(p => p.id === 'CMP-LB')) {
            const firstIdx = state.comparePairs.findIndex(p => p.title === 'Chùa Hương Ấp xưa và nay');
            if (firstIdx >= 0) state.comparePairs[firstIdx] = LB; else state.comparePairs.unshift(LB);
          }
          if (state.activeCompareIndex >= state.comparePairs.length) state.activeCompareIndex = 0;
        }

        applyAnimVideoFiles();
        isInitialLoadComplete = true;
        renderAllUiFromState();
        syncBeforeAfterWidth();
        // Đồng bộ lại bản đầy đủ nhất vào IndexedDB
        savePayloadToIndexedDB(buildFullStatePayload());
      });
    });
  