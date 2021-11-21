from django.db.models import fields
from rest_framework import serializers
from .models import Profil

class ProfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profil
        fields = [
            'email_guru', 'nip', 'tempat_lahir', 'tanggal_lahir',
            'pendidikan', 'no_telp', 'mapel_id', 'foto_guru',
        ]