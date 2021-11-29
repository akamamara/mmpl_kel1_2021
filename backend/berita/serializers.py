from django.db import models
from rest_framework import serializers
from .models import Berita

class ListBeritaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = [
            'judul_berita', 'tanggal_berita',
        ]

class BeritaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = [
            'id', 'judul_berita', 'slug_berita', 'isi_berita', 'gambar_berita', 'tanggal_berita',
        ]
