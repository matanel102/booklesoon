class User{
    constructor(first, last, city){
        this.first=first;
        this.last=last;
        this.city= city;
        this.borrwedBooks=[];
    }
    borrow(book){
        if(!book.canBorrow){return; }
        this.borrwedBooks.push(book);
    }
}
let user1  = new User ('moshe','loki','tel aviv');
let user2  = new User ('hani','boganim','dimona');
let user3  = new User ('eden','arviv','yavna');

class Book{
    constructor(nameBook,AuthorName,canBorrow){
    this.nameBook=nameBook;
    this.AuthorName=AuthorName;
    this.canBorrow=canBorrow ? true : false;
    }

}
let book = new Book('mosheavesh','gori','lasa');
let book2 = new Book('yosi','oriant',false);
let book3 = new Book('readable content','many web', true);
let book4 =new Book('There are many','repeat predefined',true);
let book5 = new Book("simply","lteration in some form",false);

user1.borrow(book);
user1.borrow(book2);
user1.borrow(book3);
user1.borrow(book4);
user2.borrow(book3);
user2.borrow(book3);

class BookReport{
    constructor(name){
        this.name = name;
        this.users = [];
    }
    addNewUser(user){
        this.users.push(user);
    }
    printReport(){
        this.users.forEach(user => {
            console.log(`${user.first} ${user.last} from ${user.city} borrowed the following books:`);
            user.borrwedBooks.forEach(book => console.log(book.nameBook));
            });
    }

    isBorrwed(bookToCheck){
        return this.users.some(
            user =>user.borrwedBooks.includes(bookToCheck)
        );
    }
}
let a = new BookReport('repoort1');
a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
console.log(a.isBorrwed(book));
console.log(a.isBorrwed(book2));
console.log(a.isBorrwed(book5));


