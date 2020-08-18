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
    const src = event.target.attributes.src.nodeValue;
    // const imgSrc = document.getElementById(src) as HTMLCanvasElement;
    const imageOriginalHeight = event.srcElement.naturalHeight;
    const imageOriginalWidth = event.srcElement.naturalWidth;
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = src;
    img.width = imageOriginalWidth;
    img.height = imageOriginalHeight;
    context.drawImage(img, 0, 0);
  }

  blackAndWhite(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, 800, 600);
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
    const imageData = context.getImageData(0, 0, 800, 600);
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
