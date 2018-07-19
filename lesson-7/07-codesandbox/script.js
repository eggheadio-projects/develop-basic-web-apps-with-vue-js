var card = new Vue({
  el: "#card",
  data: {
    title: "Epic Dinosaur Counter",
    input: "",
    dinos: [
      { name: "Triceratops", quantity: 4 },
      { name: "Velociraptor", quantity: 3 }
    ]
  },
  methods: {
    addItem: function() {
      if (!this.input) return;

      this.dinos.push({ name: this.input, quantity: 1 });
      this.input = "";
    },
    removeItem: function(dino) {
      this.dinos.splice(dino, 1);
    }
  }
});
