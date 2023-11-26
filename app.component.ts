import { Component } from '@angular/core';
import { isContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebPageTask';
  showClose:boolean=false;

//  function to show dropdown in small screens while click on menu icon

  toggleMenu(show:any) {
    var dropdown = document.querySelector('.dropdown');
    if(dropdown!=null){
      dropdown.classList.toggle('show');
      this.showClose=show;

    }
}
}
