$(function() {
  
  $.ajax({
    url: "https://api-argon.tfl.gov.uk/Line/Mode/tube/Status",
    success: function(data){
      console.log("result ", data);
      // Line Name
      $(".name-1").text(data["0"].name);
      $(".name-2").text(data["1"].name);
      $(".name-3").text(data["2"].name);
      $(".name-4").text(data["3"].name);
      $(".name-5").text(data["8"].name);
      $(".name-6").text(data["4"].name);
      $(".name-7").text(data["5"].name);
      $(".name-8").text(data["6"].name);
      $(".name-9").text(data["7"].name);
      $(".name-10").text(data["9"].name);
      $(".name-11").text(data["10"].name);
      // Service Info
      $(".bakerloo").text(data["0"].lineStatuses["0"].statusSeverityDescription);
      $(".central").text(data["1"].lineStatuses["0"].statusSeverityDescription);
      $(".circ").text(data["2"].lineStatuses["0"].statusSeverityDescription);
      $(".distric").text(data["3"].lineStatuses["0"].statusSeverityDescription);
      $(".picadilly").text(data["8"].lineStatuses["0"].statusSeverityDescription);
      $(".hammersmith").text(data["4"].lineStatuses["0"].statusSeverityDescription);
      $(".jubilee").text(data["5"].lineStatuses["0"].statusSeverityDescription);
      $(".metropolitan").text(data["6"].lineStatuses["0"].statusSeverityDescription);
      $(".northern").text(data["7"].lineStatuses["0"].statusSeverityDescription);
      $(".victoria").text(data["9"].lineStatuses["0"].statusSeverityDescription);
      $(".waterloo").text(data["10"].lineStatuses["0"].statusSeverityDescription);
    }
  });


});