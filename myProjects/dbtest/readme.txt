db test is used as an example of how to connect two diffrent tables.

Courses 
Students
Enrollments - this file is used to connect the student and courses.

In Pages/Shared/_Layout.cshtml
                    <li><a asp-page="/Students/Index">Students</a></li>
                    <li><a asp-page="/Courses/Index">Courses</a></li>
                    <li><a asp-page="/Enrollments/Index">Enrollments</a></li>

==================================================================================
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace dbtest.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CourseID { get; set; }
        public string Title { get; set; }
        public int Credits { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }
}
-----------------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace dbtest.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime EnrollmentDate { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }
}
-----------------------------------------------------------------------------------
namespace dbtest.Models
{
    public enum Grade
    {
        A, B, C, D, F
    }

    public class Enrollment
    {
        public int EnrollmentID { get; set; }
        public int CourseID { get; set; }
        public int StudentID { get; set; }
        public Grade? Grade { get; set; }

        public Course Course { get; set; }
        public Student Student { get; set; }
    }
}