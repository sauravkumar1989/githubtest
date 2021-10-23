<%@ Page Title=":: Cashbook ::" Language="C#" MasterPageFile="~/Admin/admin_master.master" AutoEventWireup="true" CodeFile="cash_book.aspx.cs" Inherits="Admin_cash_book" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="col-md-12 col-xs-12 cnt">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">
                    <b>Cash Book</b></h3>
                <div class="pull-right">
                    <asp:Button ID="btn_export" runat="server" Text="Export To Excel" CssClass="btn btn-success" OnClick="btn_export_Click" />
                </div>
            </div>
            <div class="box-body">
                <div class="col-md-2">
                    <div class="form-group">
                        <b>From Date:</b>
                        <asp:TextBox ID="txt_from_dt" CssClass="form-control" runat="server" placeholder="dd-MM-yyyy"></asp:TextBox>
                        <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txt_from_dt" Format="dd-MM-yyyy"></cc1:CalendarExtender>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <b>To Date:</b>
                        <asp:TextBox ID="txt_to_dt" runat="server" CssClass="form-control" OnTextChanged="txt_to_dt_TextChanged" placeholder="dd-MM-yyyy" AutoPostBack="true"></asp:TextBox>
                        <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txt_to_dt" Format="dd-MM-yyyy"></cc1:CalendarExtender>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <b>Search For:</b>
                        <asp:RadioButtonList ID="rdosearch" runat="server" RepeatDirection="Horizontal" CssClass="form-control">
                            <asp:ListItem Value="1">Group By</asp:ListItem>
                            <asp:ListItem Value="2">Without Group</asp:ListItem>
                        </asp:RadioButtonList>
                    </div>
                </div>
                <div class="col-md-3" id="divgroup" runat="server" visible="false">
                    <div class="form-group">
                        <b>Group By:</b>
                        <asp:DropDownList ID="ddlgroup" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>
                <div class="col-md-2" id="divwithout" runat="server" visible="false">
                    <div class="form-group">
                        <b>Without Group:</b>
                        <asp:DropDownList ID="ddlwithout" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>
                <table class="table">
                    <tr style="background-color: #c3c388;">
                        <td colspan="2">
                            <b>Total Cost</b><br />
                            <asp:TextBox ID="txt_total" runat="server" CssClass="form-control" Enabled="false"></asp:TextBox>
                        </td>
                        <td>
                            <b>Total Receive</b><br />
                            <asp:TextBox ID="txt_recev" runat="server" CssClass="form-control" Enabled="false"></asp:TextBox>
                        </td>
                        <td>
                            <b>Total Dues</b><br />
                            <asp:TextBox ID="txt_due" runat="server" CssClass="form-control" Enabled="false"></asp:TextBox>
                        </td>
                        <td colspan="2">
                            <b>Total Discount</b><br />
                            <asp:TextBox ID="txt_dis" runat="server" CssClass="form-control" Enabled="false"></asp:TextBox>
                        </td>
                    </tr>
                </table>
                <div class="col-md-12 col-xs-12">
                    <asp:GridView ID="Gridview1" CssClass="table" runat="server" AutoGenerateColumns="False" ShowFooter="true" EmptyDataText="NO RECORD FOUND" OnRowDataBound="Gridview1_RowDataBound">
                        <Columns>
                            <asp:TemplateField HeaderText="S No">
                                <ItemTemplate>
                                    <%# Container.DisplayIndex + 1%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Patient Id">
                                <ItemTemplate>
                                    <%#Eval("patient_id")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Total Cost">
                                <ItemTemplate>
                                    <asp:Label ID="lblcost" runat="server" Text='<%#Eval("total_cost")%>'></asp:Label>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <asp:Label ID="lbl_cost" runat="server"></asp:Label>
                                </FooterTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Total receive">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_paid_amt" runat="server" Text='<%#Eval("paid_amt")%>'></asp:Label>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <asp:Label ID="lblpaid_amt" runat="server"></asp:Label>
                                </FooterTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Dues">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_dues" runat="server" Text='<%#Eval("dues")%>'></asp:Label>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <asp:Label ID="lbldues" runat="server"></asp:Label>
                                </FooterTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Discount">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_discount" runat="server" Text='<%#Eval("discount")%>'></asp:Label>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <asp:Label ID="lbldiscount" runat="server"></asp:Label>
                                </FooterTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Discount By">
                                <ItemTemplate>
                                    <%#Eval("discount_by")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Submitted By">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_submittedby" runat="server" Text='<%#Eval("submitted_by")%>'></asp:Label>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Received Date">
                                <ItemTemplate>
                                    <%#Eval("receive_dt","{0:dd-MM-yyyy}")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Receive">
                                <ItemTemplate>
                                    <%#Eval("receive")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                        <EmptyDataTemplate>
                            <div style="color: black; height: auto; width: 100%; padding: 5px; background: #fcd1d1; border: solid 1px #fc5151; text-align: center;">
                                <b>No Record Found.</b>
                            </div>
                        </EmptyDataTemplate>
                        <RowStyle Height="25px" ForeColor="#003399" BackColor="White" HorizontalAlign="Center" />
                        <SelectedRowStyle BackColor="#009999" ForeColor="#CCFF99" HorizontalAlign="Center" />
                        <HeaderStyle Height="30px" BackColor="#0187BC" Font-Bold="True" ForeColor="White" />
                        <FooterStyle BackColor="#FFFFFF" ForeColor="#003399" />
                        <PagerStyle BackColor="#FFFFCC" ForeColor="#330099" HorizontalAlign="Center" />
                    </asp:GridView>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

