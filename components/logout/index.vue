<template>
  <div>
    <button @click="logout()">ログアウト</button>
  </div>
</template>

<script>
var firebase = require('firebase')

export default {
  name: 'Logout',
  props: {
    isLogin: {
      type: Object,
      default: () => ({})
    },
    loginUser: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    // ログアウト
    logout() {
      var vm = this
      if (!firebase.auth().currentUser) {
        alert('ログインしてください。')
        return
      }
      firebase
        .auth()
        .signOut()
        .then(function(res) {
          console.log('signOut', res)
          alert('ログアウトしました。')
          vm.$router.go()
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
