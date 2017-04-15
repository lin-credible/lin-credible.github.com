/*------------------------------------------
    说明：漏斗图
    作者：taolr
    日期：2016-12-16
---------------------------------------------*/

/* global app: true */

/*-------------------------------------------
    说明：辅助对象
---------------------------------------------*/

(function(root){
  var app = (function() {
      /*-------------------------------------------
          私有变量
      ---------------------------------------------*/
      var funnelDefaultColor = [
            '#e15025',
            '#f18922',
            '#f7a83a',
            '#45bf7b',
            '#5f86d1',
            '#4774ca',
            '#3d5f9f'
        ];
    /*
       var funnelDefaultColor = [
        '#50413D',
        '#B1523B',
        '#C2E2FF',
        '#A4B8DB',
        '#5F739E',
        '#DDE1DF',
        '#839AA6'
       ];
    */

      return {
        /*-------------------------------------------
          Func: 生成漏斗图
          params: [{}]
          memo: 还需要加一个是否支持SVG的判断
        ---------------------------------------------*/
        genFunelChart: function(data, height, w1, w2, funelColors) {

            var defaultColor = '#eee',
                defaultData = [
                    {percent: 0.143},
                    {percent: 0.143},
                    {percent: 0.143},
                    {percent: 0.143},
                    {percent: 0.143},
                    {percent: 0.143},
                    {percent: 0.143}
                ],
                funelOpacity = 0.2;
                /*
                hoverOpacity = 0.5,
                w3Default = 60;
                */

            /* 测试 */
            /*
            data = [
                {percent: 0},
                {percent: 0},
                {percent: 0},
                {percent: 0},
                {percent: 0},
                {percent: 0},
                {percent: 0}
            ];
            */

            height = (typeof height !== 'undefined') ? height : 280;
            w1 = (typeof w1 !== 'undefined') ? w1 : 300;
            w2 = (typeof w2 !== 'undefined') ? w2 : 60;

            funelColors = (typeof funelColors !== 'undefined') ? funelColors : funnelDefaultColor;

            var allWidth = w1;

            var funelSvg = ['<svg id="funel_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="' + allWidth + '" height="' + height + '" viewBox="0 0 ' + allWidth + ' ' + height + '">'];

            if (data[0]) {

                /* 边界处理之 全部为0 */
                $.each(data, function(i, item){
                    if (item.percent > 0) {
                        funelOpacity = 1;
                    }
                });

                if (funelOpacity !== 1) {
                    data = defaultData;
                    /*
                    hoverOpacity = 0.2;
                    */
                }

                var p0 = 0;
                    /* len = data.length; */
                $.each(data, function(i, item){
                    /* 正常漏斗组成 */
                    var p1 = item.percent,
                        r0 = parseFloat((((w1 - w2) * p0) / 2).toFixed(3)),
                        r1 = parseFloat((((w1 - w2) * p1) / 2).toFixed(3)),

                        x1 = r0,
                        y1 = parseFloat((height * p0).toFixed(3)),

                        x2 = r0 + r1,
                        y2 = parseFloat((height * (p0 + p1)).toFixed(3)),

                        x3 = w1 - r0 - r1,
                        y3 = y2,

                        x4 = w1 - r0,
                        y4 = y1;


                    var colorNow = funelColors[i] || defaultColor,
                        normalPath = '<path d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + ' L' + x3 + ' ' + y3 + ' L' + x4 + ' ' + y4 + ' Z"' +
                                    ' fill="' + colorNow + '" stroke="none" style="opacity: ' + funelOpacity + '"></path>';
                        funelSvg.push(normalPath);

                    p0 += p1;
                });
            }

            funelSvg.push('</svg>');

            return funelSvg.join('');

        },

        /*-------------------------------------------
          Func: 漏斗图svg
        ---------------------------------------------*/
        drawFunnelBySvg: function(elementId, data) {

            /* 参数暂时略 */
            var svgHtml = app.genFunelChart(data);

            $(elementId).html(svgHtml);
        },

      };
  })();

  root.app = app;

})(window);

$(document).ready(function() {
  var demoData = [
    {percent: 0.1},
    {percent: 0.3},
    {percent: 0.1},
    {percent: 0.25},
    {percent: 0.15},
    {percent: 0.05},
    {percent: 0.05}
  ];

  app.drawFunnelBySvg('#svg_panel', demoData);
});
