import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [],
  templateUrl: './button-component.html',
  styleUrls: ['./button-component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = '';

  addRipple(event: MouseEvent): void {
    // Lấy tọa độ nhấp chuột trong button
    const x = event.clientX - (event.target as HTMLElement).offsetLeft;
    const y = event.clientY - (event.target as HTMLElement).offsetTop;

    // Tạo element ripple
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Thêm ripple vào button
    const button = event.target as HTMLElement;
    button.appendChild(ripple);

    // Xóa ripple sau 1 giây
    setTimeout(() => {
      ripple.remove();
    }, 100000);
  }
}
