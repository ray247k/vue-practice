window.onload = function () {
  let apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
  var apiConnection = new Vue({
    el: '#apiConnection',
    data: {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    },

    created: function () {
      this.fetchData()
    },

    watch: {
      currentBranch: 'fetchData'
    },
    methods: {
      fetchData: function () {
        var xhr = new XMLHttpRequest()
        var self = this
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