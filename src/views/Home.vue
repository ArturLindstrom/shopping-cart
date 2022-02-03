<template>
  <div class="home">
    <ul>
      <li v-for="item in this.$store.state.productList" :key="item.name">
        {{item.name}} {{item.price}}KR MY DUDE 
        <button @click="addItem(item.name)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    addItem(itemName){
      this.$store.commit("addItem", itemName)
    }
  },
  name: 'Home',
}
</script>
