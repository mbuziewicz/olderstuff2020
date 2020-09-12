using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend.Pages.Questions
{
    public class DetailsModel : PageModel
    {
        private readonly quiz_backend.Models.quiz_backendContext _context;

        public DetailsModel(quiz_backend.Models.quiz_backendContext context)
        {
            _context = context;
        }

        public Question Question { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Question = await _context.Questions.SingleOrDefaultAsync(m => m.ID == id);

            if (Question == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
