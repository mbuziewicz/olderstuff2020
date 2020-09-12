using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using dbtest.Data;
using dbtest.Models;

namespace dbtest.Pages.Students
{
    public class DetailsModel : PageModel
    {
        private readonly dbtest.Data.ApplicationDbContext _context;

        public DetailsModel(dbtest.Data.ApplicationDbContext context)
        {
            _context = context;
        }


        [BindProperty]
        public Student Student { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Student = await _context.Student
                                .Include(s => s.Enrollments)
                                    .ThenInclude(e => e.Course)
                                .AsNoTracking()
                                .FirstOrDefaultAsync(m => m.ID == id);

            if (Student == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
