const images1 = ["https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2174&q=80", "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",, "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"]


const images2 = ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80", "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://plus.unsplash.com/premium_photo-1661942218752-1db78ac1a12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80", "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2156&q=80", "https://plus.unsplash.com/premium_photo-1661962836485-79ceb0ec7017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80"]

let imagesTopContainer = document.querySelector(".container-1");
let imagesBottomContainer = document.querySelector(".container-2");
let thumbImages1Container = document.querySelector(".container-1-thumbnail")
let thumbImages2Container = document.querySelector(".container-2-thumbnail")
let zoomedImage = document.querySelector(".zoomedImage img")
let left = document.querySelector(".leftArrow")
let right = document.querySelector(".rightArrow")


for (let i of images1) {
    imagesTopContainer.insertAdjacentHTML("beforeend", `<img id = "img${images1.indexOf(i) + 1}" src = "${i}"  alt=""/>`)
    thumbImages1Container.insertAdjacentHTML("beforeend", `<img id = "thumb${images1.indexOf(i) + 1}" src = "${i}"  alt=""/>`)
}
for (let i of images2) {
    imagesBottomContainer.insertAdjacentHTML("beforeend", `<img id = "img${images2.indexOf(i) + 11}" src = "${i}"  alt=""/>`)
    thumbImages2Container.insertAdjacentHTML("beforeend", `<img id = "thumb${images2.indexOf(i) + 11}" src = "${i}"  alt=""/>`)
}

let imagesTop = document.querySelectorAll(".container-1 img");
let imagesBottom = document.querySelectorAll(".container-2 img");
let thumbImages1 = document.querySelectorAll(".container-1-thumbnail img")
let thumbImages2 = document.querySelectorAll(".container-2-thumbnail img")

imagesTop.forEach(x => x.addEventListener("click", function () {
    zoomedImage.src = x.src
    document.querySelector(".container-1").style.display = "none"
    document.querySelector(".container-2").style.display = "none"
    document.querySelector(".zoomedImage").style.display = "block"
    document.querySelector(".container-1-thumbnail").style.display = "block"

}))

imagesBottom.forEach(x => x.addEventListener("click", function () {
    zoomedImage.src = x.src
    document.querySelector(".container-1").style.display = "none"
    document.querySelector(".container-2").style.display = "none"
    document.querySelector(".zoomedImage").style.display = "block"
    document.querySelector(".container-2-thumbnail").style.display = "block"
}))
let img;
left.addEventListener("click", function () {
    if (images1.indexOf(zoomedImage.src) >= 0) {
        img = images1
    }
    else {
        img = images2
    }
    if (img.indexOf(zoomedImage.src) === 0) {
        zoomedImage.src = img[img.length - 1]
    }
    else {
        zoomedImage.src = img[img.indexOf(zoomedImage.src) - 1]
    }

})

right.addEventListener("click", function () {
    if (images1.indexOf(zoomedImage.src) >= 0) {
        img = images1

    }
    else {
        img = images2

    }
    if (img.indexOf(zoomedImage.src) < img.length - 1) {
        zoomedImage.src = img[img.indexOf(zoomedImage.src) + 1]
    }
    else {
        zoomedImage.src = img[0]
    }

})

thumbImages1.forEach(x => x.addEventListener("click", function () {
    zoomedImage.src = x.src

}))
thumbImages2.forEach(x => x.addEventListener("click", function () {
    zoomedImage.src = x.src
}))

document.querySelector(".close").addEventListener("click", function () {
    location.reload()
})
