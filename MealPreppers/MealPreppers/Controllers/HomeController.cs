using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MealPreppers.Controllers
{
    public class HomeController : Controller
    {
        public string MyProfilePath = "~/Views/Home/MyProfile/Myprofile.cshtml";
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MyProfile()
        {
            ViewBag.Message = "Your application description page.";

            return View(MyProfilePath);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}