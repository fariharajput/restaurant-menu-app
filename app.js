// items
const menu = [
      {
        id: 1,
        title: "Egg Paratha",
        category: "breakfast",
        price: 5.19,
        img: "./images/item-1.jpg",
        desc: `Egg Paratha or anda paratha is a delicious layered flat bread with omelette stuffing. ... It is an easy and healthy Indian breakfast that is made with whole grain wheat flour and provides high quality protein and good fiber `,
      },
      {
        id: 2,
        title: " Lahori Nihari",
        category: "lunch",
        price: 16.99,
        img: "./images/item-2.jpg",
        desc: `Nihari is one of the ultimate meat dishes of Pakistan, often eaten for breakfast. Get all the details about where to eat one of the best nihari's in Lahore. `,
      },
      {
        id: 3,
        title: "Mango Milk shake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpg",
        desc: `Mango Shake (Mango Milkshake) is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk.`,
      },
      {
        id: 4,
        title: "Halwa Puri Chany",
        category: "breakfast",
        price: 5.99,
        img: "./images/item-4.jpg",
        desc: `Halwa Puri is a Pakistani popular breakfast platter that consists of puris, chole masala, suji halwa and aloo ki bhujia. It's a delicious combination of breakfast foods that's popular throughout the region, but especially popular in Lahore. `,
      },
      {
        id: 5,
        title: " Chicken Briyani",
        category: "lunch",
        price: 11.99,
        img: "./images/item-5.jpg",
        desc: `Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. `,
      },
      {
        id: 6,
        title: "Multi Range of Shakes",
        category: "shakes",
        price: 11.99,
        img: "./images/item-6.jpg",
        desc: ` A milk shake is a cold drink made by mixing milk with a flavoring or fruit, and sometimes ice cream.`,
      },
      {
        id: 7,
        title: "Multi-Fruit Chart",
        category: "breakfast",
        price: 9.99,
        img: "./images/item-7.jpg",
        desc: `Multiple Fruits: A cluster of many ripened ovaries (fruits) produced by the coalescence of many flowers crowded together in the same inflorescence, typically surrounding a fleshy stem axis. E.g. mulberry, osage orange, pineapple, breadfruit and jackfruit. `,
      },
      {
        id: 8,
        title: "Sindhi Pulao",
        category: "lunch",
        price: 7.99,
        img: "./images/item-8.jpg",
        desc: `Sindhi pulao (Sindhi: سنڌي پُلاءُ‎) is a type of rice pilaf, prepared with mutton, beef, or chicken. It is prepared by Sindhi people in their marriage ceremonies, condolence meetings, and other occasions. `,
      },
      {
        id: 9,
        title: "Orange Blend Shake",
        category: "shakes",
        price: 12.99,
        img: "./images/item-9.jpg",
        desc: ` Orange has a lot of vitamin C, an essential stimulating immune defense of the body and a good way to fight against fatigue. One orange covers almost all daily needs, without providing many calories, which is especially important for all people watching their weight or wanting to lose weight.`,
      },
      {
        id: 10,
        title: "Barbeque",
        category: "dinner",
        price: 9.99,
        img: "./images/item-10.jpg",
        desc: `The best BBQ burger. We like our burgers piled sky-high. Homemade BBQ sauce. BBQ jackfruit burger. Spicy BBQ chicken kebabs with grilled pineapple. BBQ chicken and sausages with a Carolina mustard BBQ sauce. Butter burgers. Perfect BBQ chicken. BBQ corn on the cob.`,
      },
    ];
    
    const sectionCenter = document.querySelector(".section-center");
    const container = document.querySelector(".button-container");
    
    // load items
    window.addEventListener("DOMContentLoaded", function () {
      displayMenuItems(menu);
      displayMenuButtons();
    });
    
    function displayMenuItems(menuItems) {
      let displayMenu = menuItems.map(function (item) {
        // console.log(item);
    
        return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title} />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
      });
      displayMenu = displayMenu.join("");
    
      sectionCenter.innerHTML = displayMenu;
    }
    
    function displayMenuButtons() {
      const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["all"]
      );
      const categoryButtons = categories
        .map(function (category) {
          return `<button class="filter-button" type="button" data-id=${category}>
          ${category}
          </button>`;
        })
        .join("");
      container.innerHTML = categoryButtons;
      const filterButtons = container.querySelectorAll(".filter-button");
      // filter items
      filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          // console.log(menuCategory);
          if (category === "all") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
    }
    