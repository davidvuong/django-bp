#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.contrib import admin
from project.applications.users.models import User


class UserAdmin(admin.ModelAdmin):
    pass

admin.site.register(User, UserAdmin)
