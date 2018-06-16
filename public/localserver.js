function toast(text,duration) {
    if(typeof duration === 'undefined'){
        duration = 1000;
    }
    var has = document.getElementById('toast');
    if(has === null){
        var body = document.getElementsByTagName('body')[0];
        var wrap = document.createElement('div');
        wrap.innerHTML = '<div class="window_toast" id="toast"></div>';
        body.appendChild(wrap);
    }
    var item  = document.getElementById('toast');
    item.innerText = text;
    item.style.display = 'block';
    setTimeout(function () {
        item.style.display = 'none';
    }, duration)
}
