class Post {
    constructor(
        post_id,
        post_user_id,
        post_title,
        post_category,
        post_price,
        post_state,
        post_description,
        post_location,
        post_image
    ) {
        this.post_id = post_id;
        this.post_user_id = post_user_id;
        this.post_title = post_title;
        this.post_category = post_category;
        this.post_price = post_price;
        this.post_state = post_state;
        this.post_description = post_description;
        this.post_location = post_location;
        this.post_image = post_image;
    }

    allPost() {
        console.log(`${this.post_id}`);
        return this;
    }

}

const allPostCategories = new Post(1, 1, 'Installation of windows ', 'Networking', 200, 'New', 'A brand New network card for sale at affordable price ', 'Kumasi', 'No image');
const allPostPremium    = new Post(1, 2, 'Installation of windows ', 'Networking', 200, 'New', 'A brand New network card for sale at affordable price ', 'Kumasi', 'No image');

allPostPremium.allPost();
console.log(allPostCategories);
console.log(allPostPremium);