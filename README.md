# Работа с GIT
---
## Содержание
- [Каким должен быть хороший коммит](#goodcommit)
- [Иерархия уровней настроек git](#settinglevel)
- [Сохранения изменений в git](#savechanges)
- [Настройка конфигурации в git](#config)
## <a id="goodcommit">Хороший коммит должен быть:</a>
	1. Атомарным(небольшое изменение - коммит)
	2. Консистентность(логически завершил изменения - коммит)
---
 
## <a id="settinglevel">Иерархия уровней настроек git</a>
	1. --system(системные)
	2. --global(конкретный пользователь)
	3. --local(конкретный проект)(default)
---

## <a id="savechanges">Система сохранения изменений в git</a>
	0. двуступенчатая (Рабочая директория - Индекс - Репозиторий)
	1. **git init** - *создание локального репозитория*
	2. **git status** - *взгляд на наш проект со стороны git(не отслеживаемые файлы, не закоммиченные файлы)*
	3. **git add "path"** - *добавление файла в Индекс(индексация); git add . - добавление всех неотслеживаемых файлов в Индекс*
	4. **git commit -m "Ваш коммментарий к коммиту"** - *сохранение отслеживаемых файлов в репозиторий(-m отвечает за комментарий)*
	5. **git push** - *отправить изменение на удаленный репозиторий*
---
	
## <a id="config">git config - настройка конфигурации</a>
	1. **user.name "name"** - *настройка имени юзера*
	2. **user.email "email"** - *настройка почты юзера*
	3. **core.editor "path"** - *настройка среды редактирования*
	4. **alias."ваше обозначение" "git-команда"** - *переименование git-команды на свое обозначение*
---
	
- **git show** - *просмотр текущего коммита*
- **git show "...."** - *просмотр определенного коммита*
- **git show --pretty=fuller** - *более подробная информация о коммите*
- **git commit --author= "Имя автора <email>" --date="..."** - *указание автора коммита*
---

### GIT не видит пустые директории
---

- **git reset HEAD ".idea"** - *сброс изменений в Индексе для каталога(в нашем случае .idea)*
- **git add -f** - *заставляет добавить в Индекс игнорируемые файлы*
- **git add -p "path"** - *git покажет каждые изменения в файле path и спросит, какие из них стоит сохранить*
- **git commit -a** - *файлы автоматически добавляются в индекс и репозиторий, git add в данном случае писать не нужно; но работает это только с уже отслеживаемыми файлами.*
- **git commit "path"** - *файл из указанного пути автоматически добавляется в индекс и репозиторий, git add в данном случае писать не нужно; но работает это только с уже отслеживаемым файлом.*
- **git rm -r "директория"** - *удаление файлов из рабочей директории и Индекса  (для директорий ставится флаг -r)*
- **git rm --cached "path"** - *удаление файла только из Индекса (в рабочей директории файл остается)*
- **git mv "old name" "new name"** - *переименование файла*