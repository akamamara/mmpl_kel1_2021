from .models import Berita
from .serializers import ListBeritaSerializer, BeritaSerializer
from .permissions import IsGuru
from rest_framework import generics

class ListBerita(generics.ListCreateAPIView):
    permission_classes = (IsGuru, )
    queryset = Berita.objects.all()
    serializer_class = ListBeritaSerializer

class BeritaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsGuru, )
    queryset = Berita.objects.all()
    serializer_class = BeritaSerializer