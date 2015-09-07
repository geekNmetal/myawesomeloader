/* 
 *    myAwesomeLoader
 *    Un preloader sexy hautement configurable
 *    
 *    Created on    : 31 août 2015, 19:34:54
 *    Author        : Sébastien Leroy
 *    Email         : sebastien@2dbnet.fr
 *    Version       : 1.0.0
 *    License       : MIT
 */

(function ($) {
    $.fn.myAwesomeLoader = function (options) {

        var defauts =
                {
                    loadingMessage: "Chargement",
                    type: "dots",
                    numberOfDots: 5,
                    dotType: "round",
                    dotEffect: "rotateY",
                    dotWidth: "20px",
                    dotHeight: "20px",
                    barWidth: "200px",
                    barHeight: "5px",
                    border: true,
                    loaderColor: "0075b2",
                    logoPath: "../logo.png",
                    logoEffect: "",
                    percentage: true
                };
                
        params = $.extend(defauts, options);

        return this.each(function () {
            $(this).prepend('<div class = "myAwesomeLoader">'
                    + '<p class = "loadingMessage">' + params.loadingMessage + '</p>'
                    + '<div id="barWrapper"><div id="bar"></div></div>'
                    + '<p id="percentage"></p>'
                    + '</div>');

            if (params.logoPath !== "") {
                $('.myAwesomeLoader').prepend('<div class = "loader-img"><img src=' + params.logoPath + ' alt="Logo" id="logo"/></div>');
            }

            function percentage() {

                var elements = $('html').find('img[src]');
                $('html [style]').each(function () {
                    var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                    if (src && src != 'none') {
                        elements = elements.add($('<img src="' + src + '"/>'));
                    }
                });

                $('#barWrapper').width(params.barWidth);

                var barWrapper = $('#barWrapper');
                var bar = $('#bar');
                var percentage = $('#percentage');
                var loaded = 0;
                duration = 1000;

                function animateStep(now, fx) {
                    percentage.text(parseInt(now) + ' %');
                }

                function progress() {
                    percentageValue = 0;
                    if (elements.length) {
                        percentageValue = parseInt((loaded / elements.length) * 100);
                    }
                    bar.stop().animate({width: percentageValue + '%'}, duration);
                    barWrapper.stop().animate({percentage: percentageValue},
                    {
                        duration: duration,
                        step: animateStep
                    });
                }

                if (elements.length) {
                    progress();
                    elements.load(function () {
                        $(this).off('load');
                        loaded++;
                        progress();
                    });
                }
            }
            ;
            percentage();
            if (params.percentage === false) {
                $('#percentage').remove();
            }

            switch (params.type) {
                case "dots":
                    $(function () {
                        $('.myAwesomeLoader').append('<div class = "loading"></div>');
                        for (var dot = 1; dot <= params.numberOfDots; ++dot) {
                            $('.loading').each(function () {
                                $(this).append('<span class="dot blank" data-dot=' + dot + '> </span>');
                            });
                        }
                        
                        if (params.border === false) {
                            $('.dot').css('border', 'none');
                        } else {
                            $('.dot').css('border-color', '#' + params.loaderColor);
                        }
                        $('[data-dot]').each(function () {
                            switch (params.dotType) {
                                case "square":

                                    break;
                                case "round":
                                    $(this).addClass('round');
                                    break;
                            }
                        });
                        $('.dot').width(params.dotWidth).height(params.dotHeight);
                        loads = $('.dot').length;
                        filling = '';
                        function loader() {
                            function fill(i) {
                                clearTimeout(filling);
                                var filling = setTimeout(function () {
                                    $('[data-dot=' + i + ']').toggleClass("filled").toggleClass("blank");
                                    $('.filled').css('background', '#' + params.loaderColor);
                                    switch (params.dotEffect) {
                                        case "rotateX":
                                            $('[data-dot=' + i + ']').toggleClass('rotateX');
                                            break;
                                        case "rotateY":
                                            $('[data-dot=' + i + ']').toggleClass('rotateY');
                                            break;
                                        case "rotateZ":
                                            $('[data-dot=' + i + ']').toggleClass('rotateZ');
                                            break;
                                        case "bounce":
                                            $('[data-dot=' + i + ']').toggleClass('bounce');
                                            break;
                                    }
                                }, i * 200);
                            }
                            for (var i = 1; i <= loads; ++i) {
                                fill(i);
                            }
                            var reload = setTimeout(function () {
                                loader();
                            }, 200 * params.numberOfDots);
                        }
                        loader();
                    });
                    break;

                case "bar":
                    $('#bar, #barWrapper').show();
                    if (params.border === false) {
                        $('#barWrapper').css('border', 'none');
                    } else {
                        $('#barWrapper').css('border-color', '#' + params.loaderColor);
                    }
                    $('#bar').css('background', '#' + params.loaderColor);
                    $('#barWrapper').height(params.barHeight);
                    break;
            }



            switch (params.logoEffect) {
                case "rotateX":
                    function rotateX() {
                        $('#logo').toggleClass('rotateX');
                        var redoRotateX = setTimeout(function () {
                            rotateX();
                        }, 200 * params.numberOfDots);
                    }
                    rotateX();
                    break;
                case "rotateY":
                    function rotateY() {
                        $('#logo').toggleClass('rotateY');
                        var redoRotateY = setTimeout(function () {
                            rotateY();
                        }, 200 * params.numberOfDots);
                    }
                    rotateY();
                    break;
                case "rotateZ":
                    function rotateZ() {
                        $('#logo').toggleClass('rotateZ');
                        var redoRotateZ = setTimeout(function () {
                            rotateZ();
                        }, 200 * params.numberOfDots);
                    }
                    rotateZ();
                    break;
                case "bounce":
                    function bounce() {
                        $('#logo').toggleClass('bounce');
                        var redoBounce = setTimeout(function () {
                            bounce();
                        }, 200 * params.numberOfDots);
                    }
                    bounce();
                    break;
                case "verticalUncover":
                    $('.loader-img').append('<div class="mask"></div>');
                    $('.mask').stop(true, true).animate({height: percentageValue + '%'}, duration);
                    break;
                case "horizontalUncover":
                    $('.loader-img').append('<div class="mask"></div>');
                    $('.mask').stop(true, true).animate({width: percentageValue + '%'}, duration);
                    break;
            }
        });
        return this;
    };

    $(window).load(function () {
        setTimeout(function () {
            $(".myAwesomeLoader").fadeOut("500", function () {
                $(this).remove();
            });
        }, duration);
    });
})(jQuery);