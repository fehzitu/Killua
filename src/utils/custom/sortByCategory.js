module.exports = function sortByCategory(data, path, descending = true) {
    return Object.entries(data)
        .sort(([, a], [, b]) => {
            const valueA = path.split('.').reduce((obj, key) => obj[key], a);
            const valueB = path.split('.').reduce((obj, key) => obj[key], b);

            return descending
                ? valueB - valueA
                : valueA - valueB;
        })
        .map(([id, profile]) => ({
            id,
            ...profile
        }));
};