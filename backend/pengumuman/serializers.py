from rest_framework import serializers
from .models import Pengumuman

class ListPengumumanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pengumuman
        fields = [
            'judul_pengumuman', 'tanggal_pengumuman',
        ]

class PengumumanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pengumuman
        fields = [
            'id', 'judul_pengumuman', 'isi_pengumuman', 'tanggal_pengumuman',
        ]
