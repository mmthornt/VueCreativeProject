/*global Vue*/
let app = new Vue({
   el: '#app',
   data: {
      current: null,
      madlib: null,
   },
   methods: {
      async currentHours() {
         try {
            var url = "https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25";
            let response = await axios.get(url);

            this.madlib = response.data
            console.log(this.madlib);
            this.current = response.data;
         }
         catch (error) {
            console.log(error);
         }

      },
   },
   created() {
      this.currentHours();  
   }
});
