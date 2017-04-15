/*-------------------------------------------
    说明：画对称图形
    日期：2017
---------------------------------------------*/

/* global app: true */

(function(root){
  var demo_app = (function() {
    var topHeight = 90,
      leftWidth = 120,
      centerLeftWidth = (window.innerWidth / 2) - 68,
      svgLeftWidth = centerLeftWidth - leftWidth - 26,
      svgPanel = '<svg id="{sid}" xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + svgLeftWidth + 'px" height="460px"></svg>',
      leftPathData = [];

    return {

      initLeftPanel: function(ele) {
        var leftPanel = svgPanel.objFormat({sid: 'left_panel'});
        $(ele).append(leftPanel);
      },

      initRightPanel: function(ele) {
        var rightPanel = svgPanel.objFormat({sid: 'right_panel'});
        $(ele).append(rightPanel);
      },

      getLeftData: function() {
        return leftPathData;
      },

      getLeftSymmetry: function() {
        var centerX = svgLeftWidth / 2;
        var newData = [];
        $.each(leftPathData, function(i, item){
          var tmpObj = {};
          tmpObj.x = +item.x + (2 * (centerX - item.x));
          tmpObj.y = item.y;
          newData.push(tmpObj);
        });
        return newData;
      },

      pushLeftData: function(point) {
        leftPathData.push(point);
      },

      genPoint: function(ele, index,  x, y, isCenter, second) {
        var top = y - topHeight,
          left = x - leftWidth,
          showWords = '';
        if (isCenter === true) {
          left = x - centerLeftWidth;
          if (second === true) {
            $('#center_line')
              .attr('x2', left + 7)
              .attr('y2', top + 7.5);
          } else {
            $('#center_line')
              .attr('x1', left + 7)
              .attr('y1', top + 7.5)
              .attr('x2', left + 7)
              .attr('y2', top + 7.5);
          }
        } else {
          demo_app.pushLeftData({
            x: left + 7,
            y: top + 7.5
          });
          if (index >= 1) {
            demo_app.reDrawPath('#left_panel', leftPathData, '#4fc3f7');
          }
          showWords = '<span class="point-words">' + index + '</span>';
        }
        var pointHtml = '<span class="point" id="point_' + index + '" style="top: ' + top + 'px;left: ' + left + 'px" >' + showWords + '</span>';
        $(ele).append(pointHtml);
      },

      reDrawCenterLine: function(lineId, x, y) {
        $(lineId)
          .attr('x2', (x - centerLeftWidth) + 7)
          .attr('y2', (y - topHeight) + 7.5);
      },

      reDrawPath: function(leftPanel, data, color) {
        color = (typeof color !== 'undefined') ? color : '#7ed3f9';
        var path = '',
          len = data.length;
        if (len >= 2) {
          path = '<path d="M' + data[0].x + ' ' + data[0].y;
          $.each(data, function(i, item){
            if (i !== 0 && i !== len - 1) {
              path += ' L' + item.x + ' ' + item.y;
            }
          });
          path += ' L' + data[len - 1].x + ' ' + data[len - 1].y + ' Z" fill="' + color + '" stroke="' + color + '" stroke-width="1"></path>';
        }
        $(leftPanel).html(path);
      }

    };
  })();

  root.app = demo_app;

})(window);

$(document).ready(function() {

  /* click */
  $('body').on('click', '[data-demo-action]', function(e) {
    e.preventDefault();

		var app = window.app,
      $this = $(this),
      action = $(this).data('demo-action');

      switch (action) {
        case 'draw-left': {
          var $leftPoint = $('#draw_left_area .point');
          app.genPoint('#draw_left_area', $leftPoint.length, e.pageX, e.pageY);
          break;
        }

        case 'draw-line': {
          var $linePoint = $('#draw_center_line .point');
          if ($linePoint.length === 0) {
            app.genPoint('#draw_center_line', $linePoint.length, e.pageX, e.pageY, true);
          } else if ($linePoint.length === 1) {
            app.genPoint('#draw_center_line', $linePoint.length, e.pageX, e.pageY, true, true);
          }
          break;
        }

        case 'redraw-center-line': {
          var $centerLine = $('#draw_center_line');
          $centerLine
            .find('.point')
            .remove();
          $centerLine
            .find('#center_line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', 0);
          $('#right_panel').empty();

          break;
        }

        case 'generate': {
          var type = $this.data('type');

          if (!$this.hasClass('select')){
            var dataNow;
            $this
              .toggleClass('select')
              .siblings('button')
              .removeClass('select');
            switch (type) {
              case 'translation': {
                dataNow = app.getLeftData();
                break;
              }
              case 'symmetry': {
                dataNow = app.getLeftSymmetry();
                break;
              }
              default: {
                dataNow = app.getLeftData();
                break;
              }
            }
            app.reDrawPath('#right_panel', dataNow, '#fac886');
          }
          break;
        }

        case 'reload': {
          window.location.reload();
          break;
        }
      }
  });

  /* move */
  $('body').on('mouseover', '[data-move-action]', function(e) {
    e.preventDefault();

    var app = window.app;

    var $this = $(this),
      action = $(this).data('move-action');

      switch (action) {

        case 'center-line': {

          var $startPoint = $('#draw_center_line .point');

          $this.on('mousemove', function(e) {
            if ($startPoint.length === 1) {
              app.reDrawCenterLine('#center_line', e.pageX, e.pageY);
            } else {
              $this.off('mousemove');
            }
          });
          $this.click(function() {
            $this.off('mousemove');
          });

          break;
        }

        case 'left-line': {

          var $leftPoint = $('#draw_left_area .point');

          $this
          .mousemove(function(e) {
              app.reDrawLeftLine('#left_path', e.pageX, e.pageY, $leftPoint.length);
          }).mouseup(function() {
            $this.off('mousemove');
          });

          break;
        }
      }
  });

});

/* String replace */

/* eslint-disable */
String.prototype.objFormat = function (obj) {
  if (arguments.length === 0) return this;
  var s = this;
  for (var i in obj){
    s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), obj[i]);
  }
  return s;
};
/* eslint-enable */

$(document).ready(function() {
  var app = window.app;
  app.initLeftPanel('#draw_left_area');
  app.initRightPanel('#draw_right_area');
});
