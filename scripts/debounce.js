let counter = 0;
const fetchData = () => {
    console.log('featching data...', counter++);
}

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const getData = debounce(fetchData, 300);