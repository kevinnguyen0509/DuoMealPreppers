using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MealPreppers.Models
{
    public class RecipeItem 
    {
        public int ID { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string ingredients { get; set; }
        public string instructions { get; set; }
        public int prepTime { get; set; }
        public int servings { get; set; }
        public int calories { get; set; }
        public string imageURL { get; set; }

        
    }
}