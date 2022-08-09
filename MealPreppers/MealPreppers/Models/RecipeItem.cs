﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MealPreppers.Models
{
    public class RecipeItem : ResultMessage
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


        private List<RecipeItem> Shuffle(List<RecipeItem> recipeItemsList)
        {
            Random tinderShuffle = new Random();
            int n = recipeItemsList.Count;
            while (n > 1)
            {
                n--;
                int ts = tinderShuffle.Next(n + 1);
                RecipeItem listValue = recipeItemsList[ts];
                recipeItemsList[ts] = recipeItemsList[n];
                recipeItemsList[n] = listValue;
            }
            return recipeItemsList;
        }
    }
    
}