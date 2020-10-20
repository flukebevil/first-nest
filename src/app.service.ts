import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAppleList(): Array<String> {
    const fruit = [];
    fruit.push("apple")
    fruit.push("orange")
    fruit.push("mango")
    return fruit
  }
}
