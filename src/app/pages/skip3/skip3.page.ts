import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skip3',
  templateUrl: './skip3.page.html',
  styleUrls: ['./skip3.page.scss'],
})
export class Skip3Page  {

 
  constructor(private router: Router) {}

  goToSignIn4() {
    this.router.navigate(['/skip4']);
  }

}
