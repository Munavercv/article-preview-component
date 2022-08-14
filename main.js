"use strict";

// SHARE TOGGLE

const shareBtn = document.getElementById('share-btn')

const active = document.getElementById('active')

let shareBtn2 = document.getElementById('share-btn-2')

shareBtn.addEventListener('click', ()=>{
    active.classList.toggle('active-state')
});

shareBtn2.addEventListener('click', ()=>{
    active.classList.toggle('active-state');
    console.log("hello")
});