from django.db import models


class Galeri(models.Model):
    
    # id sudah otomatis
    nama_galeri = models.CharField(max_length=30, blank=False)
    sampul_galeri = models.ImageField(upload_to='images/galeri/', blank=True, null=True)
    keterangan_galeri = models.TextField(blank=True)
    # pada model ini, gambar yang berasosiasikan akan dikembalikan dalam bentuk array of files

    def __str__(self):
        return self.nama_galeri

class GambarGaleri(models.Model):

    nama_gambar = models.CharField(max_length=30, blank=False)
    nama_galeri = models.ForeignKey(Galeri, on_delete=models.CASCADE, related_name="images")
    gambar_galeri = models.ImageField(upload_to='images/galeri/', blank=True, null=True)
    # default adalah flag untuk front end jika gambar ini ketika diupload akan ditampilkan atau tidak.
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.nama_gambar


