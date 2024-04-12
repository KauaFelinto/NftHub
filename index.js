

function More(){
    const paragrafo = document.querySelector('.paragrafo');
    const btnUp = document.querySelector('.bx-chevron-down');
    const btnDown = document.querySelector('.bx-chevron-up')
 
    paragrafo.style.display = 'block';
    btnUp.style.display = 'none';
    btnDown.style.display = 'flex';
}


function Ocult(){
    const paragrafo = document.querySelector('.paragrafo');
    const btnUp = document.querySelector('.bx-chevron-down');
    const btnDown = document.querySelector('.bx-chevron-up')

    paragrafo.style.display = 'none';
    btnUp.style.display = 'flex';
    btnDown.style.display = 'none';
}