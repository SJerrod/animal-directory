// Business Logic
// function animalSelector() {
//   if (selected === "otter") {
//     $("#otter").show();
//   } else if (selected === "couger") {
//     $("#couger").show(); 
//   } else if(selected === "bonobo") {
//     $("#bonobo").show();
//   } else {
//     alert("please select an animal!")
//   }
// }   


// User Logic
$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    const selected = $("select#animals").val();

    if (selected === "otter") {
      $("#otter").show();
      $("#couger").hide();
      $("#bonobo").hide();
    } else if (selected === "couger") {
      $("#couger").show();
      $("#otter").hide();
      $("#bonobo").hide();
    } else if(selected === "bonobo") {
      $("#bonobo").show();
      $("#otter").hide();
      $("#couger").hide();
    } else {
      alert("please select an animal!")
    }

  });
});