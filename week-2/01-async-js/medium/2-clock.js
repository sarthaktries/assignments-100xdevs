function counter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

async function clockWork() {
    while (true) {
        await counter();
        let curTime = new Date();
        console.log(curTime.toLocaleTimeString([], {hour12: false}));
        console.log(curTime.toLocaleTimeString());
    }
}

clockWork();