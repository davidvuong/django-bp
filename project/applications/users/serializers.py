#!/usr/bin/env python
# -*- coding: utf-8 -*-
from rest_framework import serializers
from project.applications.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ('id', 'email', 'is_admin', 'is_active',)
