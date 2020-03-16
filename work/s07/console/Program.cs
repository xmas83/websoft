using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic ;

namespace console
{
    class Program
    {
        public class Account
        {
            public int Number { get; set; }
            public int Balance { get; set; }
            public string Label { get; set; }
            public string Owner { get; set; }
            
            public override string ToString() {
                return JsonSerializer.Serialize<Account>(this);
            }
        }
        static IEnumerable<Account> ReadAccounts()
        {
            String file = "./data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
            }
        }
        static void Main(string[] args)
        {
            /* Create a menu driven console application with the menu choices.
            The user should select what to do and the application should close when the user selects "Exit" from the menu.
            The choice "View accounts" should load the accounts from the JSON file and print out a pretty formatted text table with a header and details of all accounts.
            The choice "View account by number" should ask the user for an id and show the account that matches that id. */
            var accounts = ReadAccounts();
            string option = null;
            do{
                Console.WriteLine("\n\n---------------------- MENU ------------------\n");
                Console.WriteLine("1 ==> View accounts");
                Console.WriteLine("2 ==> View account by number");
                Console.WriteLine("3 ==> Exit App\n\n");
                Console.Write("Choose an option: ");
                option = Console.ReadLine();
                switch(option){
                    case "1":
                        Console.WriteLine("+----------+----------+----------+----------+");
                        Console.WriteLine("|  Number  |  Balance |   Label  |   Owner  |");
                        Console.WriteLine("+----------+----------+----------+----------+");
                        foreach (var account in accounts) {
                            string str = $"|   {account.Number} |       {account.Balance} | {account.Label}   |      {account.Owner}  |";
                            Console.WriteLine(str);
                            Console.WriteLine("+----------+----------+----------+----------+");
                        }
                        Console.WriteLine("\n");
                    break;
                    case "2":
                        Console.Write("Enter your Id: ");
                        string id = Console.ReadLine();
                        Console.WriteLine("+----------+----------+----------+----------+");
                        Console.WriteLine("|  Number  |  Balnace |   Label  |   Owner  |");
                        Console.WriteLine("+----------+----------+----------+----------+");
                        foreach (var account in accounts) {
                            if(account.Owner.Equals(id)){
                                string str = $"|   {account.Number} |       {account.Balance} | {account.Label}   |      {account.Owner}  |";
                                Console.WriteLine(str);
                                Console.WriteLine("+----------+----------+----------+----------+");
                            }
                        }
                        Console.WriteLine("\n");
                    break;
                    case "3":
                    System.Environment.Exit(1);
                    break;
                }

            }while(!option.Equals("3"));                   
        }
    }
}
