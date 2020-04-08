$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    var scaryHeightArray = [60,58,56];
    var kidHeightArray = [[36,54]];
    var height = parseInt($("#height").val());
    hide();
    scaryHeightArray.forEach(function(number){
      if (height >= number){
        $(".scary-"+ number).show();
      }
    })

    function hide(){
      scaryHeightArray.forEach(function(number){
          $(".scary-"+ number).hide();
      });
    }
  });
});