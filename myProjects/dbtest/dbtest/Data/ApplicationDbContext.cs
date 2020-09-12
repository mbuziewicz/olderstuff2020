using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using dbtest.Models;

namespace dbtest.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<dbtest.Models.Course> Course { get; set; }
        public DbSet<dbtest.Models.Enrollment> Enrollment { get; set; }
        public DbSet<dbtest.Models.Student> Student { get; set; }
    }
}
