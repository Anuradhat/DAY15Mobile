function LoadModule() {
    $.ajax({
        type: "POST",
        url: "http://localhost/DAY15WEB/OwnerTask.asmx/ModuleSelectAll",
        data: "{'':''}",
        contentType: "application/json; charset=utf-8",
        success: ajaxCallSucceed,
        dataType: "json",
        failure: ajaxCallFailed
    });

    function ajaxCallSucceed(response) {
        alert("Succeed Load Module...");
        //$('#divLoading').hide();
        //var workList = eval('(' + response.d + ')');
        //pareseResult(workList);
    }

    function ajaxCallFailed(error) {
        //$('#divLoading').hide();
        alert('error: ' + error);
        //$('#divResults').hide();
    }

    function pareseResult(workList) {
        
    }
}