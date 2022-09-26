$(".nav-link-upgrade").addClass("active");
$("#form_upgrade").submit(() => {
  myModal.show()

  event.preventDefault();
}
)

$("#confirm_upgrade").click(() => {
  var formData = {
    sss_id: $("#sss_id").val(),
    account_level_id: $("#account_level_id").val(),
    team: $("#team_upgrade").val(),
    name_action: $("#ip_name_action_upgrade").val()
  };

  $.ajax({
    type: "POST",
    url: "/upgrade_account",
    data: formData

  }).done(function (data) {
    var sub = ""
    if (data.account_level_id == "21") {
      sub = "Trial"
    } else if (data.account_level_id == "22") {
      sub = "Store"
    } else if (data.account_level_id == "23") {
      sub = "Merchant"

    } else if (data.account_level_id == "24") {
      sub = "Partner"

    } else if (data.account_level_id == "25") {
      sub = "Business"
    } else if (data.account_level_id == "6") {
      sub = "KOL"
    }
    else if (data.account_level_id == "NULL") {
      sub = "NULL"
    }
    $(".toast-body-success").html("Tài khoản " + $("#sss_id").val() + " đã được cập nhật gói " + sub)
    $("#toast_success").show()
    $(".alert_form_ban").hide()
    $(".alert_form_unban").hide()
    $(".alert_form_upgrade").hide()

  }).fail(function () {
   
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  })

})