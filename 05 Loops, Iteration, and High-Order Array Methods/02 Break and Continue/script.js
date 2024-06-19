// Break - for where if you hit a certain condition it ends the loop
for(let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking...');
        break;
    }

    console.log(i);
}

// Continue - you can skip the rest of the code in a current iteration and then continue to the next iteration
for (let j = 0; j <= 20; j++) {
    if (j === 13) {
        console.log('Skipping 13...');
        continue;
    }

    console.log(j);
}