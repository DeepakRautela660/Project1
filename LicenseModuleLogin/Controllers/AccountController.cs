using LicenseModuleLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using LicenseModuleLogin.DbLayer;

namespace LicenseModuleLogin.Controllers
{
    public class AccountController : Controller
    {
        
        // GET: Account
        public ActionResult index()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }
        
        public JsonResult userLogin(Account ac)
        {
            DataAccess db = new DataAccess();
            string list = Convert.ToString(db.userLogin(ac));
            if (list == "1")
            {
                Session["user"] = ac.Name;

            }
            else
            {
                list = "Email or Password is wrong";

            }
            return Json(list, JsonRequestBehavior.AllowGet);
           // return View();
        }

        public ActionResult Logout()
        {
            return View();
        }

        
    }
}