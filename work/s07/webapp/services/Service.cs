using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Newtonsoft.Json;
using webapp.Models;

namespace webapp.services
{
    public class Service
    {
        static IEnumerable<Account> ReadAccounts()
        {
            String file = "./data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );
                return json;
            }
        }
        
    }
}