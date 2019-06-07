document.getElementsByClassName('box')[0].addEventListener('click', function (ev) {
    ev.preventDefault();
    switch (ev.target.id) {
        case 'button':
            alert('Step3:button');
            break;
        case 'container':
            alert('Step3:div');
            break;
    }
})