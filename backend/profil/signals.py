from django.dispatch import receiver
from django.db.models.signals import (
    post_save,
)
from guru.models import CustomUser
from .models import Profil, ProfilSiswa

@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.user_type == 1:
            Profil.objects.create(
                email_guru = instance
            )
        if instance.user_type == 2:
            ProfilSiswa.objects.create(
                email_siswa = instance
            )
