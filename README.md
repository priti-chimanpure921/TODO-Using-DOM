# 📝 To-Do App (Mini Project)

A simple and interactive To-Do List Application built using Vanilla JavaScript, focusing on DOM manipulation and Event Delegation for efficient event handling.

This project demonstrates core JavaScript concepts essential for frontend development.

# 🚀 Features

➕ Add new tasks

❌ Delete tasks dynamically

⚡ Efficient event handling using Event Delegation

🧠 Clean and minimal UI logic

📌 Real-time DOM updates

# 🛠️ Technologies Used

HTML

CSS

JavaScript (DOM Manipulation)

# 📚 Concepts Covered

document.querySelector()

createElement()

appendChild()

addEventListener()

Event object handling

Event Delegation

Dynamic element creation

DOM traversal (parentElement, nodeName)

# 💡 How It Works
1️⃣ Adding a Task

* User enters text in the input field.

* On button click:
  <ul>
    <li>  A new 'li' element is created.</li>
    <li>A Delete button is appended to it.</li>
    <li>  The task is added to the 'ul' list.</li>
    <li>Input field is cleared.</li>
  </ul>
2️⃣ Deleting a Task (Event Delegation)
Instead of attaching a click event to every delete button, a single event listener is added to the 'ul' element. 
When any child element inside 'ul' is clicked the event bubbles up. 
If the clicked element is a BUTTON, its parent 'li' is removed.
<br><br>
<b>This approach improves:</b>

✅ Performance

✅ Memory efficiency

✅ Scalability

# 🎯 Learning Outcome

Through this project, I strengthened my understanding of:

DOM structure and manipulation

Event bubbling

Event Delegation pattern

Writing clean and efficient JavaScript

# 📌 Future Improvements

✅ Add Local Storage support

✏️ Edit task functionality

📱 Improve UI with better styling

⌨️ Add Enter key support
