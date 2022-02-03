<template>
  <div class="about">
    <h1>This is Cart</h1>
    <ul>
      <li v-for="item in cartProducts" :key="item.name">
        {{item.amount}}x {{item.name}} 
        <button @click="decrease(item.name)">-</button>
        <button @click="increase(item.name)">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    increase(itemName){
      this.$store.commit("addItem", itemName)
    },
    decrease(itemName){
      this.$store.commit("decrease", itemName)
    }
  },
  computed: {
    cartProducts(){
      return this.$store.getters.cartProducts
    }
  }
}
</script>