﻿$('title').html(get_current_organization_title() + "Change Password");
$('#profile-nav').addClass('in');
$('#menu_system_change_password').addClass('active');
$("#tab-main").tabs();

$("#tab-main").tabs("option", "active", 0);
$(".tab-menu").removeClass("active");
$("#tab_list_menu").addClass("active");


function ChangePassword() {
    

    if ($("#tb_new_password").val() == '' || $("#tb_confirm_password").val() == '') {
        ShowErrorMessage("New password and Confirm Password are not match.")
    }

    else if ($("#tb_new_password").val() == $("#tb_confirm_password").val()) {
        $.ajax({
            url: baseUrl() + "WebServices/WebService_System.asmx/Do_Change_Password",
            data: "{ " +
                "'userid':'" + get_current_user_id() + "' " +
                ",'oldpassword':'" + $('#tb_old_password').val() + "' " +
                ",'newpassword':'" + $('#tb_new_password').val() + "' " +
                " }",
            dataType: 'json',
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                if (data.d.toString().split('~')[0] == "Success") {
                    $.cookie('usercode', "", { expires: 1, path: '/' });
                    ShowSuccessMessage("Successfully changed password");
                   
                    GotoPage('Portal/login');

                }
                else if (data.d.toString().split('~')[0] == "Error") {
                    ShowErrorMessage("Fail!,Please try again.")

                }
            },
            error: function (xhr, msg) {
                LogJSError('Web Service Fail: ' + msg + '\n' + xhr.responseText);
            }
        });

    }
}