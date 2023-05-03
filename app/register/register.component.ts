import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService : UserService, private router: Router) {}

    ngOnInit(): void {}

    username: string = ""
    lozinka: string = ""
    ime: string = ""
    prezime: string = ""
    datumRodjenja!: Date
    mailRukovodioca: string = "";
    telefon: string = "";
    pregledPodnetih: string = "";
    idInstitucije!: number;


    register(){
        let user = new User();
        user.username = this.username
        user.lozinka = this.lozinka
        user.ime = this.ime
        user.prezime = this.prezime
        this.userService.register(user).then((resp) =>{
            alert("Dodat korisnik")
        })
        .catch(()=>{
            alert("error - user nije dodat")
        })
    }

}


