function clock(){
    const now = new Date()
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12  || 12;
    hours = hours.toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minute}:${sec} ${meridian}`
    document.getElementById('clock').textContent = time;
}
clock()

setInterval(clock,1000)