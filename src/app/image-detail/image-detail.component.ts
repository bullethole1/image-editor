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
    context.drawImage(img, 0, 0, 800, 600);
  }

  blackAndWhite(): void {
    const canvas = document.getElementById('working-area-image-container') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, 800, 600);
    const dataArray = imageData.data;
    console.log(dataArray);

    for (let i = 0; i < dataArray.length; i++) {
      const red = dataArray[i];
      const green = dataArray[i + 1];
      const blue = dataArray[i + 2];
      const alpha = dataArray[i + 3];

      const gray = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

      dataArray[i] = gray;
      dataArray[i + 1] = gray;
      dataArray[i + 2] = gray;
      dataArray[i + 3] = alpha;
    }

    context.putImageData(imageData, 0, 0);
  }

  invert(): void {
    alert('test');
  }

}
