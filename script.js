const boxContainer = document.getElementById("boxContainer");

const cards = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726837393570-a2f7d1721846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://plus.unsplash.com/premium_photo-1723914060590-07826157f56a?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Lcina Raud",
    likes: 15, //thousand
    views: 12, //thousand
  },

  {
    image:
      "https://plus.unsplash.com/premium_photo-1723600821917-b33398b9bfbd?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://plus.unsplash.com/premium_photo-1723914081982-a3d194aa8b26?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Alex",
    likes: 10, //thousand
    views: 25, //thousand
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1722945688529-cef8d3e2c96f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://plus.unsplash.com/premium_photo-1723777203948-c4bfb51e033f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Lesa",
    likes: 30, //thousand
    views: 20, //thousand
  },
];

cards.forEach((item) => {
  const card = ` 
    <div class="box">
      <div class="box_img">
        <img src="${item.image}" alt="Image"/>
      </div>
      <div class="box_events">
        <div class="left_event">
          <div class="left_event-image">
            <img src="${item.userImage}" alt="User Image"/>
          </div>
          <h2>${item.userName}</h2>
          <div class="event_tag">PRO</div>
        </div>
        <div class="right_event">
          <h2 class="event_heart"><i class="ri-heart-3-fill"></i> <span>${item.likes}K</span></h2>
          <h2 class="event_view"><i class="ri-eye-fill"></i> <span>${item.views}K</span></h2>
        </div>
      </div>
    </div>`;

  boxContainer.innerHTML += card;
});
