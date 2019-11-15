//Select Element, listening for events,manipulating elements

//When we click on list item
const listitem = document.querySelector("ul");

listitem.addEventListener("click", function(event) {
  console.log(event.target.id);
  fetch("/delete/" + event.target.id, { method: "delete" })
    .then(function(res) {
      res.json();
    })
    .then(function() {
      window.location.href = "/home";
      event.target.parentnode.removeChild(event.target);
    });
});
//fire an event
//the event hits our server
