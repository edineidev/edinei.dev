---
tags: archlinux, aur
---

# 🚀Publicando seu primeiro pacote no AUR: Parte 1
O AUR (Arch User Repository) é um repositório comunitário do Arch Linux que contém PKGBUILDs — scripts que permitem compilar e instalar pacotes que não estão nos repositórios oficiais, criado e mantido pela comunidade Arch.
A instalação não é automática pelo pacman; normalmente se usa um **AUR helper** como `yay`, `paru`, etc...

Exemplo de uso com `yay`:
```bash
paru -S google-chrome
```
Isso baixa o PKGBUILD, compila e instala o pacote.

### Instalando `paru`
Como o yay não está no repositório oficial, você baixa o PKGBUILD e compila:
```bash
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Usando `yay`

![yay](media/yay.gif)

- Instalar um pacote (ex.: Google Chrome): `paru -S google-chrome`
- Atualizar tudo (incluindo pacotes do AUR): `paru -Syu`
- Procurar um pacote: `paru -Ss spotify`
- Remover um pacote: `paru -Rns nome-do-pacote`

⚠️ Lembrando: pacotes do AUR não são oficiais, então sempre confira o **PKGBUILD** antes de instalar (o yay até mostra isso para você revisar).

## Referencias
- https://wiki.archlinux.org/title/Arch_User_Repository
- https://github.com/Jguer/yay