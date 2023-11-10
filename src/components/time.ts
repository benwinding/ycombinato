import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}

export class Time {
  private constructor(private ms: number) {}

  static fromIso(opts: { dateIso: string }) {
    const ms = Number(dayjs(opts.dateIso).toDate());
    return new Time(ms);
  }

  static fromHn(opts: { seconds: number }): Time {
    return new Time(opts.seconds * 1000);
  }

  static fromDateString(opts: { dateString: string }): Time {
    const ms = Number(dayjs(opts.dateString, "YYYY-MM-DD").toDate());
    return new Time(ms);
  }

  static fromDateObj(opts: { dateObj: Date }): Time {
    const ms = Number(dayjs(opts.dateObj).toDate());
    return new Time(ms);
  }

  static now(): Time {
    const ms = Number(dayjs(new Date()).toDate());
    return new Time(ms);
  }

  formatAsHnSeconds() {
    return Math.round(this.ms / 1000);
  }

  formatFromNow() {
    return dayjs(this.ms).fromNow();
  }

  formatAsDateString() {
    return dayjs(this.ms).format("YYYY-MM-DD");
  }

  endOfDay(): Time {
    const endOfDay = dayjs(this.ms)
      .set("hours", 23)
      .set("minutes", 59)
      .set("seconds", 59);
    this.ms = Number(endOfDay.toDate());
    return this;
  }

  startOfDay(): Time {
    const endOfDay = dayjs(this.ms)
      .set("hours", 0)
      .set("minutes", 0)
      .set("seconds", 1);
    this.ms = Number(endOfDay.toDate());
    return this;
  }

  setClockNow() {
    const now = dayjs(new Date());
    this.ms = Number(
      dayjs(this.ms)
        .set("hours", now.hour())
        .set("minute", now.minute())
        .toDate()
    );
    return this;
  }

  subtract1Day(): Time {
    this.ms = Number(dayjs(this.ms).subtract(24, "hours").toDate());
    return this;
  }

  add1Day(): Time {
    this.ms = Number(dayjs(this.ms).add(24, "hours").toDate());
    return this;
  }
}
