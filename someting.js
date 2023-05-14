let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string.toLocaleString();
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        // If the clicked button is %, convert the current input string to a number and divide it by 100
        else if(e.target.innerHTML == '%'){
            string = (Number(string) / 100).toString();
            input.value = string.toLocaleString();
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string.toLocaleString();
        }
        
        // Resize the input field based on the length of the input string
        if (string.length > 13) {
            input.style.fontSize = "24px";
        } else {
            input.style.fontSize = "36px";
        }
        
    })
})
