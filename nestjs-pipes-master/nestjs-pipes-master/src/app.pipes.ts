import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      '🚀 ~ file: app.pipes.ts:5 ~ CustomPipe ~ transform ~ metadata:',
      metadata,
    );
    switch (value.type) {
      case 'string':
        return value.id.toStrng();
      case 'number':
        return parseInt(value.id);
      case 'boolean':
        if (parseInt(value.id) != 0) {
          return true;
        } else {
          return false;
        }
      default:
        return 0;
    }
  }
}
