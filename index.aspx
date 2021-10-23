<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="Admin_index" %>

<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
    <title>Sign In</title>
    <link rel="icon" href="Admin/images/logo1.png" type="image/x-icon">
    <link href="Admin/fontawesome-free-5.12.1-web/css/all.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="plugins/bootstrap/css/bootstrap.css" rel="stylesheet" />
    <style type="text/css">
        @media (min-width: 768px) {
            .modal-dialog {
                width: 400px;
                margin: 30px auto;
            }

            .modal-content {
                -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            }

            .modal-sm {
                width: 300px;
            }
        }
    </style>
</head>

<body class="login-page">
    <div class="login-box">
        <div class="logo">
            <%--<a href="javascript:">Genius Educational Consultancy</a>--%>
            <%--<small>Admin BootStrap Based - Material Design</small>--%>
        </div>
        
        <div class="card">
            <div class="body">
                <form id="sign_in" runat="server">
                    <div class="msg">
                        <img src="Admin/images/college-chalo.png" class="img-responsive" />
                    </div>
                    <div class="alert alert-danger text-center" style="display: none"></div>
                    <div id="tdlogin">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-user"></i>
                            </span>
                            <div class="form-line">
                                <asp:TextBox ID="txtusername" CssClass="form-control" runat="server" autocomplete="off" placeholder="User ID" autofocus></asp:TextBox>
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-lock"></i>
                            </span>
                            <div class="form-line">
                                <asp:TextBox ID="txt_pwd" TextMode="Password" runat="server" CssClass="form-control" autocomplete="off" placeholder="Password"></asp:TextBox>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1 p-t-5 pull-right">
                                <a href="javascript:" data-toggle="modal" data-target="#myModal">Forgot Password?</a>
                            </div>
                            <div class="col-xs-4 col-md-offset-1 col-xs-offset-1" style="margin-left:22px;">
                                <asp:Button ID="btnauthenticate" runat="server" Text="Login" CssClass="btn btn-block bg-pink waves-effect" />
                            </div>
                        </div>
                    </div>

                    <div id="tdadminotp" style="display: none">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-key"></i>
                            </span>
                            <div class="form-line">
                                <asp:TextBox ID="txtadminotp" runat="server" CssClass="form-control" autocomplete="off" TabIndex="1" placeholder="Enter OTP and Click on Validate OTP"></asp:TextBox>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-xs-6">
                                <asp:Button ID="btnadminotp" runat="server" TabIndex="2" Text="Validate OTP" CssClass="btn btn-block bg-pink waves-effect" />
                            </div>
                            <div class="col-xs-4 pull-right">
                                <a href="javascript:" id="btnresendotp">Resend OTP</a>
                            </div>
                        </div>
                    </div>

                    <div id="tdotp" style="display: none">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-key"></i>
                            </span>
                            <div class="form-line">
                                <asp:TextBox ID="txt_mobotp" runat="server" CssClass="form-control" autocomplete="off" placeholder="Enter OTP and Click on Validate OTP" onkeypress="return searchKeyPress(event);"></asp:TextBox>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-xs-6 pull-right">
                                <a href="javascript:" id="btnuserresendotp">Resend OTP</a>
                            </div>
                            <div class="col-xs-4">
                                <asp:Button ID="btnmobnext" runat="server" Text="Validate OTP" CssClass="btn btn-block bg-pink waves-effect" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">FORGOT PASSWORD</h4>
                </div>
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="card">
                                <div class="body">
                                    <div class="warning alert-danger" style="padding: 5px; color: #fff; display: none; margin-bottom: 5px; border-radius: 5px;"></div>
                                    <div id="tdformotp">
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-user"></i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" id="txtusernm" class="form-control" autocomplete="off" placeholder="User Name" autofocus />
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-phone"></i>
                                            </span>
                                            <div class="form-line">
                                                <input type="number" id="txtmobno" class="form-control" autocomplete="off" placeholder="Mobile No" />
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-md-0 col-xs-0 col-xs-offset-1 col-sm-3 col-md-offset-1">
                                                <a href="javascript:" class="btn btn-primary" id="btnforgot">Send OTP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tdforgototp" style="display: none">
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-key"></i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" id="txtforgototp" autocomplete="off" placeholder="OTP" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-5 col-md-offset-1 col-xs-offset-1 col-xs-5">
                                                <a id="btnforgototp" class="btn btn-block bg-pink waves-effect">Validate OTP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tdforgotadminotp" style="display: none">
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="fa fa-key"></i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" id="txtforgotadminotp" autocomplete="off" placeholder="OTP" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-5 col-md-offset-1 col-xs-offset-1 col-xs-5">
                                                <a id="btnforgotadminotp" class="btn btn-block bg-pink waves-effect">Validate OTP</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="plugins/jquery/jquery.min.js"></script>
    <script src="js/Vaidate.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.js"></script>
</body>
</html>
