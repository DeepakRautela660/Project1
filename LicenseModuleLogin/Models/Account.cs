using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LicenseModuleLogin.Models
{
    public class Account
    {
        public string UserID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string  Password { get; set; }
        public string UserName { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}