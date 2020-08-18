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
    const src = event.target.attributes.src.nodeValue;
    const img = new Image();
    img.src = src;
    const context = canvas.getContext('2d');
    const wrh = img.width / img.height;
    let newWidth = canvas.width;
    let newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.style.display = 'flex';
  }

  blackAndWhite(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const dataArray = imageData.data;
    console.log(dataArray);

    for (let i = 0; i < dataArray.length; i += 4) {
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
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const dataArray = imageData.data;
    console.log(dataArray);

    for (let i = 0; i < dataArray.length; i += 4) {
      const red = dataArray[i];
      const green = dataArray[i + 1];
      const blue = dataArray[i + 2];
      const alpha = dataArray[i + 3];

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
