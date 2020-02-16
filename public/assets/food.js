// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoured").on("click", function(event) {
        console.log("clicked : devoured")
      var id = $(this).data("id");
      var newDev = $(this).data("newdevoured");
  
      var devouredstate = {
        devoured: newDev
      };
  
      // Send the PUT request.
      $.ajax("/api/food/" + id, {
        type: "PUT",
        data: devouredstate
      }).then(
        function() {
          console.log("changed sleep to", newDev);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
        // console.log("clicked : submit")
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFood = {
        name: $("#ca").val().trim(),
        devoured: $(".devoured").is(":checked") 
      };
  console.log(newFood)

    //   Send the POST request.
      $.ajax("/api/food", {
        type: "POST",
        data: newFood
      }).then(
        function() {
          console.log("created new food item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/food/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted food item : ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  