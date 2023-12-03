(function($) {
    "use strict"


    //todo list
    $(".tdl-new").on('keypress', function(e) {

        var code = (e.keyCode ? e.keyCode : e.which);

        if (code == 13) {

            var v = $(this).val();

            var s = v.replace(/ +?/g, '');

            if (s == "") {

                return false;

            } else {

                $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>" + v + "</span><a href='#' class='ti-trash'></a></label></li>");

                $(this).val("");

            }

        }

    });





    $(".tdl-content a").on("click", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });



    // for dynamically created a tags

    $(".tdl-content").on('click', "a", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });








})(jQuery);


(function($) {
    "use strict"

    var i = new Datamap( {
        scope: "world", 
        element: document.getElementById("world-map"), 
        responsive: !0, 
        geographyConfig: {
            popupOnHover: !1, 
            highlightOnHover: !1, 
            borderColor: "white", 
            borderWidth: 0.5, 
            highlightBorderWidth: 3, 
            highlightFillColor: "black", 
            highlightBorderColor: "black", 
            borderWidth: 1
        }, 
        bubblesConfig: {
            popupTemplate: function (e, i) {
                return '<div class="datamap-sales-hover-tooltip">'+ i.country+'<span class="ml-2"></span>'+i.sold+"</div>"
            }, 
            borderWidth: 0.5, 
            borderColor:"black",
            highlightBorderWidth: 3, 
            highlightFillColor: "black", 
            highlightBorderColor: "transparent", 
            fillOpacity: .75
        }, 
        fills: {
            Visited: "#777", 
            neato: "#777", 
            white: "#777", 
            defaultFill: "#EBEFF2"
        }
    });
    
    i.bubbles([{
        centered: "USA", fillKey: "white", radius: 5, sold: "10", country: "ABD"
    }, {
        centered: "RUS", fillKey: "neato", radius: 5, sold: "25", country: "Rusya"
    },{ 
        centered: "TUR", fillKey: "white", radius: 5, sold: "350", country: "Türkiye"
    },{ 
        centered: "BEL", fillKey: "white", radius: 5, sold: "10", country: "Belçika"
    },{ 
        centered: "DEU", fillKey: "neato", radius: 5, sold: "45", country: "Almanya"
    },{ 
        centered: "AUS", fillKey: "neato", radius: 5, sold: "8", country: "Avustralya"
    },{ 
        centered: "SAU", fillKey: "neato", radius: 5, sold: "2", country: "Suudi Arabistan"
    },{ 
        centered: "GRC", fillKey: "neato", radius: 5, sold: "25", country: "Yunanistan"
    },{ 
        centered: "ITA", fillKey: "neato", radius: 5, sold: "5", country: "İtalya"
    },{ 
        centered: "CAN", fillKey: "neato", radius: 5, sold: "20", country: "Kanada"
    },{ 
        centered: "JPN", fillKey: "neato", radius: 5, sold: "18", country: "Japonya"
    }
    
    ]),
    window.addEventListener("resize", function (e) {
        i.resize()
    });





})(jQuery);

(function($) {
    "use strict"


     // LINE CHART
      // Morris bar chart
 Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: '2017',
        a: 67,
        b: 33,
        c: 100
    }, {
        y: '2018',
        a: 56,
        b: 44,
        c: 100
    }, {
        y: '2019',
        a: 42,
        b: 58,
        c: 100
    }, {
        y: '2020',
        a: 27,
        b: 23,
        c: 50
    }, {
        y: '2021',
        a: 30,
        b: 20,
        c: 50
    }, {
        y: '2022',
        a: 20,
        b: 30,
        c: 50
    }, {
        y: '2023',
        a: 60,
        b: 50,
        c: 110
    }],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['İc Mimarlık', 'Mimarlık', 'Toplam'],
    barColors: ['#FC6C8E', '#7571f9','#c7ef00'],
    hideHover: 'auto',
    gridLineColor: 'transparent',
    resize: true
    
});


})(jQuery);


(function($) {
    "use strict"


    $('#todo_list').slimscroll({
        position: "right",
        size: "5px",
        height: "250px",
        color: "transparent"
    });

    $('#activity').slimscroll({
        position: "right",
        size: "5px",
        height: "390px",
        color: "transparent"
    });





})(jQuery);



(function($) {
    "use strict"

    let ctx = document.getElementById("chart_widget_2");
    ctx.height = 180;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [0, 15, 2, 25, 3, 4, 1],
                label: "Mimarlık",
                backgroundColor: '#847DFA',
                borderColor: '#847DFA',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#847DFA',
            }, {
                label: "İç Mimarlık",
                data: [5, 10, 5, 20, 8, 2, 10],
                backgroundColor: '#F196B0',
                borderColor: '#F196B0',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#F196B0',
            }
           
        ]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    


})(jQuery);

(function($) {
    "use strict"

    let ctx = document.getElementById("chart_widget_3");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [0, 15, 57, 12, 85, 10],
                label: "iPhone X",
                backgroundColor: 'transparent',
                borderColor: '#847DFA',
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: '#847DFA',
                pointBackgroundColor: '#fff',
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                backgroundColor: '#000',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    


})(jQuery);



/*******************
Chart Chartist
*******************/
(function($) {
    "use strict"


    new Chartist.Line("#chart_widget_3", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: !1,
        showPoint: !0,
        showLine: !1,
        fullWidth: !1,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 4,
            bottom: -20,
            left: 4
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });


    new Chartist.Pie("#chart_widget_3_1", {
        series: [35, 65]
    }, {
        donut: !0,
        donutWidth: 10,
        startAngle: 0,
        showLabel: !1
    });

})(jQuery);




/*******************
Pignose Calender
*******************/
(function ($) {
    "use strict";

    $(".year-calendar").pignoseCalendar({
        theme: "blue"
    }), $("input.calendar").pignoseCalendar({
        format: "YYYY-MM-DD"
    });

})(jQuery);