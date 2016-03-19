# Django + AngularJS Boilerplate

[![Code style: pep8](https://img.shields.io/badge/code%20style-pep8-yellow.svg?style=flat-square)](https://www.python.org/dev/peps/pep-0008/)
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

**Welcome to django-bp!**

This is a simple kickstart project to get you setup with Django, DRF, and AngularJS. It's currently configured to use Django v1.9 and DRF (Django REST Framework) v3.3, running on the Python 2.7 runtime.

The AngularJS (v1.5) client-side app is configured to use ES6 (via Babel), Webpack for bundling, and SCSS as the CSS pre-processor. The source can be found under `/django-bp/ng/`.

For all other dependencies refer to the `project/requirements.txt` and `ng/package.json` files for Django and AngularJS respectively. Please continue reading for the setup guide.

## Getting Started

1. Clone the project repository:

  ```bash
  git clone https://github.com/davidvuong/django-bp
  ```

1. Create a virtualenv for your project:

  ```bash
  sudo easy_install pip
  sudo pip install virtualenv virtualenvwrapper

  mkvirtualenv django-bp
  add2virtualenv project
  ```

1. Install all the Python project dependencies:

  ```bash
  pip install -r requirements.txt
  ```

1. Install Node and all JavaScript project dependencies:

  ```bash
  nvm install 5.8.0
  nvm use 5.8.0

  cd django-bp/ng/
  npm install
  ```

## Configuring Django

Most of the configuration has already been completed (`/project/settings.py`) however, there are commands you need to run as a bit of initial configuration before you can start hacking.

1. Export the `DJANGO_SETTINGS_MODULE` environment variable.

  ```bash
  export DJANGO_SETTINGS_MODULE='project.settings'
  ```

1. Run the database migrations:

  ```bash
  python manage.py migrate
  ```

1. Create a `superuser` to access `django-admin`:

  ```bash
  python manage.py createsuperuser
  ```

In regards to the database, this kickstart has Django running on SQLite but you can obviously change it to use any RDBMS or NoSQL database you like. For simplicity and ease of configuration, I'm using SQLite.

## Executing `django-bp`

Whilst developing, there are 2 servers that you need to run. The first is `webpack-dev-server` and the other is your Django server. I like having everything running on the same window but split into screens.

![](assets/terminal.png)

```bash
# Bundles your client and starts the `webpack-dev-server`:
npm start

# Starts your Django server via the standard `manage.py`:
python manage.py runserver
```

**Note:** Please make sure you're in the `/django-bp/ng/` directory when running any client-side related commands.

## Online Resources

Unfortunately there aren't currently any resources online on how to setup a project which uses AngularJS + ES6 + Django + DRF but I have found resources that help on different areas:

* http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
* http://www.django-rest-framework.org/
* http://blog.thoughtram.io/angularjs/es6/2015/01/23/exploring-angular-1.3-using-es6.html
