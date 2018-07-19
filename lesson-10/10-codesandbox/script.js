var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    input: "",
    total: 0,
    dinos: [
      { name: "Tyrannosaurus", quantity: 5 },
      { name: "Triceratops", quantity: 4 },
      { name: "Stegosaurus", quantity: 6 }
    ]
  },
  methods: {
    incrementTotal: function(amount) {
      this.total += amount;
    }
  },
  components: {
    "dino-counter": {
      template: "#dino-counter",
      props: ["initialQuantity", "name"],
      data: function() {
        this.$emit("increment", this.initialQuantity);
        return {
          quantity: this.initialQuantity
        };
      },
      methods: {
        increment: function() {
          this.quantity += 1;
          this.$emit("increment", 1);
        }
      }
    }
  }
});
