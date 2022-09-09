const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll("animated-bg");
const animated_bg_texts = document.querySelectorAll("animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,earum suscipit sit est praesentium ad expedita quasi repellendus namdoloremque ab soluta quod natus? Eius quo excepturi illo totamtempora! Error nihil obcaecati ipsa, eos atque molestiae ipsam dolorumsapiente sequi amet sint itaque quis iure suscipit. Est repellendus soluta iure qui et, ipsa modi. Assumenda repudiandae perferendis quam tempore.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 8, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((text) =>
    text.classList.remove("animated-bg-text")
  );
}
