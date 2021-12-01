from django.contrib import admin
from .models import Profil, ProfilSiswa

class ProfilAdmin(admin.ModelAdmin):
    list_display=('email_guru', 'nama_guru', 'foto_guru')
    list_filter = ('mapel_id', )
    search_fields = ['nama_guru', ]

class ProfilSiswaAdmin(admin.ModelAdmin):
    list_display=('email_siswa', 'nama_siswa', 'foto_siswa')
    list_filter = ('jurusan', 'kelas')
    search_fields = ['nama_siswa', ]

admin.site.register(Profil, ProfilAdmin)
admin.site.register(ProfilSiswa, ProfilSiswaAdmin)