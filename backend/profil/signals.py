from django.dispatch import receiver
from django.db.models.signals import (
    post_save,
)
from guru.models import CustomUser
from .models import Profil

@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profil.objects.create(
            email_guru = instance
        )
