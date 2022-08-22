// ---------------№1---------------

// const playlist = {
//     name: 'Мій супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName) {
//         this.name = newName;
//     },
//     updateRating(newRating) {
//         this.rating = newRating;  
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// playlist.changeName('Новий плейлист');
// playlist.updateRating(4);
// playlist.addTrack('трек-4');
// playlist.addTrack('трек-5');

// console.log(playlist.getTrackCount());
// console.log(playlist);

/* 
 * Перебор через for...in та Object.keys|values|entries
 */

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keysOfFeedback = Object.keys(feedback);
// console.log(keysOfFeedback);

// for (const key of keysOfFeedback) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

// const valuesOfFeedback = Object.values(feedback);
// // console.log(valuesOfFeedback);

// for (const value of valuesOfFeedback) {
//     totalFeedback += value;
// }

// console.log(totalFeedback);

/* 
 * Робота з колекцією (масивом об'єктів)
 */

// const friends = [
//     { name: 'Mango', online: true },
//     { name: 'Kiwi', online: false },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// console.table(friends);

/*
Пошук друга за іменем
*/

// function findFriendByName (allFriends, name) {
//     for (const friend of allFriends) {
//         if (friend.name === name) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Sasha'));

/*
Отримати імена всіх друзів
*/

// function getAllNames (allFriends) {
//     const arrOfNames = [];
    
//     for (const friend of allFriends) {
//         arrOfNames.push(friend.name);
//     }
    
//     return arrOfNames;
// }

// console.log(getAllNames(friends));

/*
Отримати імена друзів, які онлайн та оффлайн
*/

// function getOnlineFriends (allFriends) {
//     const onlineFriends = [];
//     for (const friend of friends) {
//         if (friend.online) {
//             onlineFriends.push(friend.name);
//         }
//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// function getOfflineFriends (allFriends) {
//     const offlineFriends = [];
//     for (const friend of friends) {
//         if (!friend.online) {
//             offlineFriends.push(friend.name);
//         }
//     }

//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

/*
Повернути об'єкт з двома властивостями - масивами онлайн та офлайн
*/

// const friends = [
//     { name: 'Mango', online: true },
//     { name: 'Kiwi', online: false },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
         
//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));

/* 
Кількість властивостей в об'єкті 
*/

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
}

console.log(Object.keys(x).length);
