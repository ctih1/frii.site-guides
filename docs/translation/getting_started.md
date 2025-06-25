# Contributing to an existing language
1. Fork this repo, and switch over to the dev branch
```git clone https://github.com/ctih1/frii.site-frontend && cd frii.site-frontend && git checkout dev```

Now open https://fink.inlang.com/ and input your forks url
![Fink website](/fink_input.png)


Now change over to the `dev` branch
![fink_dev](/fink_dev.png)

Change to your target language
![fink select language](/fink_select.png)

Now translate your sentences
![fink english sentence](/fink_before.png)
into your target language
![fink translated sentence](/fink_after.png)

Once you're done, log into fink 
![fink login button](/fink_login.png)

And now push the changes into your repository.

Now create a pull request into the `dev` branch of frii.site.
![New pull request from dev to ctih1/dev](/pr_create.png)

# Creating a new locale
1. Fork this repo, and switch over to the dev branch


```git clone https://github.com/ctih1/frii.site-frontend && cd frii.site-frontend && git checkout dev```

2. Copy the `en.json` file (located in `messages/en.json`) into the same directory, and change the name to your language (e.g Italian: it, Polish: pl, French: fr)

![translation](/translation_copy.png)
![translation](/translation_paste.png)
![translation](/translation_rename.png)


3. Add your language to `project.inlang/settings.json`s `languageTags` array.
![new item in languageTags array](/project_new_language.png)

<details>
<summary>Editing using your code editor (recommended)</summary>
Open your new `.json` file located in the `messages` directory, and translate the sentences into your language. 

> [!WARNING]
> Do **NOT** translate variables (text wrapped in {}) inside sentences. Variables such a `{domain}` and `{email}` can not be translated, as they would stop working. You can move these variables around the sentence itself, but you can not move them into other sentences, or delete them.

**After you're done editing**, push the changes into your fork (`git push origin dev`)
Now create a pull request into the `dev` branch of frii.site.
![New pull request from dev to ctih1/dev](/pr_create.png)

</details>

<details>
<summary>Editing using a web editor</summary>

Firstly, push the changes into your fork (`git push origin dev`)

Now open https://fink.inlang.com/ and input your forks url
![Fink website](/fink_input.png)


Now change over to the `dev` branch
![fink_dev](/fink_dev.png)

Change to your target language
![fink select language](/fink_select.png)

Now translate your sentences
![fink english sentence](/fink_before.png)
into your target language
![fink translated sentence](/fink_after.png)

Once you're done, log into fink 
![fink login button](/fink_login.png)

And now push the changes into your repository.

Now create a pull request into the `dev` branch of frii.site.
![New pull request from dev to ctih1/dev](/pr_create.png)

</details>


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