import { Component } from '@angular/core';
import { ProductList } from './product-list'

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
      <product-list></product-list>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'App Store';
}