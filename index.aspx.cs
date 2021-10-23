using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.IO;
using System.Net;
using System.Globalization;
using System.Threading;
public partial class Admin_index : System.Web.UI.Page
{
    
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [WebMethod]
    public static string adminlogin(string loginid, string pwd)
    {
        DateTime dt = DateTime.ParseExact(DateTime.Now.AddHours(12.5).ToString("dd-MM-yyyy"), "dd-MM-yyyy", CultureInfo.InvariantCulture);
        string SmsUserName = string.Empty;
        string SmsPwd = string.Empty;
        string SenderId = string.Empty;
        
        DataTable dtlogo = new DataTable();
        dtlogo = BL.GetData(@"Select SmsUserName,SmsPwd,SenderId from AdminLogin where UserName='" + loginid.Trim() + "'");
        if (dtlogo.Rows.Count > 0)
        {
            SmsUserName = dtlogo.Rows[0]["SmsUserName"].ToString();
            SmsPwd = dtlogo.Rows[0]["SmsPwd"].ToString();
            SenderId = dtlogo.Rows[0]["SenderId"].ToString();
        }
        string LoginFrom = "";
        string LoginUpto = "";
        string mobile = "";
        string AdmMobile = "";
        //string rv = "";
        DataSet ds = new DataSet();
        ds = Message.ValidateAdminlogin(loginid.Trim(), pwd.Trim());
        if (ds.Tables[0].Rows.Count > 0)
        {
            string AdminId = string.Empty;
            AdminId = loginid.Trim();
            AdmMobile = ds.Tables[0].Rows[0]["Mobile"].ToString();
            if (HttpContext.Current.Request.Cookies["admin"] == null)
            {
                HttpCookie cookie = new HttpCookie("admin");
                cookie.Value = loginid.Trim();
                HttpContext.Current.Response.Cookies["admin"].Expires = DateTime.Now.AddDays(1);
                HttpContext.Current.Response.Cookies.Add(cookie);
            }
            Message.addLoginMaster(AdminId.Trim(), loginid.Trim(), "", dt);
            //Random r = new Random(DateTime.Now.Millisecond);
            //rv = r.Next(1000, 9999).ToString();
            //string message = "Your Login OTP is " + rv + " from Enquiry Management";
            //HttpCookie otpcookie = new HttpCookie("adminotp");
            //otpcookie.Value = rv;
            //HttpContext.Current.Response.Cookies.Add(otpcookie);
            //============ SEND OTP ==============//
            //Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), AdmMobile, message);
            //============ SEND OTP ==============//
            return "1";
        }
        ds.Clear();
        ds = Message.ValidateUser(loginid.Trim(), pwd.Trim());
        if (ds.Tables[0].Rows.Count > 0)
        {
            string AdminId = string.Empty;
            DataTable dtadminid = new DataTable();
            dtadminid = BL.GetData(@"Select AdminId from UserMaster where UserId='" + loginid.Trim() + "'");
            if (dtadminid.Rows.Count > 0)
            {
                AdminId = dtadminid.Rows[0]["AdminId"].ToString();
            }
            Message.addLoginMaster(AdminId.Trim(), loginid.Trim(), "", dt);

            mobile = ds.Tables[0].Rows[0]["Mobile"].ToString();
            LoginFrom = ds.Tables[0].Rows[0]["LoginFrom"].ToString();
            LoginUpto = ds.Tables[0].Rows[0]["LoginUpto"].ToString();
            if (!string.IsNullOrEmpty(LoginFrom) && !string.IsNullOrEmpty(LoginUpto))
            {
                TimeSpan date1 = DateTime.Now.AddHours(12.5).TimeOfDay;
                //TimeSpan date1 = DateTime.Now.TimeOfDay;
                TimeSpan t2 = TimeSpan.Parse(LoginFrom);
                TimeSpan t3 = TimeSpan.Parse(LoginUpto);
                if (date1 >= t2 && date1 <= t3)
                {
                    if (HttpContext.Current.Request.Cookies["user"] == null)
                    {
                        HttpCookie cookie = new HttpCookie("user");
                        cookie.Value = loginid.Trim();
                        HttpContext.Current.Response.Cookies.Add(cookie);
                    }
                    //Random r = new Random(DateTime.Now.Millisecond);
                    //rv = r.Next(1000, 9999).ToString();
                    //string message = "Your Login OTP is " + rv + " from Enquiry Management";
                    //HttpCookie otpcookie = new HttpCookie("otp");
                    //otpcookie.Value = rv;
                    //HttpContext.Current.Response.Cookies.Add(otpcookie);

                    //============ SEND OTP ==============//
                    //Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), mobile, message);
                    //============ SEND OTP ==============//
                    return "2";
                }
                else
                {
                    return "3";
                }
            }
            else
            {
                return "0";
            }
        }
        else
        {
            return "0";
        }
    }
    [WebMethod]
    public static int verifymobileotp(string mobotp)
    {
        Thread.Sleep(1000);
        string user = string.Empty;
        string receive = string.Empty;
        string AdminId = string.Empty;
        DateTime dt = DateTime.ParseExact(DateTime.Now.AddHours(12.5).ToString("dd-MM-yyyy"), "dd-MM-yyyy", CultureInfo.InvariantCulture);
        if (HttpContext.Current.Request.Cookies["user"] != null)
        {
            user = HttpContext.Current.Request.Cookies["user"].Value.ToString();
        }
        DataTable dtadminid = new DataTable();
        dtadminid = BL.GetData(@"Select AdminId from UserMaster where UserId='" + user.Trim() + "'");
        if (dtadminid.Rows.Count > 0)
        {
            AdminId = dtadminid.Rows[0]["AdminId"].ToString();
        }
        if (HttpContext.Current.Request.Cookies["otp"] != null)
        {
            HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["otp"];
            receive = HttpContext.Current.Request.Cookies["otp"].Value.ToString();
        }
        if (receive.Trim() == mobotp.Trim())
        {
            Message.addLoginMaster(AdminId.Trim(), user, "", dt);
            return 1;
        }
        else
        {
            return 0;
        }
    }
    [WebMethod]
    public static int verifymobileadminotp(string mobotp)
    {
        Thread.Sleep(2000);
        string user = string.Empty;
        string receive = string.Empty;
        string adminId = string.Empty;
        DateTime dt = DateTime.ParseExact(DateTime.Now.AddHours(12.5).ToString("dd-MM-yyyy"), "dd-MM-yyyy", CultureInfo.InvariantCulture);
        if (HttpContext.Current.Request.Cookies["admin"] != null)
        {
            user = HttpContext.Current.Request.Cookies["admin"].Value.ToString();
        }
        DataTable dtadminid = new DataTable();
        dtadminid = BL.GetData(@"Select AdminId from UserMaster where UserId='" + user.Trim() + "'");
        if (dtadminid.Rows.Count > 0)
        {
            adminId = dtadminid.Rows[0]["AdminId"].ToString();
        }
        if (HttpContext.Current.Request.Cookies["adminotp"] != null)
        {
            HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["adminotp"];
            receive = HttpContext.Current.Request.Cookies["adminotp"].Value.ToString();
        }
        if (receive.Trim() == mobotp.Trim())
        {
            Message.addLoginMaster(adminId.Trim(), user, "", dt);
            return 1;
        }
        else
        {
            return 0;
        }
    }
    [WebMethod]
    public static int forgotpwd(string loginid, string mob)
    {
        string SmsUserName = string.Empty;
        string SmsPwd = string.Empty;
        string SenderId = string.Empty;
        DataTable dtlogo = new DataTable();
        dtlogo = BL.GetData(@"Select SmsUserName,SmsPwd,SenderId from AdminLogin where UserName='" + loginid.Trim() + "'");
        if (dtlogo.Rows.Count > 0)
        {
            SmsUserName = dtlogo.Rows[0]["SmsUserName"].ToString();
            SmsPwd = dtlogo.Rows[0]["SmsPwd"].ToString();
            SenderId = dtlogo.Rows[0]["SenderId"].ToString();
        }
        string rv = string.Empty;
        DataSet ds = new DataSet();
        ds = Message.ValidateUserCredential(loginid, mob);
        if (ds.Tables[0].Rows.Count > 0)
        {
            Random r = new Random(DateTime.Now.Millisecond);
            rv = r.Next(1000, 9999).ToString();
            string message = "Your Forgot Password OTP is " + rv;
            HttpCookie otpcookie = new HttpCookie("forgototp");
            otpcookie.Value = rv;
            HttpContext.Current.Response.Cookies.Add(otpcookie);
            Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), mob, message);
            return 1;
        }
        ds.Clear();
        ds = Message.ValidateAdminCredential(loginid, mob);
        if (ds.Tables[0].Rows.Count > 0)
        {
            Random r = new Random(DateTime.Now.Millisecond);
            rv = r.Next(1000, 9999).ToString();
            string message = "Your Forgot Password OTP is " + rv;
            HttpCookie otpcookie = new HttpCookie("adminforgototp");
            otpcookie.Value = rv;
            HttpContext.Current.Response.Cookies.Add(otpcookie);
            Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), mob, message);
            return 2;
        }
        else { return 0; }
    }
    [WebMethod]
    public static int verifymobileforgototp(string mobileotp, string usernm, string mobileno)
    {
        string SmsUserName = string.Empty;
        string SmsPwd = string.Empty;
        string SenderId = string.Empty;
        DataTable dtlogo = new DataTable();
        dtlogo = BL.GetData(@"Select SmsUserName,SmsPwd,SenderId from AdminLogin where UserName='" + usernm.Trim() + "'");
        if (dtlogo.Rows.Count > 0)
        {
            SmsUserName = dtlogo.Rows[0]["SmsUserName"].ToString();
            SmsPwd = dtlogo.Rows[0]["SmsPwd"].ToString();
            SenderId = dtlogo.Rows[0]["SenderId"].ToString();
        }
        string message = string.Empty;
        string pwd = string.Empty;
        string receive = "";
        if (HttpContext.Current.Request.Cookies["forgototp"] != null)
        {
            HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["forgototp"];
            receive = HttpContext.Current.Request.Cookies["forgototp"].Value.ToString();
        }
        if (receive.Trim() == mobileotp.Trim())
        {
            string sql = @"Select Pwd from UserMaster where UserId='" + usernm.Trim() + "'";
            DataTable dt = new DataTable();
            dt = BL.GetData(sql);
            if (dt.Rows.Count > 0)
            {
                pwd = dt.Rows[0]["Pwd"].ToString();
                message = "Your Login Password for is " + pwd;
                Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), mobileno, message);
            }
            return 1;
        }
        else
        {
            return 0;
        }
    }
    [WebMethod]
    public static int verifymobileadminforgototp(string mobileotp, string usernm, string mobileno)
    {
        string SmsUserName = string.Empty;
        string SmsPwd = string.Empty;
        string SenderId = string.Empty;
        DataTable dtlogo = new DataTable();
        dtlogo = BL.GetData(@"Select SmsUserName,SmsPwd,SenderId from AdminLogin where UserName='" + usernm.Trim() + "'");
        if (dtlogo.Rows.Count > 0)
        {
            SmsUserName = dtlogo.Rows[0]["SmsUserName"].ToString();
            SmsPwd = dtlogo.Rows[0]["SmsPwd"].ToString();
            SenderId = dtlogo.Rows[0]["SenderId"].ToString();
        }
        string message = string.Empty;
        string pwd = string.Empty;
        string receive = "";
        if (HttpContext.Current.Request.Cookies["adminforgototp"] != null)
        {
            HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["adminforgototp"];
            receive = HttpContext.Current.Request.Cookies["adminforgototp"].Value.ToString();
        }
        if (receive.Trim() == mobileotp.Trim())
        {
            string sql = @"Select Pwd from Adminlogin where UserName='" + usernm.Trim() + "'";
            DataTable dt = new DataTable();
            dt = BL.GetData(sql);
            if (dt.Rows.Count > 0)
            {
                pwd = dt.Rows[0]["Pwd"].ToString();
                message = "Your Login Password is " + pwd;
                Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), mobileno, message);
            }
            return 1;
        }
        else
        {
            return 0;
        }
    }
    [WebMethod]
    public static int resendotp(string username, string pwd)
    {
        Thread.Sleep(2000);
        string SmsUserName = string.Empty;
        string SmsPwd = string.Empty;
        string SenderId = string.Empty;
        DataTable dtlogo = new DataTable();
        dtlogo = BL.GetData(@"Select SmsUserName,SmsPwd,SenderId from AdminLogin where UserName='" + username.Trim() + "'");
        if (dtlogo.Rows.Count > 0)
        {
            SmsUserName = dtlogo.Rows[0]["SmsUserName"].ToString();
            SmsPwd = dtlogo.Rows[0]["SmsPwd"].ToString();
            SenderId = dtlogo.Rows[0]["SenderId"].ToString();
        }
        string rv = string.Empty;
        string AdmMobile = string.Empty;
        string mobile = string.Empty;
        DataSet ds = new DataSet();
        ds = Message.ValidateAdminlogin(username.Trim(), pwd.Trim());
        if (ds.Tables[0].Rows.Count > 0)
        {
            AdmMobile = ds.Tables[0].Rows[0]["Mobile"].ToString();
            Random r = new Random(DateTime.Now.Millisecond);
            rv = r.Next(1000, 9999).ToString();
            string message = "Your Resend OTP is " + rv + "  from Enquiry Management.";
            HttpCookie otpcookie = new HttpCookie("adminotp");
            otpcookie.Value = rv;
            HttpContext.Current.Response.Cookies.Add(otpcookie);
            Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), AdmMobile, message);
            return 1;
        }
        ds.Clear();
        ds = Message.ValidateUser(username.Trim(), pwd.Trim());
        if (ds.Tables[0].Rows.Count > 0)
        {
            mobile = ds.Tables[0].Rows[0]["Mobile"].ToString();
            Random r = new Random(DateTime.Now.Millisecond);
            rv = r.Next(1000, 9999).ToString();
            string message = "Your Resend OTP is " + rv + "  from Enquiry Management.";
            HttpCookie otpcookie = new HttpCookie("otp");
            otpcookie.Value = rv;
            HttpContext.Current.Response.Cookies.Add(otpcookie);
            Message.sendsms(SmsUserName.Trim(), SmsPwd.Trim(), SenderId.Trim(), AdmMobile, message);
            return 2;
        }
        else
        {
            return 0;
        }
    }
}