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
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const img = new Image();
    img.src = event.target.attributes.src.nodeValue;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = img.width * window.devicePixelRatio;
    canvas.height = img.height * window.devicePixelRatio;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'flex';
  }

  blackAndWhite(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const dataArray = imageData.data;

    for (let i = 0; i < dataArray.length; i += 4) {

      const red = dataArray[i];
      const green = dataArray[i + 1];
      const blue = dataArray[i + 2];

      const gray = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

      dataArray[i] = gray;
      dataArray[i + 1] = gray;
      dataArray[i + 2] = gray;
    }

    context.putImageData(imageData, 0, 0);
  }

  invert(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const dataArray = imageData.data;

    for (let i = 0; i < dataArray.length; i += 4) {
      const red = dataArray[i];
      const green = dataArray[i + 1];
      const blue = dataArray[i + 2];

      const invertRed = 255 - red;
      const invertGreen = 255 - green;
      const invertBlue = 255 - blue;

      dataArray[i] = invertRed;
      dataArray[i + 1] = invertGreen;
      dataArray[i + 2] = invertBlue;
    }
    context.putImageData(imageData, 0, 0);
  }

}
