My React Project for Softuni (https://softuni.bg/) exam - 09.04.2023

EN-version

Simple website for creating jobs and track stats.
It uses own REST server and MongoDB Atlas as database for the backend.

Supported functionality: login, register, logout, create, delete, search. There is one demo user which you can use to explore the app, but you cannot modify or create content. To access demo version just click "Demo" button on register or login page. Only the creator can modify it's own content. Authorization for users in session uses JWT token. Passwords for users are stored hashed in database using Bcrypt.

package.json for client installs ReactJS and some additional libraries like Axios, Recharts etc...

Important... Server is not included in repo and is hosted separate from client.

Required version of NodeJS: 16.18.0 and up

Live demo here: http://b8e00a7b5ca8.sn.mynetname.net:3001

Local installation:

1. Install NodeJS
2. Download zipped folder from Github repo
3. Unzip and open terminal in unzipped folder
4. Run: nmp -i command (this will install needed dependancies for application so it can run)
5. Run: npm start in the same folder (this will start ReactJS development server)
6. Open browser at http://localhost:3006 or http://127.0.0.1:3006
7. Enjoy

Author: Petar Zhelev

---

БГ-версия

Уебсайт за създаване обяви за работа и следене на статистика.
Приложението използва собствен REST сървър и MongoDB Atlas за база данни.

Поддържани функционалности: login, register, logout, create, delete, search. Има демо потребител, чрез който може да се разгледа приложението, но не може да се създава или редактира съдържание. За демо версията просто кликнете върху "Demo" бутона, който се намира на register и login формата. Всеки потребител може да редактира само неговото съдържание. Автентикацията се осъществява посредством JWT токен. Паролите на потребителите се държат хеширани в базата данни посредством Bcrypt.

package.json в клиента инсталира ReactJS и някои допълнителни библиотеки като Axios, Recharts и т.н.

Важно... Сървъра не е включен в репо-то и е хостнат отделно от клиента.

Използва се версия на NodeJS: 16.18.0 или по нова.

Демо на приложението може да видите тук: http://b8e00a7b5ca8.sn.mynetname.net:3001

Локална инсталация:

1. Инсталирайте NodeJS
2. Свалете архивирания .zip файл от Github repo
3. Разархивирайте и отворете терминал в разархивираната папка.
4. Стартирайте командата npm -i (това ще инсталира нужните пакети за да работи приложението)
5. Стартирайте командата npm -start в същата папка (това ще стартира ReactJS development server)
6. Можете да достъпите приложението на http://localhost:3006 или http://127.0.0.1:3006
7. Забавлявайте се

Автор: Петър Желев
