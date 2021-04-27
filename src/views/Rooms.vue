<template>
  
  <div class="grid-container">
    <div class="chat1">
      <router-link class="item1" to="/chat1">Chat 1</router-link>
    </div>
    <div class="chat2">
      <router-link class="item2" to="/chat2">Chat 2</router-link>
    </div>
    <div class="chat3">
    <router-link class="item3" to="/chat3">Chat 3</router-link>
    </div>
    <div class="chat4">
    <router-link class="item4" to="/chat4">Chat 4</router-link>
  </div>
  </div>
</template>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-gap: 20px;
  background-color: rgb(113, 192, 238);
  padding: 277px;
  margin: auto;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 100px 0;
  font-size: 30px;
  transition: 0.4s;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  
}

.grid-container .item1 {
  text-decoration: none;
  color: #888;
}
.grid-container .item2 {
  text-decoration: none;
  color: #888;
}
.grid-container .item3 {
  text-decoration: none;
  color: #888;
}
.grid-container .item4 {
  text-decoration: none;
  color: #888;
}


</style>
