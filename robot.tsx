const puppeteer = require('puppeteer')

async function ra() {
	return new Promise(async (resolve, reject) => {
		const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
		let urls = [
			'https://linkedin.com/WallisonLima/',
			'https://github.com/WallisonLima/Puppeteer'
		];
		let i = 0
		for (let each of urls) {
			console.log(each)
			let page = await browser.newPage();
			await page.setViewport({ width: 1920, height: 1080 });
			await page.goto(each);
			await page.screenshot({ path: 'screenshot' + i + '.png' });
			i++
		}
		resolve(browser.close())
	})

}
ra();

