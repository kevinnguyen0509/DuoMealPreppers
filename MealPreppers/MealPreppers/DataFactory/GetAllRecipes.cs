using MealPreppers.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MealPreppers.DataFactory
{
    public class GetAllRecipes
    {
        public List<RecipeItem> GrabRecipeList()
        {

            List<RecipeItem> recipeList = new List<RecipeItem>();
            SqlConnection SQLConn = new SqlConnection();
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["Meal_Preppers_Connections"].ConnectionString;
            SQLConn.Open();
            SqlCommand SQLComm = new SqlCommand("[sas].[GetAllMeals]", SQLConn);
            SqlDataReader SQLRec;
            SQLComm.CommandType = CommandType.StoredProcedure;

            SQLRec = SQLComm.ExecuteReader();


            try
            {

                






                while (SQLRec.Read())
                {

                    recipeList.Add(new RecipeItem
                    {

                        ID = SQLRec.GetInt32(SQLRec.GetOrdinal("ID")),
                        title = SQLRec.GetString(SQLRec.GetOrdinal("Title")),
                        description = SQLRec.GetString(SQLRec.GetOrdinal("Description")),
                        ingredients = SQLRec.GetString(SQLRec.GetOrdinal("Ingredients")),
                        imageURL = SQLRec.GetString(SQLRec.GetOrdinal("ImageURL")),
                        instructions = SQLRec.GetString(SQLRec.GetOrdinal("Instructions")),
                        prepTime = SQLRec.GetInt32(SQLRec.GetOrdinal("PrepTime")),
                        servings = SQLRec.GetInt32(SQLRec.GetOrdinal("Servings")),
                        calories = SQLRec.GetInt32(SQLRec.GetOrdinal("Calories"))

                    });



                }
            }
            catch (Exception e)
            {

                recipeList.Add(new RecipeItem
                {
                    ID = SQLRec.GetInt32(SQLRec.GetOrdinal("ID")),
                    title = SQLRec.IsDBNull(SQLRec.GetOrdinal("title")) == true ? "NO TITLE ENTERED" : SQLRec.GetString(SQLRec.GetOrdinal("title")),
                    description = SQLRec.GetString(SQLRec.GetOrdinal("Description")),
                    ingredients = SQLRec.IsDBNull(SQLRec.GetOrdinal("Ingredients")) == true ? "NO INGREDIENTS ENTERED" : SQLRec.GetString(SQLRec.GetOrdinal("Ingredients")),
                    imageURL = SQLRec.IsDBNull(SQLRec.GetOrdinal("ImageURL")) == true ? "https://cu-rise.com/wp-content/themes/appon/assets/images/no-image/No-Image-Found-400x264.png" : SQLRec.GetString(SQLRec.GetOrdinal("ImageURL")),
                    prepTime = SQLRec.IsDBNull(SQLRec.GetOrdinal("PrepTime")) == true ? 0 : SQLRec.GetInt32(SQLRec.GetOrdinal("PrepTime")),

                    instructions = SQLRec.IsDBNull(SQLRec.GetOrdinal("Instructions")) == true ? "NO INSTRUCTIONS FOUND" : SQLRec.GetString(SQLRec.GetOrdinal("Instructions")),

                    
                    
                    servings = SQLRec.GetInt32(SQLRec.GetOrdinal("Servings")),
                    calories = SQLRec.GetInt32(SQLRec.GetOrdinal("Calories")),
                    ReturnMessage = "Oops, something went wrong!" + e.Message,
                    ReturnStatus = "Failed"
                });;
                
            }
            finally
            {
                SQLConn.Close();
            }

            return recipeList;
        }
    }
}