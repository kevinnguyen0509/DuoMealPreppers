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
        GetAllRecipes GetAllRecipes = new GetAllRecipes();

        public string MyProfilePath = "~/Views/Home/MyProfile/Myprofile.cshtml";
        public string LoginPath = "~/Views/Home/Login/Login.cshtml";
        public string IndexPath = "~/Views/Home/Index/Index.cshtml";
        public string DiscoverPath = "~/Views/Home/Discover/Discover.cshtml";
        public string FeedPath = "~/Views/Home/Feed/Feed.cshtml";
        public string GridPartial = "~/Views/Home/Index/Middle/_GridView.cshtml";
        Random rnd = new Random();

        public ActionResult Index()
        {
           
            List<RecipeItem> recipeList = GetAllRecipes.GrabRecipeList();


            return View(IndexPath, recipeList);
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


            List<RecipeItem> recipeList = GetAllRecipes.GrabRecipeList();
            

            return View(DiscoverPath,recipeList);
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

        public JsonResult AddRecipe(RecipeItem addRecipe)
        {

            ResultMessage message = saveRecipe.SaveNewRecipe(addRecipe);

            

            return Json(message);

        }

       


    }
}