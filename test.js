(function () {
    const start = async function () {

        // for (let i = 0; i < 8; i++) {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = await browser.newPage();
        await page.goto("https://ais.usvisa-info.com/en-et/niv/users/sign_in")


        await page.waitForSelector(".string.email.required");
        // await page.type(".string.email.required", emails[i].user);
        await page.type(".string.email.required", "travelmuaz99@gmail.com");
        // await page.type("#user_password", emails[i].pass);
        await page.type("#user_password", "Muazmusa@123");
        await page.waitForSelector("#sign_in_form > div.radio-checkbox-group.margin-top-30 > label > div")
        await page.click("#sign_in_form > div.radio-checkbox-group.margin-top-30 > label > div")
        await page.click(".simple_form.new_user p input")

        await page.waitForSelector(".medium-6.columns.text-right ul li a");
        await page.click("#main > div:nth-child(2) > div.mainContent > div:nth-child(1) > div > div > div:nth-child(1) > div.medium-6.columns.text-right > ul > li > a")
        await delay(2000)
        await page.waitForSelector(".fas.fa-money-bill-alt");

        await page.click(".fas.fa-money-bill-alt")
        await delay(2000)
        await page.waitForSelector('#forms > ul > li:nth-child(1) > div > div > div.medium-10.columns > p:nth-child(2) > a');
        await page.click('#forms > ul > li:nth-child(1) > div > div > div.medium-10.columns > p:nth-child(2) > a')
        // await page.waitForSelector('[href="/en-et/niv/schedule/47838821/payment"]');
        // await page.click('[href="/en-et/niv/schedule/47838821/payment"]')
        await page.waitForSelector('#paymentOptions > div.medium-3.column > table > tbody > tr > td.text-right');
        const slotDate = await page.$eval("#paymentOptions > div.medium-3.column > table > tbody > tr > td.text-right", el => el.textContent)
        console.log(slotDate + "Hurry up and book")
        const regex = new RegExp("April")
        const regex1 = new RegExp("May")

        if (regex.test(slotDate) || regex1.test(slotDate)) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'abudi4947@gmail.com',
                    pass: 'qwfwkzqgjiasjdqh'
                }
            });

            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Server validation done and ready for messages.')
                }
            });

            let details = {
                from: "abudi4947@gmail.com",
                to: "abudi4947@gmail.com",
                subject: "CLOSE DATE FOUND!",
                text: slotDate
            }

            transporter.sendMail(details, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("email has been sent!")
                }
            })
        }

        await browser.close()
        // await delay(60000)
        // }






    }
    start()

    setInterval(start, 5000)
})();