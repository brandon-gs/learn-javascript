const MONTHS = ["Enero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export function getTodayDate() {
    return new Date();
}

export function getStringDate(seconds: number) {
    const _date = new Date(seconds * 1000)
    const year = _date.getUTCFullYear();
    const month = _date.getUTCMonth();
    const day = _date.getUTCDate();
    console.log(day)
    return `${day} de ${MONTHS[month - 1]} de ${year}`;
}