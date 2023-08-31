const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const btnContainer = document.getElementById("btn-container");
  data.data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadVideos('${element.category_id}')" class="tab btn text-black">${element.category}</a>
        `;
    btnContainer.appendChild(div);
  });
};
const handleLoadVideos = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  console.log(data);
  const cardContainer = document.getElementById("videos-container");
  cardContainer.innerHTML = "";
  data.data.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
          <figure class= "w-full h-60">
            <img
              src=${video?.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div class="flex gap-4 p-3">
            <div class="w-16 h-16">
              <img src="./images/Icon.png" alt="" />
            </div>
            <div class="">
              <h2 class="font-bold text-2xl">Shoes!</h2>
              <div class="flex gap-2">
                <p>Awlad hossain</p>
                <i></i>
              </div>
              <p>91k views</p>
            </div>
          </div>
        </div>
        `;
        cardContainer.appendChild(div);
  });
};
handleLoadVideos("1000");
handleCategory();
