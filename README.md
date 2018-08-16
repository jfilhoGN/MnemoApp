# MnemoApp

Desenvolvimento de um aplicativo móvel para as disciplinas de História, Filosofia e Sociologia

## Telas

- Acesso do professor para cadastro de novos conteúdos
<div style="text-align:center"><img src ="/layout/admin.png" /></div>

- Tela de Apresentação do Aplicativo
<div style="text-align:center"><img src ="/layout/app1.png" /></div>

- Tela com os conteúdos da disciplina Filosofia
<div style="text-align:center"><img src ="/layout/app2.png" /></div>

- Tela com o conteúdo clicado pelo usuário (Friedrich Nietzsche)
<div style="text-align:center"><img src ="/layout/app3.png" /></div>

Autores:

	João Martins Filho
	Debson Picinin

Para o Desenvolvimento foram utilizados as seguintes ferramentas.

- **Django** - Ferramenta em *Python*, utilizado para desenvolver a parte do administrador, na qual adiciona os conteúdos que serão populados na aplicação móvel.

- **Flask** - *WebServer* em *Python* utilizado para popular o aplicativo móvel, cria *json* a partir dos conteúdos cadastrados no *Django*.

- **Ionic** - é um framework para desenvolvimento de aplicações para dispositivos móveis que visa o desenvolvimento de apps híbridas e de rápido e fácil desenvolvimento. Foi utilizado para criar o aplicativo móvel.

## Comandos utilizados

**Django**

```Shell
python manage.py runserver 127.0.0.1:8022
python manage.py makemigrations
python manage.py migrate
python manage.py startapp filosofia # criar model
```

**Flask**

```Shell
python2 web.py
```

**Ionic**

```Shell
ionic start mnemoAppV1 sidemenu
ionic g provider CallHistoria
ionic serve
ionic g pipe search
ionic generate page detalhesHistoria
```
