<template>
<div class="main">
  <router-link class="button" to="/page1">
    Page 1
  </router-link>
  <div class="container">
    <div class="container-dates">
      <div class="history">
        <h2>A MOMENT OF HISTORY</h2>
        <p>You entered {{dates.length}} dates...</p>
      </div>
      <ul class="dates">
        <li class="date" v-for="(date, index) in dates" :key="index">
            <h2>{{date.date}}</h2>
            <p>{{date.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.button{
  right:unset;
  left: 10px;
}
</style>
<script>
import dateService from '../services/dateService.js';                                                           

export default {
  data() {
    return{
      dates: [],
    }
  },
  mounted(){
    this.dates = dateService.datesArray;
    console.log(dateService.datesArray)
  }
}
</script>
