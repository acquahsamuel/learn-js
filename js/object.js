// Array of Objects
// const blogs = [
//     {title : 'Why this is the best js course ' ,  likes : 30},
//     {title : 'I think i am loving this course ' , likes : 50}
// ];



let user = {
    // key value : paired
    name: 'crystal',
    age: 30,
    email: 'crystailname@mail.com.uk',
    location: 'berlin',

    //Array + Object Combined
    blogs: [{
            title: 'Why this is the best js course ',
            likes: 30
        },
        {
            title: 'I think i am loving this course ',
            likes: 50
        }
    ],

    // login : function(){} // Same As  login()
    login() {
        console.log('the user logged in ');
    },
    logout(){
        console.log('user logged out');
    },
 
    logBlog() {
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })

        console.log(this);
    }
};



console.log(this);
console.log(user.logout());
console.log(user.login());
console.log(user.logBlog());