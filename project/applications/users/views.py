#!/usr/bin/env python
# -*- coding: utf-8 -*-
from rest_framework import mixins, viewsets

from project.applications.users.models import User
from project.applications.users.serializers import UserSerializer


class UserViewSet(mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
