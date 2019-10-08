using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using NPT_DC_App.LINQs;
namespace NPT_DC_App.Controllers
{
    public static class Controller_Ads
    {
        public static string GetAllAds()
        {

            LINQ_AdsDataContext dc = new LINQ_AdsDataContext();
            List<SYS_Ads> ads_list = (from c in dc.SYS_Ads select c).ToList();
            string return_str = new JavaScriptSerializer().Serialize(ads_list);
            return return_str;
        }

        public static string SaveAds(string id, string name)
        {
            try
            {

                LINQ_AdsDataContext dc = new LINQ_AdsDataContext();
                SYS_Ads the_record = new SYS_Ads();
                the_record = (from c in dc.SYS_Ads where c.id == id select c).FirstOrDefault();
                if (the_record != null)
                {
                    {
                        the_record.id = id;
                        the_record.name = name;
                    };

                } else
                {
                    the_record = new SYS_Ads()
                    {
                        id = id,
                        name = name
                    };
                    dc.SYS_Ads.InsertOnSubmit(the_record);
                }
                dc.SubmitChanges();
                return "Success";
            }
            catch (Exception ex)
            {
                return "Error~" + ex.Message;
            }
            return "";
        }

        public static SYS_Ads GetAdsByID(string id)
        {
            LINQ_AdsDataContext dc = new LINQ_AdsDataContext();
            return (from c in dc.SYS_Ads where c.id == id select c).FirstOrDefault();
        }

        public static string DeleteAds(string id, string name)
        {
            try
            {
                //Security Check

                LINQ_AdsDataContext dc = new LINQ_AdsDataContext();
                SYS_Ads the_record = (from c in dc.SYS_Ads where c.id == id select c).FirstOrDefault();
                if (the_record == null)
                    return "Error~We can't find";
                dc.SYS_Ads.DeleteOnSubmit(the_record);
                dc.SubmitChanges();
                return "Success~";
            }
            catch (ChangeConflictException ex)
            {
                return "Success~";
            }
        }
    }
}