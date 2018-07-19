var app = new Vue({
  el: "#card",
  data: {
    total: 0,
    amount: null
  },
  methods: {
    addDinos: function() {
      this.total += parseInt(this.amount);
    }
  }
});
