# Hangman Game

A classic word-guessing game built with vanilla HTML, CSS, and JavaScript.

## Overview

Hangman is an interactive web game where players guess letters to reveal a hidden word before running out of attempts. The game features multiple categories and visual feedback for correct and incorrect guesses.

## Features

- **Multiple Categories**: Choose from 6 different word categories:
  - Animals
  - Food
  - Jobs
  - Transport
  - Personal Items
  - Clothes

## How to Play

1. **Start**: Click the "Start" button on the home screen
2. **Select Category**: Choose a word category from the grid
3. **Play**: Click letter buttons to guess the word
4. **Win/Lose**:
   - Win by revealing all letters before 8 wrong guesses
   - Lose if you reach 8 wrong guesses
5. **Result**: See the complete word and play again or return to menu

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox layout, grid, and animations
- **JavaScript (ES5)**: DOM manipulation and game logic
- **sessionStorage**: Persist selected category between pages

## Game Mechanics

- **8 Strikes Limit**: Players have 8 wrong guesses before losing
- **Vowels & Consonants**: Separate button groups for letter selection, wrong vowel does not count as strike
-
- **Visual Feedback**:
  - Green text for correct guesses
  - Red text for wrong guesses
  - Hangman image progression with each error
- **Dynamic Word Display**: Shows revealed letters and remaining blanks

## Color Scheme

- **Primary Background**: `#1e293b` (Dark slate)
- **Accent Color**: `#38bdf8` (Sky blue)
- **Text**: `#f8fafc` (Slate light)
- **Success**: Greenyellow
- **Failure**: Red

## Fonts

- **Primary Font**: Bungee
- **Secondary Font**: Alfa Slab One
