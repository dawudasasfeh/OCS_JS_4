let colors=[
"red",
"blue",
"green",
"yellow",
"orange"
];

index = 0

const box = document.getElementById("box")

box.addEventListener("animationiteration" , function () {
     let startColor = colors[index % colors.length];
    
    index++;
    
    let endColor = colors[index % colors.length];

    box.style.setProperty('--color-start', startColor);
    box.style.setProperty('--color-end', endColor);
})