#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.contrib.auth import authenticate
from django.apps import apps

from rest_framework import exceptions, viewsets
from rest_framework.permissions import AllowAny
from rest_framework_extensions.decorators import action
from rest_framework.authentication import Token
from rest_framework.response import Response
from applications.users.serializers import UserSerializer


class AuthenticationViewSet(viewsets.GenericViewSet):
    queryset = apps.get_model('users.User').objects.none()
    permission_classes = (AllowAny,)

    def _render_response(self, user):
        return Response({
            'token': Token.objects.get_or_create(user=user)[0].key,
            'user': UserSerializer(user).data,
        })

    def _validate_credentials(self, email, password):
        if not email or not password:
            raise exceptions.PermissionDenied()
        user = authenticate(username=email, password=password)
        if not user:
            raise exceptions.PermissionDenied()
        return self._render_response(user)

    @action(methods=['POST'], is_for_list=True)
    def authenticate(self, request):
        email, password = request.data.get('email'), request.data.get('password')
        if request.user.is_anonymous():
            return self._validate_credentials(email, password)
        return self._render_response(request.user)
