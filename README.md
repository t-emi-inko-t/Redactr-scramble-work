# Redactr-scramble-work
ASSIGNMENT: REDACTR - SCRAMBLE SOME WORDS FROM A BODY OF TEXT CONTENT
Scenario:
Your app is to help people safely share content on social media by scrambling
portions of the text they don’t want the world to read/see. A user will write/paste
some content into a form field and then specify the words that must be scrambled
(using another field). Note that the user can specify more than one word (separated
by space) to be scrambled.
Outcome:
After clicking a “Redact Now” button, the app scans through the original text and
replaces the specified words to be scrambled with asterisks (i.e ****)
Advanced features (OPTIONAL- build any, some or all if you feel up to it)
● Allow the user to specify what to use in replacing the words so that the app can
do the scrambling with what the user provides, be it asterisks, question marks,
dashes, underscores, or even other words.
● Display stats like how many words were scanned, how many matched the words
to be scrambled, how many characters were scrambled in total, how long it
took (in seconds) to complete the scrambling task etc.


SOLUTION TO THE ABOVE ASSIGNMENT!
1. HTML (index.html): This is the web page structure. It contains the content you see on a web page. It includes:
   - A title for the page: "Redactr - Scramble Text."
   - A container to hold the content.
   - A heading (h1) with the title.
   - A form with input fields for the user to enter text, words to redact, and replacement text.
   - A button labeled "Redact Now" to perform the redaction.
   - A result area to display the redacted text.

2. CSS (styles.css): This file contains the styling instructions for the HTML elements. It makes the web page look better and ensures it adapts to different screen sizes. It includes:
   - Setting a light blue background for the whole page.
   - Styling the container to have a white background, rounded corners, and a shadow to make it stand out.
   - Centering the text in the heading and the form.
   - Styling the input fields and buttons to have padding, colors, and rounded edges.
   - Adding a result area with a light gray background and borders.

3. JavaScript (script.js): This code handles the interaction on the web page. It includes:
   - A function called `redactText` that runs when you click the "Redact Now" button.
   - Inside the function, it collects the text you entered, the words to redact, and the replacement text.
   - It then goes through the original text, finds the specified words (ignoring case and removing leading/trailing spaces), and replaces them with the replacement text.
   - Finally, it displays the redacted text in the result area on the page.
