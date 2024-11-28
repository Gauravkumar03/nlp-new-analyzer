function checkForName(url) {
    try {
        new URL(url); // Try to create a URL object
        return true;  // If successful, the URL is valid
    } catch (error) {
        return false; // If an error is thrown, the URL is invalid
    }
}

export { checkForName };
