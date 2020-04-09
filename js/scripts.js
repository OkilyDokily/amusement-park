



$(document).ready(function(){
  $("#showsome").click(function(e){
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

    kidHeightArray.forEach(function(item){
      if (height >= item[0] && height <= item[1]){
        $(".kid-" + item[0] + "-" + item[1]).show();
      }
    });
    
    function hide(){
      scaryHeightArray.forEach(function(number){
          $(".scary-"+ number).hide();
          $(".scary-"+ number).removeClass("can-ride");

      });
      kidHeightArray.forEach(function(number){
        $( ".kid-"+ number[0] + "-" + number[1]).hide();
        $( ".kid-"+ number[0] + "-" + number[1]).removeClass("can-ride");
    });
    }


  });
  $("#showall").click(function(e){
    e.preventDefault();

    var scaryHeightArray = [60,58,56];
    var kidHeightArray = [[36,54]];
    var height = parseInt($("#height").val());
    show();
    scaryHeightArray.forEach(function(number){
      if (height >= number){
        $(".scary-"+ number).addClass("can-ride");
      }
    })

    kidHeightArray.forEach(function(item){
      if (height >= item[0] && height <= item[1]){
        $(".kid-" + item[0] + "-" + item[1]).addClass("can-ride");
      }
    });
    
    function show(){
      scaryHeightArray.forEach(function(number){
          $(".scary-"+ number).show();
          $(".scary-"+ number).removeClass("can-ride");
      });
      kidHeightArray.forEach(function(number){
        $( ".kid-"+ number[0] + "-" + number[1]).show();
        $( ".kid-"+ number[0] + "-" + number[1]).removeClass("can-ride");
        
    });
    }


  });
});