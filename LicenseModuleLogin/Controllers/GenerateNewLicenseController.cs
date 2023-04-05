using LicenseModuleLogin.DbLayer;
using LicenseModuleLogin.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LicenseModuleLogin.Controllers
{
    public class GenerateNewLicenseController : Controller
    {
        // GET: GenerateNewLicense
        DataAccess db = new DataAccess();
        public ActionResult Index()
        {

            ViewBag.Products =db.ShowData();
            return View();
        }


        [HttpPost]
        public ActionResult Index(string P_ID, string ProductName)
        {
            ViewBag.Message = "Product Id: " + P_ID;
            ViewBag.Message += "\\ | Product Name: " + ProductName;
            ViewBag.Products = db.ShowData();
            return View();
        }

        //[HttpPost]
        //public ActionResult Index(string ddlProducts)
        //{
        //    DataAccess db = new DataAccess();
        //    List<Product> products = db.ShowData();
        //    if (!string.IsNullOrEmpty(ddlProducts))
        //    {
        //        Product selectedItem = products.Find(p => p.ProductName == ddlProducts);
        //        //ViewBag.Message = "ProductName: " + products.Text;
        //        //ViewBag.Message += "\\nP_ID: " + products.Value;
        //    }
        //    return View(products);
        //}



        //public ActionResult DropProduct()
        //{
            
        //    var data = db.ShowData();
        //    return View(data);
        //}

     
    }
}