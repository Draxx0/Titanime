const body = document.querySelector("body");
const communityCommentTitle = document.querySelector(
  ".anime_watching_commentary_title"
);
const commentContent = document.querySelector("#comment_text");
const sendCommentBtn = document.querySelector(".comment_btn");

//! Envoi du commentaire

sendCommentBtn.addEventListener("click", () => {
  const userComment = commentContent.value;
  const comment_markup = `
    <div class="anime_watching_commentary_container">
    <img src="../../Img/Account/Rengoku avatar.jpg" alt="" class="anime_watching_commentary_profil_picture">
        <div class="anime_watching_commentary_content_container">
        <div class="anime_watching_commentary_content_header">
            <h3 class="anime_watching_commentary_author_name">
            Rengoku Demon
            </h3>
            <p class="anime_watching_commentary_date">03/04/2022 | 05:37pm</p>
        </div>
        <p class="anime_watching_commentary_text">${userComment}</p>
    
        <div class="anime_watching_commentary_like_container">
            <i class="fa-solid fa-thumbs-up fa-2x like"></i> <i class="fa-solid fa-thumbs-down fa-2x dislike"></i>
        </div>
        </div>
    </div>
    `;

  communityCommentTitle.insertAdjacentHTML("afterend", comment_markup);
  console.log(userComment);
  commentContent.value = "";
  window.scrollTo(1500, 1500);
});

//! animation lors du clique sur un like, dislike
