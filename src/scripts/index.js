import { posts } from "./database.js";

function createModal(array) {
    const modalContainer = document.querySelector(".modal__container");
    modalContainer.innerText = "";

    //Creating elements
    let divArticle = document.createElement("div");
    let socialPhoto = document.createElement("img");

    let informationPost = document.createElement("div");
    let socialName = document.createElement("h2");
    let socialProfession = document.createElement("p");


    let articleTitle = document.createElement("h2");
    let articleContents = document.createElement("p");

    let buttonModal = document.createElement("button")

    // Add Class
    divArticle.classList = "article__div";
    socialPhoto.classList = "social__photo";
    informationPost.classList = "information__post";
    socialName.classList = "social__name title2";
    socialProfession.classList = "social__profession text2";
    articleTitle.classList = "article__title title1";
    articleContents.classList = "article__contents text1";
    buttonModal.classList = "modal__button";
    buttonModal.innerText = "X";


    // Add Information
    socialPhoto.src = array.img;
    socialName.innerText = array.user;
    socialProfession.innerText = array.stack;
    articleTitle.innerText = array.title;
    articleContents.innerText = array.text;


    // Add Append
    modalContainer.appendChild(divArticle);
    divArticle.appendChild(socialPhoto);
    divArticle.appendChild(informationPost);
    informationPost.appendChild(socialName);
    informationPost.appendChild(socialProfession);
    modalContainer.appendChild(articleTitle);
    modalContainer.appendChild(articleContents);
    modalContainer.appendChild(buttonModal);
}



function handleModal() {
    const articleButtom = document.querySelectorAll(".article__button");
    const modalController = document.querySelector(".modal__controller");

    for (let i = 0; i < articleButtom.length; i++) {
        articleButtom[i].addEventListener("click", function () {
            const foundPost = posts.find(post => post.id === Number(event.target.id))
            createModal(foundPost)

            modalController.showModal();
            closeModal();
        })
    }
}

function closeModal() {
    const modalButton = document.querySelector(".modal__button");
    const modalController = document.querySelector(".modal__controller");

    modalButton.addEventListener("click", function () {
        modalController.close();
    })
}

function follow() {
    const buttonFollow = document.querySelectorAll (".suggestion__button");

    for(let i = 0; i < buttonFollow.length; i++) {
        const buttonArray = buttonFollow[i];

        buttonArray.addEventListener("click", function(event){
            event.preventDefault;
            let following = event.target.innerText;

            if (following == "Seguir") {
                buttonArray.innerText = "Seguindo";
                buttonArray.classList = "suggestion__button--follow";
            } else if (following == "Seguindo") {
                buttonArray.innerText = "Seguir";
                buttonArray.classList = "suggestion__button";
            } 
        });
    }
}

function like() {
    const imageLike = document.querySelectorAll(".article__div__image > img");
    const smallLike = document.querySelectorAll(".article__div__image > small");

    for(let i = 0; i < imageLike.length; i++) {
        let imageLikeArray = imageLike[i];

        imageLikeArray.addEventListener("click", function(){
            if(imageLikeArray.classList == "button__like-gray"){
                smallLike[i].innerText = Number(smallLike[i].innerText) + 1;
                imageLikeArray.setAttribute("src", "./src/assets/img/heart-red.svg");
                imageLikeArray.classList = "button__like-red";

                console.log(smallLike[i].innerText)
            }else {
                smallLike[i].innerText = Number(smallLike[i].innerText) - 1;
                imageLikeArray.setAttribute("src", "./src/assets/img/heart-gray.svg");
                imageLikeArray.classList = "button__like-gray";
            }
        })
    }
}

handleModal();
follow();
like();