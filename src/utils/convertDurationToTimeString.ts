export function convertDurationToTimeString(duration: number) {
    // 'Math.floor' => Arredonda para o menor numero possivel da divisão
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');

    return timeString;
}