<template>
  
<div class="grid-container">
  <div class="item1">Chat 1</div>
  <div class="item2">Chat 2</div>
  <div class="item3">Chat 3</div>  
  <div class="item4">Chat 4</div>
  <div class="item5">Chat 5</div>
  <div class="item6">Chat 6</div>
  <div class="item5">Chat 7</div>
  <div class="item6">Chat 8</div>
  
</div>

</template>

<style lang="scss">


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-gap: 20px;
  background-color: #bbf157;
  padding: 170px;
  margin: auto;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 100px 0;
  font-size: 30px;
}
</style>


