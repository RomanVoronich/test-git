# Консольные команды git
## Переименование ветки
```bash
git branch  -m old new
git push origin :old
git push -u origin new
```
## Переименование последнего коммита 
```bash
git commit --amend -m 'docs new name commit'
```

## Удаление ветки
```bash
git branch -D branch_name
```

## Добавление тэга
 ```bash
 git tag -a v1.0 -m 'version 1.0'
 ```
 
## Хук pre-commit
```
#!/bin/sh

npm run doc
npm run lint

``` 

## Слияние коммитов в один коммит
```
git reset --hard HEAD~12
git merge --squash HEAD@{1}
git commit
```
1
2
