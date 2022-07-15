using MealPreppers.DataFactory;
using MealPreppers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MealPreppers.Controllers
{
    public class HomeController : Controller
    {
        SaveRecipe saveRecipe = new SaveRecipe();

        public string MyProfilePath = "~/Views/Home/MyProfile/Myprofile.cshtml";
        public string LoginPath = "~/Views/Home/Login/Login.cshtml";
        public string IndexPath = "~/Views/Home/Index/Index.cshtml";
        public string DiscoverPath = "~/Views/Home/Discover/Discover.cshtml";
        public string FeedPath = "~/Views/Home/Feed/Feed.cshtml";
        public ActionResult Index()
        {
            return View(IndexPath);
        }

        public ActionResult MyProfile()
        {
            ViewBag.Message = "Your application description page.";

            return View(MyProfilePath);
        }
        public ActionResult Feed()
        {
            ViewBag.Message = "Your application description page.";

            return View(FeedPath);
        }

        public ActionResult Discover()
        {
            ViewBag.Message = "Your contact page.";

            return View(DiscoverPath);
        }

        public ActionResult Login()
        {
            return View(LoginPath);
        }

        //public ActionResult AddRecipe(string title, string description, string ingredients, string instructions, int prepTime, int servings, int calories, string imageURL)
        //{
        //    AddRecipe addRecipe = new AddRecipe();
        //    addRecipe.title = title;
        //    addRecipe.description = description;
        //    addRecipe.ingredients = ingredients;
        //    addRecipe.instructions = instructions;
        //    addRecipe.prepTime = prepTime;
        //    addRecipe.servings = servings;
        //    addRecipe.calories = calories;
        //    addRecipe.imageURL = imageURL;
           

            
        //    return View(IndexPath);
        //}

        public ActionResult AddRecipe(AddRecipe addRecipe)
        {


            saveRecipe.SaveNewRecipe(addRecipe);

            return View(IndexPath);
        }



    }
}