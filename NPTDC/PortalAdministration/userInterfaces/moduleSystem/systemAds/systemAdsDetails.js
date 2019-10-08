$('title').html(get_current_organization_title() + "System Ads");

$('#menu_system').addClass('active-sub');
$('#menu_system_group').addClass('in');
$('#menu_ads').addClass('active-link');


$("#tab-main").tabs();
var user_Control = [];
user_Control = JSON.parse(localStorage.getItem('UserControl'));
if (user_Control !== null) {
    if (user_Control.AllowCreate) {
        $(".usercontrol_create").css("display", "block");
    }
    if (user_Control.AllowDelete) {
        $(".usercontrol_delete").css("display", "block");
    }

};

if (GetURLData('id') !== null && GetURLData('id') !== "") {
    GetAds(GetURLData('id'));
}
else {
    LoadNew();
}

$("#tab-main").tabs("option", "active", 0);
$(".tab-menu").removeClass("active");
$("#tab_list_menu").addClass("active");





//#region Save
function SaveRecordVerification() {
    error_message = "";
    if ($("#tb_name").val() === "") {
        if (error_message !== "") error_message += "\n";
        error_message += "Require Name"
    }
    
    if (error_message === "") { return true; }
    else {
        ShowErrorBoxMessage(error_message);
        return false;
    }

}

function SaveAds() {
    if (SaveRecordVerification() === false)
        return;
    Pace.start();
    $("#hf_org_id").val($("#tb_org_name").val());
    $.ajax({
        url: baseUrl() + "WebServices/WebService_Ads.asmx/SaveAds",
        data: "{ " +
            "'id':'" + $("#tb_id").val() + "' " +
            ",'name':'" + $("#tb_name").val() + "' " +
            " }",
        dataType: 'json',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d.toString().split('~')[0] === "Success") {
                ShowSuccessMessage("Saved.");
                LoadNew();
                GetUser(data.d.toString().split('~')[1]);
                $("#image_item").css("display", "none");
                $("#Image_drop_zone").css("display", "block");
                scrollToDiv('#tab-main');
                
            }
            else if (data.d.toString().split('~')[0] === "DuplicateCode") {
                ShowErrorBoxMessage("Oops. User Code can't be duplicate.");
            }
            else {
                ShowErrorBoxMessage("Oops. " + data.d.toString().split('~')[1]);
            }
        },
        error: function (xhr, msg) {
            LogJSError('Web Service Fail: ' + msg + '\n' + xhr.responseText);

        }
    });
}

//#endregion

//#region New Record
function LoadNew() {
    $("#tb_id").val("");
    $("#tb_name").val("");
    $("#tb_id").focus();
}

//#endregion
function RefreshItem() { GetAds(GetURLData('id')); }
//#region Delete

function DeleteRecordConfirmation() {
    ShowConfirmation("Are you sure you want to delete?", "DeleteAds");
}
function DeleteAds() {
    Pace.start();
    $.ajax({
        url: baseUrl() + "WebServices/WebService_Ads.asmx/DeleteAds",
        data: "{ " +
            "'id':'" + $("#tb_id").val() + "' " +
            ",'name':'" + $("#tb_name").val() + "' " +
            " }",
        dataType: 'json',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d.toString().split('~')[0] === "Success") {
                LoadNew();
                ShowSuccessMessage("Deleted.");
            }
            else {
                ShowBoxMessage("Oops, we can't delete. " + data.d.toString().split('~')[1]);
            }

        },
        error: function (xhr, msg) {
            LogJSError('Web Service Fail: ' + msg + '\n' + xhr.responseText);

        }
    });


}

//#endregion

//#region Load Record
function GetAds(id) {
    Pace.start();
    $.ajax({
        url: baseUrl() + "WebServices/WebService_Ads.asmx/GetAdsByID",
        data: "{ " +
            "'id':'" + id + "'}",
        dataType: 'json',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d !== null) {
                $("#tb_id").val(data.d["id"]);
                $("#tb_name").val(data.d["name"]);
                ShowSuccessMessage("Loaded.");

            }
            else {
                ShowBoxMessage("Oops, we can't find the record. ");
            }

        },
        error: function (xhr, msg) {
            LogJSError('Web Service Fail: ' + msg + '\n' + xhr.responseText);

        }
    });
}

