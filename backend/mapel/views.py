from .models import MataPelajaran
from .serializers import MapelSerializer
from .permissions import IsGuru
from rest_framework import generics

class MapelList(generics.ListCreateAPIView):
    permission_classes = (IsGuru, )
    queryset = MataPelajaran.objects.all()
    serializer_class = MapelSerializer

class MapelDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsGuru, )
    queryset = MataPelajaran.objects.all()
    serializer_class = MapelSerializer