import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skip2',
  templateUrl: './skip2.page.html',
  styleUrls: ['./skip2.page.scss'],
})
export class Skip2Page  {


  constructor(private router: Router) {}

  goToSignIn3() {
    this.router.navigate(['/skip3']);
  }

}
