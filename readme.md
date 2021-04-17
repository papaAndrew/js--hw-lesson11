## Домашнее задание

[![codecov](https://codecov.io/gh/papaAndrew/js--hw-lesson11/branch/setup-project/graph/badge.svg?token=KFsX62dDYL)](https://codecov.io/gh/papaAndrew/js--hw-lesson11)

Приложение "Прогноз погоды"
Цель: В задании тренируются навыки:

- работы с тестовыми системами
- использование базового синтаксиса js
- публикация кода с помощью сервиса githubpages

Во время выполнения задания вы:

- примените знания по созданию базовых страниц для отображения информации
- познакомитесь с основными инструментами, упрощающими жизнь разработчика

1. Создайте страницу:

1.1 при открытии страницы пользователь видит погоду (город, температуру и иконку) в своей местности (для получения прогноза погоды используйте https://openweathermap.org/current )
1.2 он может ввести имя города в поле ввода и увидеть погоду в выбранном городе
1.3 введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду
1.4 при клике по строчке города в списке он видит погоду в выбранном городе
1.5 кроме информации о погоде покажите в центре страницы карту для введенного адреса (используйте Google Maps Statis API https://developers.google.com/maps/documentation/maps-static/start )

2. Проверить покрытие кода тестами, и добавить проверку покрытия при запуске `test` скрипта. Покрытие должно быть не ниже 60%

Критерии оценки: Критерии оценки:

- создан репозиторий на гитхабе, проект c package.json, настроены линтеры, хаски, github actions - 2
- настроены `dev` и `build` скрипты, сборка делается с помощью с использованием webpack - 2

- при открытии страницы пользователь видит свой город и прогноз погоды в своем городе - 2
- пользователь может ввести адрес/город и увидеть прогноз погоды - 2
- введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду (записи в истории не повторяются) - 2
- при клике по строчке города в списке истории он видит погоду в выбранном городе - 2
- вместе с погодой показывается картинка карты местности для точки - 2

- сделана публикация на githubpages (с помощью github action) - 2
- покрытие кода выше 60 %, покрытие проверяется на CI - 2

- ссылка на страницу для просмотра погоды добавлена в адрес страницы репозитория - 1
- в репозитории есть README.md, который содержит описание проекта (что делается, зачем, где смотреть) и описывает структуру проекта - 1
- в README.md есть badge для отображения статуса проверок на основной ветке (линтеры и тесты) - 1
