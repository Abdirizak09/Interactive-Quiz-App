# Interactive Quiz App

## Project Overview
This project is a **web-based Interactive Quiz App** that allows users to answer multiple-choice questions and receive immediate feedback with their final score. Built with vanilla JavaScript, it demonstrates core front-end development skills including DOM manipulation and event handling.

## Features
- Multiple-choice questions with dynamic rendering
- Real-time score tracking
- Progress indicator
- Timer functionality (optional)
- Final results display with restart option

## Project Structure
```
interactive-quiz-app/
│
├── index.html      # Main HTML structure
├── style.css       # Styling for quiz interface
└── script.js       # JavaScript logic for quiz functionality
```

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/interactive-quiz-app.git
   ```

2. Open `index.html` in a web browser

3. Take the quiz:
   - Select answers using click/tap
   - Progress through questions automatically
   - View final score at completion

## Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript**:
  - DOM manipulation
  - Event listeners
  - Dynamic content rendering

## Code Highlights
- Questions stored in JavaScript objects
- Responsive design for all screen sizes
- Score calculation logic
- Smooth transitions between questions

## Future Enhancements
- Add question categories
- Implement a countdown timer
- Create difficulty levels
- Add sound effects
- High score tracking
- Network functionality for question fetching

## Development Notes
To modify the quiz questions:
1. Edit the `questions` array in `script.js`
```javascript
const questions = [
  {
    question: "Sample question?",
    options: ["A", "B", "C"],
    correct: 0
  }
];
```

## License
MIT License - free for educational and personal use
