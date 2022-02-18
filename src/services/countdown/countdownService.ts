function trailingZeros(number: number, places: number): string {
  return String(number).padStart(places, "0");
}

export function formatTotalSecondsToCountdown(countdown: number = 0): String {
  const NUMBER_SIZE = 2;
  const minutes = trailingZeros(Math.floor(countdown / 60), NUMBER_SIZE);
  const seconds = trailingZeros(countdown % 60, NUMBER_SIZE);

  return `${minutes}:${seconds}`;
}

export function getTotalSeconds(minutes: number, seconds: number): number {
  const secondsInMinutes = minutes * 60;
  return secondsInMinutes + seconds;
}
