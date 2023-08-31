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
  if (data.status === true) {
    const cardContainer = document.getElementById("videos-container");
    cardContainer.innerHTML = "";
    data.data.forEach((video) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
          <figure class= "w-full h-40">
            <img
              src=${video?.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div class="flex gap-4 p-3 mt-3">
            <div>
              <img class="w-16 h-16 rounded-full" src=${
                video?.authors[0]?.profile_picture
              } />
            </div>
            <div>
              <h2 class="font-semibold text-xl">${video?.title}</h2>
              <div class="flex gap-2">
                <p>${video?.authors[0]?.profile_name}</p>
                <img src=${video.authors[0].verified ? "./images/tick.svg" : ''}>
              </div>
              <p>${video?.others?.views} views</p>
            </div>
          </div>
        </div>
        `;
      cardContainer.appendChild(div);
    });
  } else {
    const sectionContainer = document.getElementById("video-container");
    const cardContainer = document.getElementById("videos-container");
    cardContainer.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="text-center mt-14">
            <img class="mx-auto w-1/6" src="./images/Icon.png" alt="">
            <h3 class="font-bold text-2xl mt-4">Oops!! Sorry, There is no content here</h3>
        </div>
    `;

    sectionContainer.appendChild(div);
  }
};
handleLoadVideos("1000");
handleCategory();
