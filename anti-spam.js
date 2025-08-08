const spamThreshold = 5; // Max. messages in the time window
const timeWindow = 10 * 1000; // Time window in ms (10 seconds)

const userMessageLog = new Map();

function isSpam(userId) {
    const now = Date.now();
    if (!userMessageLog.has(userId)) {
        userMessageLog.set(userId, []);
    }

    const timestamps = userMessageLog.get(userId);

    // Remove old timestamps
    const filteredTimestamps = timestamps.filter(ts => now - ts < timeWindow);
    filteredTimestamps.push(now);

    userMessageLog.set(userId, filteredTimestamps);

    return filteredTimestamps.length > spamThreshold;
}

function clearUser(userId) {
    userMessageLog.delete(userId);
}

module.exports = {
    isSpam,
    clearUser
};
