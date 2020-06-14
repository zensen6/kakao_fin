const ul = document.querySelector('ul'),
      form = document.querySelector('.js_'),
      input = document.querySelector('input');
//let count = 4;

check_hanguel = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

const list_of_han = ["꺼져","닥쳐","조용히 해","치킨이나 먹어","군대나 가","어쩌라고","배고파","살이나 빼","시끄러워","닥치고 동성미리내마을이나 가","닥치고 강남대성이나 가"];

function receiving(text){
    
    console.log(text);
    let li = document.createElement('li');
    li.classList.add('incoming-message');
    li.classList.add('message');
    let img = document.createElement('img');
    img.src="images/avatar.jpg";
    img.classList.add('m-avatar');
    img.classList.add('message__avatar');
    let div = document.createElement('div');
    div.classList.add('message__content');
    let span1 = document.createElement('span');
    span1.classList.add('message__author');
    span1.innerText="Anna";
    let span2 = document.createElement('span');
    span2.classList.add('message__bubble');
    span2.innerText = text;
    div.appendChild(span1);
    div.appendChild(span2);
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
    
}


function sendmessage(event){
    
    event.preventDefault();
    console.log(input.value);
    
    let li = document.createElement('li');
    li.classList.add('sent-message');
    li.classList.add('message');
    let div = document.createElement('div');
    div.classList.add('message__content');
    let span = document.createElement('span');
    span.classList.add('message__bubble');
    span.innerText = input.value;
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    
    if(check_hanguel.test(input.value)){
        console.log(Math.random(0,list_of_han.length));
        console.log(list_of_han.length);
        num = Number.parseInt(Math.random()*(list_of_han.length));
        setTimeout(receiving,1500,list_of_han[num]);
    }
    else{
        setTimeout(receiving,1500,input.value + " too");
    }
    
    //receiving(input.value);
    input.value = "";
    
    
    
}


function init(){
    form.addEventListener('submit',sendmessage);
}

init();
