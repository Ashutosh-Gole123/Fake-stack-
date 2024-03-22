export default function timeToString(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currTime = new Date();
    let seconds = Math.floor((currTime - date) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let years = Math.floor(minutes / 525600);
    if (minutes == 0)
        return `${seconds} second${seconds != 1 ? 's' : ''} ago`;
    if (hours == 0)
        return `${minutes} minutes ago`;
    if (hours < 24)
        return `${hours} hours ago`;
    if (years == 0)
        return `${months[date.getMonth()]} ${date.getDay()} at ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}