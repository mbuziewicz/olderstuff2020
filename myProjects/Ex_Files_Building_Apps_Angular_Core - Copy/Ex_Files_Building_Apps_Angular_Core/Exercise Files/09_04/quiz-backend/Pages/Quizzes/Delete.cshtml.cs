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
    public class DeleteModel : PageModel
    {
        private readonly quiz_backend.Models.quiz_backendContext _context;

        public DeleteModel(quiz_backend.Models.quiz_backendContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Quiz = await _context.Quiz.FindAsync(id);

            if (Quiz != null)
            {
                _context.Quiz.Remove(Quiz);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
