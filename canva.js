const puppeteer = require('puppeteer')




async function login(browser){

	let page = await browser.pages()
	page = page[0]
	await page.setViewport({ width: 1920, height: 1080});
	await page.goto('https://www.canva.com/login');
	

	

	return page

}

async function createCopy(page){

	//foi para pagina do templat
	await new Promise(r => setTimeout(r, 3000))
	await page.goto('https://www.canva.com/design/DAENsbKzwA0/G453lX9IypHrQjtz3z2qRQ/edit');
	await new Promise(r => setTimeout(r, 300))
	//clicar no botao de ARQUIVO
	await clickbytext(page, 'Arquivo')
	await new Promise(r => setTimeout(r, 3000))
	//clicar em FAZER UM COPIA
	await clickbytext(page, 'Fazer uma cópia')
	//ir para a aba nova

	await new Promise(r => setTimeout(r, 3000))
}


async function ra() {

	const browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
	
	const urls = [
	'http://go.phot.re/HMXDA',
	];

	for(let i = 0; i < 20; i++){
		
		const page = await browser.newPage();

		await page.setViewport({ width: 1920, height: 1080});
		
		await page.goto(urls[0]);
	}




	
}


async function modifyCopy(browser, url){

	let pages2 = await browser.pages()

	page = pages2[1]

	await new Promise(r => setTimeout(r, 3000))
	await page.setViewport({ width: 1920, height: 1080});
	//clicar em CLIQUE AQUI de acordo com coordenadas
	await page.mouse.click(1073, 800)
	await new Promise(r => setTimeout(r, 300))
	//clicar em INSERIR LINK
	await page.mouse.click(1790, 84)
	await new Promise(r => setTimeout(r, 3000))
	await page.mouse.click(1535, 173)

	let i = 0 

	while(i != 200){
		await page.keyboard.press('Backspace')
		i++
	}
	

	await page.keyboard.type(url)
	await new Promise(r => setTimeout(r, 300))
	await clickbytext(page, 'Aplicar')
	await new Promise(r => setTimeout(r, 300))

	await clickbyattr(page, 'aria-haspopup', 'menu', 1)

	await new Promise(r => setTimeout(r, 2000))

	await clickbyattr(page, 'aria-label', 'Site')

	await new Promise(r => setTimeout(r, 300))
	await clickbytext(page, 'presen')

	await new Promise(r => setTimeout(r, 300))
	await clickbytext(page, 'olagem')

	await new Promise(r => setTimeout(r, 300))
	await clickbytext(page,'brir')

	await new Promise(r => setTimeout(r, 1000))

	pages2 = await browser.pages()

	page2 = pages2[2]

	await page.close()


	console.log(await page2.url())

	await page2.close()
}
ra();

async function clickbytext(page, text, number = 0){

	let el = await page.$x("//*[contains(text(), '"+text+"')]");

	console.log(el.length)

	if (el.length > 0) {
		await el[number].click()
	} else {
		console.log('não encontrado '+text)
	}
}

async function clickbyattr(page, attr, value, number = 0){

	let el = await page.$x("//*[@"+attr+"='"+value+"']")

	console.log(el.length)

	if (el.length > 0) {
		await el[number].click()
	} else {
		console.log('não encontrado '+attr)
	}
}