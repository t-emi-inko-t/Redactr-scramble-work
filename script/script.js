function redactText() {
    const startTime = performance.now(); // Record start time
    const originalText = document.getElementById("originalText").value;
    const redactWords = document.getElementById("redactWords").value.split(" ");
    const replacementText = document.getElementById("replacementText").value;

    let redactedText = originalText;
    let wordsScanned = 0;
    let wordsRedacted = 0;

    for (const word of redactWords) {
        const trimmedWord = word.trim(); // Remove leading and trailing spaces
        if (trimmedWord) {
            const regex = new RegExp(trimmedWord, "gi");
            redactedText = redactedText.replace(regex, replacementText);
            wordsScanned += originalText.split(new RegExp(`\\b${word}\\b`, "gi")).length;
            wordsRedacted += originalText.split(new RegExp(`\\b${word}\\b`, "gi")).length - 1;
        }
    }

    const endTime = performance.now(); // Record end time
    const totalTime = ((endTime - startTime) / 1000).toFixed(2); // Calculate time in seconds
    const totalCharacters = redactedText.length;

    document.getElementById("result").innerHTML = redactedText;

    document.getElementById("stats").innerHTML = `Words Scanned: ${wordsScanned}<br>
        Words Redacted: ${wordsRedacted}<br>
        Total Characters Scrambled: ${totalCharacters}<br>
        Time Taken: ${totalTime} seconds`;
}
