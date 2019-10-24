/*global Vue*/
/*global axios*/
let app = new Vue({
   el: '#app',
   data: {
      current: null,
      answers: [],
      madlib: null,
      done: false,
   },
   methods: {
      async madlibz() {
         try {
            var url = "https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25";
            let response = await axios.get(url);

            this.madlib = response.data;
            console.log(this.madlib);
            this.current = response.data;
         }
         catch (error) {
            console.log(error);
         }

      },
      getAnswers() {
         console.log(this.answers);
         this.done = true;
      }
   },
   created() {
      this.madlibz();  
   },
   
});
