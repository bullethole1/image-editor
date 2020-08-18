import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addImage(event: any): void {
    const id = event.target.attributes.id.nodeValue;
    const img = document.getElementById(id) as HTMLCanvasElement;
    const canvas = document.getElementById('working-area-image-container') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
  }

}
