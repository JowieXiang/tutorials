const input = document.getElementById('input');

function onSubmit() {
    const action_src = "http://localhost:3001/query?text=" + input.value,
        form = document.getElementById('form');
    form.action = action_src;
    form.method = 'post';
}
