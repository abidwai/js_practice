let obj = {
    "mh": ['pusad', 'pune'],
    "gj": ['vapi', 'surat']

};
let text = JSON.stringify(obj);
let obj1 = JSON.parse(text);

for (let o in obj1) {
    console.log(obj[o]);
    if (obj[o] === 'mh') console.log("true");
}