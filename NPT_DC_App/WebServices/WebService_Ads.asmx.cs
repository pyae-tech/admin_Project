using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using NPT_DC_App.LINQs;
namespace NPT_DC_App.WebServices
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WebService_Ads : System.Web.Services.WebService
    {

        [WebMethod]
        public string GetAds(string RequestID)
        {
            return Controllers.Controller_Ads.GetAllAds();
        }

        [WebMethod]
        public string SaveAds(string id, string name)
        {
            return Controllers.Controller_Ads.SaveAds(id, name);
        }

        [WebMethod]
        public string DeleteAds(string id, string name)
        {
            string ret = Controllers.Controller_Ads.DeleteAds(id, name);
            return ret;
        }

        [WebMethod]
        public SYS_Ads GetAdsByID(string id)
        {
            SYS_Ads ret = new SYS_Ads();
            ret = Controllers.Controller_Ads.GetAdsByID(id);
            return ret;
        }
    }
}
