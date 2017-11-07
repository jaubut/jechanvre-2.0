<template lang="pug">
  div
    jeHeader
      template(slot="header-slot")
        img(src="../assets/img/logo-nav.svg")
        p {{ index.fields.headline }}
    section.blog-section.center
      VueMarkdown(class="about-text") {{ about.fields.body }}
</template>

<script>
import {createClient} from '../../utils/contentful-api'
import jeHeader from '../components/JeHeader.vue'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  components: {
    jeHeader,
    VueMarkdown
  },
  data () {
    return {
      index: '',
      about: ''
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
        'content_type': 'pageIndex',
        'locale': this.lang
      })
        .then(response => {
          this.index = response.items[0]
          return response
        })
      client.getEntries({
        'content_type': 'about',
        'locale': this.lang
      })
        .then(response => {
          this.about = response.items[0]
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
.control
  position relative
  text-align left
.input.is-danger, .textarea.is-danger
  border-color #ff3860
.help
	display block
	font-size 11px
	margin-top 5px
.help.is-danger
	color #ff3860
.blog-section
  display flex
  flex-flow row wrap
  justify-content center
  text-align center
.about-text
  display flex
  flex-flow row wrap
  justify-content center
  align-content center
  text-align justify
  width 60vw
  line-height 1.2rem
p
  color rgb(116, 112, 111)
  font-family 'Lato', sans-serif
h2
  color black
  font-family 'Lato', sans-serif
  font-size 2rem
img
  width auto
  height 10vh
ol, li
  font-family 'Lato', sans-serif
  font-size 1.1rem
strong
  color black
blockquote
  text-align right
  font-size 1.5rem
  color rgb(116, 112, 111)
.signature
  font-size 0.7rem
  color rgba(116, 112, 111, 0.7)
  text-align right
.center
  text-align center
  img
    max-width 95vw
    height auto
@media only screen and (max-width: 568px)
  .about-text
    width: 90vw
    text-align: left
</style>
