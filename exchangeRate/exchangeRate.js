window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      // 初始金額
      NT: 1000
    },
    /* 
      Computed 適合收納寫在 template 的邏輯，即時更動資料就靠它
      Computed 無法帶入參數，methods 可以
      只在資料有變動的時候更新畫面資料使用 Computed 節省效能
      反之確定每次都會更新畫面上的資料，就用 metdos
    */
    computed: {
      jpy: function () {
        return this.NT / 0.2713
      },
      usd: function () {
        return this.NT / 30.687
      }
    }
  })
}