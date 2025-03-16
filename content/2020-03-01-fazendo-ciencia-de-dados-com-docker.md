---
tags: hardskill,devops,container,datascience
banner_image: media/0_nlH1B06zKjrzttbX.webp
---

# 🐳Fazendo ciência de dados com docker

Supondo que você já
tenha [docker instalado e devidamente configurado seja Windows/Linux/Mac](https://docs.docker.com/get-docker/). Temos
uma [ documentação sobre as imagens do Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html)
se quiser uma outra configuração vamos usar a `jupyter/datascience-notebook` mas temos diversas outras.

Usando o `docker run`:

```shell
docker run --rm -p 10000:8888 -e JUPYTER_ENABLE_LAB=yes -v .\my-notebook:/home/jovyan/work jupyter/datascience-notebook
```

![Veja que o token do jupyter será exposto e será usado a porta 8888 mas vamos usar 10000](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yo48b43mkv8sis8ytgo6.png)

Ficando no final http://127.0.0.1:10000/?token=6f2fa7151f0fa43cd17af52a830bb76114e20e9b3cd31078 ao acessar:

Imagem do launcher do jupyter
![Imagem do launcher do jupyter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kdndhbqjt3wgv98w0ysz.png)

Vamos selecionar a pasta work
![Vamos selecionar a pasta work](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jgpbrrkjgf8qvz0nj5j.png)

E escolher Python 3 no Notebook
![E escolher Python 3 no Notebook](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ovbs4i5bib0ll2l9c42.png)

Escrever `!python — version`
![Escrever !python — version](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4h8jkexyesg3ahdapk64.png)

Vamos notar que o nosso arquivo Untitled.ipynb do jupyter foi para nosso host.
![Vamos notar que o nosso arquivo Untitled.ipynb do jupyter foi para nosso host.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/szlhedvngezcqiu6hb7h.png)

Creditos:
- https://towardsdatascience.com/docker-jupyter-for-machine-learning-in-1-minute-30e1df969d09