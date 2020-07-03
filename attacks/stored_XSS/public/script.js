
const input = document.getElementById('input'),
    container = document.getElementById('container');

let data = null;

getData();

async function getData() {
    // 获取后台数据
    data = await fetch('http://localhost:3002/data.json').then(res => res.json());
    // 加入html
    data.forEach(d => {
        const node = document.createElement("DIV"),
            br = document.createElement("BR");
        node.innerHTML = d;
        container.append(d);
        container.append(br);
    })
}

function onSubmit() {
    var action_src = "http://localhost:3002/add?content=" + input.value;
    var form = document.getElementById('form');
    form.action = action_src;
    form.method = 'post';
}

