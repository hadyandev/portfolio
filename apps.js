new Vue({
  el: "#app",
  data: {
    datas: [],
    name: "",
    description: "",
    stacks: [],
    url: "",
    repoUrl: "",
    images: []
  },
  methods: {
    display(data) {
      this.name = data.name;
      this.description = data.description;
      this.stacks = data.stacks;
      this.url = data.url;
      this.repoUrl = data.repoUrl;
      this.images = data.images;
      alert(`Switch to ${data.name}!`);
    }
  },
  created() {
    fetch("./data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.datas = data;
        // console.log(this.datas);
      });
  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
