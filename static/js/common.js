

$(".alert_form_ban").hide()
$(".alert_form_unban").hide()
$(".alert_form_upgrade").hide()
$(".content_body").hide()
$("#confirm_ban").hide()
$("#confirm_unban").hide()
$("#confirm_upgrade").hide()
$("#btn_ban_limit").click(() => {
  $("#confirm_ban").show()
  $("#confirm_unban").hide()
  $("#confirm_upgrade").hide()
  $(".alert_form_ban").show()
  $(".sssidd").html("Ban/Limit @" + $("#sss_id").val())
  $(".alert_form_unban").hide()
  $(".alert_form_upgrade").hide()
})

$("#btn_undo_ban_limit").click(() => {
  $("#confirm_ban").hide()
  $("#confirm_unban").show()
  $("#confirm_upgrade").hide()
  $(".alert_form_ban").hide()
  $(".alert_form_unban").show()
  $(".sssidd").html("Gỡ Ban/Limit @" + $("#sss_id").val())
  $(".alert_form_upgrade").hide()
})

$("#btn_upgrade").click(() => {
  $("#confirm_ban").hide()
  $("#confirm_unban").hide()
  $("#confirm_upgrade").show()
  $(".alert_form_ban").hide()
  $(".alert_form_unban").hide()
  $(".sssidd").html("Nâng cấp  @" + $("#sss_id").val())
  $(".alert_form_upgrade").show()
})

$(".btn_close").click(() => {
  $(".alert_form_ban").hide()
  $(".alert_form_unban").hide()
  $(".alert_form_upgrade").hide()
})

$(".btn-close-success").click(() => {
  $("#toast_success").hide()
})

$(".btn-close-fail").click(() => {
  $("#toast_fail").hide()
})