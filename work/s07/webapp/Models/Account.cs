using System.ComponentModel.DataAnnotations;

namespace webapp.Models
{
    public class Account
    {
        [Key]
        public int Number { get; set; }
        public int Balance { get; set; }
        public string Label { get; set; }
        public string Owner { get; set; }

    }
}