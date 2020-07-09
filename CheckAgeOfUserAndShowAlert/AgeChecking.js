const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Hello ${userName}, ${userAge >= 18 ? 'You can see this video' : 'You are too young to see this video'}`);
    }

    return showName
}

const user1 = user("Steve", 20);
const user2= user("John", 17);
user1()
user2()

let anonim = user();
anonim()