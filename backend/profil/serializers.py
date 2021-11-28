from django.db.models import fields
from rest_framework import serializers
from .models import Profil, ProfilSiswa

class ProfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profil
        fields = [
            'email_guru', 'nama_guru', 'nip', 'tempat_lahir', 'tanggal_lahir',
            'pendidikan', 'no_telp', 'mapel_id', 'foto_guru',
        ]

class ProfilSiswaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfilSiswa
        fields = [
            'email_siswa', 'nama_siswa', 'nisn', 'tempat_lahir', 'tanggal_lahir',
            'jurusan', 'no_telp', 'kelas', 'foto_siswa',
        ]