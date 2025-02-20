const friend = "BRUTUS"
const shiftValue = 3;

//Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz"

//Step 2
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

//Question 1
//It can automatically cycle through each letter.

//Question 2
//It ensure that the loop doesn't go passed Z and stop. It will go back to A once the whole aplhabet has been gone through.