<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="jsapi.js"></script>
    <script src="jquery.js"></script>
    <link href="newadmission.css" rel="stylesheet">
    
    
</head>
<body>
    <form id="form1" runat="server">
        <div class="col-md-6 col-xs-6">
            <label>3. Applicant Name in Hindi (आवेदक का पूरा नाम हिंदी में)</label>
            <asp:TextBox ID="txtnamehindi" runat="server" CssClass="form-control" autocomplete="off" MaxLength="27"></asp:TextBox>
        </div>
    </form>
    <script src="transliterationlib.js"></script>
    <script src="transliteration.js"></script>
</body>
</html>
