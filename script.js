function _0x346f(_0x173efb,_0x25708c){var _0x3131ec=_0x3131();return _0x346f=function(_0x346fa1,_0x56477e){_0x346fa1=_0x346fa1-0x197;var _0x2ce669=_0x3131ec[_0x346fa1];return _0x2ce669;},_0x346f(_0x173efb,_0x25708c);}function _0x3131(){var _0x5be9ef=['css','Freelancer','active','sticky','1285017NqzHjq','.navbar','318JCincf','Front-end\x20Developer','.carousel','.navbar\x20.menu','20110uuKYzr','58okLZHp','Web\x20Developer','ready','.scroll-up-btn','1990872OzeWeE','8SnzXaN','.navbar\x20.menu\x20li\x20a','830htlPkr','20345vghCvj','removeClass','addClass','toggleClass','Designer','.menu-btn','click','75977neuoZI','html','scrollY','.typing-2','owlCarousel','show','60468RCvdng','1030603EKPRXn','scrollBehavior','AI\x20Web\x20Dev'];_0x3131=function(){return _0x5be9ef;};return _0x3131();}var _0x4c0488=_0x346f;(function(_0x8576e5,_0x3dcea3){var _0x3285ef=_0x346f,_0x2fdede=_0x8576e5();while(!![]){try{var _0x20a4cb=parseInt(_0x3285ef(0x1ad))/0x1*(-parseInt(_0x3285ef(0x1ae))/0x2)+parseInt(_0x3285ef(0x1a7))/0x3+parseInt(_0x3285ef(0x19f))/0x4+-parseInt(_0x3285ef(0x1b6))/0x5*(parseInt(_0x3285ef(0x1a9))/0x6)+parseInt(_0x3285ef(0x1a0))/0x7*(-parseInt(_0x3285ef(0x1b3))/0x8)+parseInt(_0x3285ef(0x1b2))/0x9+parseInt(_0x3285ef(0x1b5))/0xa*(parseInt(_0x3285ef(0x199))/0xb);if(_0x20a4cb===_0x3dcea3)break;else _0x2fdede['push'](_0x2fdede['shift']());}catch(_0x25b86d){_0x2fdede['push'](_0x2fdede['shift']());}}}(_0x3131,0x4741d),$(document)[_0x4c0488(0x1b0)](function(){var _0x1c8c20=_0x4c0488;$(window)['scroll'](function(){var _0x1869e4=_0x346f;this['scrollY']>0x14?$(_0x1869e4(0x1a8))[_0x1869e4(0x1b8)](_0x1869e4(0x1a6)):$('.navbar')[_0x1869e4(0x1b7)](_0x1869e4(0x1a6)),this[_0x1869e4(0x19b)]>0x1f4?$('.scroll-up-btn')[_0x1869e4(0x1b8)](_0x1869e4(0x19e)):$('.scroll-up-btn')[_0x1869e4(0x1b7)](_0x1869e4(0x19e));}),$(_0x1c8c20(0x1b1))[_0x1c8c20(0x198)](function(){var _0x434f28=_0x1c8c20;$(_0x434f28(0x19a))['animate']({'scrollTop':0x0}),$(_0x434f28(0x19a))[_0x434f28(0x1a3)](_0x434f28(0x1a1),'auto');}),$(_0x1c8c20(0x1b4))['click'](function(){var _0x2e6aac=_0x1c8c20;$(_0x2e6aac(0x19a))[_0x2e6aac(0x1a3)](_0x2e6aac(0x1a1),'smooth');}),$(_0x1c8c20(0x197))[_0x1c8c20(0x198)](function(){var _0x5d1287=_0x1c8c20;$(_0x5d1287(0x1ac))[_0x5d1287(0x1b9)](_0x5d1287(0x1a5)),$('.menu-btn\x20i')['toggleClass'](_0x5d1287(0x1a5));});var _0x57e719=new Typed('.typing',{'strings':[_0x1c8c20(0x1af),_0x1c8c20(0x1aa),_0x1c8c20(0x1a2),'Designer',_0x1c8c20(0x1a4)],'typeSpeed':0x64,'backSpeed':0x3c,'loop':!![]}),_0x57e719=new Typed(_0x1c8c20(0x19c),{'strings':[_0x1c8c20(0x1af),'Front-end\x20Developer',_0x1c8c20(0x1a2),_0x1c8c20(0x1ba),_0x1c8c20(0x1a4)],'typeSpeed':0x64,'backSpeed':0x3c,'loop':!![]});$(_0x1c8c20(0x1ab))[_0x1c8c20(0x19d)]({'margin':0x14,'loop':!![],'autoplay':!![],'autoplayTimeOut':0x7d0,'autoplayHoverPause':!![],'responsive':{0x0:{'items':0x1,'nav':![]},0x258:{'items':0x2,'nav':![]},0x3e8:{'items':0x3,'nav':![]}}});}));$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Front-end Developer", "AI Web Dev", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Front-end Developer", "AI Web Dev", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});
