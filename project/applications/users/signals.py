#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


@receiver(post_save, sender='users.User', dispatch_uid='users.post_save')
def user_post_save(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
