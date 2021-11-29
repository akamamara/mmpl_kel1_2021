from rest_framework import serializers
from .models import MataPelajaran

class MapelSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = MataPelajaran
        fields = [
            'id', 'nama_mapel', 'jurusan', 'kelas',
        ]