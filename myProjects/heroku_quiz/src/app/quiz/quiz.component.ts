import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public router: Router, public quizService: QuizService) { }

  ngOnInit() {
    //if seconds < 0 then start timer
    //Otherwise, set things to 0, getQuestions ==> put data in quizService.qns 
    //if qnprogress == 10 go to result
    //otherwise, start the timer
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizService.qnProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
          //getQuestions ==> put data in quizService.qns 
      this.quizService.getQuestions().subscribe(
        (data: any) => {
          this.quizService.qns = data;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    //After the user makes a choice
    //quizService.qns[index].answer set to the choice (0-3 1-4?) that the user picked
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    //set localstorage qns to quizService.qns
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    //Add 1 to progress
    this.quizService.qnProgress++;
    //set localstorage qnProgress to quizService.qnProgress
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    //Are we at 10, clear out the timer and go to /result
    if (this.quizService.qnProgress == 10) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }

    

  }

}
