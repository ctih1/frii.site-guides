# General frii.site translation guide
This guide consists of 3 parts:
* Requiremements
* How to create a new locale
* How to edit existing locales
* Best practices

## Requirements
You'll need the following to create, or update translations:
* A GitHub account
* Internet connection
* Fluency in both english and the target language


For creating a new locale:
* Knowledge of git
* Knowledge of JSON (specifically how arrays work)
---

<details>
<summary>Adding a new locale</summary>

## Adding a new locale
First of all, we need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the frii.site-frontend repo to be able to make changes to it. 

> [!CAUTION]
> Make sure to **deselect** "Copy the `master` branch only" when forking the repository.

![Image of forking the repo on github](/fork_frontend.png)


Adding a new locale requires a **new localisation file** inside the website's `messages` directory.


> [!NOTE]
> We will be using Estonian as an example in this guide, but the steps apply to every other language

0. Clone **your fork** and switch over to the `dev` branch before doing any modifications. 
> git clone https://github.com/your-username/frii.site-frontend

> git checkout dev

1. Find the *ISO 639-2 language code* for your language (https://www.loc.gov/standards/iso639-2/php/code_list.php)
![Estonian ISO 639-2 table highlightedd](/translation_key_estonian.png)
> Pick the second row's value, so "ET" in this case.

2. Copy the `en.json` file inside the `messages` folder, and rename it to your desired locale. (e.g `et.json`)

3. Add your language to `project.inlang/settings.json`s `languageTags` array.
![new item in languageTags array](/project_new_language.png)

Now push the changes to your fork.

**Now follow the locale editing guide**

</details>

<details>
<summary>Editing an existing locale</summary>
If you haven't already, please fork the repository

<details>
<summary>Forking the repo</summary>

First of all, we need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the frii.site-frontend repo to be able to make changes to it. 

> [!CAUTION]
> Make sure to **deselect** "Copy the `master` branch only" when forking the repository.

![Image of forking the repo on github](/fork_frontend.png)


</details>

<details>
<summary>Editing inside a website</summary>


Open https://fink.inlang.com/ and input your forks url
![Fink website](/fink_input.png)


Now change over to the `dev` branch
![fink_dev](/fink_dev.png)

Select your target language
![fink select language](/fink_select.png)

Now translate your sentences
![fink english sentence](/fink_before.png)
into your target language
![fink translated sentence](/fink_after.png)

Once you're done, log into fink 
![fink login button](/fink_login.png)
and push the changes to your fork.

</details>

<details>
<summary>Editing inside a code editor</summary>

Open up your language file, and start translating the sentences.

Once you're done, push the changes to your GitHub repo
</details>

After pushing your changes, open a **pull request** **from your dev branch** to **ctih1/frii.site-frontend dev branch**

> [!CAUTION]
> Pull requests that are trying to merge to the `master` branch will be discarded. 

![New pull request from dev to ctih1/dev](/pr_create.png)

</details>

<details>
<summary>Best practises</summary>

1. **DON'T USE FINK'S MACHINE TRANSLATION BUTTON**. It is extremely buggy, inaccurate, and breaks variables.

2. **Prioritize fluidity over accuracy to a certain extent**

Not everything has to be translated perfectly! You can alter the text as long as the sentence preserves its meaning and tone.

3. **Sound professional**
4. **Use variables correctly.**

Variables are pieces of text wrapped in curly brackets (`{}`). Please do not rename them. What you SHOULD do is move them around. For example, if the english sentence is `The domain {domain} was deleted`, you could translate it as `{domain} was deleted` in your language.

5. Join [our discord](/contact) for updates
</details>

