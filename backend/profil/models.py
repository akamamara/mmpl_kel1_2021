from django.db import models
from guru.models import CustomUser
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext as _

class Profil(models.Model):
    email_guru = models.OneToOneField(CustomUser, on_delete=CASCADE, primary_key=True, unique=True, related_name="profile")
    nip = models.CharField(max_length=30, null=True)
    tempat_lahir = models.CharField(max_length=50, null=True)
    tanggal_lahir = models.DateField(null=True, blank=True)
    mapel_id = models.IntegerField(null=True)
    no_telp = models.IntegerField(null=True)
    pendidikan = models.CharField(max_length=50, null=True)
    foto_guru = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.nip