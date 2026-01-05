import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    currentMessage: { email: string, content: string } | null = null;

    onSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        console.log('Form Submitted:', { email, message });
        this.currentMessage = { email, content: message };

        form.reset();
    }
}
