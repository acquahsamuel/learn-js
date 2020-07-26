class Category{

    constructor(categories_id , categories_title){
        this.categories_id = categories_id;
        this.categories_title = categories_title;
    }

    getAllCategories(){
        console.log(`${this.categories_id} ${this.categories_title}`);
        return this;
    };
}

const categories = new Category('1' ,'Cooking');
console.log(categories);