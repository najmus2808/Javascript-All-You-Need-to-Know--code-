/**
 * Marge array with concat methods
 */
const friends = ["Rakib", "Fahim", "Fakhrul"];
const newFriends = ["Sakib", "Jubair", "Arpan"];

const allFriends = friends.concat(newFriends);

console.log("All Friends =>", allFriends);

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];

const AllPeoples = allFriends.concat(hege, stale);

console.log("All Peoples =>", AllPeoples);
