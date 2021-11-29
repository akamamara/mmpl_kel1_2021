from django.db import models

class MataPelajaran(models.Model):
    nama_mapel = models.CharField(max_length=30, unique=True, null=False)
    jurusan = models.CharField(max_length=30)
    kelas = models.CharField(max_length=30)

    def __str__(self):
        return self.nama_mapel

    
