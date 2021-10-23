using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Net;

public partial class demo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string dt = DateTime.Now.AddHours(12.5).ToString("MM/dd/yyyy");
            lblproduct.Text = dt;
            if (HttpContext.Current.Request.Cookies["adminotp"] != null)
            {
                HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["adminotp"];
                Label1.Text = HttpContext.Current.Request.Cookies["adminotp"].Value.ToString();
            }
            //char[] sep = { '.' };
            //string x = "10001.00";
            //string[] sArrProdID = x.Split(sep);
            //string var = sArrProdID[0];
            //int a = var.Length - 2;
            //lblproduct.Text = var.Substring(0, a);
            // To find IP address of a machine behind LAN you can use this code
            //string strHostName = Dns.GetHostName();
            //IPHostEntry ipEntry = Dns.GetHostEntry(strHostName);
            //lblproduct.Text = Convert.ToString(ipEntry.AddressList[1]);
        }
    }
    protected string GetIPAddress()
    {
        System.Web.HttpContext context = System.Web.HttpContext.Current;
        string ipAddress = context.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

        if (!string.IsNullOrEmpty(ipAddress))
        {
            string[] addresses = ipAddress.Split(',');
            if (addresses.Length != 0)
            {
                return addresses[0];
            }
        }
        return context.Request.ServerVariables["REMOTE_ADDR"];
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (HttpContext.Current.Request.Cookies["adminotp"] != null)
        {
            HttpCookie oCookie = (HttpCookie)HttpContext.Current.Request.Cookies["adminotp"];
            oCookie.Expires = DateTime.Now.AddSeconds(1);
            HttpContext.Current.Response.Cookies.Add(oCookie);
        }
    }
}