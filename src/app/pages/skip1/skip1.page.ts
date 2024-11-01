import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skip1',
  templateUrl: './skip1.page.html',
  styleUrls: ['./skip1.page.scss'],
})
export class Skip1Page  {

  constructor(private router: Router) {}

  goToSignIn2() {
    this.router.navigate(['/skip2']);
  }

}
