using MealPreppers.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MealPreppers.DataFactory
{
    public class SaveRecipe
    {
        public ResultMessage SaveNewRecipe(RecipeItem addRecipe)
        {

            ResultMessage resultMessage = new ResultMessage();
            SqlConnection SQLConn = new SqlConnection();
            SQLConn.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["Meal_Preppers_Connections"].ConnectionString;
            SQLConn.Open();
            SqlCommand SQLComm = new SqlCommand("[sas].[addMeal]", SQLConn);
            SqlDataReader SQLRec;
            SQLComm.CommandType = CommandType.StoredProcedure;

            try
            {

                SQLComm.Parameters.AddWithValue("@Title", addRecipe.title);
                SQLComm.Parameters.AddWithValue("@Description", addRecipe.description);
                SQLComm.Parameters.AddWithValue("@Ingredients", addRecipe.ingredients);
                SQLComm.Parameters.AddWithValue("@ImageUrl", addRecipe.imageURL);
                SQLComm.Parameters.AddWithValue("@Instructions", addRecipe.instructions);
                SQLComm.Parameters.AddWithValue("@PrepTime", addRecipe.prepTime);
                SQLComm.Parameters.AddWithValue("@Servings", addRecipe.servings);
                SQLComm.Parameters.AddWithValue("@Calories", addRecipe.calories);


                SQLRec = SQLComm.ExecuteReader();

                while (SQLRec.Read())
                {
                    resultMessage.ReturnMessage = SQLRec.GetString(SQLRec.GetOrdinal("ResultMessage"));
                    resultMessage.ReturnStatus = SQLRec.GetString(SQLRec.GetOrdinal("ResultStatus"));
                    resultMessage.NewID = SQLRec.GetInt32(SQLRec.GetOrdinal("NewID"));
                }
            }
            catch (Exception e)
            {
                resultMessage.ReturnMessage = "Oops, something went wrong!" + e.Message;
                resultMessage.ReturnStatus = "Failed";
            }
            finally
            {
                SQLConn.Close();
            }

            return resultMessage;
        }
    }
}