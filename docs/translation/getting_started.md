# The official translation guide for frii.site 💬

## Requirements
* Being fluent in English and the other language.
* Basic knowledge of JSON, TypeScript, and GitHub
* An internet connection

## Getting started
### Setting up
Firstly, create a fork of this repo, after that, clone it, and switch over to the `dev` branch.


### (Optional) setting up Visual Studio Code
frii.site now supports i18n Ally extension. You can take advantage of it by simply installing the extension. The extension is most useful for developers, since it helps visualize translation keys

![Näyttökuva 2025-3-18 kello 19 50 35](https://github.com/user-attachments/assets/f0dcf6f7-00e1-4280-8b2f-d93b49da24f9)

![Näyttökuva 2025-3-18 kello 19 52 40](https://github.com/user-attachments/assets/8864cda2-a746-4350-bf40-9044035e0afe)

![Näyttökuva 2025-3-18 kello 19 53 26](https://github.com/user-attachments/assets/0f214460-ac0e-4cec-a32e-ed95a93b190b)

![Näyttökuva 2025-3-18 kello 19 53 43](https://github.com/user-attachments/assets/67ecc7b2-c2f7-42a6-b0b5-b088bf353732)

### Registering a new language
Registering a new language is pretty easy, but still requires multiple steps. We will be using the french language for this example
1. Add your language's name in its native languge in `src/locales/+lang.js`, like so: `"fr":"française"` (make sure you have basic knowledge of JSON)
2. Go to `src/lib/translations.ts`, and copy the first item in the "loaders" array.

<details>
<summary>Example</summary>

before: 
```ts
...
	loaders: [
		{
			"locale":"en",
			"key":"common",
			loader: async() => (
				await import("../locales/en.json")
			).default,
		},
		{
			"locale":"fi",
			"key":"common",
			loader: async() => (
				await import("../locales/fi.json")
			).default
		}
	]
...
```

after: 
```ts
...
	loaders: [
		{
			"locale":"en",
			"key":"common",
			loader: async() => (
				await import("../locales/en.json")
			).default,
		},
		{
			"locale":"fi",
			"key":"common",
			loader: async() => (
				await import("../locales/fi.json")
			).default
		},		
		{
			"locale":"fr",
			"key":"common",
			loader: async() => (
				await import("../locales/fr.json")
			).default
		}
	]
...
```

</details>

3. Now copy the `en.json` file in `src/locales`, rename it to your language's ISO-639 code, which is 2 letters long ([list can be found here](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), specifically the "Set 1" column)

4. Read this guide completely

5. Start translating

6. Credit yourself


## Rewards
You can get certain rewards for translating frii.site into your language.
make sure you include your frii.site username with in the pull request

| How many people speak it | Reward |
| ------------------------ | ------ |
| less than 5 million      | Added to the contributors |
| 5 million - 50 million   | 150 credits |
| 51 million - 99 million  | 350 credits |
| 100 million - 500 million| 500 credits |
| more than 500 million    | 800 credits |