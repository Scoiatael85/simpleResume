var model = {
    nowCat: null,
    cats: [
        {
            clicks : 0,
            name : 'Mittens',
            picSrc : 'pics/cat.jpg'
        },
        {
            clicks : 0,
            name : 'Humperdink',
            picSrc : 'pics/cat2.jpg'
        },
        {
            clicks : 0,
            name : 'Ramen & Noodle',
            picSrc : 'pics/cat3.jpg'
        },
        {
            clicks : 0,
            name : 'Pampers',
            picSrc : 'pics/cat4.jpg'
        },
        {
            clicks : 0,
            name : 'Sing-song',
            picSrc : 'pics/cat5.jpg'
        },
        {
            clicks : 0,
            name : 'Ninja',
            picSrc : 'pics/cat6.jpg'
        },
        {
            clicks : 0,
            name : 'Snake Eyes',
            picSrc : 'pics/cat7.jpg'
        },
        {
            clicks : 0,
            name : 'Tigress',
            picSrc : 'pics/cat8.jpg'
        },
        {
            clicks : 0,
            name : 'NapNap',
            picSrc : 'pics/cat9.jpg'
        },
        {
            clicks : 0,
            name : 'Hsss',
            picSrc : 'pics/cat10.jpg'
        }
    ]
};

//OOOCCCTTTOOOPPPUUUSSS     OOOCCCTTTOOOPPPUUUSSS
var octopus = {

    init: function() {
        model.nowCat = 0;
        catListView.init();
        catView.init();
        catAdminView.init();
    },

    getCurrentCat: function() {
        return model.nowCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.nowCat = cat;
    },

    fixCurrentCat: function() {
        console.log($(options.children));
        if ($('#inputName').val() == false) {     
        } else {model.nowCat.name = $('#inputName').val()}
        // if ($('#inputImg').val() == false) {         
        // } else {model.nowCat.picSrc = $('#inputImg').val()}
        if ($('#inputClicks').val() == false) {       
        } else {model.nowCat.clicks = $('#inputClicks').val()}
    },

    incrementCounter: function() {
        model.nowCat.clicks++;
        catView.render();
        catAdminView.render();
        var countId = $('#counter');
        var ccFade = function() {
        countId.fadeOut(2000);
        }
        var ccReset = function(){
            countId.css('opacity', '.8');
            countId.css('display', 'block');
        }
        countId.stop()
        ccReset();
        setTimeout(ccFade, 100);    
    }
};

//VVIIEEWW      VVIIEEWW     VVIIEEWW    VVIIEEWW
var catView = {

    init: function() {
        this.catElem = $('.test');
        this.catNameElem = $('#cat-name');
        this.catImageElem = $('#cat-img');
        this.countElem = $('#counter');
        var picClick = function(){
            octopus.incrementCounter();
        };
        $('.test').click(picClick); 
        this.render();
    },

    render: function() {
        var nowCat = octopus.getCurrentCat();

        this.countElem.html(nowCat.clicks);
        this.catNameElem.html(nowCat.name);
        this.catImageElem.attr("src", nowCat.picSrc);
    }
};

var catListView = {

    init: function() {
        this.catListElem = $('#namesList');
        this.render();
        $( "#admin" ).click(function() {
            $('.hide').toggle();
        });
    },

    render: function() {
        var cat, elem, i, id;
        var cats = octopus.getCats();
        this.catListElem.innerHTML = '';

        for (i = cats.length; i--;) {
            cat = cats[i];
            elem = $('<div class="selector"><ul class="catNames"></ul></div>');
            var ccClick = function(catCopy) {
                return function() {
                octopus.setCurrentCat(catCopy);
                catView.render();
                catAdminView.render();
            };
            }(cat);
            $(elem).click(ccClick);
            this.catListElem.prepend(elem);
            elem.children('.catNames').append(cat.name);
        }
    }
};
var catAdminView = {

    init: function() {
        this.adminCatName = $('#inputName');
 //       this.adminCatImg = $('#inputImg');
        this.adminCatClick = $('#inputClicks'); 
        this.catAdminElem = $('#options');
        this.render();
        var adminCancel = function() {
            $('#inputName').val('');
  //          $('#inputImg').val('');
            $('#inputClicks').val('');
            $('.hide').toggle(false);
        }
        $('#canBtn').click(adminCancel);
        var adminSave = function() {
            octopus.fixCurrentCat();
            catView.render();
            adminCancel();
            catAdminView.render();
            $('.selector').remove();
            catListView.render();
        }
        $('#saveBtn').click(adminSave);

        var cat, elem, i;
        var cats = octopus.getCats();
        this.catAdminElem.innerHTML = '';
        for (i = cats.length; i--;) {
            cat = cats[i];
            elem = $('<option class="optNames" value=""></option>');
            this.catAdminElem.prepend(elem);
            elem.attr("value", cat.picSrc);
            elem.html(cat.name);
        }
    },

    render: function() {
        var nowCat = octopus.getCurrentCat();
        this.adminCatName.attr("placeholder", nowCat.name);
//        this.adminCatImg.attr("placeholder", nowCat.picSrc);
        this.adminCatClick.attr("placeholder", nowCat.clicks);
    }
};

octopus.init();
