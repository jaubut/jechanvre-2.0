<template lang="pug">
  #grid-shop
    img.img-top(src="../assets/img/img15.jpg", v-bind:class="{ active: a}")
    img.img-top(src="../assets/img/img15-2.jpg", v-bind:class="{ active: b}")
    img.img-top(src="../assets/img/imge4.jpg", v-bind:class="{ active: c}")
    img.img-top(src="../assets/img/img19.jpg", v-bind:class="{ active: d}")
    img.img-top(src="../assets/img/img19-2.jpg", v-bind:class="{ active: e}")
    img.img-top(src="../assets/img/img2.jpg", v-bind:class="{ active: f}")
    img.img-top(src="../assets/img/img13.jpg", v-bind:class="{ active: g}")
    img.img-top(src="../assets/img/img13-2.jpg", v-bind:class="{ active: h}")
    img.img-top(src="../assets/img/img10.jpg", v-bind:class="{ active: i}")
    img.img-slide.left.un(src="../assets/img/img15.jpg", v-show="blanc", @click="a = true, b = false, c = false")
    img.img-slide.center.deux(src="../assets/img/img15-2.jpg", v-show="blanc", @click="a = false, b = true, c = false")
    img.img-slide.right.trois(src="../assets/img/imge4.jpg", v-show="blanc", @click="a = false, b = false, c = true")
    img.img-slide.left.quattre(src="../assets/img/img19.jpg", v-show="gris", @click="d = true, e = false, f = false")
    img.img-slide.center.cinq(src="../assets/img/img19-2.jpg", v-show="gris", @click="d = false, e = true, f = false")
    img.img-slide.right.six(src="../assets/img/img2.jpg", v-show="gris", @click="d = false, e = false, f = true")
    img.img-slide.left.sept(src="../assets/img/img13.jpg", v-show="bleu", @click="g = true, h = false, i = false")
    img.img-slide.center.huit(src="../assets/img/img13-2.jpg", v-show="bleu", @click="g = false, h = true, i = false")
    img.img-slide.right.neuf(src="../assets/img/img10.jpg", v-show="bleu", @click="g = false, h = false, i = true")
    a.un.img-desk(href="#img5", v-show="blanc")
      img.img-desk(src="../assets/img/img15.jpg", v-show="blanc")
    a#img5.lightbox(href='#_')
      img(src='../assets/img/img15.jpg')
    a.deux.img-desk(href="#img6", v-show="blanc")
      img.img-desk(src="../assets/img/img15-2.jpg", v-show="blanc")
    a#img6.lightbox(href='#_')
      img(src="../assets/img/img15-2.jpg", v-show="blanc")
    a.cinq.img-desk(href="#img7", v-show="blanc")
      img.img-desk(src="../assets/img/imge4.jpg", v-show="blanc")
    a#img7.lightbox(href='#_')
      img(src="../assets/img/imge4.jpg", v-show="blanc")
    a.un.img-desk(href="#img8", v-show="gris")
      img.img-desk(src="../assets/img/img19.jpg", v-show="gris")
    a#img8.lightbox(href='#_')
      img(src="../assets/img/img19.jpg", v-show="gris")
    a.deux.img-desk(href="#img9", v-show="gris")
      img.img-desk(src="../assets/img/img19-2.jpg", v-show="gris")
    a#img9.lightbox(href='#_')
      img(src="../assets/img/img19-2.jpg", v-show="gris")
    a.cinq.img-desk(href="#img10", v-show="gris")
      img.img-desk(src="../assets/img/img2.jpg", v-show="gris")
    a#img10.lightbox(href='#_')
      img(src="../assets/img/img2.jpg", v-show="gris")
    a.un.img-desk(href="#img11", v-show="bleu")
      img.img-desk(src="../assets/img/img13.jpg", v-show="bleu")
    a#img11.lightbox(href='#_')
      img(src="../assets/img/img13.jpg", v-show="bleu")
    a.deux.img-desk(href="#img12", v-show="bleu")
      img.img-desk(src="../assets/img/img13-2.jpg", v-show="bleu")
    a#img12.lightbox(href='#_')
      img(src="../assets/img/img13-2.jpg", v-show="bleu")
    a.cinq.img-desk(href="#img13", v-show="bleu")
      img.img-desk(src="../assets/img/img10.jpg", v-show="bleu")
    a#img13.lightbox(href='#_')
      img(src="../assets/img/img10.jpg", v-show="bleu")
    .text-box
      h2 La casquette
      p.artist par je chanvre
      .price 29$
      p.artist(v-show="blanc") {{ store.fields.descriptionBlanc }}
      p.artist(v-show="gris") {{ store.fields.descriptionGris }}
      p.artist(v-show="bleu") {{ store.fields.descriptionBleue }}
      p.artist  Unisex.
    .text-mobile
      p.artist(v-show="blanc")
      p.artist(v-show="gris")
      p.artist(v-show="bleu")
      p Unisex.
    .btn.blanc(@click="blanc = true, gris = false, bleu = false, d = false, e = false, f = false, g = false, h = false, i = false, a = true")
      p.btn-text {{ store.fields.boutonBlanc }}
    .btn.gris(@click="blanc = false, gris = true, bleu = false, a = false, b = false, c = false, g = false, h = false, i = false, d = true")
      p.btn-text {{ store.fields.boutongris }}
    .btn.bleu(@click="blanc = false, gris = false, bleu = true, d = false, e = false, f = false, a = false, b = false, c = false, i = true")
      p.btn-text {{ store.fields.boutonbleu }}
    a.btn-buy.snipcart-add-item(href='#', data-item-taxable="true" data-item-taxes="TPS|TVQ", data-item-url='https://jechanvre.io/shop', data-item-name='casquette blanche', data-item-price='29', data-item-id='20', data-item-description='La casquette chanvre blanche tri-blend', v-show="blanc")
      p {{ store.fields.comandeBlanc }} <span>29$</span>
    a.btn-buy.snipcart-add-item(href='#', data-item-taxable="true" data-item-taxes="TPS|TVQ", data-item-url='https://jechanvre.io/shop', data-item-name='casquette grise', data-item-price='29', data-item-id='21', data-item-description='La casquette chanvre grise tri-blend', v-show="gris")
      p {{ store.fields.comandeGrise }} <span>29$</span>
    a.btn-buy.snipcart-add-item(href='#', data-item-taxable="true" data-item-taxes="TPS|TVQ", data-item-url='https://jechanvre.io/shop', data-item-name='casquette bleu', data-item-price='29', data-item-id='22', data-item-description='La casquette chanvre bleue tri-blend', v-show="bleu")
      p {{ store.fields.commandeBleu }} <span>29$</span>
    .text-produit
      div(v-show="bleu")
        h3 Histoire
        p {{ store.fields.histoireBleu }}
      div(v-show="blanc")
        h3 Histoire
        p {{ store.fields.histoireBlanc }}
      div(v-show="gris")
        h3 Histoire
        p {{ store.fields.histoireGris }}
      h3 Matériaux
      <VueMarkdown>{{ store.fields.materiauxLong }}</VueMarkdown>
</template>

<script>
import {createClient} from '../../utils/contentfulapi'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      a: true,
      b: false,
      c: false,
      d: true,
      e: false,
      f: false,
      g: true,
      h: false,
      i: false,
      blanc: true,
      gris: false,
      bleu: false,
      store: ''
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
        'content_type': 'boutique',
        'locale': this.lang
      })
        .then(response => {
          this.store = response.items[0]
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
#grid-shop
  display grid
  grid-template 1fr 1fr 1fr 1fr / 1fr 1fr 1fr
  align-items baseline
.img-top
  grid-area 1/1/3/4
  width 100vw
  height auto
  opacity 0
.active
  opacity 1
.img-slide
  width 100%
  height auto
  &:active
    filter grayscale(100%)
.left
  grid-area 3/1/4/2
.center
  grid-area 3/2/4/3
.right
  grid-area 3/3/4/4
.btn
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
  width 50px
  height 50px
  border-radius 100%
  border 1px solid #979797
  justify-self center
  align-self flex-start
  cursor pointer
  &:hover, &:active
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
.blanc
  background #F9F9F9
  grid-area 4/1/5/2
.gris
  background #858585
  grid-area 4/2/5/3
.bleu
  background #90E7EE
  grid-area 4/3/5/4
.btn-text
  font-size 0.7rem
  text-align center
  padding 0
  margin 0
.btn-buy
  width 100vw
  height 60px
  background: #FBDA34;
  border-radius 5px 5px 0 0
  position sticky
  bottom 0
  display flex
  align-self center
  justify-content center
  align-content center
  grid-area 5/1/6/4
  p
    align-self center
    color black
  &:hover
    box-shadow: 0 2px 6px 0 #F8E71C;
    cursor pointer
.text-mobile
  grid-area 4/1/5/4
  display flex
  flex-flow row wrap
  justify-content center
  align-content center
  align-self flex-end
  paddind 50px 25px
  opacity 1
.img-desk
  opacity 0
  z-index -1
  position absolute
  width 0
  height 0
  top 1000
  left 1000
.text-box
  opacity 0
  z-index -1
  position absolute
  top 1000
  left 1000
.text-produit
  grid-area 6/1/7/4
  background #F0F0F0
  border-radius 5px
  align-items center
  text-align justify
  margin 15px
  padding 5%
  h3
    text-align center
    margin 25px
    color #FBDA34
  p
    font-family 'Roboto', sans-serif
  a
    color darkgrey
    text-decoration underline
.lightbox
  display none
  position fixed
  z-index 0
  width 1px
  height 1px
  text-align center
  top 0
  left 0
  background rgba(255, 255, 255, 0.95)
  img
    max-width 90%
    max-height 80%
    margin-top 2%
  &:target
    outline none
    display none
@media only screen and (min-width: 568px)
  #grid-shop
    grid-template repeat(3,20%) / 25% 25% 1fr 1fr 1fr
    grid-gap 9px
  .text-mobile
    opacity 0
    z-index -1
    position absolute
    top 1000
    left 1000
  .text-produit
    grid-area 3/3/5/6
  .lightbox
    display none
    position fixed
    z-index 999
    width 100%
    height 100%
    text-align center
    top 0
    left 0
    background rgba(255, 255, 255, 0.95)
    img
      max-width 90%
      max-height 80%
      margin-top 2%
    &:target
      outline none
      display block
  .text-box
    grid-area 1/3/2/6
    display flex
    position relative
    opacity 1
    flex-flow column wrap
    justify-content center
    align-items flex-start
    padding-left 100px
    margin-bottom 15px
    h2, p
      margin 0
      padding 0
    h2
      font-weight bold
  .price
    font-family 'Roboto Slab', serif
    font-size 24px
    margin 50px 0
  .artist
    font-family 'Roboto', sans-serif
    color #55504f
  .btn-buy
    position relative
    width 360px
    grid-area 2/3/3/6
    align-self flex-start
    justify-self center
    margin-top 100px
    border-radius 5px
  .img-top
    z-index -1 !important
    position absolute
    width 1px
    height 1px
  .active
    opacity 0
  .img-slide
    opacity 0
    z-index -1
    position absolute
    width 1px
    height 1px
  .img-desk
    position relative
    opacity 1
    height 100%
    width 100%
    justify-self center
    align-self center
    z-index 998
    overflow hidden
    &:hover
      cursor pointer
  .un
    grid-area 1/1/2/2
  .deux
    grid-area 1/2/2/3
  .trois
    grid-area 2/1/3/2
  .quattre
    grid-area 2/2/3/3
  .cinq
    grid-area 2/1/4/3
  .six
    grid-area 4/1/5/2
  .sept
    grid-area 4/2/5/3
  .huit
    grid-area 5/1/6/2
  .neuf
    grid-area 5/2/6/3
  .btn
    align-self flex-start
  .blanc
    grid-area 2/3/3/4
    justify-self right
  .gris
    grid-area 2/4/3/5
    justify-self center
  .bleu
    grid-area 2/5/3/6
    justify-self left
@media only screen and (min-width: 1116px)
  .btn-buy
    margin-top 25px
  .text-produit
    margin-top 100px
    grid-area 2/3/4/6
  .btn
    align-self flex-end
  .blanc
    grid-area 1/3/2/4
    justify-self right
  .gris
    grid-area 1/4/2/5
    justify-self center
  .bleu
    grid-area 1/5/2/6
    justify-self left
</style>
