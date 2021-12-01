from django.db import models
from guru.models import CustomUser
from mapel.models import MataPelajaran
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext as _

class Profil(models.Model):
    email_guru = models.OneToOneField(CustomUser, on_delete=CASCADE, primary_key=True, unique=True, related_name="profile")
    nama_guru = models.CharField(max_length=30, null=True)
    nip = models.CharField(max_length=30, null=True)
    tempat_lahir = models.CharField(max_length=50, null=True)
    tanggal_lahir = models.DateField(null=True, blank=True)
    mapel_id = models.ForeignKey(MataPelajaran, on_delete=models.SET_NULL, blank=True, null=True, related_name='pengajar')
    no_telp = models.CharField(max_length=14, null=True)
    pendidikan = models.CharField(max_length=50, null=True)
    foto_guru = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return str(self.nama_guru)

class ProfilSiswa(models.Model):
    email_siswa = models.OneToOneField(CustomUser, on_delete=CASCADE, primary_key=True, unique=True, related_name="profile_siswa")
    nama_siswa = models.CharField(max_length=30, null=True)
    nisn = models.CharField(max_length=30, null=True)
    tempat_lahir = models.CharField(max_length=50, null=True)
    tanggal_lahir = models.DateField(null=True, blank=True)
    jurusan = models.CharField(max_length=30, null=True)
    no_telp = models.CharField(max_length=14, null=True)
    kelas = models.CharField(max_length=50, null=True)
    foto_siswa = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return str(self.nama_siswa)