const circles= document.querySelectorAll('.circle');

document.querySelectorAll('.circle').forEach(circle =>{
    circle.addEventListener('mouseover', ()=>{
        document.querySelectorAll('.circle').forEach(c=> c.classList.add('paused'));
    });
    
    circle.addEventListener('mouseout', () => {
        document.querySelectorAll('.circle').forEach(c => c.classList.remove('paused'));
    });
});