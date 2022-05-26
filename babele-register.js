Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'kult-divinity-lost-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
