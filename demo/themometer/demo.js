/*-------------------------------------------
    说明：温度计
    作者：taolr
    日期：2016-12-01
---------------------------------------------*/

/*-------------------------------------------
    说明：辅助对象
---------------------------------------------*/

(function(root){
  var demo_app = (function() {
  /* eslint-enable */

      /*-------------------------------------------
          私有变量
      ---------------------------------------------*/
      var count = 1;

      return {
          /*-------------------------------------------
              添加温度计
          ---------------------------------------------*/
          addItem: function() {
            count++;
          },

          /*-------------------------------------------
              获取温度计数量
          ---------------------------------------------*/
          getCount: function() {
            return count;
          },

          /*-------------------------------------------
              生成随机数
          ---------------------------------------------*/
          getRandom: function(max) {
              var now = new Date(),
                  tmp = now.getSeconds() % 10;

              var number = Math.floor(Math.random() * max);

              if (number > 20) {
                return -number;
              } else if (tmp % 2 === 0) {
                return number;
              } else {
                return -number;
              }
          },

          /*-------------------------------------------
            温度置零              
          ---------------------------------------------*/
          initZero: function(index) {
            var showResultTmp = $('[data-pre-show-id="' + index + '"]'),
                redBar = $('svg')[index - 1],
                triggerArrow = $('[data-index="' + index + '"]');

            var rectNow = $(redBar).find('rect');

            rectNow.attr('y', 165);
            rectNow.attr('height', 220);

            triggerArrow.css('top', 161);
          }
      };
  }());

  root.app = demo_app;

})(window);

$(document).ready(function() {

    /* 点击事件 */
    $('body').on('click', '[data-demo-action]', function(e) {
      e.preventDefault();

      var app = window.app;

      var $this = $(this),
        action = $(this).data('demo-action');

        switch (action) {

          case 'add-thermometer':

            var quesitonTips = $('.question-tips');
                questionShow = quesitonTips.hasClass('visible');

            if (!questionShow) {
              quesitonTips.addClass('visible');
            }

            app.addItem();

            var length = app.getCount();

            var randomNumber = app.getRandom(30);

            if (length > 4) {
              $('.tool-bar .error-tips').addClass('visible');
              $this.prop('disabled', true);
            } else {

              var content = `<div class="box">
                  <div class="trigger" data-move-action="trigger" data-index="` + length + `"><span class="arrow"></span></div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="425px">
                      <text x="10" y="30">20</text>
                      <text x="10" y="100">10</text>
                      <text x="10" y="170">0</text>
                      <text x="10" y="240">10</text>
                      <text x="10" y="310">20</text>
                      <text x="10" y="380">30</text>
                      <line x1="36" y1="25" x2="64" y2="25" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="32" x2="64" y2="32" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="39" x2="64" y2="39" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="46" x2="64" y2="46" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="53" x2="64" y2="53" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="46" y1="60" x2="64" y2="60" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="67" x2="64" y2="67" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="74" x2="64" y2="74" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="81" x2="64" y2="81" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="88" x2="64" y2="88" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="36" y1="95" x2="64" y2="95" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="102" x2="64" y2="102" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="109" x2="64" y2="109" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="116" x2="64" y2="116" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="123" x2="64" y2="123" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="46" y1="130" x2="64" y2="130" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="137" x2="64" y2="137" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="144" x2="64" y2="144" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="151" x2="64" y2="151" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="158" x2="64" y2="158" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="36" y1="165" x2="64" y2="165" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="172" x2="64" y2="172" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="179" x2="64" y2="179" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="186" x2="64" y2="186" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="193" x2="64" y2="193" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="46" y1="200" x2="64" y2="200" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="207" x2="64" y2="207" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="214" x2="64" y2="214" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="221" x2="64" y2="221" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="228" x2="64" y2="228" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="36" y1="235" x2="64" y2="235" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="242" x2="64" y2="242" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="249" x2="64" y2="249" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="256" x2="64" y2="256" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="263" x2="64" y2="263" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="46" y1="270" x2="64" y2="270" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="277" x2="64" y2="277" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="284" x2="64" y2="284" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="291" x2="64" y2="291" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="298" x2="64" y2="298" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="36" y1="305" x2="64" y2="305" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="312" x2="64" y2="312" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="319" x2="64" y2="319" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="326" x2="64" y2="326" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="333" x2="64" y2="333" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="46" y1="340" x2="64" y2="340" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="54" y1="347" x2="64" y2="347" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="354" x2="64" y2="354" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="361" x2="64" y2="361" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="54" y1="368" x2="64" y2="368" stroke="#1a1b1e" stroke-width="1"></line>
                      <line x1="36" y1="375" x2="64" y2="375" stroke="#1a1b1e" stroke-width="2"></line>
                      <line x1="64" y1="24" x2="64" y2="376" stroke="#1a1b1e" stroke-width="1" />
                      <rect x="65" y="165" width="20" height="220" rx="5" style="stroke: none; fill: #e81c4f;"></rect>
                      <circle cx="75" cy="398" r="20" fill="#e81c4f" stroke="firebrick" stroke-width="0"></circle>
                  </svg>
                  <div class="show-result-before" data-demo-action="show-answer" data-index-id="` + length + `">
                      查看所示温度
                  </div>
                  <div class="show-result hide" data-show-id="` + length + `" data-result="0">0&#176;C</div>
                  <div class="show-pre-result" data-pre-show-id="` + length + `" data-random="` + randomNumber + `">` + randomNumber + `&#176;C</div>
              </div>`;

              $('.main').append(content);
            }

            break;

          case 'show-answer':
            var indexId = $this.data('index-id'),
                showArea = $('[data-show-id="' + indexId + '"]'),
                showPreArea = $('[data-pre-show-id="' + indexId + '"]');

            showArea.removeClass('hide');
            /* 判断数值 */

            var showResult = +($('[data-show-id="' + indexId + '"]').attr('data-result')),
                showPreResult = +(showPreArea.data('random'));

            if (showResult === showPreResult) {
              showArea.addClass('success');
            } else if ( Math.abs(showResult - showPreResult) < 2 ){
              showArea.addClass('warning');
            } else {
              showArea.addClass('error');
            }

            $this.addClass('hide');
            break;

          case 'fresh-tp':
            /**/

            $('.show-result-before').removeClass('hide');
            $('.show-result').addClass('hide');

            var preResults = $('.show-pre-result');

            $.each(preResults, function(i, item) {
              var randomTmp = app.getRandom(30),
                  eleTmp = $(item);
              eleTmp.data('random', randomTmp);
              eleTmp.html(randomTmp + '&#176;C');

              var indexTmp = eleTmp.data('pre-show-id');
              app.initZero(indexTmp);
            });

            break;

          case 'reload':
            window.location.reload();
            break;
        }
    });

    /* move */

    $('body').on('mouseover', '[data-move-action]', function(e) {
      var app = window.app;

      var $this = $(this),
        action = $(this).data('move-action');

        switch (action) {

          case 'trigger':

            var isDragging = false;
            /* 0, 1, 2, 3 */

            var index = $this.data('index');

            var rectBar = $('svg')[index - 1];

            $this
            .mousedown(function() {
              isDragging = false;
            })
            .mousemove(function(e) {
              isDragging = true;
              var topNow = e.pageY - 130; /*  */
              if (topNow > 20 && topNow < 372) {
                $this.css('top', topNow);
                var rect = $(rectBar).find('rect');
                rect.attr('y', topNow + 4);
                rect.attr('height', parseInt(380 - topNow, 10));

                var tmpNow = Math.ceil((165 - topNow) / 7, 10) - 1;

                $('[data-show-id="' + index + '"]').html(tmpNow + '&#176;C');

                $('[data-show-id="' + index + '"]').attr('data-result', tmpNow);

              } else if (topNow > 372) {
                /* 提示不能再高了 */
              } else {
                /* 提示不能再低了 */
              }
            })
            .mouseup(function() {
              var wasDragging = isDragging;
              isDragging = false;
              /**/
            });

            // $this.drag(function(e){

            // });

            break;
        }

    });

});
