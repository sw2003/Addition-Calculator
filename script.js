var user_data = {
    numbers: [],
    operator: "",
    answer_visible: false,
    


}


function main(){
    num_btn_logic()
}

function num_btn_logic(){
    const num_btns = document.querySelectorAll(".num-btn")
    const plus_btn = document.getElementById("+")
    const minus_btn = document.getElementById("-")
    const equal_btn = document.getElementById("=")
    const clear_btn = document.getElementById("clear")
    let screen_text = document.querySelector(".screen-text")
    let screen_text_2 = document.querySelector(".screen-text-2")

    function screen_input(string, display){
        if (display){
            screen_text.style.display = "none"
            let current_text = screen_text.textContent
            screen_text.textContent = current_text + string
        }

        let current_text_2 = screen_text_2.textContent
        screen_text_2.textContent = current_text_2 + string
    }

    num_btns.forEach(function(button, index){
        button.addEventListener("click", function(){

            screen_input(button.textContent, true)
        })
    })

    plus_btn.addEventListener("click", function(){
        // if answer computed remove answer display 
        // appends screen_text number into array

        if (screen_text.textContent != ""){
            if (user_data["answer_visible"]){
                user_data["answer_visible"] = false
                screen_text.style.display = "none"
                screen_text_2.textContent = screen_text.textContent
            }

            user_data["numbers"].push(parseInt(screen_text.textContent))
            screen_text.textContent = ""

            screen_input("+", false)
        }
    })

   

    equal_btn.addEventListener("click", function(){ 
        //computes numbers, displays answer, resets array

        if (screen_text.textContent != ""){
            if (user_data["numbers"].length >= 1){
                user_data["numbers"].push(parseInt(screen_text.textContent))

                let sum = 0

                for (let i = 0; i < user_data["numbers"].length; i++){
                    sum = sum + user_data["numbers"][i]
                }

                screen_text.textContent = sum
                screen_text.style.display = "block"
                user_data["numbers"] = []
                user_data["answer_visible"] = true

            }
        }
    })

    clear_btn.addEventListener("click", function(){
        user_data["numbers"] = []
        user_data["answer_visible"] = false
        screen_text.textContent = ""
        screen_text_2.textContent = ""
 
    })
}


window.onload = function(){
    main()

}