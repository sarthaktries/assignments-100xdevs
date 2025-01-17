function counter(count) {
    return new Promise((resolve) => {
        setTimeout(() => {
            count = count + 1;
            resolve(count);
        }, 1000);
    });
}

async function main() {
    let count = 0;
    while (true) {
        count = await counter(count);
        console.log(count);
    }
}

main();