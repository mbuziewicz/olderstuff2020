using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngQuiz.models
{
    public class Question
    {
        public int ID { get; set; }
        public int QuestionID { get; set; }
        public string Name { get; set; }
    }
}