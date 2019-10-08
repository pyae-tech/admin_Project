<%@ Page Language="C#" MasterPageFile="~/PortalAdministration/userInterfaces/moduleSystem/masterFiles/FullFrameMaster_NPTDC.master" AutoEventWireup="true" CodeBehind="systemAdsDetails.aspx.cs" Inherits="SBSPortal3.PortalAdministration.userInterfaces.moduleSystem.systemAds.systemAdsDetails" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder_CSS" runat="server">
    <link href='<%=ResolveUrl("../../../plugins/WidgetsGallery/css/dx.common.css")%>' rel="stylesheet" />
    <link href='<%=ResolveUrl("../../../plugins/WidgetsGallery/css/dx.light.css")%>' rel="stylesheet" />
    <style>
        .customClass {
            height: 300px !important;
        }

        .dx-overlay-wrapper {
            z-index: 17000 !important;
        }
    </style>
</asp:Content>

<asp:Content ID="Content6" ContentPlaceHolderID="ContentPlaceHolder_TopLeftMenu" runat="server">
    <ol class="menucrumb">
        <li>
            <button style="display: none;" class="btn btn-success  btn-rounded  btn-labeled usercontrol_create" type="button" onclick="SaveAds();return false;"><i class="btn-label ion-checkmark"></i><span class="bold" data-translate="_save">စာရင်းသိမ်းရန်</span></button></li>
        <li>
            <button style="display: none;" class="btn  btn-dark   btn-rounded btn-labeled usercontrol_delete" type="button" onclick="DeleteRecordConfirmation();return false;">
                <i class="btn-label ion-trash-b"></i><span class="bold" data-translate="_delete">ဖျက်ရန်</span></button></li>
        <li>
            <button style="display: none;" class="btn btn-dark  btn-rounded  btn-labeled usercontrol_create" type="button" onclick="LoadNew();return false;"><i class="btn-label ion-plus-round"></i><span class="bold" data-translate="_new">အသစ်</span></button></li>
        <li>
            <button style="display: block;" class="btn  btn-dark   btn-rounded  btn-labeled" type="button" onclick="RefreshItem();return false;"><i class="btn-label ion-refresh"></i><span class="bold" data-translate="_reflesh">ပြန်ဖွင့်</span></button></li>
        <li>
            <button style="display: block;" data-dismiss="modal" class="btn btn-dark  btn-rounded  btn-labeled" type="button" onclick="GotoPage('Portal/ads');return false;"><i class="btn-label ion-close"></i><span class="bold" data-translate="_close">ပိတ်မည်</span></button></li>

    </ol>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder_Header" runat="server">
    <!--Page Title-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div id="page-title">
        <h1 class="page-header text-overflow">ကြော်ငြာများ</h1>
    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--End page title-->


    <!--Breadcrumb-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <ol class="breadcrumb">
        <li><a href="#"><i class="demo-pli-home"></i></a></li>
        <li>စနစ် စီမံခြင်း</li>
        <li><a href="ads">ကြော်ငြာများ</a></li>


    </ol>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--End breadcrumb-->
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder_Body" runat="server">
    <div id="page-content">
        <div class="panel">
            <div class="panel-body">
                <div class="modal-body">
                    <div class="col-md-12">
                        <form id="form" class="form-horizontal">
                            <div class="form-group">
                                <label for="tb_id" class="col-md-2 control-label">ကုဒ်နံပါတ်</label>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="tb_id" placeholder="ကုဒ်နံပါတ်">
                                </div>
                                <label for="tb_name" class="  col-md-2  control-label">အမည်</label>
                                <div class=" col-md-4">
                                    <input type="text" class="form-control" id="tb_name" placeholder="အမည်">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentPlaceHolder_JS" runat="server">
    <script src='<%=ResolveUrl("../../../plugins/WidgetsGallery/js/jszip.min.js")%>'></script>
    <script src='<%=ResolveUrl("../../../plugins/WidgetsGallery/js/dx.all.js")%>'></script>
    <script src='<%= ResolveUrl("../../../plugins/backDetect/jquery.backDetect.js")%>'></script>
    <script src='<%= ResolveUrl("../../../plugins/easyautocomplete/jquery.easy-autocomplete.js")%>'></script>
    <script src='<%= ResolveUrl("../../moduleSystem/systemAttachment/ControlAttachment.js")%>'></script>
    <script src='<%= ResolveUrl("../../moduleSystem/systemComment/controlComment.js")%>'></script>
    <script src='<%= ResolveUrl("../../moduleSystem/systemApproval/controlApproval.js")%>'></script>

    <script src='<%= ResolveUrl("systemAdsDetails.js")%>'></script>
</asp:Content>
