import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [
      {name: "Grillkorv", price: 100, amount: 0},
      {name: "Bananpaj", price: 10, amount: 0},
      {name: "Sötsursås", price: 1337, amount: 0}
    ],
    cartProducts: []
  },
  mutations: {
    addItem(state, itemName){
      const foundItem = state.productList.find(item => itemName == item.name)
      if(foundItem)
        foundItem.amount ++
    },

    decrease(state, itemName){
      const foundItem = state.productList.find(item => itemName == item.name)
      if(foundItem && foundItem.amount > 0){
        foundItem.amount --
      }
    }
  },
  getters:{
    cartProducts(state){
      const productsWithAmount = state.productList.filter(item => item.amount > 0)
      console.log(productsWithAmount)
      return productsWithAmount
    }
  }
})
