import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}

export function getNow() {
  return toSeconds(dayjs());
}

export function getNowMinus(value: number, unit: dayjs.ManipulateType) {
  return toSeconds(dayjs().subtract(value, unit));
}

function toSeconds(input: dayjs.Dayjs): number {
  return Math.round(Number(input.toDate()) / 1000);
}
