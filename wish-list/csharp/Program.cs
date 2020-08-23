using System;
//<List> class is a part of this namespace 
using System.Collections.Generic;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            //scope-allWishes variable only valid in GetWishList() method
            //invoking MyWishes method and passing in returned allWishes array
            MyWishes(GetWishList());
        }

        //method which returns the array allWishes
        //static means can call that method on the class directly
        static List<string> GetWishList()
        {
            List<string> allWishes = new List<string>()
            {
                "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'",
                "The ability to think of interesting wishes on short notice",
                "A washtub of Skittles",
                "World peace, but not the kind of world peace where all the humans are removed from existence",
                "A TV that is NOT internet-capable",
                "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
            };

            return allWishes;
        }

        //method which takes the allWishes array and iterates through it to display each wish
        static void MyWishes(List<string> allWishes)
        {
            Console.WriteLine("My wishes...");
            foreach (string wish in allWishes)
            {
                Console.WriteLine(wish);
            }
        }

    }
}