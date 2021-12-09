<template>
<div class="cart-block">
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
    <div class="cart-item">
      <h2>Mon</h2>
      <img src="./../../../assets/sun.svg" alt="#" />
      <p>12 6</p>
    </div>
</div>
</template>

<style scoped lang="scss">
@import "@/scss/variables";

.cart-block {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: $bg-color;
  width: 12%;
  border-radius: 4px;
  img {
    margin: 10px 0;
    width: 100px;
  }
}
</style>
