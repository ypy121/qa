import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import Util from '../util';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss'],
  providers: [ QuestionService ]
})
export class MyQuestionsComponent implements OnInit {

  constructor(
    private questionService: QuestionService
  ) { }
  questions = [];
  loading: boolean = true;

  ngOnInit() {
    console.log('ngOnInit');
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestionsByUser()
      .then((questions) => {
        this.questions = questions;
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
      })
  }

}