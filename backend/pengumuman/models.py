from django.db import models

class Pengumuman(models.Model):
    # id sudah otomatis
    judul_pengumuman = models.CharField(max_length=100, blank=False)
    isi_pengumuman = models.TextField(blank=True)
    tanggal_pengumuman = models.DateTimeField(auto_now_add=True) #time_stamp

    def __str__(self):
        return self.judul_pengumuman
    
