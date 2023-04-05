# Smart Shopping List

Welcome to the Smart Shopping List! This app is designed to help you keep track of items that you need to buy and how often you need to buy them. As a user, you will enter items (e.g., “Greek yogurt” or “Paper towels”) into your list. Each time you buy the item, you mark it as purchased in the list. Over time, the app comes to understand the intervals at which you buy different items. If an item is likely to be due to be bought soon, it rises to the top of the shopping list. Never forget to buy anything ever again!

This application is deployed [here](https://the-smart-shopping-list.netlify.app/).

## Project Demo

https://user-images.githubusercontent.com/70449557/227368430-2a6b862f-4fe4-487a-801d-f31c5d9272b0.mp4

## Development Team

This project was built as part of the [The Collab Lab's](https://the-collab-lab.codes/) program for early-career developers, by the TCL-51 cohort.

### Cohort Participants

- [Alejandro Rojas](https://github.com/kmachappy) 🐈‍
- [Aubrey Finkelstein](https://github.com/a-fink/) 🦉
- [Amanda DiNoto](https://github.com/Amanda2900) ⛄️
- [Amy Stanley](https://github.com/ameliasheppy) 🐾

### Mentors

- [Grace de la Mora](https://github.com/thetrend) 🎉
- [Devin Jaggernauth](https://github.com/mentalcaries) 👻
- [Luis Augusto](https://github.com/luisaugusto) 🚀

### Code of Conduct Contacts

- [Stacie Taylor](https://github.com/stacietaylorcima) 🙌

## Features

- Users can create a shopping list which will learn their buying habbits as they add/purchase items
- The list predicts when a user will next need to buy each item and provides status indicators to the user
- Users can share their list with others using a 3-word token

## Built With

- JavaScript
- React
- React Router
- FireBase
- Tailwind CSS

## Future Improvements

- Add a manual toggle switch for light and dark mode
- Allow users to edit item names
- Allow users to manually change the next purchase date estimate for items
- Allow users to uncheck an item that was marked as purchased
- Give users a way to delete their list token from local storage so they can start/join another list (does not delete list in database)
- Give users the option to delete their list entirely (delete from app & database)
- Automate clearing old/inactive lists from the database
- Manage the edge case where a user clearning their logins but not their local storage will require a refresh before they can access the database again
