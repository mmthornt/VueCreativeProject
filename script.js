/*global Vue*/
let app = new Vue({
   el: '#app',
   data: {

   },
   methods: {
      async currentHours() {
         
            const response = await axios.get('https://libraryhours8.lib.byu.edu/api/hours.json');

         
      }
   }
});
