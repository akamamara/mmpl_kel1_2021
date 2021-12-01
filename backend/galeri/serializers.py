from django.db.models.base import Model
from rest_framework import serializers
from .models import Galeri, GambarGaleri

class GaleriSerializer(serializers.ModelSerializer):

    class Meta:
        model = Galeri
        fields = [
            'id', 'nama_galeri', 'sampul_galeri', 'keterangan_galeri', 'images',
        ]
        read_only_fields = ['images', ]

class GambarGaleriSerializer(serializers.ModelSerializer):

    class Meta:
        model = GambarGaleri
        fields = [
            'id', 'nama_gambar', 'nama_galeri', 'gambar_galeri', 'default',
        ]