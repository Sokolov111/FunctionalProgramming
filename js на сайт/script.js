const tag_i = document.querySelectorAll('.counter_i')
let tag_div = document.querySelectorAll('.line')
console.log(tag_div)

tag_i.forEach((counter) => {
    counter.innerHTML = "0"

    function counter_tag_h3() {
        const data_h3 = +counter.getAttribute('data-num')
        const content_h3 = +counter.innerText
        const increament = Math.round(data_h3 / data_h3)
        let buff = 0
        buff += increament
        tag_div.innerHTML = `<div class="line_script" style=" width:100%;"></div>`
        console.log(tag_div)
        if (content_h3 < data_h3) {
            // console.log(increament)

            counter.innerHTML = `${content_h3+increament}`
            setTimeout(counter_tag_h3, 30)
        }
    }
    counter_tag_h3()
})

tag_div.forEach((counter) => {

})