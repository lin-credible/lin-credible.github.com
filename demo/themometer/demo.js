/*-------------------------------------------
    说明：温度计
    作者：taolr
    日期：2016-12-01
---------------------------------------------*/

/*-------------------------------------------
    说明：扶助对象
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

            app.addItem();

            var length = app.getCount();

            if (length > 5) {
              $('.tool-bar .error-tips').addClass('visible');
            } else {

              var content = `<div class="box">
                <div class="trigger" data-move-action="trigger" data-index="` + length + `"><span class="arrow"></span></div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="400px">
                    <text x="10" y="30">20</text>
                    <text x="10" y="100">10</text>
                    <text x="10" y="170">0</text>
                    <text x="10" y="240">10</text>
                    <text x="10" y="310">20</text>
                    <line x1="36" y1="25" x2="64" y2="25" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="46" y1="60" x2="64" y2="60" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="36" y1="95" x2="64" y2="95" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="46" y1="130" x2="64" y2="130" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="36" y1="165" x2="64" y2="165" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="46" y1="200" x2="64" y2="200" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="36" y1="235" x2="64" y2="235" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="46" y1="270" x2="64" y2="270" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="36" y1="305" x2="64" y2="305" stroke="#1a1b1e" stroke-width="2"></line>
                    <line x1="64" y1="24" x2="64" y2="306" stroke="#1a1b1e" stroke-width="1" />
                    <rect x="65" y="165" width="20" height="200" rx="5" style="stroke: none; fill: #e81c4f;"></rect>
                    <circle cx="75" cy="370" r="20" fill="#e81c4f" stroke="firebrick" stroke-width="0"></circle>
                </svg>
                <div class="show-result" data-show-id="` + length + `">0&#176;C</div>
            </div>`;

              $('.main').append(content);
            }

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
              var topNow = e.pageY - 173; /*  */
              if (topNow > 20 && topNow < 302) {
                $this.css('top', topNow);
                var rect = $(rectBar).find('rect');
                rect.attr('y', topNow + 4);
                rect.attr('height', parseInt(360 - topNow, 10));

                var tmpNow = Math.ceil((165 - topNow) / 7, 10) - 1;

                $('[data-show-id="' + index + '"]').html(tmpNow + '&#176;C');

              } else if (topNow > 302) {
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
