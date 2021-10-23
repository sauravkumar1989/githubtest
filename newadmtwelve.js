$(document).ready(function () {
    $("#tdbtnnext").click(function () {
        var rdlenroll = $("#ctl00_ContentPlaceHolder1_rdlenroll").val();
        var flpic = $("#ctl00_ContentPlaceHolder1_flpic").val();
        var flsign = $("#ctl00_ContentPlaceHolder1_flsign").val();
        var txtcode = $("#txtcode").val();
        var txtnameenglish = $("#ctl00_ContentPlaceHolder1_txtnameenglish").val();
        var txtmn = $("#ctl00_ContentPlaceHolder1_txtmn").val();
        var txtfn = $("#ctl00_ContentPlaceHolder1_txtfn").val();

        var txtaadharno = $("#ctl00_ContentPlaceHolder1_txtaadharno").val();
        var txtmobno = $("#ctl00_ContentPlaceHolder1_txtmobno").val();

        var txtmohalla = $("#ctl00_ContentPlaceHolder1_txtmohalla").val();
        var txtpost = $("#ctl00_ContentPlaceHolder1_txtpost").val();
        var txtprakhand = $("#ctl00_ContentPlaceHolder1_txtprakhand").val();
        var txtzilla = $("#ctl00_ContentPlaceHolder1_txtzilla").val();
        var txtrajya = $("#ctl00_ContentPlaceHolder1_txtrajya").val();
        var txtpin = $("#ctl00_ContentPlaceHolder1_txtpin").val();

        var txtboardname = $("#ctl00_ContentPlaceHolder1_txtboardname").val();
        var txtrollno = $("#ctl00_ContentPlaceHolder1_txtrollno").val();
        var txtregno = $("#ctl00_ContentPlaceHolder1_txtregno").val();
        var txtpass = $("#ctl00_ContentPlaceHolder1_txtpass").val();

        var ddlsub1 = $("#ctl00_ContentPlaceHolder1_DropDownList9").val();
        var DropDownList3 = $("#ctl00_ContentPlaceHolder1_DropDownList10").val();
        var DropDownList4 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        var DropDownList5 = $("#ctl00_ContentPlaceHolder1_DropDownList12").val();
        var DropDownList6 = $("#ctl00_ContentPlaceHolder1_DropDownList13").val();
        var ddlgender = $("#ctl00_ContentPlaceHolder1_ddlgender").val();

        if (rdlenroll == "") {
            alert("Select Types of Enrollment (नामांकन के प्रकार)");
            $("#ctl00_ContentPlaceHolder1_rdlenroll").focus();
        }
        else if (flpic == "") {
            alert("Select Photo");
            $("#ctl00_ContentPlaceHolder1_flpic").focus();
        }
        else if (flsign == "") {
            alert("Select Signature");
            $("#ctl00_ContentPlaceHolder1_flsign").focus();
        }
        else if (txtcode == "") {
            alert("Centre Code");
            $("#txtcode").focus();
        }
        else if (txtnameenglish == "") {
            alert("Applicant Name in English");
            $("#ctl00_ContentPlaceHolder1_txtnameenglish").focus();
        }
        else if (txtmn == "") {
            alert("Mother's Name in English");
            $("#ctl00_ContentPlaceHolder1_txtmn").focus();
        }
        else if (txtfn == "") {
            alert("Father's Name in English");
            $("#ctl00_ContentPlaceHolder1_txtfn").focus();
        }
        else if (txtaadharno == "") {
            alert("Aadhar No");
            $("#ctl00_ContentPlaceHolder1_txtaadharno").focus();
        }
        else if (txtaadharno.length != 12) {
            alert("Required 12 digits, Match Requested Format!");
            $("#ctl00_ContentPlaceHolder1_txtaadharno").focus();
        }
        else if (txtmobno == "") {
            alert("Mobile Number");
            $("#ctl00_ContentPlaceHolder1_txtmobno").focus();
        }
        else if (txtmobno.length != 10) {
            alert("Required 10 digits, Match Requested Format!");
            $("#ctl00_ContentPlaceHolder1_txtmobno").focus();
        }
        else if (txtmohalla == "") {
            alert("Village/Street");
            $("#ctl00_ContentPlaceHolder1_txtmohalla").focus();
        }
        else if (txtpost == "") {
            alert("Post");
            $("#ctl00_ContentPlaceHolder1_txtpost").focus();
        }
        else if (txtprakhand == "") {
            alert("Block");
            $("#ctl00_ContentPlaceHolder1_txtprakhand").focus();
        }
        else if (txtzilla == "") {
            alert("District");
            $("#ctl00_ContentPlaceHolder1_txtzilla").focus();
        }
        else if (txtrajya == "") {
            alert("State");
            $("#ctl00_ContentPlaceHolder1_txtrajya").focus();
        }
        else if (txtpin == "") {
            alert("Pin");
            $("#ctl00_ContentPlaceHolder1_txtpin").focus();
        }
        else if (txtboardname == "") {
            alert("10th Board Name");
            $("#ctl00_ContentPlaceHolder1_txtboardname").focus();
        }
        else if (txtrollno == "") {
            alert("Exam Roll No");
            $("#ctl00_ContentPlaceHolder1_txtrollno").focus();
        }
        else if (txtregno == "") {
            alert("Registration No");
            $("#ctl00_ContentPlaceHolder1_txtregno").focus();
        }
        else if (txtpass == "") {
            alert("Year of Passing");
            $("#ctl00_ContentPlaceHolder1_txtpass").focus();
        }

        else if (ddlsub1 == "") {
            alert("Select Compulsory Subject 1");
            $("#ctl00_ContentPlaceHolder1_DropDownList9").focus();
        }
        else if (DropDownList3 == "") {
            alert("Select Compulsory Subject 2");
            $("#ctl00_ContentPlaceHolder1_DropDownList10").focus();
        }
        else if (DropDownList3 == ddlsub1) {
            alert("Subject 1 and 2 both are Same ! Select Another Subject");
            $("#ctl00_ContentPlaceHolder1_DropDownList10").focus();
        }
        else if (DropDownList4 == "") {
            alert("Select Compulsory Subject 3");
            $("#ctl00_ContentPlaceHolder1_DropDownList11").focus();
        }
        else if (DropDownList5 == "") {
            alert("Select Compulsory Subject 4");
            $("#ctl00_ContentPlaceHolder1_DropDownList12").focus();
        }
        else if (DropDownList6 == "") {
            alert("Select Compulsory Subject 5");
            $("#ctl00_ContentPlaceHolder1_DropDownList13").focus();
        }
        else if (ddlgender == "") {
            alert("Select Gender");
            $("#ctl00_ContentPlaceHolder1_ddlgender").focus();
        }
        else {
            if (rdlenroll == 2) {
                $("#part2").css("display", "block");
                $("#part1").css("display", "none");
            }
            else {
                $("#part3").css("display", "block");
                $("#part1").css("display", "none");
            }
        }
    });
    $("#btnprv").click(function () {
        $("#part1").css("display", "block");
        $("#part2").css("display", "none");
    });
    $("#btnnxt").click(function () {
        var txtExamYear1 = $("#ctl00_ContentPlaceHolder1_txtExamYear1").val();
        var ddlSubjectName1 = $("#ctl00_ContentPlaceHolder1_ddlSubjectName1").val();
        var txtSaidhantik1 = $("#ctl00_ContentPlaceHolder1_txtSaidhantik1").val();
        var txtPrayogik1 = $("#ctl00_ContentPlaceHolder1_txtPrayogik1").val();
        var txtPraptaank1 = $("#ctl00_ContentPlaceHolder1_txtPraptaank1").val();
        if (txtExamYear1 == "") {
            alert("परीक्षा का वर्ष");
            $("#ctl00_ContentPlaceHolder1_txtExamYear1").focus();
        }
        else if (ddlSubjectName1 == "") {
            alert("विषयो के नाम");
            $("#ctl00_ContentPlaceHolder1_ddlSubjectName1").focus();
        }
        else if (txtSaidhantik1 == "") {
            alert("सैद्धांतिक");
            $("#ctl00_ContentPlaceHolder1_txtSaidhantik1").focus();
        }
        else if (txtPrayogik1 == "") {
            alert("प्रायोगिक");
            $("#ctl00_ContentPlaceHolder1_txtPrayogik1").focus();
        }
        else if (txtPraptaank1 == "") {
            alert("कुल प्राप्तांक");
            $("#ctl00_ContentPlaceHolder1_txtPraptaank1").focus();
        }
        else if ($("#ctl00_ContentPlaceHolder1_ddlSubjectName2").val() != "") {
            if ($("#ctl00_ContentPlaceHolder1_txtExamYear2").val() == "") {
                alert("परीक्षा का वर्ष");
                $("#ctl00_ContentPlaceHolder1_txtExamYear2").focus();
            }
            else if ($("#ctl00_ContentPlaceHolder1_txtSaidhantik2").val() == "") {
                alert("सैद्धांतिक");
                $("#ctl00_ContentPlaceHolder1_txtSaidhantik2").focus();
            }
            else if ($("#ctl00_ContentPlaceHolder1_txtPrayogik2").val() == "") {
                alert("प्रायोगिक");
                $("#ctl00_ContentPlaceHolder1_txtPrayogik2").focus();
            }
            else if ($("#ctl00_ContentPlaceHolder1_txtPraptaank2").val() == "") {
                alert("कुल प्राप्तांक");
                $("#ctl00_ContentPlaceHolder1_txtPraptaank2").focus();
            }
        }
        else {
            $("#part3").css("display", "block");
            $("#part2").css("display", "none");
        }
    });
    $("#btnprev").click(function () {
        var rdlenroll = $("#ctl00_ContentPlaceHolder1_rdlenroll").val();
        if (rdlenroll == 2) {
            $("#part2").css("display", "block");
            $("#part3").css("display", "none");
        }
        else {
            $("#part1").css("display", "block");
            $("#part3").css("display", "none");
        }
    });
});

$(document).ready(function () {
    $("#ctl00_ContentPlaceHolder1_ddlSubjectName1").change(function () {
        var selectedValue = $(this).val();
        var sub1 = "";
        var sub2 = "";
        var sub3 = "";
        var sub4 = "";
        var sub5 = "";
        var sub6 = "";
        var sub7 = "";

        sub1 = $("#ctl00_ContentPlaceHolder1_DropDownList9").val();
        sub2 = $("#ctl00_ContentPlaceHolder1_DropDownList10").val();
        sub3 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        sub4 = $("#ctl00_ContentPlaceHolder1_DropDownList12").val();
        sub5 = $("#ctl00_ContentPlaceHolder1_DropDownList13").val();
        sub6 = $("#ctl00_ContentPlaceHolder1_DropDownList14").val();
        sub7 = $("#ctl00_ContentPlaceHolder1_DropDownList15").val();

        if (sub1 == selectedValue) {
            alert("Chosen Subject Match with First Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub2 == selectedValue) {
            alert("Chosen Subject Match with 2nd Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub3 == selectedValue) {
            alert("Chosen Subject Match with 3rd Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub4 == selectedValue) {
            alert("Chosen Subject Match with 4th Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub5 == selectedValue) {
            alert("Chosen Subject Match with 5th Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub6 == selectedValue) {
            alert("Chosen Subject Match with 6th Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }

        else if (sub7 == selectedValue) {
            alert("Chosen Subject Match with 7th Compulsory Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName1").prop('selectedIndex', 0);
            $("#txtSubjectCode1").html('');
        }
        else {
            $("#txtSubjectCode1").html(selectedValue);
        }
        return false;
    });
});

$(document).ready(function () {
    $("#ctl00_ContentPlaceHolder1_ddlSubjectName2").change(function () {
        var selectedValue = $(this).val();
        var ddlSubjectName1 = $("#ctl00_ContentPlaceHolder1_ddlSubjectName1").val();
        if (selectedValue == ddlSubjectName1) {
            alert("Both Subjects are Same! Select Another Subject");
            $("select#ctl00_ContentPlaceHolder1_ddlSubjectName2").prop('selectedIndex', 0);
            $("#txtSubjectCode2").html('');
        }
        else {
            $("#txtSubjectCode2").html(selectedValue);
        }
        return false;
    });
});

$(document).ready(function () {
    var myCheckbox = $("input[name='ctl00$ContentPlaceHolder1$chkaddress']");
    myCheckbox.change(function () {
        if (this.checked) {
            var mohalla = $("#ctl00_ContentPlaceHolder1_txtmohalla").val();
            var post = $("#ctl00_ContentPlaceHolder1_txtpost").val();
            var block = $("#ctl00_ContentPlaceHolder1_txtprakhand").val();
            var district = $("#ctl00_ContentPlaceHolder1_txtzilla").val();
            var state = $("#ctl00_ContentPlaceHolder1_txtrajya").val();
            var pin = $("#ctl00_ContentPlaceHolder1_txtpin").val();

            $("#ctl00_ContentPlaceHolder1_txtmohalla1").val(mohalla);
            $("#ctl00_ContentPlaceHolder1_txtpost1").val(post);
            $("#ctl00_ContentPlaceHolder1_txtprakhand1").val(block);
            $("#ctl00_ContentPlaceHolder1_txtzilla1").val(district);
            $("#ctl00_ContentPlaceHolder1_txtrajya1").val(state);
            $("#ctl00_ContentPlaceHolder1_txtpin1").val(pin);
        } else {
            $("#ctl00_ContentPlaceHolder1_txtmohalla1").val('');
            $("#ctl00_ContentPlaceHolder1_txtpost1").val('');
            $("#ctl00_ContentPlaceHolder1_txtprakhand1").val('');
            $("#ctl00_ContentPlaceHolder1_txtzilla1").val('');
            $("#ctl00_ContentPlaceHolder1_txtrajya1").val('');
            $("#ctl00_ContentPlaceHolder1_txtpin1").val('');
        }
    });
});

$(document).ready(function () {
    var myCheckbox = $("input[name='ctl00$ContentPlaceHolder1$chkcorrespondance']");
    myCheckbox.change(function () {
        if (this.checked) {
            var mohalla = $("#ctl00_ContentPlaceHolder1_txtmohalla1").val();
            var post = $("#ctl00_ContentPlaceHolder1_txtpost1").val();
            var block = $("#ctl00_ContentPlaceHolder1_txtprakhand1").val();
            var district = $("#ctl00_ContentPlaceHolder1_txtzilla1").val();
            var state = $("#ctl00_ContentPlaceHolder1_txtrajya1").val();
            var pin = $("#ctl00_ContentPlaceHolder1_txtpin1").val();

            $("#ctl00_ContentPlaceHolder1_txtmohalla2").val(mohalla);
            $("#ctl00_ContentPlaceHolder1_txtpost2").val(post);
            $("#ctl00_ContentPlaceHolder1_txtprakhand2").val(block);
            $("#ctl00_ContentPlaceHolder1_txtzilla2").val(district);
            $("#ctl00_ContentPlaceHolder1_txtrajya2").val(state);
            $("#ctl00_ContentPlaceHolder1_txtpin2").val(pin);
        } else {
            $("#ctl00_ContentPlaceHolder1_txtmohalla2").val('');
            $("#ctl00_ContentPlaceHolder1_txtpost2").val('');
            $("#ctl00_ContentPlaceHolder1_txtprakhand2").val('');
            $("#ctl00_ContentPlaceHolder1_txtzilla2").val('');
            $("#ctl00_ContentPlaceHolder1_txtrajya2").val('');
            $("#ctl00_ContentPlaceHolder1_txtpin2").val('');
        }
    });
});

$(document).ready(function () {
    $("#btnsaveadm").click(function () {
        var txtsession1 = $("#ctl00_ContentPlaceHolder1_txtsession1").val();
        var txtsession2 = $("#ctl00_ContentPlaceHolder1_txtsession2").val();
        var rdlenroll = $("#ctl00_ContentPlaceHolder1_rdlenroll").val();
        var txtcode = $("#txtcode").val();
        var txtnameenglish = $("#ctl00_ContentPlaceHolder1_txtnameenglish").val();
        var txtnamehindi = $("#ctl00_ContentPlaceHolder1_txtnamehindi").val();
        var txtdob = $("#ctl00_ContentPlaceHolder1_txtdob").val();
        var tdwords = $("#tdwords").val();
        var txtmn = $("#ctl00_ContentPlaceHolder1_txtmn").val();
        var txtmnhindi = $("#ctl00_ContentPlaceHolder1_txtmnhindi").val();
        var txtfn = $("#ctl00_ContentPlaceHolder1_txtfn").val();
        var txtfnhindi = $("#ctl00_ContentPlaceHolder1_txtfnhindi").val();

        var txtan = $("#ctl00_ContentPlaceHolder1_txtan").val();
        var txtan1 = $("#ctl00_ContentPlaceHolder1_txtan1").val();
        var txtaadharno = $("#ctl00_ContentPlaceHolder1_txtaadharno").val();
        var txtmobno = $("#ctl00_ContentPlaceHolder1_txtmobno").val();
        var txtemail = $("#ctl00_ContentPlaceHolder1_txtemail").val();

        var txtmohalla = $("#ctl00_ContentPlaceHolder1_txtmohalla").val();
        var txtpost = $("#ctl00_ContentPlaceHolder1_txtpost").val();
        var txtprakhand = $("#ctl00_ContentPlaceHolder1_txtprakhand").val();
        var txtzilla = $("#ctl00_ContentPlaceHolder1_txtzilla").val();
        var txtrajya = $("#ctl00_ContentPlaceHolder1_txtrajya").val();
        var txtpin = $("#ctl00_ContentPlaceHolder1_txtpin").val();

        var txtmohalla1 = $("#ctl00_ContentPlaceHolder1_txtmohalla1").val();
        var txtpost1 = $("#ctl00_ContentPlaceHolder1_txtpost1").val();
        var txtprakhand1 = $("#ctl00_ContentPlaceHolder1_txtprakhand1").val();
        var txtzilla1 = $("#ctl00_ContentPlaceHolder1_txtzilla1").val();
        var txtrajya1 = $("#ctl00_ContentPlaceHolder1_txtrajya1").val();
        var txtpin1 = $("#ctl00_ContentPlaceHolder1_txtpin1").val();

        var txtmohalla2 = $("#ctl00_ContentPlaceHolder1_txtmohalla2").val();
        var txtpost2 = $("#ctl00_ContentPlaceHolder1_txtpost2").val();
        var txtprakhand2 = $("#ctl00_ContentPlaceHolder1_txtprakhand2").val();
        var txtzilla2 = $("#ctl00_ContentPlaceHolder1_txtzilla2").val();
        var txtrajya2 = $("#ctl00_ContentPlaceHolder1_txtrajya2").val();
        var txtpin2 = $("#ctl00_ContentPlaceHolder1_txtpin2").val();

        var chksug = $('#ctl00_ContentPlaceHolder1_chksug').find(":checked").val();
        var ddlcourse = $("#ctl00_ContentPlaceHolder1_ddlcourse").val();
        var ddlmedium = $("#ctl00_ContentPlaceHolder1_ddlmedium").val();

        var txtboardname = $("#ctl00_ContentPlaceHolder1_txtboardname").val();
        var txtrollno = $("#ctl00_ContentPlaceHolder1_txtrollno").val();
        var txtregno = $("#ctl00_ContentPlaceHolder1_txtregno").val();
        var txtpass = $("#ctl00_ContentPlaceHolder1_txtpass").val();

        var ddlsub1 = $("#ctl00_ContentPlaceHolder1_DropDownList9").val();
        var DropDownList3 = $("#ctl00_ContentPlaceHolder1_DropDownList10").val();
        var DropDownList4 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        var DropDownList5 = $("#ctl00_ContentPlaceHolder1_DropDownList12").val();
        var DropDownList6 = $("#ctl00_ContentPlaceHolder1_DropDownList13").val();

        var DropDownList7 = $("#ctl00_ContentPlaceHolder1_DropDownList14").val();
        var DropDownList8 = $("#ctl00_ContentPlaceHolder1_DropDownList15").val();

        var txtnationality = $("#ctl00_ContentPlaceHolder1_txtnationality").val();
        var txtdharma = $("#ctl00_ContentPlaceHolder1_txtdharma").val();
        var txtdisability = $("#ctl00_ContentPlaceHolder1_txtdisability").val();
        var ddlgender = $("#ctl00_ContentPlaceHolder1_ddlgender").val();
        var txtcaste = $("#ctl00_ContentPlaceHolder1_txtcaste").val();
        var txtpre = $("#ctl00_ContentPlaceHolder1_txtpre").val();

        var txttotalfee = $("#ctl00_ContentPlaceHolder1_txttotalfee").val();
        var txttotalpaid = $("#ctl00_ContentPlaceHolder1_txttotalpaid").val();
        var txtdate = $("#ctl00_ContentPlaceHolder1_txtdate").val();

        var txtExamYear1 = $("#ctl00_ContentPlaceHolder1_txtExamYear1").val();
        var txtExamYear2 = $("#ctl00_ContentPlaceHolder1_txtExamYear2").val();
        var txtSubjectName1 = $("#ctl00_ContentPlaceHolder1_ddlSubjectName1").val();
        var txtSubjectName2 = $("#ctl00_ContentPlaceHolder1_ddlSubjectName2").val();
        var txtSubjectCode1 = $("#txtSubjectCode1").val();
        var txtSubjectCode2 = $("#txtSubjectCode2").val();

        var txtSaidhantik1 = $("#ctl00_ContentPlaceHolder1_txtSaidhantik1").val();
        var txtSaidhantik2 = $("#ctl00_ContentPlaceHolder1_txtSaidhantik2").val();
        var txtPrayogik1 = $("#ctl00_ContentPlaceHolder1_txtPrayogik1").val();
        var txtPrayogik2 = $("#ctl00_ContentPlaceHolder1_txtPrayogik2").val();
        var txtPraptaank1 = $("#ctl00_ContentPlaceHolder1_txtPraptaank1").val();
        var txtPraptaank2 = $("#ctl00_ContentPlaceHolder1_txtPraptaank2").val();

        var ankpatra = "";
        if ($("#ctl00_ContentPlaceHolder1_chkAnkpatra").is(':checked')) {
            ankpatra = "Ok";
        }
        var computerprint = "";
        if ($("#ctl00_ContentPlaceHolder1_chkComputerPrint").is(':checked')) {
            computerprint = "Ok";
        }
        var txtprevBoardName = $("#ctl00_ContentPlaceHolder1_txtprevBoardName").val();
        var txtPanjiyanYear = $("#ctl00_ContentPlaceHolder1_txtPanjiyanYear").val();
        var txtPanjiyanNo = $("#ctl00_ContentPlaceHolder1_txtPanjiyanNo").val();
        var txtExaminationYear = $("#ctl00_ContentPlaceHolder1_txtExaminationYear").val();
        var txtResult = $("#ctl00_ContentPlaceHolder1_txtResult").val();
        var txttithi = $("#ctl00_ContentPlaceHolder1_txttithi").val();

        var flpic = $('#ctl00_ContentPlaceHolder1_flpic').prop('files')[0];
        var flsign = $('#ctl00_ContentPlaceHolder1_flsign').prop('files')[0];
        var flsignatureenglish = $('#ctl00_ContentPlaceHolder1_flsignatureenglish').prop('files')[0];
        var flsignaturehindi = $('#ctl00_ContentPlaceHolder1_flsignaturehindi').prop('files')[0];

        var flsigneng = $('#ctl00_ContentPlaceHolder1_flsigneng').prop('files')[0];
        var flsignhindi = $('#ctl00_ContentPlaceHolder1_flsignhindi').prop('files')[0];
        var flsignature = $('#ctl00_ContentPlaceHolder1_flsignature').prop('files')[0];
        var flmuhar = $('#ctl00_ContentPlaceHolder1_flmuhar').prop('files')[0];

        var fldob = $('#ctl00_ContentPlaceHolder1_fldob').prop('files')[0];
        var flcaste = $('#ctl00_ContentPlaceHolder1_flcaste').prop('files')[0];
        var flslc = $('#ctl00_ContentPlaceHolder1_flslc').prop('files')[0];
        var fltenthmarksheet = $('#ctl00_ContentPlaceHolder1_fltenthmarksheet').prop('files')[0];
        var fltwelvemarksheet = $('#ctl00_ContentPlaceHolder1_fltwelvemarksheet').prop('files')[0];

        var flbefore = $('#ctl00_ContentPlaceHolder1_flbefore').prop('files')[0];
        var fltoc = $('#ctl00_ContentPlaceHolder1_fltoc').prop('files')[0];
        var flaadharcard = $('#ctl00_ContentPlaceHolder1_flaadharcard').prop('files')[0];
        var fldivyanta = $('#ctl00_ContentPlaceHolder1_fldivyanta').prop('files')[0];
        var flabhibhawak = $('#ctl00_ContentPlaceHolder1_flabhibhawak').prop('files')[0];

        var fd = new FormData();
        fd.append('txtsession1', txtsession1);
        fd.append('txtsession2', txtsession2);
        fd.append('rdlenroll', rdlenroll);
        fd.append('txtcode', txtcode);
        fd.append('txtnameenglish', txtnameenglish);
        fd.append('txtnamehindi', txtnamehindi);
        fd.append('txtdob', txtdob);
        fd.append('tdwords', tdwords);
        fd.append('txtmn', txtmn);
        fd.append('txtmnhindi', txtmnhindi);
        fd.append('txtfn', txtfn);
        fd.append('txtfnhindi', txtfnhindi);
        fd.append('txtan', txtan);
        fd.append('txtan1', txtan1);
        fd.append('txtaadharno', txtaadharno);
        fd.append('txtmobno', txtmobno);
        fd.append('txtemail', txtemail);
        fd.append('txtmohalla', txtmohalla);
        fd.append('txtpost', txtpost);
        fd.append('txtprakhand', txtprakhand);
        fd.append('txtzilla', txtzilla);
        fd.append('txtrajya', txtrajya);
        fd.append('txtpin', txtpin);
        fd.append('txtmohalla1', txtmohalla1);
        fd.append('txtpost1', txtpost1);
        fd.append('txtprakhand1', txtprakhand1);
        fd.append('txtzilla1', txtzilla1);
        fd.append('txtrajya1', txtrajya1);
        fd.append('txtpin1', txtpin1);
        fd.append('txtmohalla2', txtmohalla2);
        fd.append('txtpost2', txtpost2);
        fd.append('txtprakhand2', txtprakhand2);
        fd.append('txtzilla2', txtzilla2);
        fd.append('txtrajya2', txtrajya2);
        fd.append('txtpin2', txtpin2);
        fd.append('chksug', chksug);
        fd.append('ddlcourse', ddlcourse);
        fd.append('ddlmedium', ddlmedium);

        fd.append('txtboardname', txtboardname);
        fd.append('txtrollno', txtrollno);
        fd.append('txtregno', txtregno);
        fd.append('txtpass', txtpass);

        fd.append('ddlsub1', ddlsub1);
        fd.append('DropDownList3', DropDownList3);
        fd.append('DropDownList4', DropDownList4);
        fd.append('DropDownList5', DropDownList5);
        fd.append('DropDownList6', DropDownList6);
        fd.append('DropDownList7', DropDownList7);
        fd.append('DropDownList8', DropDownList8);

        fd.append('txtnationality', txtnationality);
        fd.append('txtdharma', txtdharma);
        fd.append('txtdisability', txtdisability);
        fd.append('ddlgender', ddlgender);
        fd.append('txtcaste', txtcaste);
        fd.append('txtpre', txtpre);
        fd.append('txttotalfee', txttotalfee);
        fd.append('txttotalpaid', txttotalpaid);
        fd.append('txtdate', txtdate);
        fd.append('txtExamYear1', txtExamYear1);
        fd.append('txtExamYear2', txtExamYear2);
        fd.append('txtSubjectName1', txtSubjectName1);
        fd.append('txtSubjectName2', txtSubjectName2);
        fd.append('txtSubjectCode1', txtSubjectCode1);
        fd.append('txtSubjectCode2', txtSubjectCode2);
        fd.append('txtSaidhantik1', txtSaidhantik1);
        fd.append('txtSaidhantik2', txtSaidhantik2);
        fd.append('txtPrayogik1', txtPrayogik1);
        fd.append('txtPrayogik2', txtPrayogik2);
        fd.append('txtPraptaank1', txtPraptaank1);
        fd.append('txtPraptaank2', txtPraptaank2);
        fd.append('ankpatra', ankpatra);
        fd.append('computerprint', computerprint);
        fd.append('txtprevBoardName', txtprevBoardName);
        fd.append('txtPanjiyanYear', txtPanjiyanYear);
        fd.append('txtPanjiyanNo', txtPanjiyanNo);
        fd.append('txtExaminationYear', txtExaminationYear);
        fd.append('txtResult', txtResult);
        fd.append('txttithi', txttithi);
        fd.append('flpic', flpic);
        fd.append('flsign', flsign);
        fd.append('flsignatureenglish', flsignatureenglish);
        fd.append('flsignaturehindi', flsignaturehindi);
        fd.append('flsigneng', flsigneng);
        fd.append('flsignhindi', flsignhindi);
        fd.append('flsignature', flsignature);
        fd.append('flmuhar', flmuhar);
        fd.append('fldob', fldob);
        fd.append('flcaste', flcaste);
        fd.append('flslc', flslc);
        fd.append('fltenthmarksheet', fltenthmarksheet);
        fd.append('fltwelvemarksheet', fltwelvemarksheet);
        fd.append('flbefore', flbefore);
        fd.append('fltoc', fltoc);
        fd.append('flaadharcard', flaadharcard);
        fd.append('fldivyanta', fldivyanta);
        fd.append('flabhibhawak', flabhibhawak);
        $.ajax
        ({
            url: 'Ashx/addnewadm.ashx',
            type: 'POST',
            data: fd,
            cache: false,
            contentType: false,
            processData: false,
            success: function (file) {
                var message = file.name;
                if (message == "Ok") {
                    alert("Record has been Successfully Saved");
                    var url = "newadmtwelve.aspx";
                    window.location.href = url;
                }
            },
            error: function (response) {
                alert(response.status + ' ' + response.statusText);
            },
        });
        return false;
    });
});


$(document).ready(function () {
    $("#ctl00_ContentPlaceHolder1_DropDownList11").change(function () {
        var modelMakeJsonList = {
            "modelMakeTable":
            [
                 { "ID": "310", "Nm": "गणित (310)" },
                 { "ID": "311", "Nm": "भौतिकी (311)" },
                 { "ID": "312", "Nm": "रसायन विज्ञान (312)" },
                 { "ID": "313", "Nm": "जीव विज्ञान (313)" },
                 { "ID": "314", "Nm": "इतिहास (314)" },
                 { "ID": "315", "Nm": "भूगोल (315)" },
                 { "ID": "316", "Nm": "राजनीतिशास्त्र (316)" },
                 { "ID": "317", "Nm": "अर्थशास्त्र (317)" },
                 { "ID": "318", "Nm": "व्यवसाय अध्ययन (318)" },
                 { "ID": "319", "Nm": "लेखा शास्त्र (319)" },
                 { "ID": "320", "Nm": "गृह विज्ञान (320)" },
                 { "ID": "321", "Nm": "मनोविज्ञान (321)" },
                 { "ID": "322", "Nm": "कंप्यूटर विज्ञान (322)" },
                 { "ID": "323", "Nm": "समाज शास्त्र (323)" },
                 { "ID": "324", "Nm": "शिक्षा (324)" },
                 { "ID": "325", "Nm": "दर्शनशास्त्र (325)" },
                 { "ID": "326", "Nm": "चित्रकला (326)" },
                 { "ID": "327", "Nm": "संगीत (327)" },
                 { "ID": "328", "Nm": "योग एवं शारीरिक शिक्षा (328)" },
            ]
        };
        var selectedValue = $(this).val();
        var listItems = "<option value=''>Select</option>";
        for (var i = 0; i < modelMakeJsonList.modelMakeTable.length; i++) {
            if (selectedValue != modelMakeJsonList.modelMakeTable[i].ID) {
                listItems += "<option value='" + modelMakeJsonList.modelMakeTable[i].ID + "'>" + modelMakeJsonList.modelMakeTable[i].Nm + "</option>";
            }
        }
        $("#ctl00_ContentPlaceHolder1_DropDownList12").html(listItems);
    });

    $("#ctl00_ContentPlaceHolder1_DropDownList12").change(function () {
        var modelMakeJsonList = {
            "modelMakeTable":
            [
                 { "ID": "310", "Nm": "गणित (310)" },
                 { "ID": "311", "Nm": "भौतिकी (311)" },
                 { "ID": "312", "Nm": "रसायन विज्ञान (312)" },
                 { "ID": "313", "Nm": "जीव विज्ञान (313)" },
                 { "ID": "314", "Nm": "इतिहास (314)" },
                 { "ID": "315", "Nm": "भूगोल (315)" },
                 { "ID": "316", "Nm": "राजनीतिशास्त्र (316)" },
                 { "ID": "317", "Nm": "अर्थशास्त्र (317)" },
                 { "ID": "318", "Nm": "व्यवसाय अध्ययन (318)" },
                 { "ID": "319", "Nm": "लेखा शास्त्र (319)" },
                 { "ID": "320", "Nm": "गृह विज्ञान (320)" },
                 { "ID": "321", "Nm": "मनोविज्ञान (321)" },
                 { "ID": "322", "Nm": "कंप्यूटर विज्ञान (322)" },
                 { "ID": "323", "Nm": "समाज शास्त्र (323)" },
                 { "ID": "324", "Nm": "शिक्षा (324)" },
                 { "ID": "325", "Nm": "दर्शनशास्त्र (325)" },
                 { "ID": "326", "Nm": "चित्रकला (326)" },
                 { "ID": "327", "Nm": "संगीत (327)" },
                 { "ID": "328", "Nm": "योग एवं शारीरिक शिक्षा (328)" },
            ]
        };
        var DropDownList4 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        var selectedValue = $(this).val();
        var listItems = "<option value=''>Select</option>";
        for (var i = 0; i < modelMakeJsonList.modelMakeTable.length; i++) {
            if (selectedValue != modelMakeJsonList.modelMakeTable[i].ID && DropDownList4 != modelMakeJsonList.modelMakeTable[i].ID) {
                listItems += "<option value='" + modelMakeJsonList.modelMakeTable[i].ID + "'>" + modelMakeJsonList.modelMakeTable[i].Nm + "</option>";
            }
        }
        $("#ctl00_ContentPlaceHolder1_DropDownList13").html(listItems);
    });

    $("#ctl00_ContentPlaceHolder1_DropDownList13").change(function () {
        var modelMakeJsonList = {
            "modelMakeTable":
            [
                 { "ID": "310", "Nm": "गणित (310)" },
                 { "ID": "311", "Nm": "भौतिकी (311)" },
                 { "ID": "312", "Nm": "रसायन विज्ञान (312)" },
                 { "ID": "313", "Nm": "जीव विज्ञान (313)" },
                 { "ID": "314", "Nm": "इतिहास (314)" },
                 { "ID": "315", "Nm": "भूगोल (315)" },
                 { "ID": "316", "Nm": "राजनीतिशास्त्र (316)" },
                 { "ID": "317", "Nm": "अर्थशास्त्र (317)" },
                 { "ID": "318", "Nm": "व्यवसाय अध्ययन (318)" },
                 { "ID": "319", "Nm": "लेखा शास्त्र (319)" },
                 { "ID": "320", "Nm": "गृह विज्ञान (320)" },
                 { "ID": "321", "Nm": "मनोविज्ञान (321)" },
                 { "ID": "322", "Nm": "कंप्यूटर विज्ञान (322)" },
                 { "ID": "323", "Nm": "समाज शास्त्र (323)" },
                 { "ID": "324", "Nm": "शिक्षा (324)" },
                 { "ID": "325", "Nm": "दर्शनशास्त्र (325)" },
                 { "ID": "326", "Nm": "चित्रकला (326)" },
                 { "ID": "327", "Nm": "संगीत (327)" },
                 { "ID": "328", "Nm": "योग एवं शारीरिक शिक्षा (328)" },
            ]
        };
        var DropDownList4 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        var DropDownList5 = $("#ctl00_ContentPlaceHolder1_DropDownList12").val();
        var selectedValue = $(this).val();
        var listItems = "<option value=''>Select</option>";
        for (var i = 0; i < modelMakeJsonList.modelMakeTable.length; i++) {
            if (selectedValue != modelMakeJsonList.modelMakeTable[i].ID && DropDownList4 != modelMakeJsonList.modelMakeTable[i].ID && DropDownList5 != modelMakeJsonList.modelMakeTable[i].ID) {
                listItems += "<option value='" + modelMakeJsonList.modelMakeTable[i].ID + "'>" + modelMakeJsonList.modelMakeTable[i].Nm + "</option>";
            }
        }
        $("#ctl00_ContentPlaceHolder1_DropDownList14").html(listItems);
    });

    $("#ctl00_ContentPlaceHolder1_DropDownList14").change(function () {
        var modelMakeJsonList = {
            "modelMakeTable":
            [
                 { "ID": "310", "Nm": "गणित (310)" },
                 { "ID": "311", "Nm": "भौतिकी (311)" },
                 { "ID": "312", "Nm": "रसायन विज्ञान (312)" },
                 { "ID": "313", "Nm": "जीव विज्ञान (313)" },
                 { "ID": "314", "Nm": "इतिहास (314)" },
                 { "ID": "315", "Nm": "भूगोल (315)" },
                 { "ID": "316", "Nm": "राजनीतिशास्त्र (316)" },
                 { "ID": "317", "Nm": "अर्थशास्त्र (317)" },
                 { "ID": "318", "Nm": "व्यवसाय अध्ययन (318)" },
                 { "ID": "319", "Nm": "लेखा शास्त्र (319)" },
                 { "ID": "320", "Nm": "गृह विज्ञान (320)" },
                 { "ID": "321", "Nm": "मनोविज्ञान (321)" },
                 { "ID": "322", "Nm": "कंप्यूटर विज्ञान (322)" },
                 { "ID": "323", "Nm": "समाज शास्त्र (323)" },
                 { "ID": "324", "Nm": "शिक्षा (324)" },
                 { "ID": "325", "Nm": "दर्शनशास्त्र (325)" },
                 { "ID": "326", "Nm": "चित्रकला (326)" },
                 { "ID": "327", "Nm": "संगीत (327)" },
                 { "ID": "328", "Nm": "योग एवं शारीरिक शिक्षा (328)" },
            ]
        };
        var DropDownList4 = $("#ctl00_ContentPlaceHolder1_DropDownList11").val();
        var DropDownList5 = $("#ctl00_ContentPlaceHolder1_DropDownList12").val();
        var DropDownList6 = $("#ctl00_ContentPlaceHolder1_DropDownList13").val();
        var selectedValue = $(this).val();
        var listItems = "<option value=''>Select</option>";
        for (var i = 0; i < modelMakeJsonList.modelMakeTable.length; i++) {
            if (selectedValue != modelMakeJsonList.modelMakeTable[i].ID && DropDownList4 != modelMakeJsonList.modelMakeTable[i].ID && DropDownList5 != modelMakeJsonList.modelMakeTable[i].ID && DropDownList6 != modelMakeJsonList.modelMakeTable[i].ID) {
                listItems += "<option value='" + modelMakeJsonList.modelMakeTable[i].ID + "'>" + modelMakeJsonList.modelMakeTable[i].Nm + "</option>";
            }
        }
        $("#ctl00_ContentPlaceHolder1_DropDownList15").html(listItems);
    });
});

function previewFile() {
    var preview = document.querySelector('#ctl00_ContentPlaceHolder1_imgpic');
    var file = document.querySelector('#ctl00_ContentPlaceHolder1_flpic').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
function previewSignature() {
    var preview = document.querySelector('#ctl00_ContentPlaceHolder1_imgsign');
    var file = document.querySelector('#ctl00_ContentPlaceHolder1_flsign').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
