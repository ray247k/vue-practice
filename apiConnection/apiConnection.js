window.onload = function () {
  let apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
  var apiConnection = new Vue({
    el: '#apiConnection',
    data: {
      branches: ['master', 'dev'], // 可以切換的分支，
      currentBranch: 'master', // 當前分支預設值
      commits: null
    },
    // 網頁載入完成，先執行的 function 內容寫在這，像 jQ 的 .ready()
    created: function () {
      this.fetchData()
    },
    // 當變數 currentBranch 改變的時候觸發 fetchData
    // watch 的彈性讓你很容易針對資料異動設 callback
    // 多用在響應更改的數據執行非同步或複雜的計算時，否則 computed 是比較精簡易懂的選擇
    watch: {
      currentBranch: 'fetchData'
    },
    methods: {
      fetchData: function () {
        // ajax 最終會把結果 JSON.parse 後塞進 data.commits 內 
        var xhr = new XMLHttpRequest()
        let self = this
        xhr.open('GET', apiURL + self.currentBranch)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
          console.log(self.commits[0].html_url)
        }
        xhr.send()
      }
    }
  })
}