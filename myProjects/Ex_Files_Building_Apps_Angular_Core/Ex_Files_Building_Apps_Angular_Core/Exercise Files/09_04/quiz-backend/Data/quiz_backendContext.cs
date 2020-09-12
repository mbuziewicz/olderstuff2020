using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Models
{
    public class quiz_backendContext : DbContext
    {
        public quiz_backendContext (DbContextOptions<quiz_backendContext> options)
            : base(options)
        {
        }

        public DbSet<quiz_backend.Models.Question> Question { get; set; }
    }
}
