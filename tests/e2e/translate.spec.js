describe('check language translation', function () {
	var host = 'http://rss-reader.azurewebsites.net',
		localhost = 'http://localhost:8080',
		uaText = 'Всі ваші улюблені інформаційні ресерси в одному місці',
		plText = 'Wszystkie twoje wiadomości ulubionych kanałów w jednym miejscu', 
		enText = 'All of your favourites news feeds in one place';
	it('should click on language button and change language', function () {
		
		browser.get(host);
		element(by.css('.select-lang-btn')).click();
		element(by.css('.ua')).click();
		expect(element(by.css('.test-lang')).getText()).toEqual(uaText);
		
		browser.get(host);
		element(by.css('.select-lang-btn')).click();
		element(by.css('.en')).click();
		expect(element(by.css('.test-lang')).getText()).toEqual(enText);
		
		browser.get(host);
		element(by.css('.select-lang-btn')).click();
		element(by.css('.pl')).click();
		expect(element(by.css('.test-lang')).getText()).toEqual(plText);
	})
})