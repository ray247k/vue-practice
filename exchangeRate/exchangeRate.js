window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      NT: 1000
    },
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