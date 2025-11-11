// Spread Operator

const friends = ["shakil", "shahriyar"]

const schoolFriends = ["Golam rabbi", "imran", "nayem"]

const clgFriends = ["asim", "emon", "rakib"]

friends.push(...schoolFriends)
friends.push(...clgFriends)

console.log(friends);


const user = {
    name: "Arman",
    age: 24,
    address: "Dhaka"

    }

    const otherInfo = {
    profession: "student",
    country: "Bangladesh",
    hobby: "coding"
    }

    const userInfo = {...user, ...otherInfo}

    console.log(userInfo);

// Rest Operator

// const sentInvite = (friend1: string, friend2: string, friend3: string) => {
    
//     console.log(`Sent Invitatino to ${friend1}`);
    
// }

// sentInvite("shakil", "shahriyar", "asim");

const sentInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Sent Invitation to ${friend}`));
}

sentInvite("shakil", "shahriyar", "asim");