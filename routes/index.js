var express = require("express");
var router = express.Router();

// {
//   thumb: "",
//   name: "",
//   price: ""
// }
/* GET home page. */
router.get("/", function(req, res, next) {
  const data = [
    {
      category: "Điện thoại di động",
      products: [
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
          name: "iPhone 11 Pro Max 256GB",
          price: "37.990.000đ"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
          name: "Samsung Galaxy S10+ (512GB)",
          price: "20.990.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
          name: "OPPO F11 Pro 128GB",
          price: "7.490.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
          name: "Samsung Galaxy A50s",
          price: "6.990.000₫"
        }
      ]
    },
    {
      category: "Laptop",
      products: [
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/44/208863/acer-swift-sf315-52-38yq-i3-8130u-4gb-1tb-156f-win-400x400.jpg",
          name: "HP 348 G5 i3 7020U (7XJ62PA)",
          price: "9.990.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/44/210200/acer-switch-sw512-52p-34rs-i3-7130u-4gb-128gb-win10-400x400.jpg",
          name: "Acer Switch 5 SW512 52P 34RS i3 7130U (NT.LDTSV.004)",
          price: "15.740.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-1-400x400.jpg",
          name: "Lenovo Ideapad 330S 14IKBR i5 8250U (81F400NLVN)",
          price: "12.490.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/44/203456/lenovo-ideapad-c340-14iwl-i3-8145u-8gb-256gb-touch-22-400x400.jpg",
          name: "Lenovo ideapad C340 14IWL i3 8145U (81N4003SVN)",
          price: "15.190.000₫"
        }
      ]
    },
    {
      category: "Phụ kiện điện thoại",
      products: [
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/57/145715/sac-dtdd-pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-400x400.jpg",
          name: "Pin sạc dự phòng 19.000 mAh Xmobile Gram 6S Trắng",
          price: "784.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/382/144572/loa-bluetooth-esaver-s12b-2-den-avatar-2-400x400.jpg",
          name: "Loa Bluetooth eSaver S12B-2 Đen",
          price: "712.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/58/205882/cap-lightning-mfi-1m-mbest-ds286-wb-xam-fix1-400x400.jpg",
          name: "Cáp Lightning MFI 1 m Mbest DS286-WB Xám",
          price: "175.000₫"
        },
        {
          thumb:
            "https://cdn.tgdd.vn/Products/Images/54/206665/tai-nghe-bluetooth-mozard-flex4-den-xanh-1-600x600-1-400x400.jpg",
          name: "Tai nghe Bluetooth Mozard Flex4 Đen Xanh",
          price: "262.000₫"
        }
      ]
    }
  ];

  res.render("index", { title: "Express", data });
});

router.get("/product/:id", function(req, res, next) {
  res.render("pages/product-detail");
});

router.get("/cart", function(req, res, next) {
  res.render("pages/cart");
});

router.get("/search", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/search", { products });
});

router.get("/order", function(req, res, next) {
  res.render("pages/order");
});

router.get("/category/:id", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/category", { products });
});

router.get("/manufacturer/:id", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/manufacturer", { products });
});

module.exports = router;
