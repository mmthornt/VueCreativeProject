/*global Vue*/
let app = new Vue({
   el: '#app',
   data: {

   },
   methods: {
      async currentHours() {
         try {
            this.loading = true;
            const response = await axios.get('https://libraryhours8.lib.byu.edu/api/hours.json');

         }
         catch (error) {
            console.log(error)
         }
      }
   }
});
