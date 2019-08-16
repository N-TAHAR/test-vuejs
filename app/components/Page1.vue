<template>
<div class="main">
   <router-link class="button" to="/page2">
      Page 2
    </router-link>
  <div class="container">
    <div class="form">
      <label for="enter">Please enter dates separates by commas :</label>
      <input type="text" @keyup.enter="getDates($event)">
    </div>
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

<style lang="scss">

</style>

<script>
const axios = require('axios');
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
import dateService from '../services/dateService.js';                                                           

export default {
  data() {
    return{
      dates: dateService.datesArray || [],
    }
  },
  methods: {
    getDates(e){
      this.dates = []; //reset
      let values = e.target.value; //get value from input
      let valuesArray = values.split(', '); //create an array of value
      valuesArray.forEach(element => {
        axios
          .get(`http://numbersapi.com/${element}/date`, {
            cancelToken: source.token
          })
          .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
              console.log('Request canceled', thrown.message);
            } else {
              // handle error
            }
          })
          .then(response => (this.dates.push({
              date: element,
              text: response.data
            })
          ))
          .catch(function (error) {
            console.log(error);
          })
      })
      dateService.getDates(this.dates); //stock dates in dateService
    }
  }
};
</script>