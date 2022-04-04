import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<div>
                <h2>This is a inline Template inside inline.component.ts</h2>
                <p>userName is {{username}}</p>`,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {
      username: string = 'Bruce';
}
