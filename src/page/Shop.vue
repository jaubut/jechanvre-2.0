<template lang="pug">
  div
    JeHeader
      template(slot="header-slot")
        h2.header-shop La casquette
    Produit
</template>

<script>
import JeHeader from '../components/JeHeader.vue'
import Produit from '../components/Produit.vue'

export default {
  components: {
    JeHeader,
    Produit
  }
}
</script>
