function unlockColumn(box, lessonId) {
    // Check if the lesson box is locked
    if (box.classList.contains('locked')) {
        // If locked, you can perform additional checks here, e.g., if the user has completed the lesson

        // Assuming you have determined the lesson can be unlocked
        // Change the class to 'unlocked'
        box.classList.remove('locked');
        box.classList.add('unlocked');

    }
}




