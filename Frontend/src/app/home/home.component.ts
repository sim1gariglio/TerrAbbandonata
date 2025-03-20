import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';

@Component({
  selector: 'app-home',
  imports: [HlmFormFieldModule, HlmInputDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	title = 'Home';
}
