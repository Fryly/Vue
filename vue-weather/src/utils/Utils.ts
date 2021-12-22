export class Utils {
  public static temperature(value: number): number {
    const k = 273;
    return Math.round(value - k);
  }
}
