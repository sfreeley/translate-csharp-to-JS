using System;
using System.Collections.Generic;
using System.Runtime;

namespace csharp
{
    class Program
    {
        static List<int> indicies = new List<int>();
        static void Main(string[] args)
        {
            var insults = GetInsults();
            getRandomIndex(insults);
        }

        static void getRandomIndex(List<string> insultsArray)
        {

            while (indicies.Count < 3)
            {
                //randomizer does not include max number;
                int randomIndex = new Random().Next(0, insultsArray.Count);
                if (!indicies.Contains(randomIndex))
                {
                    indicies.Add(randomIndex);
                }

            };

            for (int i = 0; i < indicies.Count; i++)
            {
                Console.WriteLine(insultsArray[indicies[i]]);
            }

        }

        static List<string> GetInsults()
        {
            List<string> insults = new List<string>()
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            return insults;

        }
    }
}