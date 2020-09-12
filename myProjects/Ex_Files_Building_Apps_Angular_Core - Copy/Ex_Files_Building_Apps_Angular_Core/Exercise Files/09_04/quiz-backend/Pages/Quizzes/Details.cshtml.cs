using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend.Pages.Quizzes
{
    public class DetailsModel : PageModel
    {
        private readonly quiz_backend.Models.quiz_backendContext _context;

        public DetailsModel(quiz_backend.Models.quiz_backendContext context)
        {
            _context = context;
        }

        public Quiz Quiz { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Quiz = await _context.Quiz.SingleOrDefaultAsync(m => m.ID == id);

            if (Quiz == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
