function redactText() {
    const originalText = document.getElementById("originalText").value;
    const redactWords = document.getElementById("redactWords").value.split(" ");
    const replacementText = document.getElementById("replacementText").value;

    let redactedText = originalText;
    for (const word of redactWords) {
        const trimmedWord = word.trim(); // Remove leading and trailing spaces
        if (trimmedWord) {
            const regex = new RegExp(trimmedWord, "gi");
            redactedText = redactedText.replace(regex, replacementText);
        }
    }

    document.getElementById("result").innerHTML = redactedText;
}
