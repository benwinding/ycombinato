import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}
