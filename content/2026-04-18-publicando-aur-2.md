---
tags: archlinux, aur
banner_image: media/2026-04-18-aur2.png
---

# 🚀Publicando o seu primeiro pacote no AUR: Parte 2 Subindo seu PKGBUILD
Após a publicação do [primeiro artigo sobre AUR (Arch User Repository)](publicando-aur) onde foquei no **AUR helper** `paru`. Agora vamos ver como publicar seu primeiro pacote e mantê-lo no [AUR](https://aur.archlinux.org) os famosos `PKGBUILD`.

## Dependências
Primeiro, vamos precisar instalar o `sudo pacman -S base-devel`.

## Arch Packaging Standards
Recomendo fazer a leitura da wiki [Arch Packaging Standards](https://wiki.archlinux.org/title/Arch_package_guidelines_(Portugu%C3%AAs)).

### Exemplo para o PKGBUILD
```
# Maintainer: Seu nome <seu-email@domínio.com>
pkgname=NOME
pkgver=VERSÃO
pkgrel=1
pkgdesc=""
arch=()
url=""
license=('GPL')
groups=()
depends=()
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=($pkgname-$pkgver.tar.gz)
noextract=()
md5sums=() #gerado com updpkgsums

build() {
  cd "$pkgname-$pkgver"

  ./configure --prefix=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"

  make DESTDIR="$pkgdir/" install
}
```

Para outros exemplos veja na pasta `/usr/share/pacman/`.

## .SRCINFO
.SRCINFO é um metadado para não precisar analisar o PKGBUILD diretamente.

```shell
makepkg --printsrcinfo > .SRCINFO
```

## Envio ao AUR
Recomendo fazer a leitura da wiki [Envio ao AUR](https://wiki.archlinux.org/title/AUR_submission_guidelines_(Portugu%C3%AAs))

Exemplo completo para publicar os pacotes:
```shell
makepkg --printsrcinfo > .SRCINFO
git add PKGBUILD .SRCINFO
git commit -m "mensagem útil de commit"
git push
```

## Gratidão 💚

Por chegar até aqui, aguarde os próximos artigos.

## Referencias
- https://wiki.archlinux.org/title/AUR_submission_guidelines
