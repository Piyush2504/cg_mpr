var sun = 1

$(document).ready(function() {
    addImg()
    start()
})

async function addStar() {
    for (let i = 1; i <= 15; i++) {
        $('.star').append('<div class="star-' + i + '"></div><br>')
    }
}    

async function addImg() {
    await addStar()
    for (let i = 1; i<= 15; i++) {
        $('.star div').append('<img class="img-'+ i +'" src="css/star.gif">')
    }
    stars()
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function animation() {
    await sleep(9000)
    $('#moon').css('animation', 'none')
    $('#sun').css('animation', 'none')
    $('.bird').css('animation', 'none')
    $('.star').fadeOut(200)
    await sleep(1000)
    start()
}

async function start() {
    if (sun === 1) {
        sun = 0
        $('#sun').css('animation', 'sun 9s linear infinite')
        $('.bird').css('animation', 'bird 9s linear infinite')
        animation()
    }else {
        sun = 1
        $('#moon').css('animation', 'moon 9s linear infinite')
        $('.star').fadeIn(1000)
        animation()
    }
}


function randomIndex() {
    let randomIndex = Math.ceil(Math.random()*15)
    return randomIndex
}


async function stars() {
    let Class = $('.star-'+ randomIndex() +' .img-'+ randomIndex())
    Class.css('opacity', '1')
    remove(Class)
    await sleep(90)
    stars()
}

async function remove(Class) {
    await sleep(1000)
    Class.css('opacity', '0')
}