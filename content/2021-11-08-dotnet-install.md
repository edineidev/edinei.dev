---
tags: hardskill,dotnet,productivity
banner_image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyvyzqzouqfi53smfmie4.jpg
---

# 💻.NET Installation Scripts for Linux, macOS, and Windows

Sempre gostei de automação seja usando [Chocolatey](https://chocolatey.org/), Python, Bash, Powersheel etc... tenho até um [dotfiles (GNU/Linux Ubuntu e Windows 10)](https://github.com/neiesc/dotfiles), depois que fiquei sabendo que o dotnet tem uma documentação sobre instalar dotnet com scripts resolvi compartilhar, pois, pode passar despercebido para muitos.

![Download .NET](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lvno8936skoa4rx6omol.png)

O site [.NET Install scripts](
https://dotnet.microsoft.com/download/dotnet/scripts) como no próprio site fala scripts para instalar .NET Core no Linux, macOS e Windows. Na [documentação](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script?WT.mc_id=dotnet-35129-website) tem o modo de uso sendo bem simples:

![.NET Install scripts](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4m2m4xu0jwerql0t1jp.png)

Exemplos para instalar versão LTS:

No Windows:
```powershell
&powershell -NoProfile -ExecutionPolicy unrestricted -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; &([scriptblock]::Create((Invoke-WebRequest -UseBasicParsing 'https://dot.net/v1/dotnet-install.ps1'))) -Channel LTS"
```

Linux/macOS:
```bash
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel LTS
```

PS1: Caso você tenha o dotnet já instalado é recomendado você remover todos e instalar em forma de script como esse post mostra.