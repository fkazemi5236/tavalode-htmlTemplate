// تابع افزودن به علاقه مندی ها
function addToWishes(el) {
    $(el).toggleClass("is-active");
}

// تابع شمارنده محصول
function input_number(el, param) {
    var input = $(el).parents('.product__quantity').children('input');
    var value = Number($(input).val());
    if (param === 'plus' && value < 999) {
        value += 1;
    } else {
        if (value >= 2) {
            value -= 1;
        }
    }
    input.val(value);
}

// تابع شمارنده شارژ موجودی
function input_numberCharge(el, param) {
    var input = $(el).parents('.product__quantity_charge').children('input');
    var value = Number($(input).val());
    if (param === 'plus') {
        value += 50;
    } else {
        if (value >= 100) {
            value -= 50;
        }
    }
    input.val(value + '.000');
}

// زمانی که دکمه ی سفارش کلیک میشه
// شمارنده ی محصول نمایش داده بشه
function addToCart(el) {
    $(el).addClass('hide').next('.product__quantity').removeClass('hide');
}

// اسلایدر محدوده قیمت در صفحه لیست محصولات
function RangeSlider() {
    var $slider = $('.price_range #range').get(0);
    var $min = $('.price_range #min');
    var $max = $('.price_range #max');
    var minVal = 10000;
    var maxVal = 1000000;
    // میزان استپ هر پدال توی درگ کردنش
    var gap = 10000;
    // مشخص کردن فاصله ی بین پدال ها
    var start_range_paddle_1 = (maxVal * 0.3);
    var start_range_paddle_2 = (maxVal - start_range_paddle_1);
    if ($slider) {
        noUiSlider.create($slider, {
            start: [start_range_paddle_1, start_range_paddle_2],
            connect: true,
            step: gap,
            direction: 'rtl',
            range: {
                'min': minVal,
                'max': maxVal
            },
            pips: {
                mode: 'range',
                density: gap
            },
            format: wNumb({
                decimals: 0,
                thousand: '،',
            }),
            ariaFormat: wNumb({
                decimals: 0,
                thousand: '،',
            }),
        });
        $slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                $max.get(0).value = value;
            } else {
                $min.get(0).value = value;
            }
            $('.noUi-value-large').text(minVal);
            $('.noUi-value-large:last-child').text(maxVal);
        });
    }

}

// همون محدوده قیمت توی موبایلی
function RangeSlider2() {
    var $slider = $('.price_range #range2').get(0);
    var $min = $('.price_range #min2');
    var $max = $('.price_range #max2');
    var minVal = 10000;
    var maxVal = 1000000;
    // میزان استپ هر پدال توی درگ کردنش
    var gap = 10000;
    // مشخص کردن فاصله ی بین پدال ها
    var start_range_paddle_1 = (maxVal * 0.3);
    var start_range_paddle_2 = (maxVal - start_range_paddle_1);


    if ($slider) {
        noUiSlider.create($slider, {
            start: [start_range_paddle_1, start_range_paddle_2],
            connect: true,
            step: gap,
            direction: 'rtl',
            range: {
                'min': minVal,
                'max': maxVal
            },
            pips: {
                mode: 'range',
                density: gap
            },
            format: wNumb({
                decimals: 0,
                thousand: '،',
            }),
            ariaFormat: wNumb({
                decimals: 0,
                thousand: '،',
            }),
        });
        $slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                $max.get(0).value = value;
            } else {
                $min.get(0).value = value;
            }
            $('.noUi-value-large').text(minVal);
            $('.noUi-value-large:last-child').text(maxVal);
        });
    }

}



// لیست بازشونده در صفحه لیست محصولات
function OpenCollapsableList(el, lessHeight) {

    var list = $(el).parents(".collapsable_pane").children('ul.list');
    var realHeight = list.attr('data-initHeight');
    if (list.hasClass('is-open')) {
        list.css('height', lessHeight + 'px').removeClass('is-open');
        $(el).text("+ مشاهده بیشتر");
    } else {
        list.css('height', realHeight).addClass('is-open');
        $(el).text("- مشاهده کمتر");
    }
    // اپدیت شدن استیکی سایدبار
    sidebar.stickySidebar('updateSticky');
}
function InitCollapsableList() {
    $(".off-canvas-content .collapsable_pane ul.list").each(function (index, el) {
        var listRealHeight = $(this).innerHeight();
        $(this).attr('data-initHeight', listRealHeight + 'px').css('height', '250px');
    });
}

// رادیوباتن در صفحه داشبورد - افزایش موجودی
function radio_checked(el) {
    var element = '.' + $(el).attr("class");
    $(element).each(function (index, el) {
        $(this).removeClass("selected").children("input").prop("checked", false);
    })
    $(el).addClass("selected").children("input").prop("checked", true);
}




// اپلود عکس اواتار در دشبرد
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

jQuery(document).ready(function ($) {


    // فراخوانی پکیج های فاندیشن
    $(document).foundation()

    // پاک شدن اسپینر
    $(window).on('load', function () {
        $('.spinner').fadeOut(500).hide(0)
    });

    // اسلایدر محدوده قیمت در صفحه لیست محصولات
    RangeSlider();
    RangeSlider2();


    InitCollapsableList();
    // زمانی که پاپ اپ فیلتر باز شد، یکبار دیگر لیست را صدا بزنه
    $('#filter_reveal').on('open.zf.reveal', function () {
        $(".reveal .collapsable_pane ul.list").each(function (index, el) {
            var listRealHeight = $(this).innerHeight();
            $(this).attr('data-initHeight', listRealHeight + 'px').css('height', '100px');
        });
    });

});