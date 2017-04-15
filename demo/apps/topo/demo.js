/*------------------------------------------
    说明：
    作者：taolr
    日期：2017-1-12
---------------------------------------------*/

/*-------------------------------------------
    说明：辅助对象
---------------------------------------------*/

(function(root){
  var app = (function() {

      /*-------------------------------------------
          测试数据
      ---------------------------------------------*/
      var initData = [{
        type: 'flag',
        size: 'small',
        text: 'start',
        action: 'test'
      }, {
        type: 'step',
        size: 'middle',
        text: 'step1',
        img: '',
        action: ''
      }, {
        type: 'step',
        size: 'middle',
        text: 'step2',
        img: '',
        action: ''
      }, {
        type: 'step',
        size: 'middle',
        text: 'step3',
        img: '',
        action: ''
      }, {
        type: 'flag',
        size: 'small',
        text: 'step1',
        action: ''
      }];

      return {
        /*-------------------------------------------
            节点生成（包括线）
        ---------------------------------------------*/
        genFlowRoad: function(node) {
            console.log(node);
        },

        /*-------------------------------------------
            触发节点点击事件
        ---------------------------------------------*/
        triggerAction: function(type) {
            switch (type) {
                case 'normal': {
                    break;
                }
                default: {
                    /* */
                    break;
                }
            }
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
