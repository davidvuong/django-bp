# django-bp

**Welcome to Django bp!**

This is a kickstarter project to get you setup with Django 1.9 and Django REST Framework 3.3 using Python 2.7. All other dependencies can be found in the `requirements.txt` file. Please continue reading for the setup guide.

## System Requirements

I currently use a Mac as my development machine so all steps are specific to Mac OS (currently El Capitan) but I can't imagine it being all that different for Linux/Debian users.

Make sure you have the latest version of Xcode, Xcode CLI, Homebrew and Python 2.7.10 installed.

## Setup & Install

1. Clone the project repository:

  ```bash
  git clone https://github.com/davidvuong/django-bp my-project
  cd my-project
  ```

  *Making sure to rename `my-project` with your project name.*

1. Install pip, virtualenv, and virtualenvwrapper:

  ```bash
  sudo easy_install pip
  sudo pip install virtualenv virtualenvwrapper
  ```

  `virtualenvwrapper` requires a bit more configuration. You can find the instructions [here](https://virtualenvwrapper.readthedocs.org/en/latest/).

1. Create and use a new virtualenv:

  ```bash
  mkvirtualenv my-project
  add2virtualenv project
  workon my-project

  pip install --upgrade pip
  pip install -r requirements.txt
  ```

  *Again, making sure to rename `my-project` to your project name.*

## Configuration

1. Migrate your SQLite3 database:

  ```bash
  python manage.py migrate
  ```
