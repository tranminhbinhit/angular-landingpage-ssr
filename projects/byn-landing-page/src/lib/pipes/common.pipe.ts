import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatCurrency, formatPhone, isEmptyObject, getImageCdn } from '../utils/utils';


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
export class CurrencyPipe implements PipeTransform {

  transform(value: number|string, ...args: unknown[]): unknown {
    return formatCurrency(value);
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