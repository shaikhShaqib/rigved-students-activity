import { Component } from "@angular/core";

@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    userName : string = "Alex";
    age : number = 22;
}