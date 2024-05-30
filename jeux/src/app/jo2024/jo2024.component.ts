import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-jo2024',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './jo2024.component.html',
  styleUrls: ['./jo2024.component.css']
})
export class Jo2024Component {

  openGallery(){

    window.open('/galerie', '_blank');
  
  }

}
