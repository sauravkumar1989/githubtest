using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Net;
public partial class api : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            sendsms();
    }
    public void sendsms()
    {
        HttpWebRequest myReq = (HttpWebRequest)WebRequest.Create("http://88.99.193.37/http-credit.php?username=application&password=password&route_id=1");
        HttpWebResponse myResp = (HttpWebResponse)myReq.GetResponse();
        StreamReader respStreamReader = new StreamReader(myResp.GetResponseStream());
        string responseString = respStreamReader.ReadToEnd();
        Label1.Text = responseString;
        respStreamReader.Close();
        myResp.Close();
    }
}