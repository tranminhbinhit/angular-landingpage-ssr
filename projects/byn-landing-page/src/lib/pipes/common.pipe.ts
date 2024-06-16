import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatCurrency, formatPhone, isEmptyObject, getImageCdn, isEmpty, isNumber } from '../utils/utils';


@Pipe({name: 'cdnUrl'})
export class CdnUrlPipe implements PipeTransform {
  transform(value: string|any): string {
    let newStr: string = getImageCdn(value);
    return newStr;
  }
}

@Pipe ({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]) : unknown{
    const space : any = args[0] || ' ';
    return formatPhone(value, space);
  }
}

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return value;
  }
}


@Pipe({
  name: 'currencyByn'
})
export class CurrencyBynPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if(isEmpty(value)){
      return 'Liên hệ';
    } else if(typeof(value) == 'number' || isNumber(value)){
      return formatCurrency(value);
    } else {
      return value;
    }
  }
}


@Pipe({
  name: 'percentByn'
})
export class PercentBynPipe implements PipeTransform {

  transform(value: number|string, ...args: unknown[]): unknown {
    return `${value}%`;
  }
}

@Pipe({
  name: 'isUrl'
})
export class IsUrlBynPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return value != null ? (value.indexOf('http') >= 0 ? true : false) : false;
  }
}