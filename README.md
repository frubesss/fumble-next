# Fumble

> Anki/Flash card application powered by an Airtable backend.

![](./.github/fumble.gif)

This was created for [TotallyMoneys](https://www.totallymoney.com/) HackDay 2020.
 
The premise being that anybody who wants to learn about TotallyMoney and its 
employees can access the application and view facts in a flash card format when they have a bit of downtime.

It can be amended however for the cards to display whatever you like.

## Development

- Install dependencies:

```
npm install

or 

yarn install
```

- Create an [Airtable](https://airtable.com/) with any base name you want with the
fields CardTitle and CardDescription.

- Extract the Airtable api key from [here](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
and the base id from [here](https://airtable.com/api) and create a .env file
in the root of the application with the environment variables:

```dotenv
AIRTABLE_API_KEY=
AIRTABLE_BASE_KEY=
```

- Populate both CardTitle and CardDescription in your Airtable with any text you want.

- Run the application

```
npm dev

or

yarn dev
```

## Author

👤 Craig Robertson

* Website: [craigrobertson.me](https://craigrobertson.me)
* Github: [@frubesss](https://github.com/frubesss)
* Email: robetson.cra@gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if this project helped you!

## Inspiration

- [Care Cards](https://carecards.io/cards)

## Technology

- [Nextjs](https://nextjs.org/)
- [Airtable](https://airtable.com/)