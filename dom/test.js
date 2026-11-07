let input = document.getElementById('in');
let arr = [];

input.addEventListener('change', ((x) => {

    let checkval = arr.find((obj) => obj.name === x.target.value);

    if (checkval === undefined) {
        console.log(`${x.target.value} count: 1`)
        let create = document.createElement('p');
        create.innerText = `${x.target.value} count: 1`;
        document.body.append(create)

        arr.push({
            name: x.target.value,
            count: 1,
            create:create
        })
    }

    else {
        checkval.count = checkval.count + 1;
        console.log(`${checkval.name} ${checkval.count}`)
        checkval.create.innerText = `${checkval.name} count: ${checkval.count}`
    }
    x.target.value = ""
}))
