function connectToDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isConnected) {
                resolve('Database connected successfully.');
                console.log('Database connection established.');
            } else {
                reject('Failed to connect to the database.');
                console.log('Database connection failed.');
            }
        }, 100);
    });
}
