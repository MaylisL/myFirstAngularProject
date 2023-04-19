import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user: User = new User('Doe','John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg', 'photo description');  
  isHidden: boolean = true;
  buttonText: string = "Afficher l'âge";

    constructor() {
      
    }

    showHideAge(){
      this.isHidden = !this.isHidden ;

      if(this.isHidden)  {
        this.buttonText = "Afficher l'âge"; 
      } else {
        this.buttonText = "Masquer l'âge"; 
      }
    }

    ngOnInit(): void {}
    
  }

  
