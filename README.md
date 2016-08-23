# test git 
## rename branch 
```bash
git branch  -m old new
git push origin :old
git push -u origin new
```
## rename last commit 
```bash
git commit --amend -m 'docs new name commit'
```

## remove branch
```bash
git branch -D branch_name
```

## new annotatiton tag
 ```bash
 git tag -a v1.0 -m 'version 1.0'
 ```
 