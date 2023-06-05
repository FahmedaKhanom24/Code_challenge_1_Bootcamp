/*
Build Object for Employees: An employee can be represented as an object with attributes such as name, age, 
salary, and job title. It can also have functions like work, take a break, and attend a meeting.
*/

let Employees = {
    name: 'Fahmeda Khanom',
    age: 20,
    salary: 90000,
    job_title: 'Software Engineer',

    work:function(){
        console.log('Fahmeda works in a software comapany')
    },

    break:function(){
        console.log('Fahmeda gets 1 hours break every day');
    },

    meeting:function(){
        console.log('Fahmeda attends meeting with product manager at least once a week');
    }
}

console.log(Employees);
Employees.work()
Employees.break()
Employees.meeting()

/**
 * Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as account
 * number, balance, and account type. It can also have functions like deposit, withdraw, and transfer.
 */

let bankAccount= {
    Number: 390472109,
    Balance: 78000,
    AccountType: 'Savings Account',
    deposit: function(){
        console.log(`Fahmeda has deposit $${bankAccount.Balance} in her ${bankAccount.AccountType}`);
    },
    withdraw: function(){
        console.log(`Fahmeda withdraw $100 dollar from her ${bankAccount.AccountType}`);
    },
    transfer: function(){
        console.log(`Fahmeda transfer $200 to Touheda from her ${bankAccount.AccountType}`);
    }
}

console.log(bankAccount);
bankAccount.deposit()
bankAccount.withdraw()
bankAccount.transfer()


/**
 * Build Object for  Dogs: A dog can be represented as an object with attributes such as breed, age, and color. 
 * It can also have functions like bark, wag tail, and fetch.
 */

let Dogs={
    breed: 'Bulldog',
    age: 2,
    color: 'white',
    bark: function(){
        console.log('Her dog barks a lot');
    },
    wagTail: function(){
        console.log('Her dog wag tail to express happiness');
    },
    fetch: function(){
        console.log('throw the ball');
    }
}

console.log(Dogs);
Dogs.bark()
Dogs.wagTail()
Dogs.fetch()

/**
 * Suppose you are building an e-commerce application and you want to create a new Product object with property name, 
 * price, manufacturer, category
 * Now add a description property to the Product object you created
 * Suppose the price of the Product object you created earlier changes. Now the price increased by $10
 * Remove the description property from the Product object you created earlier.
 */

let newProduct= {
    propertyName: 'Smart Phone',
    price:1000,
    manufacturer: 'Apple',
    category: 'Electronics'
}

console.log(newProduct);

newProduct.description= 'This is a great product';

console.log(newProduct);

newProduct.price= newProduct.price* 1.1

console.log(newProduct);

delete newProduct.description;

console.log(newProduct);

/**
 * Suppose you are building a blog application and you want to display a list of all the blog posts. 
 * You have an array of blog post objects, where each object has properties such as title, 
 * author, date, and content. Find out if date field is empty on any object
 */

let blog= [{
    title:'Horror in new york',
    author: 'Stephen King',
    date: '6/2/2000',
    content: 'horror',
    },
    {
    title:'Behind the closed doors',
    author: 'Jane smith',
    date: '6/2/2000',
    content: 'crime',
    },
    {title:'Behind the closed doors in new york',
    author: 'Jane smith',
    date: '',
    content: 'drama'}
]

let blogsDate=false;

for(let i=0; i<blog.length;i++){
    if (blog[i].date===''){
        blogsDate = true;
        break;
    }
}
console.log(blogsDate);
