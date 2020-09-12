using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using dbtest.Models;
using dbtest.Data;

namespace dbtest.Pages.Students
{
    public class IndexModel : PageModel
    {
        private readonly dbtest.Data.ApplicationDbContext _context;

        public IndexModel(dbtest.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Student> Student { get;set; }

        public async Task OnGetAsync()
        {
            Student = await _context.Student.ToListAsync();
        }
    }
}
