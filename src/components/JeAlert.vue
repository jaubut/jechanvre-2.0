<template lang="pug">
  #grid-alert
    .lang
      p(@click="$store.commit('french')") fr
      p(@click="$store.commit('english')") en
    router-link(:to="{ name: 'Shop'}")
      p.alert {{ alert.fields.alert }}
</template>

<script>
import {createClient} from '../../utils/contentful-api'

const client = createClient()

export default {
  data () {
    return {
      alert: ''
    }
  },
  watch: {
    'lang': 'fetchData'
  },
  computed: {
    lang () { return this.$store.state.lang }
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'alert',
        'locale': this.lang
      })
        .then(response => {
          this.alert = response.items[0]
          return response
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="stylus" scoped>
#grid-alert
  display flex
  flex-flow row wrap
  justify-content center
  align-content center
  background #FFDBEF
  height 30px
  .lang
    display flex
    justify-content center
    position absolute
    top 0
    left 0
    margin-left 20px
    p
      padding auto
      cursor pointer
      margin-left 5px
  a
    text-decoration underline
    color white
    &:hover
      opacity 0.5
  p
    color white
    font-size 0.7rem
    font-family 'Roboto', sans-serif
@media only screen and (max-height: 568px)
  #grid-alert
    p
      font-size 0.5rem
</style>
