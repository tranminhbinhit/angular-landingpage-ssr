import { environment } from "../byn-landing-page.setting";

export function getImageCdn(url: string) {
  if (url.indexOf("http") >= 0) {
    return url;
  } else {
    return `${environment.CDN_URL}/${url}`;
  }
}

export function isEmpty(value: string) {
  return value === undefined || value === null || value === "";
}

export function isEmptyObject(obj: any) {
  if (obj !== null && obj !== undefined) return Object.keys(obj).length === 0;
  return true;
}

export function getTimeStamp(): number {
  return Date.now();
}

export function formatCurrency(
  value: any,
  unit = "",
  locale = "vi",
  digit = 0
) {
  const v = parseFloat(value).toLocaleString(locale, {
    minimumFractionDigits: digit,
  });
  return unit ? `${v}${unit}` : `${v}`;
}

export function formatPhone(value: string, insertStr: any = " "): string {
  if (isEmpty(value) || value === "") {
    return "";
  }
  let input = value;
  if (input.length === 10) {
    input = [input.slice(0, 4), insertStr, input.slice(4)].join("");
    input = [input.slice(0, 8), insertStr, input.slice(8)].join("");
  } else {
    input = [input.slice(0, 4), insertStr, input.slice(4)].join("");
    input = [input.slice(0, 8), insertStr, input.slice(8)].join("");
    input = [input.slice(0, 11), insertStr, input.slice(11)].join("");
  }

  return input;
}

export function randomNumberinRange(min: any, max: any) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const isNumber = (value: any) => {
  const num = Number(value);
  return !isNaN(num) && Number.isFinite(num);
};
