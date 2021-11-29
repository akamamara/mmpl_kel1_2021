from django.db import models

class Berita(models.Model):
    # id sudah otomatis
    judul_berita = models.CharField(max_length=100, blank=False)
    slub_berita = models.CharField(max_length=100, blank=True)
    isi_berita = models.TextField(blank=True)
    gambar_berita = models.ImageField(upload_to='images/berita/', blank=True, null=True)
    tanggal_berita = models.DateTimeField(auto_now_add=True) #time_stamp

    def __str__(self):
        return self.judul_berita
    
