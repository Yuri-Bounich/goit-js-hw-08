    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();
    if (trimmedValue === '') {
    output.textContent = 'Anonymous';
    } else {
        output.textContent = trimmedValue;
    }
    });