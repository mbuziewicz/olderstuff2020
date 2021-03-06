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
    public class IndexModel : PageModel
    {
        private readonly quiz_backend.Models.quiz_backendContext _context;

        public IndexModel(quiz_backend.Models.quiz_backendContext context)
        {
            _context = context;
        }

        public IList<Question> Question { get;set; }

        public async Task OnGetAsync()
        {
            Question = await _context.Questions.ToListAsync();
        }
    }
}
