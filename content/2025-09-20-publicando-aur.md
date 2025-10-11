---
tags: archlinux, aur
---

# 🚀Publicando seu primeiro pacote no AUR: Parte 1
O AUR (Arch User Repository) é um repositório comunitário do Arch Linux que contém PKGBUILDs — roteiros que permitem compilar e instalar pacotes que não estão nos repositórios oficiais, criado e mantido pela comunidade Arch. A instalação não é automática pelo pacman; normalmente se usa um **AUR helper** como `paru` e etc...

## AUR e eu
No momento, tenho [2 pacotes no AUR](https://aur.archlinux.org/packages?SeB=m&K=neiesc) e vou desbravar nesses artigos. E você pode fazer isso também.

## Usando Paru

Exemplo de uso com `paru`:
```bash
paru -S google-chrome
```
Isso baixa o PKGBUILD, compila e instala o pacote.

### Instalando `paru`
Como o yay não está no repositório oficial, você baixa o PKGBUILD e compila:
```bash
sudo pacman -S --needed base-devel
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

### Usando `paru`

![paru](media/paru.gif)

- Instalar um pacote (ex.: Google Chrome): `paru -S google-chrome`
- Atualizar tudo (incluindo pacotes do AUR): `paru -Syu`
- Procurar um pacote: `paru -Ss spotify`
- Remover um pacote: `paru -Rns nome-do-pacote`

⚠️ Lembrando: pacotes do AUR não são oficiais, então sempre confira o **PKGBUILD** antes de instalar (o `paru` até mostra isso para você revisar).

## Gratidão 💚

Por chegar até aqui, aguarde os próximos artigos.

## Referencias
- https://wiki.archlinux.org/title/Arch_User_Repository
- https://github.com/Morganamilo/paru