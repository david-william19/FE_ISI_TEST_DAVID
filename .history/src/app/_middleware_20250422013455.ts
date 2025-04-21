if (response.status === 401) {
    // Redirect to login page if unauthorized
    window.location.href = '/login';
    return; // Stop further execution
}