



$(".nav-link-check").addClass("active");
$("#form_check").submit(() => {
  $("#content_block_time").html("")
  $("#content_ban_until_time").html("")
  $("#content_limit_until_time").html("")
  var formData = {
    sss_id: $("#sss_id").val(),
  };
  $.ajax({
    type: "POST",
    url: "/check",
    data: formData

  }).done(function (data) {


    if(!data.check_sssid){
        $(".toast-body-fail").html("Vui lòng kiểm tra lại SSS ID")
        $("#toast_fail").show()
    }else{
      if(data.historical_block.Block){
          $("#content_block_time").html(data.timeban)
         
          $("#content_ban_until_time").html("")
          $("#content_limit_until_time").html("")
      }else if(data.historical_block.Ban_Until)
      { 
          $("#content_block_time").html("")
          $("#content_ban_until_time").html(data.timeban)
          $("#content_limit_until_time").html("")
      }else if (data.historical_block.Limit_Until){
          $("#content_block_time").html("")
          $("#content_ban_until_time").html("")
          $("#content_limit_until_time").html(data.timeban)
  
      }
      $(".content_body").show()
      $("#content_block").html(data.historical_block.Block)
      $("#content_ban_until").html(data.historical_block.Ban_Until)
      $("#content_limit_until").html(data.historical_block.Limit_Until)
      if(data.view_text!=""){
        $(".view_text").show()
        $(".view_text").html("User này hiện đang bị "+ data.view_text)
      }else{
        $(".view_text").hide()
      }
      
      $("#tbody_historical_upgrade").html("")
      var index = 1
      data.historical_upgrade.data.forEach(element => {
        var content_row = `
                    <tr>
                    <th scope="row">`+ index + `</th>
                    <td>`+ $("#sss_id").val() + `</td>
                    <td>`+ element[0] + `</td>
                    <td>`+ element[1] + `</td>
                    <td>`+ element[2] + `</td>
                    </tr>
              `
        $("#tbody_historical_upgrade").append(content_row)
        index++
      })

  
    };

  }).fail(function () {


  })
  event.preventDefault();
}
)