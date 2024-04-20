describe('jsdom', () => {
    it('should select', () => {
        const div = document.createElement('div');
        const none = div.querySelector('h1');
        expect(none).toBeNull();
    })
})