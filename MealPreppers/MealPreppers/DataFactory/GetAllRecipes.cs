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
        public List<RecipeItem> GrabRecipeList(RecipeItem recipeItem)
        {

            List<RecipeItem> recipeList = new List<RecipeItem>();
            SqlConnection SQLConn = new SqlConnection();
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["Meal_Preppers_Connections"].ConnectionString;
            SQLConn.Open();
            SqlCommand SQLComm = new SqlCommand("[sas].[GetAllMeals]", SQLConn);
            SqlDataReader SQLRec;
            SQLComm.CommandType = CommandType.StoredProcedure;

            try
            {

                



                SQLRec = SQLComm.ExecuteReader();



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
                    title = "Oops, something went wrong!" + e.Message,
                    description = "Failed"
                });

            }
            finally
            {
                SQLConn.Close();
            }

            return recipeList;
        }
    }
}