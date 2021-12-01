from .models import Galeri, GambarGaleri
from .serializers import GaleriSerializer, GambarGaleriSerializer
from .permissions import IsGuru
from rest_framework import generics

class ListGaleri(generics.ListCreateAPIView):
    permission_classes = (IsGuru, )
    queryset = Galeri.objects.all()
    serializer_class = GaleriSerializer

class DetailGaleri(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsGuru, )
    queryset = Galeri.objects.all()
    serializer_class = GaleriSerializer

class ListGambarGaleri(generics.ListCreateAPIView):
    permission_classes = (IsGuru, )
    queryset = GambarGaleri.objects.all()
    serializer_class = GambarGaleriSerializer

class DetailGambarGaleri(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsGuru, )
    queryset = GambarGaleri.objects.all()
    serializer_class = GambarGaleriSerializer