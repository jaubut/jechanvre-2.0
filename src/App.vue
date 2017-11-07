<template>
  <div id="app">
    <header>
      <JeAlert></JeAlert>
      <JeNav></JeNav>
    </header>
    <main>
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
    </main>
    <JeFooter></JeFooter>
  </div>
</template>

<script>
import JeAlert from './components/JeAlert.vue'
import JeNav from './components/JeNav.vue'
import JeFooter from './components/JeFooter.vue'

export default {
  name: 'app',
  components: {
    JeAlert,
    JeNav,
    JeFooter
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab')

html,
body
  padding 0
  margin 0
  font-family 'Roboto Slab', serif
.mini-toastr, .mini-toastr__notification, .mini-toastr-notification__message, .success
	color #fff
	background-image linear-gradient(349deg, #FBDA34, #FFDBEF)
	border-radius 4px
	font-size 15px
	font-weight 600
	letter-spacing 0.025em
.title-nav
  font-family 'Roboto Slab', Serif
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  &:hover
    cursor pointer
    color #FBDA34
a
  text-decoration none
p
  font-family 'Slab', sans-serif
.page-enter-active, .page-leave-active
  transition: opacity .5s
.page-enter, .page-leave-to
  opacity: 0
</style>
