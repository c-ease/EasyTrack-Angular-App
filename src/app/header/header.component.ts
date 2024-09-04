import { Component } from "@angular/core";

@Component({
    selector: 'app-header', //two elements separated by dash
    standalone: true, // other is module based if standalone false
    templateUrl: './header.component.html', //template: "<h1>Hello</h1",
    styleUrl: './header.component.css' // styleURLs: ["","",...]
})
export class HeaderComponent {}