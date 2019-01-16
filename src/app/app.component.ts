import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aokhoac-demo';
  //mySlideImages = [1,2].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  mySlideImages = ['http://aokhoaclen.com/wp-content/uploads/2016/07/slider1.jpg', 'http://aokhoaclen.com/wp-content/uploads/2016/07/slider2.jpg'];
  //myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  myCarouselImages =['http://aokhoaclen.com/wp-content/uploads/2016/07/slider1.jpg', 'http://aokhoaclen.com/wp-content/uploads/2016/07/slider2.jpg'];
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
  
  products: Product[] = [
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-xoe/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/10/22407640_2369843256573134_2064825618_n.jpg',
      price : 295000,
      productNM : 'ÁO KHOÁC LEN DÀI XÒE'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-co-tim-nut-go/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/09/21362706_712453092277150_768765553_n.jpg',
      price : 310000,
      productNM : 'ÁO KHOÁC LEN CỔ TIM NÚT GỖ'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-gan-ngang/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/06/19125326_671210826401377_1664908402_o-1.jpg',
      price : 265000,
      productNM : 'ÁO KHOÁC LEN GÂN NGANG' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-soc-ngang/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/06/19024767_669721173217009_504405967_o-1.jpg',
      price : 240000,
      productNM : 'ÁO KHOÁC LEN DÀI SỌC NGANG' 
    }
  ];

  productAoDais: Product[] = [
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-xoe/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/10/22407640_2369843256573134_2064825618_n.jpg',
      price : 295000,
      productNM : 'ÁO KHOÁC LEN DÀI XÒE'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-soc-ngang/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/06/19024767_669721173217009_504405967_o-1.jpg',
      price : 240000,
      productNM : 'ÁO KHOÁC LEN DÀI SỌC NGANG' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-soc-doc/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/06/18901839_666775003511626_2022458685_o.jpg',
      price : 190000,
      productNM : 'ÁO KHOÁC LEN DÀI SỌC DỌC'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-co-vest/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/06/18838720_666190363570090_271221920_o.jpg',
      price : 240000,
      productNM : 'ÁO KHOÁC LEN CỔ VEST' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dai-co-non/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/05/18721335_2277455889145205_341279070_o.jpg',
      price : 280000,
      productNM : 'ÁO KHOÁC LEN DÀI CÓ NÓN'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-mong-dang-dai-vien/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/05/18745106_2277455939145200_1335402487_o.jpg',
      price : 270000,
      productNM : 'ÁO KHOÁC LEN MỎNG DÁNG DÀI VIỀN' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-dang-dai-caro/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/05/18698633_2275673249323469_1902732920_o.jpg',
      price : 290000,
      productNM : 'ÁO KHOÁC LEN DÁNG DÀI CARO'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-2-tui-soc-lung/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/05/18378872_653705618151898_461477559_o.jpg',
      price : 285000,
      productNM : 'ÁO KHOÁC LEN 2 TÚI SỌC LƯNG' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-tron-lo/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/04/18110339_647458888776571_632549427_o.jpg',
      price : 320000,
      productNM : 'ÁO KHOÁC LEN TRƠN LỖ'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-tua-rua/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2017/04/17796382_658038721050059_3876420050273260207_n.jpg',
      price : 320000,
      productNM : 'ÁO KHOÁC LEN TUA RUA' 
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-khoac-len-soc-ngang/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2016/08/IMG_20160824_7-01.jpeg',
      price : 290000,
      productNM : 'ÁO KHOÁC LEN SỌC NGANG'
    },
    { 
      proStatus : 'new',
      urlProduct : 'http://aokhoaclen.com/san-pham/ao-cardigan-nu/',
      urlImgProduct : 'http://aokhoaclen.com/wp-content/uploads/2015/10/IMG_20160625_18.png',
      price : 260000,
      productNM : 'ÁO CARDIGAN NỮ' 
    }
  ];

  news: ItemNew[] = [
    { 
      urlPost : 'http://aokhoaclen.com/dien-cung-ao-khoac-len-mong/',
      urlThumb : 'http://aokhoaclen.com/wp-content/uploads/2017/05/18280083_652012848321175_1184614104_n.jpg',
      title : 'Diện đồ cùng áo khoác len mỏng',
      content : 'Mọi người đi chơi đi dạo với mùa nắng nóng như thế này thì 1 chiếc áo khoác len mỏng nhiều màu sắc sẽ mang lại cho bạn cảm giác tươi mát hơn khi mặc. Cuộc sống muôn màu muôn vẻ và cũng như mỗi người có một tính cách khác nhau, mỗi người có […]'
    },
    { 
      urlPost : 'http://aokhoaclen.com/ao-cardigan-nu/',
      urlThumb : 'http://aokhoaclen.com/wp-content/uploads/2017/04/cach-mix-do-dep-voi-ao-cardigan-2.jpg',
      title : 'Áo cardigan nữ',
      content : 'Áo cardigan nữ xuất hiện từ khá lâu về trước, cách đây vài chục năm thì những chiếc áo cardigan chỉ có những hình dáng mẫu mã đơn sơ, nó được làm từ len sợi&nbsp;tự nhiên dùng để mặc trong hoặc khoác ngoài. Và ngày nay để bắt kịp với xu hướng thời trang hiện […]'
    },
    { 
      urlPost : 'http://aokhoaclen.com/ao-cardigan/',
      urlThumb : 'http://aokhoaclen.com/wp-content/uploads/2017/04/18009082_644109735778153_1609708382_n.jpg',
      title : 'Áo Cardigan',
      content : 'Sài Gòn mùa này lắm những cơn mưa. Sài Gòn những ngày này mưa tả tơi, mưa sáng , mưa chiều, mưa tối, mưa ngập lối đi mưa giăng kín đường. Những cơn mưa ấy làm thời tiết Sài Gòn trở nên dịu hơn, không còn những cái nắng oi ả của những buổi chớm […]'
    },
    { 
      urlPost : 'http://aokhoaclen.com/nhung-ngay-tro-gio-cung-ao-khoac-len-day-dang-dai/',
      urlThumb : 'http://aokhoaclen.com/wp-content/uploads/2016/08/ao-khoac-len-nu-dang-dai-111-1.jpg',
      title : 'Những ngày trở gió cùng áo khoác len dày dáng dài',
      content : 'Sài Gòn là mảnh đất của những ngày nắng. Nhắc đến Sài Gòn thì trong đầu mỗi người đều mường tượng đến cái xô bồ, tấp nập, khói bụi kèm theo đó là cái nắng oi ả. Khi nhắc đến Sài Gòn, người ta thường mặc định cái thành phố này là như vậy. Nhưng […]'
    }
  ];
}

export interface Product {
  proStatus : String;
  urlProduct : String;
  urlImgProduct : String;
  price : number;
  productNM : String;
}

// export interface ItemTopHeader {
//   itemName : String;
//   itemIcon : String;
// }

export interface ItemNew {
  urlPost : String;
  urlThumb : String;
  title : String;
  content : String;
}