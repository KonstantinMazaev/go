### Проверка версии git
```shell
git --version
```

# Глобальная настройка Git
__________________________
### Вводим имя пользователя от аккаунта github.com
```shell
git config --global user.name "KonstantinMazaev"
```
### Вводим почту от аккаунта github.com
```shell
git config --global user.email "mazaj.ru@mail.ru"
```
### Проверка глобальных настроек
```shell
git config --list
```

### Настройка ошибок
```shell
git config --global core.safecrlf warn
```

### Настройка для юникода
```shell
git config --global core.quotepath off
```

### Настройка для windows
```shell
git config --global core.autocrlf true
```
### Настройка для linux
```shell
git config --global core.autocrlf input
```
# Работа с проектом
___________________
### Инициализация git репозитория
```shell
git init
```
### Текущее состояние репозитория
```shell
git status
```
### Добавить в трек (отслеживаемые) файл или папку
```shell
git add index.html
```
### Добавить все файлы из корня в трек (отслеживаемые)
```shell
git add .	
```
### Выполнить коммит (сделать слепок) текущего состояния проекта
```shell
git commit -m "сообщение"
```
### Посмотреть историю коммитов
```shell
git log --oneline 
```
# Просмотр истории изменения
____________________________
### Просмотр изменения
```chell
git diff
```
### Просмотр изменения по строкам 
```shell
git diff --color-words
```
# Отменить коммит "ПЕРЕПИСЫВАЕТ ИСТОРИЮ"
________________________________________
### Вернуться к старому коммиту но оставить текущие изменения
```shell
git reset 'HASH commit'
```
### Вернуться к коммиту и удалить все изменения
```shell
git reset --hard 'HASH commit'
```
### Откатить изменения у всех файлов трека
```shell
git checkout .
```
### Откатить изменения в одном файле или каталоге
```shell
git checkout name.file
```
### Отправить изменения в удалённый репозиторий
```shell
git push
```
### Клонирование репозитория
```shell
git clone http://github.com/имя_пользователя/имя_репозитория.git
```
### Сохраняет изменения отслеживаемых файлов и выполняет коммит
```shell
git commit -a -m 'сообщение'
```
# go
