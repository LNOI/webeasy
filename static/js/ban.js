const myModal = new bootstrap.Modal(document.getElementById("myModal"), {});

$("#confirm_ban").click(()=>{
    var formData = {
        sss_id: $("#sss_id").val(),
        reason: $("#ip_reason_ban_limit").val(),
        action: $("#action").val(),
        team: $("#team").val(),
        name_action: $("#ip_name_action").val()
    };

    $.ajax({
        type: "POST",
        url: "/ban_shop",
        data: formData,

    }).done(function (data) {
        if(data.failure){
            var act=""
            if(data.failure=="is_blocked"){
                act="khóa vĩnh viễn"
            }else if (data.failure=="ban_until_date") {
                act="ban 30 ngày"
            }
            else if (data.failure=="limit_until_date") {
                act="giới hạn tương tác 30 ngày"
            }

            $(".toast-body-fail").html("Tài khoản "+$("#sss_id").val()+"  này đã " + act+ " nên không thể thực hiện ban/limit khác")
            $("#toast_fail").show()
        }else{
            var act=""
            if(data.action=="lock"){
                act="Khóa vĩnh viễn"
            }else if (data.action=="ban30") {
                act="ban 30 ngày"
            }
            else if (data.action=="limit30") {
                act="giới hạn tương tác 30 ngày"
            }
            $(".toast-body-success").html("Tài khoản "+$("#sss_id").val()+" đã "+act)
            $("#toast_success").show()
            
        }
        $(".alert_form_ban").hide()
        $(".alert_form_unban").hide()
        $(".alert_form_upgrade").hide()
    }).fail(function () {

    })
    
})
$("#form_block").submit(() => {
    myModal.show()
    event.preventDefault();
}
)

$("#confirm_unban").click(()=>{
    var formData = {
        sss_id: $("#sss_id").val(),
        reason: $("#ip_reason_undo_ban_limit").val(),
        action: $("#action_undo").val(),
        team: $("#team_undo").val(),
        name_action: $("#ip_name_action_undo").val()
    };
    $.ajax({
        type: "POST",
        url: "/ban_shop",
        data: formData,

    }).done(function (data) {
        if(data.failure){
            var act=""
            if(data.failure=="is_blocked"){
                act="khóa vĩnh viễn"
            }else if (data.failure=="ban_until_date") {
                act="ban 30 ngày"
            }
            else if (data.failure=="limited_until_date") {
                act="giới hạn tương tác 30 ngày"
            }

            var acc=""
            if($("#action_undo").val()=="unlock_acc"){
                acc="mở khóa vĩnh viễn"
            }else if ($("#action_undo").val()=="unlock_30_day") {
                acc="giới hạn 30 ngày"
            }
            else if ($("#action_undo").val()=="unlock_limit_30_day") {
                acc="giới hạn tương tác 30 ngày"
            }

            $(".toast-body-fail").html("Tài khoản "+$("#sss_id").val()+" bị " + act+ " nên không thể mở bằng "+acc )
            $("#toast_fail").show()
        }else{
            var acc=""
            if($("#action_undo").val()=="unlock_acc"){
                acc="mở khóa vĩnh viễn"
            }else if ($("#action_undo").val()=="unlock_30_day") {
                acc="giới hạn 30 ngày"
            }
            else if ($("#action_undo").val()=="unlock_limit_30_day") {
                acc="giới hạn tương tác 30 ngày"
            }

            $(".toast-body-success").html("Tài khoản "+$("#sss_id").val()+" đã mở "+acc)
            $("#toast_success").show()
            
        }
        $(".alert_form_ban").hide()
        $(".alert_form_unban").hide()
        $(".alert_form_upgrade").hide()
        
    }).fail(function () {

    })
    
})
$("#form_unblock").submit(() => {
    myModal.show()
   
    event.preventDefault();
}
)