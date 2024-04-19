// HH:MM::SS        (Eg. 13:45:23)
// HH:MM::SS AM/PM  (Eg 01:45:23 PM)

function myClock(delay) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

async function main() {
    while(true) {
        await myClock(1000);

        const time12 = new Date().toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
        const time24 = new Date().toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
        console.log("24 Hour Clock:", time24);
        console.log("12 Hour Clock:", time12, "\n");
    }
}

main();