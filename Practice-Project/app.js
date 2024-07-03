let sprites = document.querySelector("img");
let btn = document.querySelector("button");

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

//! By using Async Await
// btn.addEventListener("click", async () => {
//   let res = await fetch(url);
//   data = await res.json();
//   let sprite = await data.sprites.front_shiny;
//   console.log(data);
//   console.log(sprite);
//   sprites.src = sprite;
// });

//! By using Promise Chaining

// let fetching = fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     sprites.src = data.sprites.back_shiny;
//   })
//   .catch((err) => console.log(err));
