# Git

Para poder identificar que una carpeta tenga git podemos usar el comando `ls -a` para poder listar archivo ocultos y verificar que la carpeta `.git` exista

## Como podemos saber a que url (remota) esta vinculado nuestro proyecto

Podemos usar 2 comandos

```bash
git remote -v
# origin https://github.com/entertechschool/lima-code-201n3 (fetch)
# origin https://github.com/entertechschool/lima-code-201n3 (push)
```

```bash
git remote show origin
# * remote origin
#   Fetch URL: https://github.com/entertechschool/lima-code-201n3
#   Push  URL: https://github.com/entertechschool/lima-code-201n3
#   HEAD branch: main
#   Remote branch:
#     main tracked
#   Local branch configured for 'git pull':
#     main merges with remote main
#   Local ref configured for 'git push':
#     main pushes to main (up to date)
```

## gitignore

Permite ocultar archivos o carpeta para que no sean visibles por `git`

Nota:
Recuerden que cuando creen su archivo el nombre debe ser el siguiente:

`.gitignore`
