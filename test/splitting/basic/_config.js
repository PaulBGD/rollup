module.exports = {
    options: {
        bundles: [
            {
                entry: 'a.js',
                dest: 'bundles/a',
                includes(module) {
                    return module.indexOf('a.js') > -1;
                }
            },
            {
                entry: 'b.js',
                dest: 'bundles/b',
                includes(module) {
                    return module.indexOf('b.js') > -1;
                }
            },
            {
                dest: 'bundles/shared'
            }
        ]
    }
};