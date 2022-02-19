console.log('hello world');

const label = document.getElementById("friend-label")
const input = document.getElementById("friend-input")
const button = document.getElementById("friend-submit")

let friendName;
let friendCount = 0;

function friendNameUpdate() {
    friendName = input.value
    console.log(friendName)
    friendCount = friendCount + 1;
    label.innerText = friendName + " is your friend! You have total " + friendCount + " friend(s)."
    button.innerText = "Tell me another friends of yours!"
    input.value = ""
}